<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();
$user_id = $_POST['id'];

$url_get_blacklist = $pickup->getApiUrl()."/billboard/blacklist";

$result = json_decode($pickup->pickupLinkApi($url_get_blacklist,"get",null,0,0),true)['users'];

$flag = 0;

foreach( $result as $key => $value ){
	if( in_array($user_id, $value) ){
		$flag = 1;//在黑名单中
		break;
	}else{
		$flag = 0;
	}
}

if( $flag == 1){
	echo 1;
}else{
	echo 0;
}

?>