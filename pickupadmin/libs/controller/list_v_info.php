<?php
if(isset($_POST['pos']) && $_POST['pos'] != '' ){
	$pos = intval($_POST['pos']);
}else{
	$pos = 0;
}

if(isset($_POST['limit']) && $_POST['limit'] != ''){
	$limit = intval($_POST['limit']);
}else{
	$limit = 20;
}

$link = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$link) {
	die('Could not connect: ' . mysql_error());
}

mysql_select_db($config['mysql_db'],$link);

$sql = "select count(*) as n from tbl_version where status = 1 or status = 0";
$result = mysql_query($sql);
$num_rows = mysql_num_rows($result);
if($num_rows >=0){
	$row = mysql_fetch_assoc($result);
	$total = $row['n'];
}else{  
	$total = 0;
}  

$sql1 = "select * from tbl_version where status = 1 or status = 0 order by id desc limit $pos,$limit";
$result1 = mysql_query($sql1);
$num_rows1 = mysql_num_rows($result1);
if($num_rows1 >=0){
	$code = 1;
}else{  
	$code = 0;
} 

while ($row = mysql_fetch_assoc($result1)){
	$list[] = $row;
}
$data = array(
	'total'		=>	$total,
	'list'		=>	$list
);
$res = array(
	'code'		=>	$code,
	'data'		=>	$data
);

$data_encode = encode_html_entity($res);
		
	function arrayRecursiveEntity(&$array){
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
		foreach ($array as $key => $value) {  
			if (is_array($value)) {  
				arrayRecursiveEntity($array[$key]);
			} else {  
				if(is_string($value)){  
					$array[$key] = preg_replace($search, $replace, $value);
				}else{  
					$array[$key] = $value;  
				}  
			}  
		}  
	}
	
	function encode_html_entity($origin){
		$for_encode = $origin;
		arrayRecursiveEntity($for_encode);
		return $for_encode;
	}
		
		echo json_encode($data_encode);
		exit;
?>