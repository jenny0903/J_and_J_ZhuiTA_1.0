<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];
$key = (int)$_POST['key'];
$f = $_POST['f'];
$kind = $_POST['kind'];
$p = $_POST['p'];

// $url_add_key = $pickup->getApiUrl()."/user/addkey?u=$user_id&k=$key";/user/key
$url_add_key = $pickup->getApiUrl()."/user/key?u=$user_id&k=$key";
echo $pickup->pickupLinkApi($url_add_key,"get",null,1,0);

?>