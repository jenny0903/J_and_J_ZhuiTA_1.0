<?php
//json_encode中文乱码问题修正
function arrayRecursive(&$array){  
	foreach ($array as $key => $value) {  
		if (is_array($value)) {  
			arrayRecursive($array[$key]);//如果是数组就进行递归操作  
		} else {  
			if(is_string($value)){  
				$temp1= addslashes($value);
				$array[$key]= urlencode($temp1);//如果是字符串就urlencode  
			}else{  
				$array[$key] = $value;  
			}  
		}  
	}  
}  
function JSON($result) {  
	$array=$result;  
	arrayRecursive($array);//先将类型为字符串的数据进行 urlencode  
	$json = json_encode($array);//再将数组转成JSON  
	return urldecode($json);//最后将JSON字符串进行urldecode  
}
?>