<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_GET['id'];
$idx = $_GET['n'];

$url_user_picture = $pickup->getApiUrl()."/user/picture?u=$user_id&idx=$idx";
echo $pickup->pickupLinkApi($url_user_picture,"get",null,0,0);
?>





