<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];

// $user_id ='948ce228-12ad-4859-8e8f-ef1840b19a26';

$url_user_hobbies = $pickup->getApiUrl()."/user/hobbies?u=$user_id";
$user_hobbies = $pickup->pickupLinkApi($url_user_hobbies,"get",null,0,0);
$user_hobbies = json_decode($user_hobbies,true);

// var_dump($user_hobbies);

foreach($user_hobbies as $key1=>$val1){
	$tags = $val1['tags'];
	$tags_info = Array();
	foreach($tags as $key2=>$val2){
		if(strpos($val2,'"')){
			$tags_info_temp = json_decode($val2,true);
			// var_dump($tags_info_temp);
			foreach($tags_info_temp as $key3=>$val3){
				$tags_info[] = $val3;
			}
		}else{
			$tags_info[] = $val2;
			// var_dump($val2);
		}
	}
	$user_hobbies[$key1]['tags'] = $tags_info;
	// $user_hobbies[$key1]['tags_info'] = $tags_info;
}

echo JSON($user_hobbies);

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

// echo $pickup->pickupLinkApi($url_user_hobbies,"get",null,0,0);
?>





