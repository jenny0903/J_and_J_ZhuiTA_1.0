<?php /* Smarty version 2.6.28, created on 2013-12-05 10:24:35
         compiled from list_set.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "menu.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	<div class="main_wrap list_modify">
    	<div class="mod_info_box mod_info_basic">
        	<ul>
            	<li class="new_hide">
                	<span class="mod_info_title">榜单ID：</span>
                    <span class="mod_info_id"> </span>
                </li>
                <li>
                	<label for="mod_info_name">榜单名称：</label>
                    <input type="text" id="mod_info_name" value="" autocomplete="off" name="mod_info_name"/>
                </li>
				<li class="new_hide">
                	<span class="mod_info_title">状态：</span>
                    <span class="mod_info_state"> </span>
                </li>
                <li>
                	<label for="mod_info_num">期数：</label>
                    <input type="text" id="mod_info_num" class="mod_hide" value="" autocomplete="off" name="mod_info_num" />
					<span class="mod_info_num new_hide"> </span>
                </li>
                <li>
                	<label for="mod_info_start">开始时间：</label>
                    <input type="text" id="mod_info_start" value="" autocomplete="off"  name="mod_info_start"/>
					<span>（格式例如：2013-12-04T23:59:59+08:00）</span>
                </li>
                <li>
                	<label for="mod_info_end">结束时间：</label>
                    <input type="text" id="mod_info_end" value="" autocomplete="off" name="mod_info_end" />
					<span>（格式例如：2014-01-01T23:59:59+08:00）</span>
                </li>
            </ul>
        </div>
        <div class="mod_info_box activity_url">
        	<div class="title">活动网页URL：</div>
            <input type="text" id="activity_url" value="" autocomplete="off" name="activity_url"/>
        </div>
        <div class="mod_info_prize_wrap">
            <div class="mod_info_box activity_rule">
                <div class="title">倾城榜 领奖规则：</div>
                <textarea cols="60" rows="4" id="activity_rule1" value="" name="activity_rule1"></textarea>
				<input type="hidden" name="id_rule_1" id="id_rule_1" value="" />
            </div>
            <div class="mod_info_box mod_info_prize">
                <ul>
                    <li>
                        <label for="prize11">倾城榜一等奖奖品（1名）：</label>
                        <input type="text" id="prize11" value="" name="prize11" />
						<input type="hidden" name="id_prize_11" id="id_prize_11" value="" />
                    </li>
                    <li>
                        <label for="prize12">倾城榜二等奖奖品（2名）：</label>
                        <input type="text" id="prize12" value="" name="prize12" />
						<input type="hidden" name="id_prize_12" id="id_prize_12" value="" />
                    </li>
                    <li>
                        <label for="prize13">倾城榜三等奖奖品（6名）：</label>
                        <input type="text" id="prize13" value="" name="prize13"/>
						<input type="hidden" name="id_prize_13" id="id_prize_13" value="" />
                    </li>
                </ul>
            </div>
            <div class="mod_info_box activity_rule">
                <div class="title">才俊榜 领奖规则：</div>
                <textarea cols="60" rows="4" id="activity_rule2" value="" name="activity_rule2"></textarea>
				<input type="hidden" name="id_rule_2" id="id_rule_2" value="" />
            </div>
            <div class="mod_info_box mod_info_prize">
                <ul>
                    <li>
                        <label for="prize21">才俊榜一等奖奖品（1名）：</label>
                        <input type="text" id="prize21" value="" name="prize21" />
						<input type="hidden" name="id_prize_21" id="id_prize_21" value="" />
                    </li>
                    <li>
                        <label for="prize22">才俊榜二等奖奖品（2名）：</label>
                        <input type="text" id="prize22" value="" name="prize22" />
						<input type="hidden" name="id_prize_22" id="id_prize_22" value="" />
                    </li>
                    <li>
                        <label for="prize23">才俊榜三等奖奖品（6名）：</label>
                        <input type="text" id="prize23" value="" name="prize23"/>
						<input type="hidden" name="id_prize_23" id="id_prize_23" value="" />
                    </li>
                </ul>
            </div>
            <div class="mod_info_box activity_rule">
                <div class="title">财富榜 领奖规则：</div>
                <textarea cols="60" rows="4" id="activity_rule3" value="" name="activity_rule3"></textarea>
				<input type="hidden" name="id_rule_3" id="id_rule_3" value="" />
            </div>
            <div class="mod_info_box mod_info_prize">
                <ul>
                    <li>
                        <label for="prize31">财富榜一等奖奖品（1名）：</label>
                        <input type="text" id="prize31" value="" name="prize31" />
						<input type="hidden" name="id_prize_31" id="id_prize_31" value="" />
                    </li>
                    <li>
                        <label for="prize32">财富榜二等奖奖品（2名）：</label>
                        <input type="text" id="prize32" value="" name="prize32" />
						<input type="hidden" name="id_prize_32" id="id_prize_32" value="" />
                    </li>
                    <li>
                        <label for="prize33">财富榜三等奖奖品（6名）：</label>
                        <input type="text" id="prize33" value="" name="prize33"/>
						<input type="hidden" name="id_prize_33" id="id_prize_33" value="" />
                    </li>
                </ul>
            </div>
        </div>
        <a href="javascript:;" class="btn mod_info_btn" id="J_mod_save">保存</a>
        <a href="javascript:;" class="btn mod_info_btn new_hide btn_disable" id="J_mod_publish">发布</a>
		<a href="javascript:;" class="btn mod_info_btn new_hide" id="J_mod_delete">删除</a>
    </div>
<script type="text/javascript" src="static/js/list_set.js"></script>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>