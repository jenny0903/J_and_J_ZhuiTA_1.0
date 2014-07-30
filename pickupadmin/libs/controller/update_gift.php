<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$name = $_POST['name'];
$price = (int)$_POST['price'];
$discount = (int)$_POST['discount'];
$unit = $_POST['unit'];
$image = $_POST['image'];
$icon = $_POST['icon'];
$position = (int)$_POST['position'];
$coupon = (int)$_POST['coupon'];
$credit = (int)$_POST['credit'];
$status = (int)$_POST['status'];

$data_update_gift = array (
	"name" => $name,
	"price" => $price,
	"discount" => $discount,
	"unit" => $unit,
	"image" => $image,
	"icon" => $icon,
	"position" => $position,
	"coupon" => $coupon,
	"credit" => $credit,
	"status" => $status,
);

$url_update_gift = $pickup->getApiUrl()."/gift?id=".$id;
echo $pickup->pickupLinkApi($url_update_gift,"post",$data_update_gift,1,0);
?>