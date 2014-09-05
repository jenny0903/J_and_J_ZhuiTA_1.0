<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

if( isset($_POST['pkid']) && $_POST['pkid']){
	$pkid = $_POST['pkid'];
}else{
	$pkid = '';
}

$url_delete_pk = $pickup->getApiUrl()."/pk?pkid=$pkid";
echo $pickup->pickupLinkApi($url_delete_pk,"delete",null,1,0);
?>