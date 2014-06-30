<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();
$user_id = $_POST['id'];

$url_new_blacklist = $pickup->getApiUrl()."/billboard/blacklist?u=$user_id";
echo $pickup->pickupLinkApi($url_new_blacklist,"put",null,1,0);

?>