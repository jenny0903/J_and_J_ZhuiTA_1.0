<?php
	require_once("libs/Smarty.class.php");
	$smarty=new smarty();
	$smarty->template_dir="templates";//指定模板文件的路径
	$smarty->compile_dir="templates_c";//指定编译的文件路径
	$smarty->cache_dir="cache";//指定缓存文件路径
	$smarty->config_dir="config";//指定smarty配置文件路径
	$smarty->left_delimiter="<{";//指定左定界符，避免和JS冲突
	$smarty->right_delimiter="}>";
?>