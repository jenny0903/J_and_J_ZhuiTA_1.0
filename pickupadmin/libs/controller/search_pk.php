<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

if( isset($_POST['zid']) && $_POST['zid']){
	$user_zid = $_POST['zid'];
}else{
	$user_zid = '';
}
if( isset($_POST['num ']) && $_POST['num ']){
	$num = $_POST['num '];
}else{
	$num = '';
}
if( isset($_POST['page ']) && $_POST['page ']){
	$page = $_POST['page '];
}else{
	$page = '';
}

$url_search_pk = $pickup->getApiUrl()."/pk?zid=$user_zid&num=$num&page=$page";
$result = $pickup->pickupLinkApi($url_search_pk,"get",null,0,0);

// $pk1 = array(
	// "id"=>"53f01e0ae65c9d2f42000002",
	// "initiator"=>"9d338b86-0706-45cc-a158-12b54f397e0a",
	// "initiator_vote"=>1,
	// "initiator_canvass"=>"请大家多多投票支持我，帮我顶上去，谢谢大家！",
	// "acceptor"=>"adbe3c56-0bfb-412d-abfa-ab97ccfb3251",
	// "acceptor_vote"=>1,
	// "acceptor_canvass"=>"请大家多多投票支持我，帮我顶上去，谢谢！",
	// "start"=>"2014-08-17T11:14:18.662+08:00",
	// "end"=>"2014-08-17T14:14:18.662+08:00",
	// "status"=>1,
	// "winner"=>"",
	// "loser"=>"",
	// "total_vote"=>0
// );
// $pk2 = array(
	// "id"=>"53f01e0ae65c9d2f42000002",
	// "initiator"=>"9d338b86-0706-45cc-a158-12b54f397e0a",
	// "initiator_vote"=>1,
	// "initiator_canvass"=>"请大家多多投票支持我，帮我顶上去，谢谢大家！",
	// "acceptor"=>"adbe3c56-0bfb-412d-abfa-ab97ccfb3251",
	// "acceptor_vote"=>1,
	// "acceptor_canvass"=>"请大家多多投票支持我，帮我顶上去，谢谢！",
	// "start"=>"2014-08-17T11:14:18.662+08:00",
	// "end"=>"2014-08-17T14:14:18.662+08:00",
	// "status"=>1,
	// "winner"=>"",
	// "loser"=>"",
	// "total_vote"=>0
// );
// $pks = array($pk1,$pk2);
// $result = array(
	// "pks" => $pks,
	// "total" => count($pks) 
// );

$result = json_decode($result,true);

if(in_array("pks",$result)){
	$pks = $result['pks']; 
	foreach( $pks as $key => $value){
		$initiator_uid = $value['initiator'];
		$url_initiator_info = $pickup->getApiUrl()."/user/info?u=$initiator_uid";
		$result_initiator_info = $pickup->pickupLinkApi($url_initiator_info,"get",null,0,0);
		if(!empty($result_initiator_info)){
			$result_initiator_info = json_decode($result_initiator_info,true);
			$result['pks'][$key]['initiator_nickname'] = $result_initiator_info['nick'];
		}else{
			$result['pks'][$key]['initiator_nickname'] = '';
		}
		$acceptor_uid = $value['acceptor'];
		$url_acceptor_info = $pickup->getApiUrl()."/user/info?u=$acceptor_uid";
		$result_acceptor_info = $pickup->pickupLinkApi($url_acceptor_info,"get",null,0,0);
		if(!empty($result_acceptor_info)){
			$result_acceptor_info = json_decode($result_acceptor_info,true);
			$result['pks'][$key]['acceptor_nickname'] = $result_acceptor_info['nick'];
		}else{
			$result['pks'][$key]['acceptor_nickname'] = '';
		}
	}
}

echo json_encode($result);
?>