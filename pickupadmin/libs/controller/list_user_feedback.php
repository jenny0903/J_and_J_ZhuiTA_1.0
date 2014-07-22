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

$num = $_POST['num'];
$page = $_POST['page'];

$pickup = new pickupApi();

$url_list_feedback= $pickup->getApiUrl()."/feedback?num=$num&page=$page";
// echo $order_result = $pickup->pickupLinkApi($url_list_exchange_items,"get",null,0,0);
// exit;
$feedback_result = $pickup->pickupLinkApi($url_list_feedback,"get",null,0,0);

$search = array (
	"'\n'i"//转换回车键
);
$replace = array (
	""
);

$feedback_array = json_decode($feedback_result,true);

foreach($feedback_array['items'] as $key1 => $val1){
	$uid = $val1['uid'];
	
	$content = $val1['content'];
	$feedback_array['items'][$key1]['content'] =  preg_replace($search, $replace, $content );
	
	$url_user_info = $pickup->getApiUrl()."/user/info?u=$uid";
	$user_info_result = $pickup->pickupLinkApi($url_user_info,"get",null,0,0);
	$user_info_array = json_decode($user_info_result,true);
	$feedback_array['items'][$key1]['user_name'] = $user_info_array['nick'];
}

echo json_encode($feedback_array);
?>