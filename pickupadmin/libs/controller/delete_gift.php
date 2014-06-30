<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];

$url_delete_gift = $pickup->getApiUrl()."/gift?id=".$id;

echo $pickup->pickupLinkApi($url_delete_gift,"delete",null,1,0);

?>