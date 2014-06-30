<?php
header("Content-type: text/html; charset=utf-8");
include("../../config/config.php");

$id = $_GET['id'];

$url = URL_PICKUP_API_DOWNLOAD."/2.0/dl/".$id; 

// $url = "http://10.32.100.4:8081/2.0/dl/".$id; //in
// $url = "http://122.226.73.141:8080/2.0/dl/".$id; //out
// $url = "http://dl2.ppickup.com/2.0/dl/".$id; //live

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);  
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);     
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);        	
curl_setopt($curl, CURLOPT_HEADER, 0);  
curl_setopt($curl, CURLOPT_TIMEOUT, 30);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($curl); 
curl_close($curl);

echo $result;	