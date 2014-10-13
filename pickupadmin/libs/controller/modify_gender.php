<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$uid = $_POST['uid'];
$gender = $_POST['gender'];
$url_modify_gender = $pickup->getApiUrl()."/user/gender?uid=$uid&gender=$gender";
$result = $pickup->pickupLinkApi($url_modify_gender,"post",null,1,0);
echo $result;
?>