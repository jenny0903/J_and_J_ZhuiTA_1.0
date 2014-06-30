<?php
include("../../model/php_curl.php");
include("../main_helper.php");

$pickup = new pickupApi();
// $num = 1000;
// $page = 1;
$num = $_POST['num'];
$page = $_POST['page'];

$url_get_gift = $pickup->getApiUrl()."/gift?num=".$num.'&page='.$page;

$result = $pickup->pickupLinkApi($url_get_gift,"get",null,0,0);

$result = json_decode($result,true);

$result1 = Array();
$result2 = Array();

foreach($result['gift_items'] as $val0){
	if($val0['status'] == 0){
		$result2[] = $val0;
	}else{
		$result1[] = $val0;
	}
}

foreach($result1 as $val1){
	$position1[] = $val1['position'];
}

if(!empty($position1)){
	array_multisort($position1,$result1);
}

foreach($result2 as $val2){
	$position2[] = $val2['position'];
}

if(!empty($position2)){
	array_multisort($position2,$result2);
}

$return_list = Array();

foreach($result1 as $val3){
	$return_list[] = $val3;
}

foreach($result2 as $val4){
	$return_list[] = $val4;
}

$return['gift_items'] = $return_list;
$return['total'] = $result['total'];

echo JSON($return);

?>