<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];
$key = (int)$_POST['key'];
$f = $_POST['free'];
$kind = (int)($_POST['kind']);
$p = $_POST['platform'];

if($f=='1'||$f == 1){
	$url_add_key = $pickup->getApiUrl()."/user/key?u=$user_id&k=$key&f=true&kind=$kind&p=$p";
}else{
	$url_add_key = $pickup->getApiUrl()."/user/key?u=$user_id&k=$key&f=false&kind=$kind&p=$p";
}

echo $pickup->pickupLinkApi($url_add_key,"post",null,1,0);
?>