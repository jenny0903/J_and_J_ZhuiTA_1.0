<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$uid = $_POST['id'];

$url_delete_gag = $pickup->getApiUrl()."/forum/blacklist?uid=$uid";
$result = $pickup->pickupLinkApi($url_delete_gag,"delete",null,1,0);
echo $result;
?>