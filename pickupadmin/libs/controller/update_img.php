<?php
include("../../config/config.php");
/*
if( isset($_POST['id']) && $_POST['id'] != ''){
	$id = intval($_POST['id']);
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,id is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}
*/
$id = 38;
//$data_post = file_get_contents($_FILES['FileData']['tmp_name']);
$data_post = file_get_contents('../../static/images/avatar.jpg');	
$status = 1;
$connect = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$connect) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db($config['mysql_db'],$connect);
$sql = "insert into tbl_file (body,status) values ('".mysql_real_escape_string($data_post)."',$status)";
$query = mysql_query($sql);
if(mysql_affected_rows()>0){
	$file_id = mysql_insert_id();
	//echo $file_id;
	$sql = "update tbl_app set file_id = $file_id where id = $id";
	//echo $sql;
	$query = mysql_query($sql);
	if(mysql_affected_rows()>0){
		$key = 'logo_img_'.$file_id;
		$memcache_obj = new Memcache;
		$memcache_obj->pconnect($config['memcache_server'], 11211);
		$memcache_obj->set($key, $data_post, 0, 0);
		$data['code'] = 1;
		$data['data'] = Array(
		'fileid' => $this->db->insert_id()
		);
	}else{
		$data['code'] = 0;
		$data['data'] = 'update file_id fail';
	}
}else{  
	$data['code'] = 0;
	$data['data'] = 'insert mysql fail';
}  

header("Content-type: application/json");		
echo json_encode($data);
exit;
?>