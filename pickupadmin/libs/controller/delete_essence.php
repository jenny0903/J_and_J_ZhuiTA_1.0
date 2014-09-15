<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$url_delete_gag = $pickup->getApiUrl()."/forum/featured?post_id=$id";
$result = $pickup->pickupLinkApi($url_delete_gag,"delete",null,1,0);
echo $result;
?>