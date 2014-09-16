<?php
include("../../model/php_curl.php");
include("../main_helper.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$won_count = $_POST['won_count'];

$url_update_rank = $pickup->getApiUrl()."/pk/ranking?id=".$id."&won_count=".$won_count;

$result = $pickup->pickupLinkApi($url_update_rank,"post",null,1,0);

echo $result;
?>