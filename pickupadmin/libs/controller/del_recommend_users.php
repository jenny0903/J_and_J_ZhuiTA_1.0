<?php
	include("../../model/php_curl.php");
	
	$pickup = new pickupApi();
	
	$uid = $_POST['uid'];
	$gender = $_POST['gender'];
	
	$url_delete_recommend = $pickup->getApiUrl()."/user/recommend?u=$uid&gender=$gender";
	echo $pickup->pickupLinkApi($url_delete_recommend,"delete",null,1,0);
?>