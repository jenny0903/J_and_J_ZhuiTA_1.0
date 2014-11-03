<?php
$reporting_day_num = 30;
$date = Array();
$num_ios_array = Array();
$num_android_array = Array();
$total_array = Array();
for($i=0;$i<$reporting_day_num;$i++){
	if($i === 0){
		$reporting_date = date("Ymd");
		array_unshift($date,$reporting_date);
		
		//ios
		$url = 'k=pickup_app_recommand_view_ios_'.$reporting_date;
		$num_ios = file_get_contents('http://vd.ppickup.com/get.php?'.$url);
		if($num_ios == ''){
			$num_ios = 0;
		}
		$num_ios = intval($num_ios);
		array_unshift($num_ios_array,$num_ios);
		
		//android
		$url = 'k=pickup_app_recommand_view_android_'.$reporting_date;
		$num_android = file_get_contents('http://vd.ppickup.com/get.php?'.$url);
		if($num_android == ''){
			$num_android = 0;
		}
		$num_android = intval($num_android);
		array_unshift($num_android_array,$num_android);
		
		//total
		$total = $num_ios + $num_android;
		array_unshift($total_array,$total);
	}else{
		$reporting_date = date("Ymd",strtotime("-$i day"));
		array_unshift($date,$reporting_date);
		
		//ios
		$url = 'k=pickup_app_recommand_view_ios_'.$reporting_date;
		$num_ios = file_get_contents('http://vd.ppickup.com/get.php?'.$url);
		if($num_ios == ''){
			$num_ios = 0;
		}
		$num_ios = intval($num_ios);
		array_unshift($num_ios_array,$num_ios);
		
		//android
		$url = 'k=pickup_app_recommand_view_android_'.$reporting_date;
		$num_android = file_get_contents('http://vd.ppickup.com/get.php?'.$url);
		if($num_android == ''){
			$num_android = 0;
		}
		$num_android = intval($num_android);
		array_unshift($num_android_array,$num_android);
		
		//total
		$total = $num_ios + $num_android;
		array_unshift($total_array,$total);
	}
}
$list =array(
	'ios'       =>  $num_ios_array,
	'android'   =>  $num_android_array,
	'total'     =>  $total_array
);

$data = array(
	'date'		=>	$date,
	'list'		=>	$list
);
$res = array(
	'code'		=>	1,
	'data'		=>	$data
);

echo json_encode($res);
?>