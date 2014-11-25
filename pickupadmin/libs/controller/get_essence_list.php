<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$num = $_POST['num'];
$page = $_POST['page'];

$url_essence_list = $pickup->getApiUrl()."/forum/featured?num=$num&page=$page";
$essence = $pickup->pickupLinkApi($url_essence_list,"get",null,0,0);

echo $essence;
?>