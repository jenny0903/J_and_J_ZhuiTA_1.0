<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();
$user_id = $_POST['id'];

$url_delete_blacklist = $pickup->getApiUrl()."/billboard/blacklist?u=$user_id";
echo $pickup->pickupLinkApi($url_delete_blacklist,"delete",null,1,0);

?>