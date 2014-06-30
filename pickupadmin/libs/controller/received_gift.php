<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();
$user_id = $_POST['id'];
$num = $_POST['num'];
$page = $_POST['page'];

$url_get_gift = $pickup->getApiUrl()."/gift/received?u=$user_id&page=$page&num=$num";

$recieved_gift = $pickup->pickupLinkApi($url_get_gift,"get",null,0,0);

// echo $recieved_gift;

$recieved_gift = json_decode($recieved_gift,true);

$url_get_gift = $pickup->getApiUrl()."/gift?num=9999&page=1";
$gift_list = $pickup->pickupLinkApi($url_get_gift,"get",null,0,0);
$gift_list = json_decode($gift_list,true);

if($recieved_gift['total']>0){
	foreach($recieved_gift['items'] as $key => $value){
		$product_id = $value['product_id'];
		$product_name = product_id2name($product_id,$gift_list);
		
		$recieved_gift['items'][$key]['product_name'] = $product_name;
	}
}

echo JSON($recieved_gift);

function product_id2name($id,$gift_list){
	foreach($gift_list['gift_items'] as $key2 => $value2){
		if($value2['id']==$id){
			$return_name = $value2['name'];
			break;
		}
	}
	return $return_name;
}

function arrayRecursive(&$array)
{
	foreach ($array as $key => $value) {
		if (is_array($value)) {
			arrayRecursive($array[$key]);
		} else {
			if(is_string($value)){
				$array[$key] = urlencode($value);
			}else{
				$array[$key] = $value;
			}
		}
	}
}
function JSON($result) {
	$array=$result;
	arrayRecursive($array);
	$json = json_encode($array);
	return urldecode($json);
}
?>