<?php
include("../../config/config.php");
if( isset($_POST['id']) && $_POST['id'] != ''){
	$id = intval($_POST['id']);
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,id is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

if( isset($_POST['direction']) && $_POST['direction'] != ''){
	if($_POST['direction'] == 'up' or $_POST['direction'] == 'down'){
		$direction = $_POST['direction'];
	}else{
		$data['code'] = 400;
		$data['data'] = "Wrong parameter,direction is not the correct value！";
		header("Content-type: application/json");		
		echo json_encode($data);
		exit;
	}
}else{
	$data['code'] = 400;
	$data['data'] = "Wrong parameter,direction is null！";
	header("Content-type: application/json");		
	echo json_encode($data);
	exit;
}

// $id = 3;
// $direction ='down';
$connect = mysql_connect($config['mysql_host'], $config['mysql_username'], $config['mysql_passwd']);
if (!$connect) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db($config['mysql_db'],$connect);
$sql = "select sort from tbl_app where id = $id";
$obj_mysql = mysql_query($sql);
$result = mysql_fetch_assoc($obj_mysql);
$sort = $result['sort'];
//echo $sort."...........";
if($direction == 'up'){
	$sql = "select id,sort from tbl_app where sort > $sort and status = 1 order by sort limit 1";
	$query = mysql_query($sql);
	if(mysql_num_rows($query) > 0){
		$result = mysql_fetch_assoc($query);
		$sort_up = $result['sort'];
		$id_up = $result['id'];
		$sql = "update tbl_app set sort=$sort_up where id=$id";
		$query = mysql_query($sql);
		if(mysql_affected_rows()>0){
			$sql = "update tbl_app set sort=$sort where id=$id_up";
			//echo $sql;
			$query =mysql_query($sql);
			if(mysql_affected_rows()>0){
				$data['code'] = 1;
				$data['data'] = '';
			}else{
				$data['code'] = 0;
			$data['data'] = 'update sort fail';
			}
		}else{  
			$data['code'] = 0;
			$data['data'] = 'update mysql fail';
		}  
	}else{  
		$data['code'] = 0;
		$data['data'] = '';
	} 
}else{
	$sql = "select id,sort from tbl_app where sort < $sort and status = 1 order by sort desc limit 1";
	$query = mysql_query($sql);
	if(mysql_num_rows($query) > 0){
		$result = mysql_fetch_assoc($query);
		//var_dump($result);
		$sort_down = $result['sort'];
		$id_down = $result['id'];
		$sql = "update tbl_app set sort=$sort_down where id=$id";
		$query = mysql_query($sql);
		if(mysql_affected_rows()>0){
			$sql = "update tbl_app set sort=$sort where id=$id_down";
			$query = mysql_query($sql);
			if(mysql_affected_rows()>0){
				$data['code'] = 1;
				$data['data'] = '';
			}else{
				$data['code'] = 0;
				$data['data'] = 'update sort fail';
			}
		}else{  
			$data['code'] = 0;
			$data['data'] = 'update mysql fail';
		}  
	}else{  
		$data['code'] = 0;
		$data['data'] = '';
	} 
}
echo json_encode($data);
/*
if($direction == 'up'){
	$sql = "select sort from tbl_app where sort > $sort order by sort limit 1";
	$query = mysql_query($sql);
	if(mysql_num_rows($query) > 0){
		$result = mysql_fetch_assoc($query);
		$sort = $result['sort'] + 1;
		$sql = "update tbl_app set sort=$sort where id=$id";
		$query = mysql_query($sql);
		if(mysql_affected_rows()>0){
			$data['code'] = 1;
			$data['data'] = '';
		}else{  
			$data['code'] = 0;
			$data['data'] = 'update mysql fail';
		}  
	}else{  
		$data['code'] = 1;
		$data['data'] = '';
	} 
}else{
	$sql = "select sort from tbl_app where sort < $sort order by sort desc limit 1";
	$query = mysql_query($sql);
	if(mysql_num_rows($query) > 0){
		$result = mysql_fetch_assoc($query);
		//var_dump($result);
		$sort = $result['sort'] - 1;
		$sql = "update tbl_app set sort=$sort where id=$id";
		$query = mysql_query($sql);
		if(mysql_affected_rows()>0){
			$data['code'] = 1;
			$data['data'] = '';
		}else{  
			$data['code'] = 0;
			$data['data'] = 'update mysql fail';
		}  
	}else{  
		$data['code'] = 1;
		$data['data'] = '';
	} 
}
echo json_encode($data);
*/

?>