<?php
if( isset($_GET['fileid']) && $_GET['fileid'] != ''){
	$fileid = intval($_GET['fileid']);
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,id is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}
//$fileid = 26;
$key = 'logo_img_'.$fileid;
$memcache_obj = new Memcache;
$memcache_obj->pconnect('tcp://127.0.0.1', 11211);
$result = $memcache_obj->get($key);
if($result){
	echo $result;
}else{
	$link = mysql_connect('10.32.1.6', 'root', 'root');
	if (!$link) {
		die('Could not connect: ' . mysql_error());
	}
	mysql_select_db('pickup_web',$link);
	mysql_query("SET NAMES UTF8");   
	$sql = "select body from tbl_file where id = $fileid";
	$query = mysql_query($sql);
	$result = mysql_fetch_assoc($query);
	//var_dump($result);
	$result = $result['body'];
	$memcache_obj->set($key, $result, 0, 0);
	mysql_close($link);
	echo $result;
}
?>