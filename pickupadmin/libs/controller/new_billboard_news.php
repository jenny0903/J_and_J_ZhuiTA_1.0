<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

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

$url_new_news = $pickup->getApiUrl()."/billboard/news";
echo $pickup->pickupLinkApi($url_new_news,"put",$data_news,1,0);

?>