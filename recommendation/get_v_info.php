<?php
if( isset($_GET['type']) && $_GET['type'] != ''){
	$type = intval($_GET['type']);
}else{
	$data['code'] = 400;
	$data['data'] = "banner_id is null, bad_request";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

if( isset($_GET['v_name']) && $_GET['v_name'] != '' ){
	$v_name = $_GET['v_name'];
}else{
	$data['code'] = 400;
	$data['data'] = "banner_id is null, bad_request";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

$key = $type."_".$v_name;
$link = mysql_connect('10.32.1.6', 'root', 'root');
if (!$link) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db('pickup_web',$link);
mysql_query("SET NAMES UTF8"); 
//test memcache
// save test = 1
$memcache_obj = new Memcache;
$memcache_obj->pconnect('tcp://127.0.0.1', 11211);
$status = $memcache_obj->get($key);
if($status){
	echo $status;
}else{
	$sql = "select status from tbl_version where type = $type and v_name ='".$v_name."' and status >=0";
	$obj_mysql = mysql_query($sql);
	if(mysql_num_rows($result)>=0){
		$result = mysql_fetch_assoc($obj_mysql);
		$status = $result['status']; //to do 
		$memcache_obj->set($key, $status, 0, 0);
		echo $status;
	}else{  
		echo "无此版本";
	}  
}
mysql_close($link);
?>