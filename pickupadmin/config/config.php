<?php
header("Content-type: text/html; charset=utf-8");

ini_set("session.gc_maxlifetime", 3600*24);
session_cache_expire(3600*24);
session_set_cookie_params(3600*24,'/','.ppickup.com');

session_start();

$lifeTime = 2*60*60;
setcookie(session_name(), session_id(), time() + $lifeTime, "/"); 

$config['memcache_server'] = 'tcp://127.0.0.1';//in
$config['app_recommend_key'] = 'http://vd.ppickup.com/get.php?k=';

define("URL_PICKUP_API","http://122.226.73.141:9191");//v2.0 out
define("URL_PICKUP_API_DOWNLOAD","http://122.226.73.141:8080");//v2.0 out 下载

// define("URL_PICKUP_API","http://api2.ppickup.com/2.0");//v2.0 live 
//$config['app_recommend_key'] = 'http://vd.ppickup.com/get.php?k=live_';
// define("URL_PICKUP_API","http://10.232.24.53:9191");//v2.0 live
// define("URL_PICKUP_API_DOWNLOAD","http://dl2.ppickup.com");//v2.0 LIVE 下载

// define("URL_PICKUP_API","http://10.32.100.4:9191");//v2.0
// define("URL_PICKUP_API","http://10.32.100.4:6868");//v1.0
// define("URL_PICKUP_API","http://localhost:6868");

$mysql_switch = 1;
switch($mysql_switch){
	case 0: // localhost
		$config['mysql_host'] = 'mysql:dbname=test;host=localhost';
		$config['mysql_username'] = 'root';
		$config['mysql_passwd'] = '';
		$config['mysql_db'] = 'test';
		$config['dbdriver'] = 'pdo';
		break;
	case 1: // in dxc (1.6)
		$config['mysql_host'] = '10.32.1.6';
		$config['mysql_username'] = 'root';
		$config['mysql_passwd'] = 'root';
		$config['mysql_db'] = 'pickup_web';
		$config['dbdriver'] = 'pdo';
		break;
	case 2: // live
		$config['mysql_host'] = '10.66.109.108:3306';
		$config['mysql_username'] = 'pickupweb';
		$config['mysql_passwd'] = '2ycV2f9q';
		$config['mysql_db'] = 'pickup_web';
		$config['dbdriver'] = 'pdo';
		break;
}
?>