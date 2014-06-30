<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$number = $_POST['number'];

$url_publish_billboard = $pickup->getApiUrl()."/billboard/publish?n=$number";
echo $pickup->pickupLinkApi($url_publish_billboard,"get",null,1,0);


?>