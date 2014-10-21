<?php
$api_switch = 0; // 0 ЭтВт, 1 live

$mysql_switch = 1; // 0 localhost, 1 ЭтВт/live 

switch($api_switch){
	case 0:
		define('HOST_API','http://122.226.73.141:6969/2.2');
		define('HOST_DOWNLOAD','http://122.226.73.141:8080/2.0');
		break;
	case 1:
		define('HOST_API','http://api2.ppickup.com/2.2');
		define('HOST_DOWNLOAD','http://dl2.ppickup.com/2.0');
		break;
}
switch($mysql_switch){
	case 0:
		define('MYSQL_HOST','localhost');
		define('MYSQL_NAME','root');
		define('MYSQL_PASSWORD','');
		define('MYSQL_DB','game');
		define('MYSQL_TABLE','tbl_share');
		break;
	case 1:
		define('MYSQL_HOST','10.66.109.108:3306');
		define('MYSQL_NAME','pickupweb');
		define('MYSQL_PASSWORD','2ycV2f9q');
		define('MYSQL_DB','campaign');
		define('MYSQL_TABLE','tbl_share');
		break;	
}
?>