<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$name = $_POST['name'];
$Coupon = (int)$_POST['Coupon'];
$price = (int)$_POST['price'];
$position = (int)$_POST['position'];
$Image = $_POST['Image'];
$icon = $_POST['icon'];
$Introduction = $_POST['Introduction'];
$Amount = (int)$_POST['Type'];
$Type = (int)$_POST['id'];
$Status = (int)$_POST['Status'];

$data_add_item = array(
	"name" => $name,
	"Coupon" => $Coupon,
	"price" => $price,
	"position" => $position,
	"Image" => $Image,
	"icon" => $icon,
	"Introduction" => $Introduction,
	"Amount" => $Amount,
	"Type" => $Type,
	"Status" => $Status
);

$url_add_item = $pickup->getApiUrl()."/exchnage/item";
echo $pickup->pickupLinkApi($url_add_item,"put",$data_add_item,1,0);
?>