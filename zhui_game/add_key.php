<?php
header("Content-type: text/html; charset=utf-8");
include('config.php');


if(isset($_POST['keys']) && $_POST['keys']){
	$keys = $_POST['keys']; 
}else{
	exit;
}
if(isset($_POST['id']) && $_POST['id']){
	$id = $_POST['id'];
}else{
	exit;
}
if(isset($_POST['uid']) && $_POST['uid']){
	$uid = $_POST['uid'];
}else{
	exit;
}
if(isset($_POST['source']) && $_POST['source']){
	if($_POST['source'] == 'sina' || $_POST['source'] == 'qq' || $_POST['source'] == 'weixin'){
		$source = $_POST['source'];
	}else{
		exit;
	}
}else{
	exit;
}
/*
$id = $_POST['id'];
$keys = $_POST['keys'];
$batch_num = $_GET['batch_num'];
$uid = $_POST['uid'];
$source = $_GET['source'];
*/
$ip = GetIP();


$link = mysql_connect(MYSQL_HOST, MYSQL_NAME, MYSQL_PASSWORD);
if (!$link) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db(MYSQL_DB,$link);
$sql = "select ip,user_id from ".MYSQL_TABLE." where ip='$ip' and user_id='$uid' and source = '$source'"; 
$result = mysql_query($sql);

if(mysql_num_rows($result)){  
	$data = 2;	
}else{  
	$host = HOST_API;

	$url = $host . "/appshare/keys?id=".$id."&keys=".$keys;		
	
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址                
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
	curl_setopt($curl, CURLOPT_POSTFIELDS, '');
	curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容 
	curl_setopt($curl, CURLOPT_TIMEOUT, 120);// 设置超时限制防止死循环
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);// 获取的信息以文件流的形式返回

	$result = curl_exec($curl);
	$info = curl_getinfo($curl);
	if( $info["http_code"] == 200){
		$created_at = date("Y-m-d H:i:s");
		
		$sql = "insert into ".MYSQL_TABLE." (batch_num,source,ip,user_id,key_num,created_at) values ('1','".
		mysql_real_escape_string($source)
		."','".
		mysql_real_escape_string($ip)
		."','".
		mysql_real_escape_string($uid)
		."',".
		$keys
		.",'".
		mysql_real_escape_string($created_at)
		."')";
		
		$result = mysql_query($sql,$link);
		if(mysql_affected_rows()>0){
			$data = 1;
		}else{
			$data = 0;
		}
		mysql_close($link);
	}else{
		$data = $info["http_code"];
	}
}
echo $data;

function GetIP(){
	if(!empty($_SERVER["HTTP_CLIENT_IP"])){
		$cip = $_SERVER["HTTP_CLIENT_IP"];
	}elseif(!empty($_SERVER["HTTP_X_FORWARDED_FOR"])){
		$cip = $_SERVER["HTTP_X_FORWARDED_FOR"];
	}elseif(!empty($_SERVER["REMOTE_ADDR"])){
		$cip = $_SERVER["REMOTE_ADDR"];
	}else{
		$cip = "0";
	}
	return $cip;
}
?>