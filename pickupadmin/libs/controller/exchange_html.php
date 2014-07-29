<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$url = $pickup->getApiUrl()."exchnage/html";
echo $pickup->pickupLinkApi($url,"put",null,1,0);

?>