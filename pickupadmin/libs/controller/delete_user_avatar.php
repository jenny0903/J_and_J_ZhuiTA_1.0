<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];

$url_delete_avatar = $pickup->getApiUrl()."/user/avatar?u=$user_id";
// echo $pickup->pickupLinkApi($url_delete_avatar,"get",null,1,0);
echo $pickup->pickupLinkApi($url_delete_avatar,"delete",null,1,0);

?>