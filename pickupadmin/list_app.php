<?php
session_start();

if(isset($_SESSION['cookie'])){
	include("smarty_conf.php");
	$smarty->display("list_app.tpl");//显示模板
}else{
	header("location: index.php");
}
?>