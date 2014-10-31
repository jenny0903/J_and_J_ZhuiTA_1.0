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

//$id =3;
$link = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$link) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db($config['mysql_db'],$link);
mysql_query("SET NAMES UTF8"); 
$sql = "select id,app_name,file_id,intro,link from tbl_app where id = $id";
$obj_mysql = mysql_query($sql);
if(mysql_num_rows($obj_mysql)>=0){
	$code = 1;
}else{  
	$code = 0;
}  

while ($row = mysql_fetch_assoc($obj_mysql)){
	$list[] = $row;
}
$res = array(
	'code'		=>	$code,
	'data'		=>	$list
);

//$data_encode = $this->encode_html_entity($res);

echo json_encode($res);
exit;
?>