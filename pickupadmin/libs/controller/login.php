<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$username = $_POST['username'];
$password = $_POST['password'];

$url_login = $pickup->getApiUrl()."/admin/login?u=$username&p=$password";
echo $pickup->pickupLinkApi($url_login,"get",null,1,1);
?>
