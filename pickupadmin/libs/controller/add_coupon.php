<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];
$add_coupon = (int)$_POST['coupon'];

// $url_add_key = $pickup->getApiUrl()."/user/addkey?u=$user_id&k=$key";/user/key
$url_add_coupon = $pickup->getApiUrl()."/exchange/coupon?u=$user_id&score=$add_coupon";
echo $pickup->pickupLinkApi($url_add_coupon,"post","",1,0);

?>