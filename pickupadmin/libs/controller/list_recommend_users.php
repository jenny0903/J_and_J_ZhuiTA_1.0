<?php
	include("../../model/php_curl.php");
	
	$page = $_POST['page'];
	$num = $_POST['num'];
	$gender = $_POST['gender'];
	
	$pickup = new pickupApi();
	
	$url_list_recommend = $pickup->getApiUrl()."/user/recommend?num=$num&page=$page&gender=$gender";
	$recommend_result = $pickup->pickupLinkApi($url_list_recommend,"get",null,0,0);
	
	$recommend_array = json_decode($recommend_result,true);
	
	$return_array = Array();
	
	if($recommend_array['total']>0){
		foreach($recommend_array['items'] as $key => $val){
			$user_id = $val;
			$url_user_info = $pickup->getApiUrl()."/user/info?u=$user_id";
			$result =  $pickup->pickupLinkApi($url_user_info,"get",null,0,0);
			$result = json_decode($result,true);
			
			$return_array['items'][$key]['uid'] = $val;
			$return_array['items'][$key]['name'] = $result['nick'];
			$return_array['items'][$key]['gender'] = $result['gender'];
		}
	}else{
		$return_array['items'] = Array();
	}
	
	$return_array['total'] = $recommend_array['total'];
	
	$return_text = json_encode($return_array);
	
	echo $return_text;
?>