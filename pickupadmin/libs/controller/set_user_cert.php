<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$uid = $_POST['uid'];
$avatar = $_POST['avatar'];
$education = $_POST['education'];
$job = $_POST['job'];
$money = $_POST['money'];

// $avatar = empty($_POST['avatar']) ? "" : $_POST['avatar'];
// $education = empty($_POST['education']) ? "" : $_POST['education'];
// $job = empty($_POST['job']) ? "" : $_POST['job'];
// $money = empty($_POST['money']) ? "" : $_POST['money'];

// $data_cert = array (
	// "uid" => $uid,
	// "avatar" => $avatar,
	// "education" => $education,
	// "job" => $job,
	// "money" => $money
// );
if($avatar == 0){
	if($education == 0){
		if($job == 0){
			if($money == 0){
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid";
			}else{
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&money=$money";
			}
		}else{
			if($money == 0){
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&job=$job";
			}else{
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&job=$job&money=$money";
			}
		}
	}else{
		if($job == 0){
			if($money == 0){
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&education=$education";
			}else{
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&education=$education&money=$money";
			}
		}else{
			if($money == 0){
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&education=$education&job=$job";
			}else{
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&education=$education&job=$job&money=$money";
			}
		}
	}
}else{
	if($education == 0){
		if($job == 0){
			if($money == 0){
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&avatar=$avatar";
			}else{
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&avatar=$avatar&money=$money";
			}
		}else{
			if($money == 0){
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&avatar=$avatar&job=$job";
			}else{
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&avatar=$avatar&job=$job&money=$money";
			}
		}
	}else{
		if($job == 0){
			if($money == 0){
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&avatar=$avatar&education=$education";
			}else{
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&avatar=$avatar&education=$education&money=$money";
			}
		}else{
			if($money == 0){
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&avatar=$avatar&education=$education&job=$job";
			}else{
				$url_cert = $pickup->getApiUrl()."/user/cert?u=$uid&avatar=$avatar&education=$education&job=$job&money=$money";
			}
		}
	}
}

$temp_cert = $pickup->pickupLinkApi($url_cert,"post",null,1,0);

if( $temp_cert == 1 ){
	echo 1;
}else{
	echo 0;
}
?>