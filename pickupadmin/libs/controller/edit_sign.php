<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$uid = $_POST['uid'];
$sign = $_POST['sign'];

$url = $pickup->getApiUrl()."/user/description?u=".$uid;

$temp_cert = $pickup->pickupLinkApi($url,"post",$sign,1,0,1);

if( $temp_cert == 1 ){
	echo 1;
}else{
	echo $temp_cert;
}
?>