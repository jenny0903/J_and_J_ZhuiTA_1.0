<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
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

$data_update_item = array(
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

$url_update_item = $pickup->getApiUrl()."/exchnage/item?id=".$id;
echo $pickup->pickupLinkApi($url_update_item,"post",$data_update_item,1,0);
?>