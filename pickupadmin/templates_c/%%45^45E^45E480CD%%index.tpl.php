<?php /* Smarty version 2.6.28, created on 2014-07-08 15:56:33
         compiled from index.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	<div class="login_wrap">
    	<h1>登录</h1>
        <div class="input_wrap input_alert">
        	<label for="login_username">用户名</label>
            <input id="login_username" value="" type="text"  autocomplete="off" />
        </div>
        <div class="input_wrap">
        	<label for="login_password">密码</label>
            <input id="login_password" value="" type="password"  autocomplete="off" />
        </div>
		<!-- btn_disable -->
        <a class="btn login_btn btn_disable" href="javascript:;" id="login_submit">登录</a>
    </div>
<script type="text/javascript" src="static/js/login.js"></script>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>