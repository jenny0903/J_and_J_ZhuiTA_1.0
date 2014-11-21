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

if( isset($_POST['fileid']) && $_POST['fileid'] != ''){
	$file_id = intval($_POST['fileid']);
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,file_id is null！";
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

/*
$app_name = '美图秀秀2';
$file_id  = 14;
$intro = 'make photo more more beautiful';
$link = 'http://www.baidu.com?id=123&type=1#aaa';
*/
$connect = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$connect) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db($config['mysql_db'],$connect);
mysql_query("SET NAMES UTF8"); 

$sql = "select sort from tbl_app where status = 0 or status = 1 order by status desc,sort desc,id desc limit 1";
$query = mysql_query($sql);
if(mysql_num_rows($query)>0){
	$result = mysql_fetch_assoc($query);
	$sort = $result['sort'] + 1;
}else{
	$sort = 0;
}

$sql = "insert into tbl_app (app_name,file_id,intro,link,status,sort) values ('".mysql_real_escape_string($app_name)."','$file_id','".mysql_real_escape_string($intro)."','".mysql_real_escape_string($link)."',1,$sort)";
$query = mysql_query($sql);
if(mysql_affected_rows()>0){
	$data['code'] = 1;
	$data['data'] = '';
}else{  
	$data['code'] = 0;
	$data['data'] = 'insert mysql fail';
}  

header("Content-type: application/json");		
echo json_encode($data);
exit;
?>