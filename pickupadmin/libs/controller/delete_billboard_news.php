<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$id = $_POST['id'];

$url_delete_news = $pickup->getApiUrl()."/billboard/news?id=$id";
echo $pickup->pickupLinkApi($url_delete_news,"delete",null,1,0);

?>




