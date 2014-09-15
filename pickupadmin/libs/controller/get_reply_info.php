<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$url_get_reply = $pickup->getApiUrl()."/forum/replies?id=$id";
$result = $pickup->pickupLinkApi($url_get_reply,"get",null,0,0);
$reply = json_decode($result,true);
echo json_encode($reply);
?>