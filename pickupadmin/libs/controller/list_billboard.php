<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$t = $_POST['type'];
$number = $_POST['number'];
$num = $_POST['num'];
$page = $_POST['page'];

if($t == 1 || $t=='1' ){
	$t = "female" ;
}elseif($t ==2 || $t=='2' ){
	$t = "male" ;
}else{
	$t = "money" ;
}

$url_billboard_list = $pickup->getApiUrl()."/billboard?t=$t&n=$number&num=$num&page=$page";
echo $pickup->pickupLinkApi($url_billboard_list,"get",null,0,0);


?>