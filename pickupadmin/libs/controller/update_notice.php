<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$title = $_POST['title'];
$link = $_POST['link'];

$data_update_notice = array (
	"name" => $name,
	"price" => $price,
	"discount" => $discount,
	"unit" => $unit,
	"image" => $image,
	"icon" => $icon,
	"position" => $position,
	"status" => $status,
);

$url_update_notice = $pickup->getApiUrl()."/gift?id=".$id;
echo $pickup->pickupLinkApi($url_update_notice,"post",$data_update_notice,1,0);
?>