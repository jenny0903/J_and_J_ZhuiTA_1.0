<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$title = $_POST['title'];
$image = $_POST['image'];
$link = $_POST['link'];
$visible = true ;
$position = (int)$_POST['position'];

$data_news = array (
	"title" => $title,
	"image" => $image,
	"link" => $link,
	"visible" => $visible,
	"position" => $position
);

$url_update_news = $pickup->getApiUrl()."/billboard/news?id=$id";
echo $pickup->pickupLinkApi($url_update_news,"post",$data_news,1,0);
?>