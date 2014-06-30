<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

if( isset($_POST['name']) ){
	$user_nick = $_POST['name'];
	$url_search_user = $pickup->getApiUrl()."/user/search?n=$user_nick";
	// echo $pickup->pickupLinkApi($url_search_user,"get",null,0,0);
}
if( isset($_POST['id']) ){
	$user_id = $_POST['id'];
	$url_search_user = $pickup->getApiUrl()."/user/search?zid=$user_id";
	// echo '['.$pickup->pickupLinkApi($url_search_user,"get",null,0,0).']';
}

// $url_search_user = $pickup->getApiUrl()."/user/search?n=$user_nick";
echo $pickup->pickupLinkApi($url_search_user,"get",null,0,0);

?>




