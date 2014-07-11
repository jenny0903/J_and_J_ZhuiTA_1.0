<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$status = (int)$_POST['status'];

$data_add_item = array(
	"id" => "53917b0fde7ddd2f59911b49",
	"name" => "IPhone 5s",
	"Coupon" => 1,
	"price" => 566600,
	"Image" => "http =>//ppickup.com/resource/gifts/gift_001_pic.png",
	"icon" => "http =>//ppickup.com/resource/gifts/gift_001_icon.png",
	"Introduction" => "本产品采用丹麦皇家御用材料，结合最近高科技纳米技术而成。",
	"Amount" => -1,
	"Type" => 1,
	"Status" => 1,
	"created_date" => "2014-06-06T16 =>25 =>51.744+08 =>00"
);

$url_exchange_order = $pickup->getApiUrl()."/exchange/order?id=".$id."&status=".$status;
echo $pickup->pickupLinkApi($url_exchange_order,"post","",1,0);
?>