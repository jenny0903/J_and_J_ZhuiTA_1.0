<?php
//header("Content-type: text/html; charset=utf-8");
//include("../../config/config.php");
header("Content-type: image/jpg");

//echo file_get_contents('http://dl2.ppickup.com/2.0/dl/profile-avatar-380f8399-e645-81bfec94-d9a2-4d6a-8547-2a0e8466e2e5');
//exit;


$id = $_GET['id'];

//$url = URL_PICKUP_API_DOWNLOAD."/2.0/dl/".$id; 
$url = 'http://dl2.ppickup.com/2.0/dl/'.$id;
//echo $url;

// $url = "http://10.32.100.4:8081/2.0/dl/".$id; //in
// $url = "http://122.226.73.141:8080/2.0/dl/".$id; //out
// $url = "http://dl2.ppickup.com/2.0/dl/".$id; //live
echo file_get_contents($url);
//$curl = curl_init();
//curl_setopt($curl, CURLOPT_URL, $url);  
//curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);     
//curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);        	
//curl_setopt($curl, CURLOPT_HEADER, 0);  
//curl_setopt($curl, CURLOPT_TIMEOUT, 30);
//curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//$result = curl_exec($curl); 
//curl_close($curl);

//echo $result;	