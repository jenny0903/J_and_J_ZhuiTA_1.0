<?php
include("../../model/php_curl.php");
include("../main_helper.php");

$pickup = new pickupApi();

$url_events = $pickup->getApiUrl()."/billboard/events";

$arr = $pickup->pickupLinkApi($url_events,"get",null,0,0);
$arr = json_decode($arr,true);

if( $arr != null ){
	foreach($arr["events"] as $key => $val){
		$begin_time = strtotime($val["begin"]);
		$now_time = strtotime(date("Y-m-d H:i:s"));
		$end_time = strtotime($val["end"]);
		$time1_state = round(($begin_time-$now_time)/60);//>0未开始，<0开始
		$time2_state = round(($end_time-$now_time)/60);//<0已结束，>0未结束
		if($time1_state >= 0){
			$state = 4;
		}elseif($time2_state >0){
			if($val["status"]==0 & $val["progress"]==0){
				$state = 3;	
			}
		}else{
			if($val["status"]==0 & $val["progress"]==0 ){
				$state = 2;
			}
			if($val["status"]==0 & $val["progress"]==1 ){
				$state = 1;
			}
			if($val["status"]==1){
				$state = 0;
			}
		}
		$arr["events"][$key]["state"] = $state;
	}
	echo JSON($arr["events"]);
}else{
	echo "[]";
}

?>




