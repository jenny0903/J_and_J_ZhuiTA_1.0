<?php
include("../../config/config.php");

class pickupApi{
	private  $apiUrl = URL_PICKUP_API;
	function getApiUrl(){
		return  $this->apiUrl;
	}
	function pickupLinkApi($url,$method,$data,$is_data,$is_login, $data_type = 0){//$is_data表示是否需要返回服务端的response,1比表示不需要result, $data_type表示post或get传数据时候的header格式，0为默认json，1为application/x-www-form-urlencoded
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, $url);
		if( $is_login == 0){
			curl_setopt($curl, CURLOPT_HEADER, 0);
			if( $method == 'post' || $method == 'put'){
				$aHeader[] = $_SESSION['cookie']; 
				if($data_type == 0){
					$aHeader[] = 'Content-Type: application/json';
					curl_setopt($curl, CURLOPT_HTTPHEADER, $aHeader);
					$data = json_encode($data); 
					curl_setopt($curl, CURLOPT_POSTFIELDS, $data); 
				}else{
					// $aHeader[] = 'Content-Type: application/x-www-form-urlencoded';
					$aHeader[] = 'Content-Type: text/plain';
					curl_setopt($curl, CURLOPT_HTTPHEADER, $aHeader);
					curl_setopt($curl, CURLOPT_POSTFIELDS, $data); 
				}
			}else{
				curl_setopt($curl, CURLOPT_HTTPHEADER, Array($_SESSION['cookie']));
			}
		}else{
			curl_setopt($curl, CURLOPT_HEADER, 1);
		}
		curl_setopt($curl, CURLOPT_TIMEOUT, 80);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		if( $method == 'post' ){
			curl_setopt($curl, CURLOPT_POST, 1);
		}elseif( $method == 'put' ){
			curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
		}elseif( $method == 'delete' ){
			curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE"); 
		}
		$result = curl_exec($curl);
		$info = curl_getinfo($curl);
		
		// var_dump($result);
		// var_dump($info);
		// echo $info["http_code"] ;
		if( $info["http_code"] == 200){
			$data = 1;
			if( $is_login == 1){
				preg_match('/Cookie:\s(_+)\w{4}(_+)=\w+(-)\w+(-)\w+(-)\w+(-)\w+/i', $result, $string);
				$cookie = $string[0];
				$_SESSION['cookie'] = $cookie;
// echo $cookie;
			}
		}else{
			$data = 0;
		}
		if( $is_data == 1){
			if($data == 0){
				return $info["http_code"];
			}else{
				return $data;
			}
		}else{
			return $result;
		}
		curl_close($curl);
		unset($data);
	}
}

?>