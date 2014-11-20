<?php
header("Content-type: text/html; charset=utf-8");

$config['memcache_server'] = 'tcp://127.0.0.1';//in
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