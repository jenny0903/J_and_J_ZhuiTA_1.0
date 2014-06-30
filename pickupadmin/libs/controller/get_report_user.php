<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$num = $_POST['num'];
$page = $_POST['page'];

$url_report_user = $pickup->getApiUrl()."/report?num=$num&page=$page";
$report = $pickup->pickupLinkApi($url_report_user,"get",null,0,0);

$report = json_decode($report,true);
if($report['total']>0){
	foreach($report['reports'] as $key=>$value){
		$uid = $value['uid'];
		
		$url_user_info = $pickup->getApiUrl()."/user/info?u=$uid";
		$user_info = $pickup->pickupLinkApi($url_user_info,"get",null,0,0);

		$user_info = json_decode($user_info,true);
		
		$avatar = $user_info['avatar'];
		$gender = $user_info['gender'];
		$status = $user_info['status'];
		
		$report['reports'][$key]['avatar'] = $avatar;
		$report['reports'][$key]['gender'] = $gender;
		$report['reports'][$key]['status'] = $status;
	}
}

function arrayRecursive(&$array)
{
	foreach ($array as $key => $value) {
		if (is_array($value)) {
			arrayRecursive($array[$key]);
		} else {
			if(is_string($value)){
				$array[$key] = urlencode($value);
			}else{
				$array[$key] = $value;
			}
		}
	}
}
function JSON($result) {
	$array=$result;
	arrayRecursive($array);
	$json = json_encode($array);
	return urldecode($json);
}

echo JSON($report);
?>