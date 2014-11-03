<?php
$link = mysql_connect('10.32.1.6', 'root', 'root');
if (!$link) {
	die('Could not connect: ' . mysql_error());
}

mysql_select_db('pickup_web',$link);
mysql_query("SET NAMES UTF8"); 
$sql = "select id,file_id,app_name,intro,link from tbl_app where status = 1 order by status desc,sort desc,id desc";
$memcache_obj = new Memcache;
$memcache_obj->pconnect('tcp://127.0.0.1', 11211);
$key = md5($sql);
$result = $memcache_obj->get($key);
if($result){
	$list = $result;
}else{
	$obj_mysql = mysql_query($sql);
	if(mysql_num_rows($obj_mysql)>=0){
		$code = 1;
		while ($row = mysql_fetch_assoc($obj_mysql)){
			$list[] = $row;
		}
		$search = array (
		"'&'i",//转换and符号
		"'\"'i",//转换半角双引号
		"'\''i",//转换半角单引号
		"'<'i",//转换小于号
		"'>'i",//转换大于号
		"'\n'i"//转换回车键
		);
		$replace = array (
			"&#38;",
			"&#34;",
			"&#39;",
			"&#60;",
			"&#62;",
			""
		);
		
		foreach ($list as $key => $value){
			$list[$key]['app_name'] = preg_replace($search, $replace, $value['app_name']);
			$list[$key]['intro'] = preg_replace($search, $replace, $value['intro']);
		}
		$memcache_obj->set($key, $list, 0, 0); //0:代表没经过压缩 0：永不失效
	}else{  
		$code = 0;
	} 
}	

$res = array(
	'code'		=>	$code,
	'data'		=>	$list
);

mysql_close($link);
echo json_encode($res);
exit;
?>