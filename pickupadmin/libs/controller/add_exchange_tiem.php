<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$name = $_POST['name'];
$coupon = (int)$_POST['coupon'];
$price = (int)$_POST['price'];
$position = (int)$_POST['position'];
$image = $_POST['image'];
$icon = $_POST['icon'];
$introduction = $_POST['introduction'];
$amount = (int)$_POST['amount'];
$type = (int)$_POST['type'];
$status = (int)$_POST['status'];

$data_add_item = array(
	"name" => $name,
	"coupon" => $coupon,
	"price" => $price,
	"position" => $position,
	"image" => $image,
	"icon" => $icon,
	"introduction" => $introduction,
	"amount" => $amount,
	"type" => $type,
	"Status" => $status
);

$url_add_item = $pickup->getApiUrl()."/exchnage/item";
echo $pickup->pickupLinkApi($url_add_item,"put",$data_add_item,1,0);
?>