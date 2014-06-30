<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$events_id = $_POST['id'];

$id_rule_female = $_POST['rule_id1'];//规则id，就是对应的奖品id
$id_rule_male = $_POST['rule_id2'];
$id_rule_money = $_POST['rule_id3'];

$temp_awards_female = 0;
$temp_awards_male = 0;
$temp_awards_money = 0;

$url_delete_events = $pickup->getApiUrl()."/billboard/events?id=$events_id";
$temp_events = $pickup->pickupLinkApi($url_delete_events,"delete",null,1,0);

if( $temp_events == 1){
$url_delete_awards_female = $pickup->getApiUrl()."/billboard/rule?id=$id_rule_female";
$temp_awards_female = $pickup->pickupLinkApi($url_delete_awards_female,"delete",null,1,0);	

$url_delete_awards_male = $pickup->getApiUrl()."/billboard/rule?id=$id_rule_male";
$temp_awards_male = $pickup->pickupLinkApi($url_delete_awards_male,"delete",null,1,0);	

$url_delete_awards_money = $pickup->getApiUrl()."/billboard/rule?id=$id_rule_money";
$temp_awards_money = $pickup->pickupLinkApi($url_delete_awards_money,"delete",null,1,0);	
}
	
if($temp_events==1 && $temp_awards_female==1 && $temp_awards_male==1 && $temp_awards_money ==1){
	echo 1;
}else{
	echo 0;
}
?>