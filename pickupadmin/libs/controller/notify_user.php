<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$u = $_POST['id'];
$a = $_POST['all'];
$m = urlencode($_POST['content']);
$n = $_POST['title'];

if( $u !== "" ){
	$i = 0;
	$success = array();
	$fail = array();
	// echo "个人或多人";
	// $url_notify_user = $pickup->getApiUrl()."/user/notify?u=$u&n=$n&m=$m";
	$input = json_decode($u,true);
	$input = array_unique($input);
	foreach($input as $uid){
		++$i;
		$n = $n.$i;
		// $url_notify_user = $pickup->getApiUrl()."/user/notify?u=$uid&n=$n&m=$m";
		$url_notify_user = $pickup->getApiUrl()."/notify?u=$uid&n=$n&m=$m";
		$result = $pickup->pickupLinkApi($url_notify_user,"get",null,1,0);
		if($result == 1){
			$success[] = $uid;
		}else{
			$fail[] = $uid;
		}
	}
	$data['success'] =  $success;
	$data['fail'] =  $fail;
	echo json_encode($data);
}else{
	// echo "全部";
	// $url_notify_user = $pickup->getApiUrl()."/user/notify?a=true&n=$n&m=$m";
	$url_notify_user = $pickup->getApiUrl()."/notify?a=true&n=$n&m=$m";
	echo $pickup->pickupLinkApi($url_notify_user,"get",null,1,0);
}

unset($success);
unset($fail);
unset($data);
// echo $pickup->pickupLinkApi($url_notify_user,"get",null,1,0);
?>