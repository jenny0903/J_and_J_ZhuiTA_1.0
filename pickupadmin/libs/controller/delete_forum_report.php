<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();
//-H "Content-Type: application/json" 支持批量删除
$id = $_POST['id'];
$url_delete_report = $pickup->getApiUrl()."/forum/reports?id=$id";
echo $pickup->pickupLinkApi($url_delete_report,"delete",null,1,0);
?>