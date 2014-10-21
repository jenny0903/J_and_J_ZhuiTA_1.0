<?php
header("Content-type: text/html; charset=utf-8");

include('config.php');

$id = $_GET['id'];

$host = HOST_DOWNLOAD;

$url = $host."/dl/".$id;

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);  
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE); // 对认证证书来源的检查     
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE); // 从证书中检查SSL加密算法是否存在        	
curl_setopt($curl, CURLOPT_HEADER, 0);  
curl_setopt($curl, CURLOPT_TIMEOUT, 30);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($curl); 
curl_close($curl);

echo $result;	
?>