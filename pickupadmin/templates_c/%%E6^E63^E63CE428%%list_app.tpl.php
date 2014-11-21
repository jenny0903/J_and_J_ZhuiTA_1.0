<?php /* Smarty version 2.6.28, created on 2014-11-21 17:53:34
         compiled from list_app.tpl */ ?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
<link rel="shortcut icon" type="image/png" href="static/pickup_icon.png" />
<link rel="stylesheet" type="text/css"  href="static/css/pickup_main.css"  />
<link rel="stylesheet" type="text/css"  href="static/css/pickup_app.css"  />
<title>追TA后台管理系统</title>
</head>

<body>
<div class="wrapper">
    <div class="header">
    	<img class="logo" src="static/images/pickup.png" title="追TA后台管理系统"/>
        <p class="title">追TA后台管理系统</p>
        <div class="header_devider"></div>
    </div>
	<div class="menu_wrap">
    	<ul class="menu1" id="J_menu1">
        	<li>
            	<a class="menu1_li" href="javascript:;" id="J_billboard_wrap">榜单</a>
                <ul class="menu2 hide">
                	<li><a href="main.php#billboard_list" id="J_list_detail">榜单列表</a></li>
					<li><a href="main.php#adver_set" id="J_adver_set">广告位设置</a></li>
                    <li><a href="main.php#billboard_rank" id="J_list_sort">榜单排名</a></li>
                </ul>
            </li>
			<li>
            	<a class="menu1_title" href="main.php#user_search" id="J_search_user">搜索用户</a>
            </li>
            <li>
				<a class="menu1_title" href="main.php#photo_check" id="J_complain">举报照片审核</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#send_message" id="J_send_message">推送消息</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#manage_notice" id="J_notice_menu">通知管理</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#manage_gift" id="J_gift_menu">礼物管理</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#exchange_items" id="J_exchange_items">礼券商城</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#exchange_orders" id="J_exchange_orders">礼券商城兑换订单</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#user_feedback" id="J_user_feedback">用户反馈</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#manage_pk" id="J_pk_list">PK市场</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#manage_pk" id="J_pk_rank">PK排行榜</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#recommend_users" id="J_recommend_users">优质用户</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#forum" id="J_forum">追吧</a>
            </li>
			<li>
				<a class="menu1_title a_cur" id="J_app_recommend">应用推荐管理</a>
            </li>
			<li>
				<a class="menu1_title" href="main.php#version_switch" id="J_version_switch">应用推荐版本开关</a>
            </li>
			<li>
				<a href="app_view_count.php" target="_blank" id="J_version_switch">应用推荐浏览量</a>
            </li>
			<!--<li>
				<a class="menu1_title" href="main.php#essence_sort" id="J_essence_sort">追吧</a>
            </li>
			-->
            <li>
            	<a href="/pickupadmin/libs/controller/logout.php">登出</a>
            </li>
        </ul>
    </div>
	<div class="main_wrap">
	<div class="inner_main_wrap">
        <a href="javascript:;" class="btn btn_white btn_add_banner" id="J_add_app">新增</a>
        <ul class="common_list app_list" id="J_app_list">
        	<li class="title">
				<span class="seq_num">序号</span>
                <span class="name">应用名称</span>
                <span class="click_num">点击量</span>
                <span class="sort">排序</span>
                <span class="operation">操作</span>
            </li>
<!--			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>
			<li class="content">
				<span class="seq_num">12345</span>
                <span class="name">手机助手</span>
                <span class="click_num">1234512345</span>
                <span class="sort">
					<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>
					<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>
				</span>
                <span class="operation">
					<a href="javascript:;" class="detail">编辑</a>
					<a href="javascript:;" class="change">下架</a>
					<a href="javascript:;" class="delete">删除</a>
				</span>
            </li>-->
        </ul>
		<div class="page_wrap">
<!--			<a href="javascript:;" class="cur">1</a>
			<a href="javascript:;">2</a>
			<a href="javascript:;">3</a>
			<a href="javascript:;">4</a>
			<a href="javascript:;">5</a>
			<a href="javascript:;">6</a>
			<a href="javascript:;">100</a>-->
		</div>
    </div>
</div>
</body>
<script type="text/javascript" src="static/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="static/js/core.js"></script>
<script type="text/javascript" src="static/js/core2.js"></script>
<script type="text/javascript">
	var cur_action = 0;
	$('#J_billboard_wrap').click(function(){
		if(cur_action == 0){
			$(this).addClass('a_cur');
			$(this).next().stop().slideDown('fast');
			$('#J_app_recommend').removeClass('a_cur');
			cur_action = 1;
		}else{
			$(this).removeClass('a_cur');
			$(this).next().stop().slideUp('fast');
			cur_action = -1;
		}
	});
	
	$('#J_app_recommend').click(function(){
		if(cur_action == -1){
			$(this).addClass('a_cur');
		}
	});
</script>
<script type="text/javascript">
function reset_new_flag(){
	new_flag.name = false;
	new_flag.intro = false;
	new_flag.link = false;
	new_flag.file = false;
	new_flag.file_type = false;
	new_flag.btn = false;
}
function reset_edit_flag(){
	edit_flag.name = true;
	edit_flag.intro = true;
	edit_flag.link = true;
	edit_flag.file = false;
	edit_flag.file_type = false;
	edit_flag.btn = true;
}
var new_flag = {
	name : false,
	intro : false,
	link : false,
	file : false,
	file_type : false,
	btn : false,
	check_name : function(){
		var self = this;
		var name = $.trim($('#new_app_name').val());
		if(name != ''){
			self.name = true;
		}else{
			self.name = false;
		}
	},
	check_intro : function(){
		var self = this;
		var intro = $.trim($('#J_new_app_intro').val());
		$('#J_new_app_intro_num').text(intro.length);
		if( intro!='' && intro.length <= 29 ){
			$('#J_new_app_intro_num').removeClass('new_app_num_box_err');
			self.intro = true;
		}else{
			if( intro !='' ){
				$('#J_new_app_intro_num').addClass('new_app_num_box_err');
			}
			self.intro = false;
		}
	},
	check_link : function(){
		var self = this;
		var link = $.trim($('#new_app_link').val());
		if(link != ''){
			self.link = true;
		}else{
			self.link = false;
		}
	},
	check_file : function(){
		var self = this;
		var file = $('#J_real_file').val();
		if( file!='' && self.file_type ){
			self.file = true;
		}else{
			self.file = false;
		}
	},
	check_btn : function(){
		var self = this;
		self.check_name();
		self.check_intro();
		self.check_link();
		self.check_file();
		
		if(self.name && self.intro && self.link && self.file){
			$('#J_save_app').removeClass('btn_blue_disabled');
			self.btn = true;
		}else{
			$('#J_save_app').addClass('btn_blue_disabled');
			self.btn = false;
		}
	}
};
var edit_flag = {
	name : true,
	intro : true,
	link : true,
	file : false,
	file_type : false,
	btn : true,
	check_name : function(){
		var self = this;
		var name = $.trim($('#edit_app_name').val());
		if(name != ''){
			self.name = true;
		}else{
			self.name = false;
		}
	},
	check_intro : function(){
		var self = this;
		var intro = $.trim($('#J_edit_app_intro').val());
		$('#J_edit_app_intro_num').text(intro.length);
		if( intro!='' && intro.length <= 29 ){
			$('#J_edit_app_intro_num').removeClass('edit_app_num_box_err');
			self.intro = true;
		}else{
			if( intro !='' ){
				$('#J_edit_app_intro_num').addClass('edit_app_num_box_err');
			}
			self.intro = false;
		}
	},
	check_link : function(){
		var self = this;
		var link = $.trim($('#edit_app_link').val());
		if(link != ''){
			self.link = true;
		}else{
			self.link = false;
		}
	},
	check_file : function(){
		var self = this;
		var file = $('#J_real_file2').val();
		if( file!='' && self.file_type ){
			self.file = true;
		}else{
			self.file = false;
		}
	},
	check_btn : function(){
		var self = this;
		self.check_name();
		self.check_intro();
		self.check_link();
		self.check_file();
		
		if(self.name && self.intro && self.link){
			$('#J_save_edit_app').removeClass('btn_blue_disabled');
			self.btn = true;
		}else{
			$('#J_save_edit_app').addClass('btn_blue_disabled');
			self.btn = false;
		}
	}
};
$('#J_add_app').click(function(){
	reset_new_flag();
	$('body').append(tpl.new_app_wrap);
});
$('#new_app_name').die().live({
	'blur':function(){
		new_flag.check_btn();
	},
	'keyup': function(){
		new_flag.check_btn();
	}
});
$('#new_app_link').die().live({
	'blur':function(){
		new_flag.check_btn();
	},
	'keyup': function(){
		new_flag.check_btn();
	}
});
$('#J_new_app_intro').die().live({
	'blur':function(){
		new_flag.check_btn();
	},
	'keyup': function(){
		new_flag.check_btn();
	}
});
$('#J_add_area').die().live('hover',
	function(){
		$('#J_add_logo').addClass('btn_white_cur');
	},
	function(){
		$('#J_add_logo').removeClass('btn_white_cur');
	}
);
$('#edit_app_name').die().live({
	'blur':function(){
		edit_flag.check_btn();
	},
	'keyup': function(){
		edit_flag.check_btn();
	}
});
$('#edit_app_link').die().live({
	'blur':function(){
		edit_flag.check_btn();
	},
	'keyup': function(){
		edit_flag.check_btn();
	}
});
$('#J_edit_app_intro').die().live({
	'blur':function(){
		edit_flag.check_btn();
	},
	'keyup': function(){
		edit_flag.check_btn();
	}
});
$('#J_add_area2').die().live('click',function(){
	$('#J_real_file2').click();
});
$('#J_add_area2').die().live('hover',
	function(){
		$('#J_add_logo2').addClass('btn_white_cur');
	},
	function(){
		$('#J_add_logo2').removeClass('btn_white_cur');
	}
);
$('#J_add_area').die().live('click',function(){
	$('#J_real_file').click();
});
var img_index,img_index2;
function fileInfo(source){	
	var ireg = /image\/.*/i;
	var file = source.files[0];
	var name = file.name;
	var size = file.size;
	var type = file.type;
		
	if(!type.match(ireg)) {
		new_flag.file_type = false;
		$('#J_file_name').text('不是图片，请重新选择');
	}else{
		new_flag.file_type = true;
		img_index = file;
		if(window.FileReader) {
			var fr = new FileReader(); 
			fr.onload = (function(f) {
				return function(e){
					$('#J_file_name').text(name);
					// $('#J_file_name').html('<span>'+name+'</span><div class="upload_result"></div>');
				};
			})(file);
			fr.readAsDataURL(file);
		} 
	}
	new_flag.check_btn();
};
function fileInfo2(source){	
	var ireg = /image\/.*/i;
	var file = source.files[0];
	var name = file.name;
	var size = file.size;
	var type = file.type;
		
	if(!type.match(ireg)) {
		edit_flag.file_type = false;
		$('#J_file_name2').text('不是图片，请重新选择');
	}else{
		edit_flag.file_type = true;
		img_index2 = file;
		if(window.FileReader) {
			var fr = new FileReader(); 
			fr.onload = (function(f) {
				return function(e){
					$('#J_file_name2').text(name);
					// $('#J_file_name').html('<span>'+name+'</span><div class="upload_result"></div>');
				};
			})(file);
			fr.readAsDataURL(file);
		} 
	}
	edit_flag.check_btn();
};

var app = {
	list_pos : 0,
	list_limit : 20,
	list_page : 1,
	list_page_max : 1,
	list_app : function(page_num){
		$('#J_app_list .content').remove();
		$('.page_wrap a').remove();
		showLoading();
		
		var self = this;
		var new_pos = self.list_limit * (page_num - 1);
		
		$.ajax({
			type: "POST",
			url: 'libs/controller/list_app.php',
			data:'pos='+new_pos+'&limit='+self.list_limit,
			dataType:"JSON",
			success: function(data){
				hideLoading();
				if(data.code == 1 || data.code == '1'){
					self.list_page = page_num;
					self.list_pos = new_pos;
					
					var list_total = data.data.total;
					var list_total_on = data.data.total_on;
					var page_max = Math.ceil(list_total/self.list_limit);
					
					var list_num = new_pos;
					var list_id, list_app_name, list_click_num, list_status_code, list_change;
					var action,link_url;
					
					var app_list = data.data.list;
					
					for(app_list_i in app_list){
						list_num++;
						list_id = app_list[app_list_i].id;
						list_app_name = app_list[app_list_i].app_name;
						list_click_num = app_list[app_list_i].click_num;
						list_status_code = app_list[app_list_i].status;
							
						if(list_num == 1){
							if(list_total_on < 2){
								action = '';
							}else{
								action = '<a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>';
							}
						}else if(list_num == list_total_on){
							action = '<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a>';
						}else if(list_num < list_total_on){
							action = '<a href="javascript:;" class="pos_up">向上<i class="icon_up_down icon_up"></i></a><a href="javascript:;" class="pos_down">向下<i class="icon_up_down icon_down"></i></a>';
						}else{
							action = '';
						}
						
						if(list_status_code == 1){
							list_change = '下架';
						}else{
							list_change = '上架';
						}
						
						link_url = 'app_download_count.php?id='+list_id+'&name='+encodeURIComponent(list_app_name);//todo
						
						$('#J_app_list').append(tpl.app_li.replace('{app_id}',list_id).replace('{seq_num}',list_num).replace('{app_name}',list_app_name).replace('{click_time}',list_click_num).replace('{status}',list_status_code).replace('{change}',list_change).replace('{action}',action).replace('{click_link}',link_url));
					}
					
					self.list_page_max = page_max;
					
					for(var page_i = 1; page_i<= page_max; page_i++){
						$('.page_wrap').append(tpl.page_li.replace('{page_num1}',page_i).replace('{page_num2}',page_i));
					}	
					$('.page_wrap a').eq(page_num-1).addClass('cur');
				}else{
					showAlert('获取应用推荐列表失败，请重试！');
					setTimeout(hideAlert, 1000);
				}
			},
			error:function(){
				showAlert('获取应用推荐列表失败，请重试！');
				setTimeout(hideAlert, 1000);
			}
		});
	},
	new_app : function(fileid){
		var self = this;
		
		var app_name = $('#new_app_name').val();
		var intro = $('#J_new_app_intro').val();
		var link = $('#new_app_link').val();
		
		$.ajax({
			type: "POST",
			url: 'libs/controller/new_app.php',
			data:'app_name='+encodeURIComponent(app_name)+'&fileid='+encodeURIComponent(fileid)+'&intro='+encodeURIComponent(intro)+'&link='+encodeURIComponent(link),
			dataType:"JSON",
			success: function(data){
				hideLoading();
				if(data.code == 1){
					$('#J_new_app_wrap').remove();
					self.list_app(1);
					showAlert('新建应用推荐成功！');
					setTimeout(hideAlert, 1000);
				}else{
					showAlert('新建应用推荐失败！');
					setTimeout(hideAlert, 1000);
				}
			},
			error:function(){
				hideLoading();
				showAlert('新建应用推荐失败！');
				setTimeout(hideAlert, 1000);
			}
		});
	},
	edit_app : function(save_result){
		var self = this;
		
		var id = $('#J_edit_app_wrap').attr('data-id');
		var app_name = $('#edit_app_name').val();
		var intro = $('#J_edit_app_intro').val();
		var link = $('#edit_app_link').val();
		
		$.ajax({
			type: "POST",
			url: 'libs/controller/update_app.php',
			data:'id='+id+'&app_name='+encodeURIComponent(app_name)+'&intro='+encodeURIComponent(intro)+'&link='+encodeURIComponent(link),
			dataType:"JSON",
			success: function(data){
				hideLoading();
				var alert_text;
				if(save_result == -1){
					if(data.code == 1){
						$('#J_edit_app_wrap').remove();
						self.list_app(self.list_page);
						alert_text = '应用推荐信息更新成功！';
					}else{
						alert_text = '应用推荐信息更新失败！';
					}
				}else{
					if(data.code == 1){
						if(save_result == 1){
							$('#J_edit_app_wrap').remove();
							self.list_app(self.list_page);
							alert_text = 'logo图片和其它信息都更新成功！';
						}else{
							alert_text = 'logo图片更新失败，其它信息更新成功！';
						}
					}else{
						if(save_result == 1){
							alert_text = 'logo图片更新成功，其它信息更新失败！';
						}else{
							alert_text = 'logo图片和其它信息都更新失败！';
						}
					}
				}
				showAlert(alert_text);
				setTimeout(hideAlert, 1000);
			},
			error:function(){
				hideLoading();
				var alert_text;
				if(save_result == -1){
					alert_text = '应用推荐信息更新失败！';
				}else{
					if(save_result == 1){
						alert_text = 'logo图片更新成功，其它信息更新失败！';
					}else{
						alert_text = 'logo图片和其它信息都更新失败！';
					}
				}
				showAlert(alert_text);
				setTimeout(hideAlert, 1000);
			}
		});
	}
}

function upload_img(type,appid){
	//1.创建XMLHTTPRequest对象
	if(type == 'new'){
		var singleImg = img_index;
	}else{
		var singleImg = img_index2;
	}
	var xmlhttp;
	if (window.XMLHttpRequest) {
		//IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest;
		
		//针对某些特定版本的mozillar浏览器的bug进行修正
		if (xmlhttp.overrideMimeType) {
			xmlhttp.overrideMimeType('text/xml');
		};
	} else if (window.ActiveXObject){
		//IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	};
	
	if(xmlhttp.upload){
		//进度条
		/*xmlhttp.upload.addEventListener("progress",
		function(e) {
			if (e.lengthComputable) {
				var load_percent = (e.loaded / e.total) * 100;
				$('#J_photo_wrap ul li').eq(j).find('.loading').css('width',load_percent+'%');
			}
		},
		false);*/

		//2.回调函数
		//onreadystatechange是每次 readyState 属性改变的时候调用的事件句柄函数
		xmlhttp.onreadystatechange = function(e){
			if(xmlhttp.readyState==4){
				hideLoading();
				if(xmlhttp.status==200){
					var json = eval('(' + xmlhttp.responseText + ')');
					if(type == 'new'){
						if(json.code == 1){
							var new_fileid = json.data.fileid;
							app.new_app(new_fileid);
						}else{
							hideLoading();
							showAlert('新建应用推荐失败！');
							setTimeout(hideAlert, 1000);
						}
					}else{
						app.edit_app(json.code);
					}					
				}else{
					if(type == 'new'){
						hideLoading();
						showAlert('新建应用推荐失败！');
						setTimeout(hideAlert, 1000);
					}else{
						app.edit_app(0);
					}	
				}
			}
		};
		
		//3.设置连接信息
		//初始化HTTP请求参数，但是并不发送请求。
		//第一个参数连接方式，第二是url地址,第三个true是异步连接，默认是异步
		//使用post方式发送数据
		
		if(type == 'new'){
			var post_url = 'libs/controller/upload_img.php';
		}else{
			var post_url = 'libs/controller/update_img.php';
		}
		
		xmlhttp.open("POST",post_url,true);
		
		//4.发送数据，开始和服务器进行交互
		//发送 HTTP 请求，使用传递给 open() 方法的参数，以及传递给该方法的可选请求中如果true, send这句话会立即执行
		//如果是false（同步），send会在服务器数据回来才执行
		//get方法在send中不需要内容
		var formdata = new FormData();
		if(type == 'new'){
			formdata.append("FileData", singleImg);
		}else{
			formdata.append("FileData", singleImg);
			formdata.append("id",appid);
		}
		xmlhttp.send(formdata);
	}
};

$('#J_app_list .detail').die().live('click',function(){
	var app_id = $(this).parents('li').attr('data-id');
	showLoading();
	$.ajax({
		type: "POST",
		url: 'libs/controller/detail_app.php',
		data:'id='+app_id,
		dataType:"JSON",
		success: function(data){
			hideLoading();
			if(data.code == 1){
				var detail_id = data.data[0].id;
				var detail_name = data.data[0].app_name;
				var detail_fileid = data.data[0].file_id;
				var detail_intro = data.data[0].intro;
				var detail_link = data.data[0].link;
				
				var detail_img_src = '/pickupadmin/libs/controller/download_app_img.php?fileid='+detail_fileid;
				
				$('body').append(tpl.edit_app_wrap.replace('{img_src}',detail_img_src));
				$('#J_edit_app_wrap').attr('data-id',detail_id);
				$('#edit_app_name').val(detail_name);
				// $('#edit_app_img').attr('src',detail_img_src);
				$('#J_edit_app_intro').val(detail_intro);
				$('#J_edit_app_intro_num').text(detail_intro.length);
				$('#edit_app_link').val(detail_link);
			}else{
				showAlert('获取应用推荐详细信息失败！');
				setTimeout(hideAlert, 1000);
			}
		},
		error:function(){
			hideLoading();
			showAlert('获取应用推荐详细信息失败！');
			setTimeout(hideAlert, 1000);
		}
	});
});

$('#J_app_list .pos_up').die().live('click',function(){
	var app_id = $(this).parents('li').attr('data-id');
	showLoading();
	$.ajax({
		type: "POST",
		url: 'libs/controller/update_app_sort.php',
		data:'id='+app_id+'&direction=up',
		dataType:"JSON",
		success: function(data){
			hideLoading();
			if(data.code == 1){
				app.list_app(app.list_page);
				alert_text = '修改应用推荐排序成功！';
			}else{
				alert_text = '修改应用推荐排序失败！';
			}
			showAlert(alert_text);
			setTimeout(hideAlert, 1000);
		},
		error:function(){
			hideLoading();
			showAlert('修改应用推荐排序失败！');
			setTimeout(hideAlert, 1000);
		}
	});
});

$('#J_app_list .pos_down').die().live('click',function(){
	var app_id = $(this).parents('li').attr('data-id');
	showLoading();
	$.ajax({
		type: "POST",
		url: 'libs/controller/update_app_sort.php',
		data:'id='+app_id+'&direction=down',
		dataType:"JSON",
		success: function(data){
			hideLoading();
			if(data.code == 1){
				app.list_app(app.list_page);
				alert_text = '修改应用推荐排序成功！';
			}else{
				alert_text = '修改应用推荐排序失败！';
			}
			showAlert(alert_text);
			setTimeout(hideAlert, 1000);
		},
		error:function(){
			hideLoading();
			showAlert('修改应用推荐排序失败！');
			setTimeout(hideAlert, 1000);
		}
	});
});

$('#J_app_list .change').die().live('click',function(){
	var app_id = $(this).parents('li').attr('data-id');
	var this_change_btn = $(this);
	var status_now = $(this).attr('data');
	var status_new;
	if(status_now == 1 || status_now == '1'){
		status_new = 0;
	}else{
		status_new = 1;
	}
	showLoading();
	$.ajax({
		type: "POST",
		url: 'libs/controller/change_app_status.php',
		data:'id='+app_id+'&status='+status_new,
		dataType:"JSON",
		success: function(data){
			hideLoading();
			if(data.code == 1){
				this_change_btn.attr('data',status_new);
				if(status_new == 1){
					this_change_btn.text('下架');
				}else{
					this_change_btn.text('上架');
				}
				app.list_app(app.list_page);
			}else{
				showAlert('修改应用推荐状态失败！');
				setTimeout(hideAlert, 1000);
			}
		},
		error:function(){
			hideLoading();
			showAlert('修改应用推荐状态失败！');
			setTimeout(hideAlert, 1000);
		}
	});
});

$('#J_app_list .delete').die().live('click',function(){
	var app_id = $(this).parents('li').attr('data-id');
	var this_li = $(this).parents('li');
	showLoading();
	$.ajax({
		type: "POST",
		url: 'libs/controller/delete_app.php',
		data:'id='+app_id,
		dataType:"JSON",
		success: function(data){
			hideLoading();
			if(data.code == 1){
				this_li.slideUp(1000);
			}else{
				showAlert('删除应用推荐状态失败！');
				setTimeout(hideAlert, 1000);
			}
		},
		error:function(){
			hideLoading();
			showAlert('删除应用推荐状态失败！');
			setTimeout(hideAlert, 1000);
		}
	});
});

$('#J_save_app').die().live('click',function(){
	if(new_flag.btn){
		showLoading();
		upload_img('new','');
	}
});

$('#J_save_edit_app').die().live('click',function(){
	if(edit_flag.btn){
		showLoading();
		if(edit_flag.file){
			var app_id = $('#J_edit_app_wrap').attr('data-id');
			upload_img('edit',app_id);
		}else{
			app.edit_app(-1);
		}
	}
});
$('.page_wrap a').die().live('click',function(){
	var new_page = $(this).attr('data');
	if(new_page != app.list_page){
		app.list_app(new_page);
	}
});
$(document).ready(function(){
	app.list_app(1);
});
</script>
</html>