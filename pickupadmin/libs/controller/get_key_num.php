<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];

$url_user_key = $pickup->getApiUrl()."/user/key?u=$user_id";
echo $pickup->pickupLinkApi($url_user_key,"get",null,0,0);
?>