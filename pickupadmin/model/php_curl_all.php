<?php
class Curl_Model extends CI_Model{
	public  $url;
	public  $method;
	public  $data;
	
	public function __construct(){
		parent::__construct();
	}
	public function __construct($u,$m){
		$this->url = $u;
		$this->method = $m;
	}
	public function __construct($u,$m,$d)){
		$this->url = $u;
		$this->method = $m;
		$this->data = $d;
	}

	function getUrl(){
		return  $this->url;
	}
	
	function linkApi(){
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_USERAGENT, 'yunio/3.0');
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0 );
		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0 );
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_HEADER, 1);
		if( $method == 'post' || $method == 'put'){
			// $aHeader[] = $_SESSION['cookie']; 
			// $aHeader[] = 'Content-Type: application/json';
			// curl_setopt($curl, CURLOPT_HTTPHEADER, $aHeader);
			$data = json_encode($data); 
			curl_setopt($curl, CURLOPT_POSTFIELDS, $data); 
		}
		// else{
			// curl_setopt($curl, CURLOPT_HTTPHEADER, Array($_SESSION['cookie']));
		// }
		curl_setopt($curl, CURLOPT_TIMEOUT, 30);
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

		curl_close($curl);
		unset($data);
		return $info;
	}


?>