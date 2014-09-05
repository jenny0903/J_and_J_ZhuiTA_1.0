<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

if( isset($_POST['pkid']) && $_POST['pkid']){
	$pkid = $_POST['pkid'];
}else{
	$pkid = '';
}
if( isset($_POST['tp']) && $_POST['tp']){
	$tp = $_POST['tp'];
}else{
	$tp = '';
}
if( isset($_POST['acceptor']) && $_POST['acceptor']){
	$acceptor = $_POST['acceptor'];
}else{
	$acceptor = '';
}
if( isset($_POST['acceptor_num']) && $_POST['acceptor_num']){
	$acceptor_num = $_POST['acceptor_num'];
}else{
	$acceptor_num = '';
}
if( isset($_POST['acceptor_canvass']) && $_POST['acceptor_canvass']){
	$acceptor_canvass  = $_POST['acceptor_canvass'];
}else{
	$acceptor_canvass  = '';
}
if( isset($_POST['initiator']) && $_POST['initiator']){
	$initiator  = $_POST['initiator'];
}else{
	$initiator  = '';
}
if( isset($_POST['initiator_num']) && $_POST['initiator_num']){
	$initiator_num  = $_POST['initiator_num'];
}else{
	$initiator_num  = '';
}
if( isset($_POST['initiator_canvass']) && $_POST['initiator_canvass']){
	$initiator_canvass  = $_POST['initiator_canvass'];
}else{
	$initiator_canvass  = '';
}

if( $tp == 'vote'){
	$url_search_pk = $pickup->getApiUrl()."/pk?pkid=$pkid&tp=$tp&acceptor=$acceptor&acceptor_num=$acceptor_num&initiator=$initiator&initiator_num=$initiator_num";
	echo $pickup->pickupLinkApi($url_search_pk,"post",null,1,0);
}else if( $tp == 'canvass'){
	$url_search_pk = $pickup->getApiUrl()."/pk?pkid=$pkid&tp=$tp&acceptor=$acceptor&acceptor_canvass=$acceptor_canvass&initiator=$initiator&initiator_canvass=$initiator_canvass";
	echo $pickup->pickupLinkApi($url_search_pk,"post",null,1,0);
}else{
	$data = array(
		'code' => 0,
		'msg' => 'tp is error'
	);
	echo json_encode($data);
}

?>