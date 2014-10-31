<?php
include("../../config/config.php");
if( isset($_GET['fileid']) && $_GET['fileid'] != ''){
	$fileid = intval($_GET['fileid']);
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,id is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

//$fileid = 38;
$connect = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$connect) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db($config['mysql_db'],$connect);
$key = 'logo_img_'.$fileid;
$memcache_obj = new Memcache;
$memcache_obj->pconnect($config['memcache_server'], 11211);
$result = $memcache_obj->get($key);
if($result){
	echo $result;
}else{
	$sql = "select body from tbl_file where id = $fileid";
	$query = mysql_query($sql);
	$result = mysql_fetch_assoc($query);
	$memcache_obj->set($key, $result, 0, 0);
	echo $result;
}
?>