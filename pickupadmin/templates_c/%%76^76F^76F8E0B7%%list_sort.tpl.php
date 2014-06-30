<?php /* Smarty version 2.6.28, created on 2013-12-03 15:04:45
         compiled from list_sort.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "menu.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	<div class="main_wrap list_sort">
    	<form>
        	<div class="sort_num_wrap">
                <label for="sort_num">查看榜单：</label>
                <select name="sort_num" class="sort_num" id="J_sort_num" onchange="sort_num_change()">
                </select>
            </div>
            <ul class="sort_type" id="J_sort_type">
            	<li><a value="1" class="a_cur" href="javascript:;">倾城榜</a></li>
                <li><a value="2" href="javascript:;">才俊榜</a></li>
                <li><a value="3" href="javascript:;">财富榜</a></li>
            </ul>
        </form>
        <div class="sort_list_wrap">
            <ul id="J_sort_content">
			</ul>
        </div>
        <div class="pageControlWrap hide">
        	<ul>
                <li><a href="javascript:;" id="page_prev" value="">&lt;&lt;上一页</a></li>
                <div id="page_show_wrap">
                    <li><a href="javascript:;" id="page_prev2" value="">1</a></li>
                    <li><a href="javascript:;" id="page_prev1" value="">2</a></li>
                    <li><a href="javascript:;" class="page_cur" id="page_now" value="">3</a></li>
                    <li><a href="javascript:;" id="page_next1" value="">4</a></li>
                    <li><a href="javascript:;" id="page_next2" value="">5</a></li>
                </div>
                <li><a href="javascript:;" id="page_next" value="">下一页&gt;&gt;</a></li>
                <li class="page_skip_wrap">跳转到第<input type="text" name="page_skip" id="page_skip" class="page_in_box"/>页</li>
            </ul>
        </div>
	</div>
<script type="text/javascript" src="static/js/list_sort.js"></script>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>