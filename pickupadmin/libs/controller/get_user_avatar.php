<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_GET['id'];

$url_user_avatar = $pickup->getApiUrl()."/user/avatar?u=$user_id";
echo $pickup->pickupLinkApi($url_user_avatar,"get",null,0,0);
?>





