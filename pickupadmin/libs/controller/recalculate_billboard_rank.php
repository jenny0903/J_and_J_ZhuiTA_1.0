<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$t = $_POST['type'];
$number = $_POST['number'];

if($t == 1 || $t=='1' ){
	$t = "female" ;
}elseif($t ==2 || $t=='2' ){
	$t = "male" ;
}else{
	$t = "money" ;
}

$url_recalculate_rank = $pickup->getApiUrl()."/billboard/recalculate?t=$t&n=$number";
echo $pickup->pickupLinkApi($url_recalculate_rank,"get",null,1,0);

?>




