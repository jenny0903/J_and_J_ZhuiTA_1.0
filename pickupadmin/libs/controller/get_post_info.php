<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$url_get_post = $pickup->getApiUrl()."/forum/posts?id=$id";
$result = $pickup->pickupLinkApi($url_get_post,"get",null,0,0);
$post = json_decode($result,true);
echo json_encode($post);
?>
