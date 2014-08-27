<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

if( isset($_POST['pk_id']) && $_POST['pk_id']){
	$pkid = $_POST['pk_id'];
}else{
	$pkid = '';
}

$url_delete_pk = $pickup->getApiUrl()."/pk?pkid=$pkid";
echo $pickup->pickupLinkApi($url_delete_pk,"delete",null,0,0);
?>