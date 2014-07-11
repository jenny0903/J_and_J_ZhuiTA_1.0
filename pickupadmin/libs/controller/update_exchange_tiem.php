<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
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

$data_update_item = array(
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

$url_update_item = $pickup->getApiUrl()."/exchnage/item?id=".$id;
echo $pickup->pickupLinkApi($url_update_item,"post",$data_update_item,1,0);
?>