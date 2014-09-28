<?php
include("../../model/php_curl.php");

//json_encode中文乱码问题修正
function arrayRecursive(&$array){  
	foreach ($array as $key => $value) {  
		if (is_array($value)) {  
			arrayRecursive($array[$key]);//如果是数组就进行递归操作  
		} else {  
			if(is_string($value)){  
				$temp1= addslashes($value);
				$array[$key]= urlencode($temp1);//如果是字符串就urlencode  
			}else{  
				$array[$key] = $value;  
			}  
		}  
	}  
}  
function JSON($result) {  
	$array=$result;  
	arrayRecursive($array);//先将类型为字符串的数据进行 urlencode  
	$json = json_encode($array);//再将数组转成JSON  
	return urldecode($json);//最后将JSON字符串进行urldecode  
}

$pickup = new pickupApi();
$num = $_POST['num'];
$page = $_POST['page'];
$url_list_reports = $pickup->getApiUrl()."/forum/reports?num=$num&page=$page";
$items_result = $pickup->pickupLinkApi($url_list_reports,"get",null,0,0);
//var_dump($items_result);
$items_array = json_decode($items_result,true);
$detail_array = $items_array['items'];
//var_dump($detail_array);
foreach($detail_array as $key=>$value){
    $uid = $value['user_id'];
	$kind = $value['kind'];
	$id = $value['thread_id'];
    $pickup = new pickupApi();
	$url_set_gag = $pickup->getApiUrl()."/forum/blacklist?uid=$uid";
	$result1 = $pickup->pickupLinkApi($url_set_gag,"get",null,1,0);
	$detail_array[$key]['is_gag'] = $result1;
	
	if(!$kind){
		$pickup = new pickupApi();
		$url_get_post = $pickup->getApiUrl()."/forum/posts?id=$id";
		$result2 = $pickup->pickupLinkApi($url_get_post,"get",null,0,0);
		$post = json_decode($result2,true);
		// echo $key;
		// var_dump($post);
		if(isset($post['code']) && $post['code'] == 21902){//error
			array();
			$detail_array[$key]['title'] = '（帖子已被删）';
		}else{
			if(isset($post['flags'])){
				if($post['flags']){
					$detail_array[$key]['is_essence'] = 1;
				}else{
					$detail_array[$key]['is_essence'] = 0;
				}
			}
			$detail_array[$key]['title'] = $post['title'];
		}
		
	}else{
		$url_get_reply = $pickup->getApiUrl()."/forum/replies?id=$id";
		$result = $pickup->pickupLinkApi($url_get_reply,"get",null,0,0);
		$reply = json_decode($result,true);
		// echo $key;
		// var_dump($reply);
		if(isset($reply['code']) && $reply['code'] == 21904){//error
			array();
			$detail_array[$key]['title'] = '（帖子已被删）';
		}else{
			$detail_array[$key]['title'] = $reply['content'];
		}
	}
	
}
	
//var_dump($detail_array);
$items_array['items'] = $detail_array;
//var_dump($items_array);
echo json_encode($items_array);
?>