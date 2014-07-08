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

$url_list_exchange_items = $pickup->getApiUrl()."/exchange/items?num=1000&page=1";
$items_result = $pickup->pickupLinkApi($url_list_exchange_items,"get",null,0,0);
$items_array = json_decode($items_result,true);
$exchange_items = $items_array['items'];

$num = $_POST['num'];
$page = $_POST['page'];

$url_list_exchange_items = $pickup->getApiUrl()."/exchange/orders?num=$num&page=$page";
// echo $order_result = $pickup->pickupLinkApi($url_list_exchange_items,"get",null,0,0);
// exit;
$order_result = $pickup->pickupLinkApi($url_list_exchange_items,"get",null,0,0);
$order_array = json_decode($order_result,true);

foreach($order_array['orders'] as $key1 => $val1){
	$uid = $val1['uid'];
	$eiid = $val1['eiid'];
	$addrid = $val1['addrid'];
	
	$url_user_info = $pickup->getApiUrl()."/user/info?u=$uid";
	$user_info_result = $pickup->pickupLinkApi($url_user_info,"get",null,0,0);
	$user_info_array = json_decode($user_info_result,true);
	$order_array['orders'][$key1]['user_name'] = $user_info_array['nick'];
	
	foreach($exchange_items as $key2 => $val2){
		if($eiid == $val2['id']){
			$order_array['orders'][$key1]['product_name'] = $val2['name'];
			break;
		}
	}
	
	$url_address = $pickup->getApiUrl()."/exchange/address?id=$addrid";
	$address_result = $pickup->pickupLinkApi($url_address,"get",null,0,0);
	$address_array = json_decode($address_result,true);
	// var_dump($address_result);
	$order_array['orders'][$key1]['address'] = $address_array['address'];
}

echo JSON($order_array);
?>