<?php
include("../../model/php_curl.php");
include("../main_helper.php");

$pickup = new pickupApi();
// $uid = $_POST['id'];
$num = (int)$_POST['num'];
$page = (int)$_POST['page'];

$url_get_notice = $pickup->getApiUrl()."/user/notify?num=".$num.'&page='.$page;

$result = $pickup->pickupLinkApi($url_get_notice,"get",null,0,0);

$result = json_decode($result,true);

if(!empty($result['notify'])){
	foreach($result['notify'] as $val){
		$created_date[] = $val['created_date'];
	}
	$created_date = array_reverse($created_date);
	if(!empty($created_date)){
		array_multisort($created_date,$result['notify']);
	}
}

echo JSON($result);
?>