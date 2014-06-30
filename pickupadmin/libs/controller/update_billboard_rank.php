<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];
$t = $_POST['type'];
$score = $_POST['score'];
$number= $_POST['number'];

if($t == 1 || $t=='1' ){
	$t = "female" ;
}elseif($t ==2 || $t=='2' ){
	$t = "male" ;
}else{
	$t = "money" ;
}

$url_update_rank =  $pickup->getApiUrl()."/billboard/rank?u=$user_id&t=$t&s=$score&n=$number";
echo $pickup->pickupLinkApi($url_update_rank,"post",null,1,0);

?>





