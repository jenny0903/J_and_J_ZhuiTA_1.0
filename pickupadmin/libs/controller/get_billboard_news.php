<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$url_get_news = $pickup->getApiUrl()."/billboard/news";
echo $pickup->pickupLinkApi($url_get_news,"get",null,0,0);
?>