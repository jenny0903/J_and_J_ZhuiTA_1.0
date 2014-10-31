<?php
include("../../config/config.php");
$data_post = file_get_contents($_FILES['FileData']['tmp_name']);
//$data_post = file_get_contents('../../static/images/pickup.png');
$status = 1;
$connect = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$connect) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db($config['mysql_db'],$connect);
$sql = "insert into tbl_file (body,status) values ('".mysql_real_escape_string($data_post)."','$status')";	
//echo $sql;
$query = mysql_query($sql);
if(mysql_affected_rows()>0){
	$id = mysql_insert_id();
	$key = 'logo_img_'.$id;
	$memcache_obj = new Memcache;
	$memcache_obj->pconnect($config['memcache_server'], 11211);
	$memcache_obj->set($key, $data_post, 0, 0);
	$data['code'] = 1;
	$data['data'] = Array(
		'fileid' => $id
	);
}else{  
	$data['code'] = 0;
	$data['data'] = 'insert mysql fail';
}  

header("Content-type: application/json");		
echo json_encode($data);
exit;
?>