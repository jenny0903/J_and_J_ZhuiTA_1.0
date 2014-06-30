<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$name = $_POST['name'];
$number = (int)$_POST['number'];
$begin = $_POST['begin'];
$end = $_POST['end'];
$intro = $_POST['intro'];

$name_awards_female1 = $_POST['prize11'];
$name_awards_female2 = $_POST['prize12'];
$name_awards_female3 = $_POST['prize13'];

$name_awards_male1 = $_POST['prize21'];
$name_awards_male2 = $_POST['prize22'];
$name_awards_male3 = $_POST['prize23'];

$name_awards_money1 = $_POST['prize31'];
$name_awards_money2 = $_POST['prize32'];
$name_awards_money3 = $_POST['prize33'];

$data_events = array (
	"name" => $name,
	"number" => $number,
	"begin" => $begin,
	"end" => $end,
	"introduction" => $intro
);

$url_events = $pickup->getApiUrl()."/billboard/events";
$temp_events = $pickup->pickupLinkApi($url_events,"put",$data_events,1,0);

$temp_awards_female = 0;
$temp_awards_male = 0;
$temp_awards_money = 0;

if( $temp_events == 1 ){
		$url_awards_female = $pickup->getApiUrl()."/billboard/rule?t=female&n=$number";
		$data_awards_female = array (
			"level1" => $name_awards_female1,
			"level2" => $name_awards_female2,
			"level3" => $name_awards_female3
		); 
		$temp_awards_female = $pickup->pickupLinkApi($url_awards_female,"put",$data_awards_female,1,0);			

		$url_awards_male = $pickup->getApiUrl()."/billboard/rule?t=male&n=$number";
		$data_awards_male = array (
			"level1" => $name_awards_male1,
			"level2" => $name_awards_male2,
			"level3" => $name_awards_male3
		);
		$temp_awards_male = $pickup->pickupLinkApi($url_awards_male,"put",$data_awards_male,1,0);		

		$url_awards_money = $pickup->getApiUrl()."/billboard/rule?t=money&n=$number";
		$data_awards_money = array (
			"level1" => $name_awards_money1,
			"level2" => $name_awards_money2,
			"level3" => $name_awards_money3
		);
		$temp_awards_money = $pickup->pickupLinkApi($url_awards_money,"put",$data_awards_money,1,0);		
}	

if($temp_events==1 && $temp_awards_female==1 && $temp_awards_male==1 && $temp_awards_money ==1){
	echo 1;
}else{
	echo 0;
	echo "<br />".$temp_events.$temp_awards_female.$temp_awards_male.$temp_awards_money;
}



?>