<?php
include("../../model/php_curl.php");
include("../../config/config.php");

$pickup = new pickupApi();
//-H "Content-Type: application/json" 支持批量删除
$user_id = $_POST['id'];

$url = URL_PICKUP_API"/report"; 

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HEADER, 0);
$aHeader[] = $_SESSION['cookie']; 
$aHeader[] = 'Content-Type: application/json';
curl_setopt($curl, CURLOPT_HTTPHEADER, $aHeader);
$data = Array($user_id);
$data = json_encode($data); 
curl_setopt($curl, CURLOPT_POSTFIELDS, $data); 

curl_setopt($curl, CURLOPT_TIMEOUT, 30);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE"); 

$result = curl_exec($curl);
$info = curl_getinfo($curl);
if( $info["http_code"] == 200){
	$data = 1;
}else{
	$data = 0;
}

echo $data;
curl_close($curl);
unset($data);
?>