<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$url_set_essence = $pickup->getApiUrl()."/forum/featured?post_id=$id";
$result = $pickup->pickupLinkApi($url_set_essence,"put",null,1,0);
echo $result;
?>