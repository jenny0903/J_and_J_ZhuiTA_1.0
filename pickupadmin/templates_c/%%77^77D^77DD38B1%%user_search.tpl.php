<?php /* Smarty version 2.6.28, created on 2013-12-03 15:10:51
         compiled from user_search.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "menu.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	<div class="main_wrap user_search">
    	<div class="search_box">
        	<label for="search_input">用户昵称：</label>
            <input type="text" id="search_input" name="search_input" val=""/>
            <a href="javascript:;" class="btn search_btn btn_disable" id="J_user_search">搜索用户</a>
        </div>
        <div class="search_result">
        	<p class="title" id="search_count">搜索到 0 个结果：</p>
            <ul id="result_box">
            	<li class="title">
                	<div class="result_no">No</div>
                    <div class="result_name">昵称</div>
                    <div class="result_gender">性别</div>
                    <div class="result_age">年龄</div>
                    <div class="result_city">地区</div>
                    <div class="result_like">喜欢</div>
                </li>
            </ul>
        </div>
	</div>
<script type="text/javascript" src="static/js/user_search.js"></script>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>