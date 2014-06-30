<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];

$url_block_user = $pickup->getApiUrl()."/user/block?u=$user_id";
echo $pickup->pickupLinkApi($url_block_user,"get",null,1,0);

?>