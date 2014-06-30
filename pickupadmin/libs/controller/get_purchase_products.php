<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$url_purchase_products = $pickup->getApiUrl()."/purchase/products";

echo $pickup->pickupLinkApi($url_purchase_products,"get",null,0,0);


?>