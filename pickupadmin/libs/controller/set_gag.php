<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$uid = $_POST['id'];
$gag_time = $_POST['gag_time'];
if($gag_time == 3 || $gag_time == 7){
	$start = date("Y-m-d H:i:s");
	$d=strtotime("+$gag_time Days");
	$end = date("Y-m-d h:i:sa", $d);
	$url_set_gag = $pickup->getApiUrl()."/forum/blacklist?uid=$uid&start=$start&end=$end";
}else{
	$url_set_gag = $pickup->getApiUrl()."/forum/blacklist?uid=$uid";
}
$result = $pickup->pickupLinkApi($url_set_gag,"put",null,1,0);
echo $result;
?>