<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$data = Array();

$url = $pickup->getApiUrl()."/exchange/html";
$result = $pickup->pickupLinkApi($url,"put",$data,0,0);
// $result = $pickup->pickupLinkApi($url,"put",$data,1,0);

echo $result;

//curl -i -X PUT -H "cookie:__ak47__=f0e1dce4-163d-423f-95a0-b02ed332ccde"   "http://127.0.0.1:9191/exchange/html"
?>