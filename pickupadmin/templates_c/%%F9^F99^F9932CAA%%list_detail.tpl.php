<?php /* Smarty version 2.6.28, created on 2013-12-03 14:55:12
         compiled from list_detail.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "menu.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	<div class="main_wrap">
    	<a class="btn add_list_btn" href="list_set.php?type=0">新增榜单</a>
    	<div class="list_detail_wrap">
        	<ul id="J_list_detail">
            	<li class="list_title">
                	<div class="list_id">ID</div>
                    <div class="list_no">期数</div>
                    <div class="list_name">名称</div>
                    <div class="start_time">开始时间</div>
                    <div class="end_time">结束时间</div>
                    <div class="status">状态</div>
                   	<div class="operate">操作</div>
                </li>
            </ul>
        </div>
    </div>
<script type="text/javascript" src="static/js/list_detail.js"></script>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>