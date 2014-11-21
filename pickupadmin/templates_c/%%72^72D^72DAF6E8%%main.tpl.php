<?php /* Smarty version 2.6.28, created on 2014-11-21 16:22:42
         compiled from main.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "menu.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	<div class="main_wrap">
    	<iframe id="J_iframe" scrolling="no" frameborder="0" src="view/welcome.html">
		</iframe>
    </div>
<script type="text/javascript">
	$("#J_iframe").load(function(){
		var location = window.location.href.split('#')[1];
		if(location == 'app_recommend' || location == 'version_switch'){
			var mainheight = 1040;
		}else{
			var mainheight = $(this).contents().find(".inner_main_wrap").height()+6;
		}
		$(this).height(mainheight);
		if($("#J_alert_wrap").is(':visible')){
			setTimeout(hideAlert, 1000);
		}
	}); 
	function hideAlert(){
		$("#J_alert_wrap").hide();
	};
	$(document).ready(function(){
		var location = window.location.href.split('#')[1];
		switch(location){
			case 'billboard':
				$("#J_menu1 .menu1_li").click();
				break;
			case 'billboard_list':
				$("#J_menu1 .menu1_li").click();
				$('#J_list_detail').click();
				break;
			case 'adver_set':
				$("#J_menu1 .menu1_li").click();
				$('#J_adver_set').click();
				break;
			case 'billboard_rank':
				$("#J_menu1 .menu1_li").click();
				$('#J_list_sort').click();
				break;
			case 'user_search':
				$('#J_search_user').click();
				break;
			case 'photo_check':
				$('#J_complain').click();
				break;
			case 'send_message':
				$('#J_send_message').click();
				break;
			case 'manage_notice':
				$('#J_notice_menu').click();
				break;
			case 'manage_gift':
				$('#J_gift_menu').click();
				break;	
			case 'exchange_items':
				$('#J_exchange_items').click();
				break;
			case 'exchange_orders':
				$('#J_exchange_orders').click();
				break;
			case 'user_feedback':
				$('#J_user_feedback').click();
				break;
			/*
			case 'manage_pk':
				$('#J_pk_menu').click();
				break;
			*/
			case 'manage_pk_list':
				$('#J_pk_list').click();
				break;	
			case 'manage_pk_rank':
				$('#J_pk_rank').click();
				break;	
			case 'recommend_users':
				$('#J_recommend_users').click();
				break;
			case 'forum':
				$('#J_forum').click();
				break;
			case 'app_recommend':
				$('#J_app_recommend').click();
				break;
			case 'version_switch':
				$('#J_version_switch').click();
				break;
			case 'essence_sort':
				$('#J_essence_sort').click();
				break;
		}
	});
</script>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>