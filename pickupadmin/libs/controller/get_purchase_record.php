<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();
$user_id = $_POST['id'];
$num = $_POST['num'];
$page = $_POST['page'];

$url_purchase_record = $pickup->getApiUrl()."/purchase?u=$user_id&page=$page&num=$num";

echo $pickup->pickupLinkApi($url_purchase_record,"get",null,0,0);


?>