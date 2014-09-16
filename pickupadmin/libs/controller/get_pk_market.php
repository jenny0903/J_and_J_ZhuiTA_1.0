<?php
include("../../model/php_curl.php");
include("../main_helper.php");

$pickup = new pickupApi();

$gender = $_POST['gender'];
$num = $_POST['num'];
$page = $_POST['page'];

$url_get_pk = $pickup->getApiUrl()."/pk/market?gender=".$gender."&num=".$num.'&page='.$page;

$result = $pickup->pickupLinkApi($url_get_pk,"get",null,0,0);

$result = json_decode($result,true);
if(isset($result['total_num']) && $result['total_num']>0){
	$pks= $result['data']; 
	foreach( $pks as $key => $value){
		$initiator_uid = $value['initiator'];
		$url_initiator_info = $pickup->getApiUrl()."/user/info?u=$initiator_uid";
		$result_initiator_info = $pickup->pickupLinkApi($url_initiator_info,"get",null,0,0);
		if(!empty($result_initiator_info)){
			$result_initiator_info = json_decode($result_initiator_info,true);
			$result['data'][$key]['initiator_nickname'] = $result_initiator_info['nick'];
		}else{
			$result['data'][$key]['initiator_nickname'] = '';
		}
		$acceptor_uid = $value['acceptor'];
		$url_acceptor_info = $pickup->getApiUrl()."/user/info?u=$acceptor_uid";
		$result_acceptor_info = $pickup->pickupLinkApi($url_acceptor_info,"get",null,0,0);
		if(!empty($result_acceptor_info)){
			$result_acceptor_info = json_decode($result_acceptor_info,true);
			$result['data'][$key]['acceptor_nickname'] = $result_acceptor_info['nick'];
		}else{
			$result['data'][$key]['acceptor_nickname'] = '';
		}	
	}
}

echo json_encode($result);
?>