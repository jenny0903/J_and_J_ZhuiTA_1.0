<?php
include("../../config/config.php");

if( isset($_POST['id']) && $_POST['id'] != ''){
	$id = intval($_POST['id']);
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,id is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

if( isset($_POST['type']) && $_POST['type'] != ''){
	$type = intval($_POST['type']);
}else{
	$data['code'] = 400;
	$data['data'] = "banner_id is null, bad_request";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

if( isset($_POST['v_name']) && $_POST['v_name'] != '' ){
	$v_name = $_POST['v_name'];
}else{
	$data['code'] = 400;
	$data['data'] = "banner_id is null, bad_request";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

if( isset($_POST['status']) && $_POST['status'] != ''){
	$status = intval($_POST['status']);
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,status is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}
/*		
$id = 1;
$status = 1;
$type = 1;
$v_name =1.11;
$key = $type."_".$v_name;
*/	
$link = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$link) {
	die('Could not connect: ' . mysql_error());
}

mysql_select_db($config['mysql_db'],$link);

$sql = "update tbl_version set status=$status where id=$id";
$query = mysql_query($sql);
if(mysql_affected_rows()>0){
	$data['code'] = 1;
	$data['data'] = '';
	$memcache_obj = new Memcache;
	$memcache_obj->pconnect($config['memcache_server'], 11211);
	$memcache_obj->delete($key, 0);
}else{  
	$data['code'] = 0;
	$data['data'] = 'update mysql fail';
}  

header("Content-type: application/json");		
echo json_encode($data);
exit;
?>