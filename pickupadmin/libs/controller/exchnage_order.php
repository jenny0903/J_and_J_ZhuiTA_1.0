<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$status = (int)$_POST['status'];

$url_exchange_order = $pickup->getApiUrl()."/exchange/order?id=".$id."&status=".$status;
echo $pickup->pickupLinkApi($url_exchange_order,"post","",1,0);
?>