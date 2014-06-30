<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$t[0] = 'male';
$t[1] = 'female';
$t[2] = 'money';
$number = (int)$_POST['number'];

foreach($t as $val){
	$url_awards = $pickup->getApiUrl()."/billboard/rule?t=$val&n=$number";
	$temp_awards = json_decode($pickup->pickupLinkApi($url_awards,"get",null,0,0),true);
	$arr_awards["$val"] = $temp_awards;
}
echo json_encode($arr_awards);
?>




