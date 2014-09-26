<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$uid = $_POST['uid'];

$url_get_gag = $pickup->getApiUrl()."/forum/blacklist?uid=$uid";
$result = $pickup->pickupLinkApi($url_get_gag,"get",null,0,0);
$result = json_decode($result,true);
//var_dump($result);
if(isset($result['code']) && $result['code'] == 21907){
	$result = 0;
}else{
	$result = 1;
}
//var_dump($result);
echo $result;
?>