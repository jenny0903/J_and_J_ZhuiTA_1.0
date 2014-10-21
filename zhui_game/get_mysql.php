<?php
header("Content-type: text/html; charset=utf-8");
include 'config.php';
$link = mysql_connect(MYSQL_HOST, MYSQL_NAME, MYSQL_PASSWORD);
if (!$link) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db(MYSQL_DB,$link);
$sql = "select * from ".MYSQL_TABLE; 
$result = mysql_query($sql);
if (!$result) {
	die('Invalid query: ' . mysql_error());
}else{
	while ($row = mysql_fetch_assoc($result)) {
		var_dump($row );
}
	mysql_free_result($result);
}
mysql_close($link);
?>