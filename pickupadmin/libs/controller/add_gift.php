<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$name = $_POST['name'];
$price = (int)$_POST['price'];
$discount = (int)$_POST['discount'];
$unit = $_POST['unit'];
$image = $_POST['image'];
$icon = $_POST['icon'];
$position = (int)$_POST['position'];
$status = (int)$_POST['status'];

$data_add_gift = array (
	"name" => $name,
	"price" => $price,
	"discount" => $discount,
	"unit" => $unit,
	"image" => $image,
	"icon" => $icon,
	"position" => $position,
	"status" => $status,
);

$url_add_gift = $pickup->getApiUrl()."/gift";
echo $pickup->pickupLinkApi($url_add_gift,"put",$data_add_gift,1,0);
?>