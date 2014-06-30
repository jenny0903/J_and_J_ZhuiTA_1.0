<?php
set_time_limit(0);

include("../../model/php_curl.php");

$pickup = new pickupApi();

$title = $_POST['title'];
$link = $_POST['link'];

$url_add_notice = $pickup->getApiUrl()."/user/notify?t=".$title."&l=".$link;
echo $pickup->pickupLinkApi($url_add_notice,"put",null,1,0);
?>