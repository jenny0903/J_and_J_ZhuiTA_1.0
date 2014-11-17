<?php
include("../../config/config.php");

if( isset($_POST['id']) && $_POST['id'] != ''){
	$id = intval($_POST['id']);
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,id is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

//$id = 5;
$reporting_day_num = 30;
$date = Array();
$num_ios_array = Array();
$num_android_array = Array();
$total_array = Array();
for($i=0;$i<$reporting_day_num;$i++){
	if($i === 0){
		$reporting_date = date("Ymd");
		array_unshift($date,$reporting_date);
		//$num_ios[] = file_get_contents('http://vd.ppickup.com/get.php?'.$url);
		//$date[] = $date;
		
		//ios
		$url = 'pickup_app_recommand_download_ios_'.$reporting_date.'_'.$id;
		$num_ios = file_get_contents($config['app_recommend_key'].$url);
		if($num_ios == ''){
			$num_ios = 0;
		}
		$num_ios = intval($num_ios);
		array_unshift($num_ios_array,$num_ios);
		
		//android
		$url = 'pickup_app_recommand_download_android_'.$reporting_date.'_'.$id;
		$num_android = file_get_contents($config['app_recommend_key'].$url);
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
		$url = 'pickup_app_recommand_download_ios_'.$reporting_date.'_'.$id;
		$num_ios = file_get_contents($config['app_recommend_key'].$url);
		if($num_ios == ''){
			$num_ios = 0;
		}
		$num_ios = intval($num_ios);
		array_unshift($num_ios_array,$num_ios);
		
		//android
		$url = 'pickup_app_recommand_download_android_'.$reporting_date.'_'.$id;
		$num_android = file_get_contents($config['app_recommend_key'].$url);
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