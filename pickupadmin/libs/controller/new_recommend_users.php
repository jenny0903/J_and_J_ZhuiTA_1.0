<?php
	include("../../model/php_curl.php");

	$pickup = new pickupApi();

	$uid = $_POST['uid'];
	$gender = $_POST['gender'];

	$url_add_item = $pickup->getApiUrl()."/user/recommend?gender=$gender&u=$uid";
	echo $pickup->pickupLinkApi($url_add_item,"put",array(),1,0);
?>