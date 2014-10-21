<?php
header("Content-type: text/html; charset=utf-8");
include 'config.php';
$link = mysql_connect(MYSQL_HOST, MYSQL_NAME, MYSQL_PASSWORD);
if (!$link) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db(MYSQL_DB,$link);
$sql = "delete from ".MYSQL_TABLE; 
$result = mysql_query($sql);
if (mysql_affected_rows()>0) {
	echo "delete success!";
}else{
	die('Invalid query: ' . mysql_error());
}

mysql_close($link);
?>