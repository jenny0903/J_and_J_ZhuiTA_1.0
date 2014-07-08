<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$num = $_POST['num'];
$page = $_POST['page'];

$url_list_exchange_items = $pickup->getApiUrl()."/exchange/items?num=$num&page=$page";
echo $pickup->pickupLinkApi($url_list_exchange_items,"get",null,0,0);
?>