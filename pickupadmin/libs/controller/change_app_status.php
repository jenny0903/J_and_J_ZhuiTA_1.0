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
$id = 4;
$status = 0;
*/
$connect = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$connect) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db($config['mysql_db'],$connect);
mysql_query("SET NAMES UTF8"); 

$sql = "update tbl_app set status=$status where id=$id";
$query = mysql_query($sql);
if(mysql_affected_rows()>0){
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