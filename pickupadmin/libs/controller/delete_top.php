<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];
$sticky = 0;
$data = array(
	'sticky'  => $sticky
);
$url_set_top = $pickup->getApiUrl()."/forum/posts?id=$id";
$result = $pickup->pickupLinkApi($url_set_top,"post",$data,1,0);
echo $result;
?>