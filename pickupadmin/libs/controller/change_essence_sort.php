<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$position = $_POST['position'];
$position = intval($position);
$data = array(
	'position'  => $position
);
//$data = json_encode($data);
//var_dump($data);
$url_change_essence_sort = $pickup->getApiUrl()."/forum/posts?id=$id";
$result = $pickup->pickupLinkApi($url_change_essence_sort,"post",$data,1,0);
echo $result;
?>