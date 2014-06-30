<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];

$url_delete_notice = $pickup->getApiUrl()."/user/notify?id=".$id;

echo $pickup->pickupLinkApi($url_delete_notice,"delete",null,1,0);

?>