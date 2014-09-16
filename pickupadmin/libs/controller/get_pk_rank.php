<?php
include("../../model/php_curl.php");
include("../main_helper.php");

$pickup = new pickupApi();

$gender = $_POST['gender'];
$tp = $_POST['tp'];
$num = $_POST['num'];
$page = $_POST['page'];

$url_get_pk_rank = $pickup->getApiUrl()."/pk/ranking?gender=".$gender."&tp=".$tp."&num=".$num.'&page='.$page;

$result = $pickup->pickupLinkApi($url_get_pk_rank,"get",null,0,0);

$result = json_decode($result,true);
if(isset($result['total_num']) && $result['total_num']>0){
	$ranks= $result['data']; 
	foreach( $ranks as $key => $value){
		$uid = $value['uid'];
		$url_uid_info = $pickup->getApiUrl()."/user/info?u=$uid";
		$result_uid_info = $pickup->pickupLinkApi($url_uid_info,"get",null,0,0);
// var_dump($result_uid_info );
		if(!empty($result_uid_info)){
			$result_uid_info = json_decode($result_uid_info,true);
			$result['data'][$key]['user_name'] = $result_uid_info['nick'];
		}else{
			$result['data'][$key]['user_name'] = '';
		}		
	}
}

echo json_encode($result);
?>