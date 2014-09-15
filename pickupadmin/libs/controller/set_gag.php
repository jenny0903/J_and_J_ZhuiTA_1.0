<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$uid = $_POST['uid'];

$url_set_gag = $pickup->getApiUrl()."/forum/blacklist?uid=$uid";
$result = $pickup->pickupLinkApi($url_set_gag,"put",null,1,0);
echo $result;
?>