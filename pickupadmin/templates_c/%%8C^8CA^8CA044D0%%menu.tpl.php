<?php /* Smarty version 2.6.28, created on 2014-11-03 10:34:36
         compiled from menu.tpl */ ?>
	<div class="menu_wrap">
    	<ul class="menu1" id="J_menu1">
        	<li>
            	<a class="menu1_li" href="javascript:;">榜单</a>
                <ul class="menu2 hide">
                	<li><a href="javascript:;" id="J_list_detail">榜单列表</a></li>
					<li><a href="javascript:;" id="J_adver_set">广告位设置</a></li>
                    <li><a href="javascript:;" id="J_list_sort">榜单排名</a></li>
                </ul>
            </li>
			<li>
            	<a class="menu1_title" href="javascript:;" id="J_search_user">搜索用户</a>
            </li>
            <li>
				<a class="menu1_title" href="javascript:;" id="J_complain">举报照片审核</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_send_message">推送消息</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_notice_menu">通知管理</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_gift_menu">礼物管理</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_exchange_items">礼券商城</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_exchange_orders">礼券商城兑换订单</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_user_feedback">用户反馈</a>
            </li>
			<!--
			<li>
				<a class="menu1_title" href="javascript:;" id="J_pk_menu">PK管理</a>
            </li>
			-->
			<li>
				<a class="menu1_title" href="javascript:;" id="J_pk_list">PK市场</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_pk_rank">PK排行榜</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_recommend_users">优质用户</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_forum">追吧</a>
            </li>
			<li>
				<a class="menu1_title" href="list_app.php" id="J_app_recommend">应用推荐管理</a>
            </li>
			<li>
				<a class="menu1_title" href="javascript:;" id="J_version_switch">应用推荐版本开关</a>
            </li>
            <li>
            	<a href="/pickupadmin/libs/controller/logout.php">登出</a>
            </li>
        </ul>
    </div>
	<script type="text/javascript">
		var menu_flag = 0;
		var sub_menu_flag = 0;
		$("#J_menu1 .menu1_li").click(function(){
			switch(menu_flag){
				case 0:
					$(this).addClass('a_cur');
					$(this).next().stop().slideDown('fast');
					break;
				case 1:
					if($(this).next().is(':visible')){
						$(this).removeClass('a_cur');
						$(this).next().stop().slideUp('fast');
					}else{
						$(this).addClass('a_cur');
						$(this).next().stop().slideDown('fast');
					}
					if(sub_menu_flag!=0){
						$('.menu2 a').eq(sub_menu_flag-1).removeClass('a_cur');
						sub_menu_flag = 0;
					}
					break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
					$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
					$(this).next().stop().slideDown('fast');
					$(this).addClass('a_cur');
					break;
			}
			window.location.href=window.location.href.split('#')[0]+'#billboard';
			menu_flag = 1;
		});
		$('#J_menu1 .menu1_title').click(function(){
			switch(menu_flag){
				case 0:
					$(this).addClass('a_cur');
					break;
				case 1:
					$(this).addClass('a_cur');
					$("#J_menu1 .menu1_li").removeClass('a_cur');
					$("#J_menu1 .menu1_li").next().stop().slideUp('fast');
					if(sub_menu_flag!=0){
						$('.menu2 a').eq(sub_menu_flag-1).removeClass('a_cur');
						sub_menu_flag = 0;
					}
					break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
					$(this).addClass('a_cur');
					break;
			}
		});
		$('#J_list_detail').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#billboard_list';
			$("#J_menu1 .menu2 a").eq(sub_menu_flag-1).removeClass('a_cur');
			$(this).addClass('a_cur');
			sub_menu_flag = 1;
			$('#J_iframe').attr('src','view/list_detail.html');
		});
		$('#J_adver_set').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#adver_set';
			if(sub_menu_flag!=2){
				$("#J_menu1 .menu2 a").eq(sub_menu_flag-1).removeClass('a_cur');
				$(this).addClass('a_cur');
				sub_menu_flag = 2;
				$('#J_iframe').attr('src','view/adver_set.html');
			}
		});
		$('#J_list_sort').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#billboard_rank';
			$("#J_menu1 .menu2 a").eq(sub_menu_flag-1).removeClass('a_cur');
			$(this).addClass('a_cur');
			sub_menu_flag = 3;
			$('#J_iframe').attr('src','view/list_sort.html');
		});
		$('#J_search_user').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#user_search';
			if(menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			menu_flag = 2;
			$('#J_iframe').attr('src','view/user_search.html');
		});
		$('#J_complain').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#photo_check';
			if(menu_flag==2||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 3){
				$('#J_iframe').attr('src','view/photo_check.html');
			}
			menu_flag = 3;
		});
		$('#J_send_message').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#send_message';
			if(menu_flag==2||menu_flag==3||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 4){
				$('#J_iframe').attr('src','view/send_message.html');
			}
			menu_flag = 4;
		});
		$('#J_notice_menu').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#manage_notice';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 5){
				$('#J_iframe').attr('src','view/notice_management.html');
			}
			menu_flag = 5;
		});
		$('#J_gift_menu').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#manage_gift';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 6){
				$('#J_iframe').attr('src','view/gift_management.html');
			}
			menu_flag = 6;
		});
		$('#J_exchange_items').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#exchange_items';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 7){
				$('#J_iframe').attr('src','view/exchange_items.html');
			}
			menu_flag = 7;
		});
		$('#J_exchange_orders').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#exchange_orders';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 8){
				$('#J_iframe').attr('src','view/exchange_orders.html');
			}
			menu_flag = 8;
		});
		$('#J_user_feedback').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#user_feedback';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 9){
				$('#J_iframe').attr('src','view/user_feedback.html');
			}
			menu_flag = 9;
		});
		/*
		$('#J_pk_menu').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#manage_pk';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==11||menu_flag==12){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 10){
				$('#J_iframe').attr('src','view/pk_management.html');
			}
			menu_flag = 10;
		});
		*/
		$('#J_pk_list').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#manage_pk';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 10){
				$('#J_iframe').attr('src','view/pk_list_management.html');
			}
			menu_flag = 10;
		});
		$('#J_pk_rank').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#manage_pk';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==12||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 11){
				$('#J_iframe').attr('src','view/pk_rank_management.html');
			}
			menu_flag = 11;
		});
		$('#J_recommend_users').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#recommend_users';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==13||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 12){
				$('#J_iframe').attr('src','view/recommend_users.html');
			}
			menu_flag = 12;
		});
		$('#J_forum').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#forum';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==14||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 13){
				$('#J_iframe').attr('src','view/forum.html');
			}
			menu_flag = 13;
		});
		
		/*$('#J_app_recommend').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#app_recommend';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==15){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 14){
				$('#J_iframe').attr('src','view/list_app.html');
			}
			menu_flag = 14;
		});*/
		
		$('#J_version_switch').click(function(){
			window.location.href=window.location.href.split('#')[0]+'#version_switch';
			if(menu_flag==2||menu_flag==3||menu_flag==4||menu_flag==5||menu_flag==6||menu_flag==7||menu_flag==8||menu_flag==9||menu_flag==10||menu_flag==11||menu_flag==12||menu_flag==13||menu_flag==14){
				$("#J_menu1 .menu1_title").eq(menu_flag-2).removeClass('a_cur');
			}
			if(menu_flag != 15){
				$('#J_iframe').attr('src','view/version_switch.html');
			}
			menu_flag = 15;
		});
		
		/*var menu_old, menu_cur;
		var sub_menu_old, sub_menu_cur;
		$('#J_menu1 .menu1_title').click(function(){
			menu_cur=$(this);
			menu_cur.addClass('a_cur');
			if(typeof(menu_old)=='undefined'||menu_old==''){
				menu_old=menu_cur;
			}else{
				if(menu_old.next('ul').length>0){
					menu_old.next().stop().slideUp('fast');
					if(typeof(sub_menu_old)!='undefined'&&sub_menu_old!=''){
						sub_menu_old.removeClass('a_cur');
						sub_menu_old='';
					}
				}
				menu_old.removeClass('a_cur');
				menu_old=menu_cur;
			}
		});
		$("#J_menu1 .menu1_li").click(function(){
			menu_cur=$(this);
			if(typeof(menu_old)=='undefined'||menu_old==''){
				menu_cur.next().stop().slideDown('fast');
				menu_cur.addClass('a_cur');
				menu_old=menu_cur;
			}else if(menu_old.next('ul').length==0){
				menu_cur.next().stop().slideDown('fast');
				menu_cur.addClass('a_cur');
				menu_old.removeClass('a_cur');
				menu_old=menu_cur;
			}else if(menu_cur.next().is(':visible')){
				menu_cur.next().stop().slideUp('fast');
				menu_cur.removeClass('a_cur');
				menu_old='';
				if(typeof(sub_menu_old)!='undefined'&&sub_menu_old!=''){
					sub_menu_old.removeClass('a_cur');
					sub_menu_old='';
				}
			}
		});
		$("#J_menu1 .menu2 a").click(function(){
			sub_menu_cur=$(this);
			if(typeof(sub_menu_old)=='undefined'||sub_menu_old==''){
				sub_menu_cur.addClass('a_cur');
				sub_menu_old=sub_menu_cur;
			}else{
				sub_menu_old.removeClass('a_cur');
				sub_menu_cur.addClass('a_cur');
				sub_menu_old=sub_menu_cur;
			}
		});
		$('#J_search_user').click(function(){
			$('#J_iframe').attr('src','view/user_search.html');
		});*/
	</script>