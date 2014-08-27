<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

if( isset($_POST['pk_id']) && $_POST['pk_id']){
	$pkid = $_POST['pk_id'];
}else{
	$pkid = '';
}
if( isset($_POST['uid']) && $_POST['uid']){
	$uid = $_POST['uid'];
}else{
	$uid = '';
}
if( isset($_POST['initiator  ']) && $_POST['initiator  ']){
	$initiator  = $_POST['initiator  '];
}else{
	$initiator  = '';
}
if( isset($_POST['num  ']) && $_POST['num  ']){
	$num  = $_POST['num  '];
}else{
	$num  = '';
}

$url_search_pk = $pickup->getApiUrl()."/pk?pkid=$pkid&uid=$uid&initiator=$initiator&num=$num";
echo $pickup->pickupLinkApi($url_search_pk,"post",null,0,0);

?>