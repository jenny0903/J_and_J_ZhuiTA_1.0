<?php
header("Content-type: text/html; charset=utf-8");
include('config.php');

$id = $_POST['id'];

$host = HOST_API;
$url = $host . "/appshare/profile?id=".$id;	

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址                
curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容 
curl_setopt($curl, CURLOPT_TIMEOUT, 120);// 设置超时限制防止死循环
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);// 获取的信息以文件流的形式返回

$result = curl_exec($curl);
$info = curl_getinfo($curl);


$search = array (
	"'\n'i"//转换回车键
);
$replace = array (
	""
);
$result2 = preg_replace($search, $replace, $result);


$result3 = json_decode($result2,true);

$return = array(
	"code"		=>	$info["http_code"],
	"data"		=>	$result3,
);
echo json_encode($return) ;
?>