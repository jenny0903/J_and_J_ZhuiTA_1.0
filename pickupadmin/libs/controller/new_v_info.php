<?php
if( isset($_POST['v_name']) && $_POST['v_name'] != '' ){
		$v_name = $_POST['v_name'];
	}else{
		$data['code'] = 400;
		$data['data'] = "Wrong parameter,v_name is null！";
		header("Content-type: application/json");		
		echo json_encode($data);
		exit;
	}
	
	if( isset($_POST['type']) && $_POST['type'] != ''){
		$type = intval($_POST['type']);
	}else{
		$data['code'] = 400;
		$data['data'] = "Wrong parameter,type is null！";
		header("Content-type: application/json");		
		echo json_encode($data);
		exit;
	}
	
	if( isset($_POST['status']) && $_POST['status'] != ''){
		$status = intval($_POST['status']);
	}else{
		$data['code'] = 400;
		$data['data'] = "Wrong parameter,status is null！";
		header("Content-type: application/json");		
		echo json_encode($data);
		exit;
	}
	/*
	$v_name = '1.2.0';
	$type = 1;
	$status = 1;
	*/
	$link = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
	if (!$link) {
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db($config['mysql_db'],$link);
	
	$sql = "insert into tbl_version (v_name,type,status) values ('".mysql_real_escape_string($v_name)."','$type','$status')";
	$query = mysql_query($sql);
	if(mysql_affected_rows()>0){
		$data['code'] = 1;
		$data['data'] = '';
	}else{  
		$data['code'] = 0;
		$data['data'] = 'insert mysql fail';
	}  
	
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
?>