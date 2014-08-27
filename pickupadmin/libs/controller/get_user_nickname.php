<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];

$url_user_info = $pickup->getApiUrl()."/user/info?u=$user_id";

$result =  $pickup->pickupLinkApi($url_user_info,"get",null,0,0);

if(!empty($result)){
	$result = json_decode($result,true);
	echo $result['nick'];
}else{
	echo $result;
}
?>