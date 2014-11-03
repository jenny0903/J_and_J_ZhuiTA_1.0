<?php
include("../../config/config.php");
if( isset($_POST['app_name']) && $_POST['app_name'] != '' ){
	$app_name = $_POST['app_name'];
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,app_name is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

if( isset($_POST['id']) && $_POST['id'] != ''){
	$id = intval($_POST['id']);
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,id is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

if( isset($_POST['intro']) && $_POST['intro'] != ''){
	$intro =$_POST['intro'];
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,intro is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

if( isset($_POST['link']) && $_POST['link'] != ''){
	$link =$_POST['link'];
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,intro is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}


// $app_name = 'daxiangce1';
// $id = 1;
$intro = 'share photo';
$link = 'http://baidu.com?id=1';
$connect = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$connect) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db($config['mysql_db'],$connect);
$sql = "update tbl_app set app_name = '$app_name',intro = '$intro',link = '$link' where id=$id";
$query = mysql_query($sql);
if(mysql_affected_rows()>=0){
	$data['code'] = 1;
	$data['data'] = '';
}else{  
	$data['code'] = 0;
	$data['data'] = 'update mysql fail';
}  

header("Content-type: application/json");		
echo json_encode($data);
exit;
?>