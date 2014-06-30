<?php
include("../../model/php_curl.php");

$pickup = new pickupApi();

$user_id = $_POST['id'];
$t = $_POST['type'];
$number = $_POST['number'];

$url_get_rank = $pickup->getApiUrl()."/billboard/rank?u=$user_id&t=$t&n=$number";
echo $pickup->pickupLinkApi($url_get_rank,"get",null,0,0);

?>




