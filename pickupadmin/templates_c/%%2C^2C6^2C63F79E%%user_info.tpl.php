<?php /* Smarty version 2.6.28, created on 2013-12-04 15:03:38
         compiled from user_info.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "menu.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	<div class="main_wrap user_info">
    	<div class="photo_wrap">
        	<div class="photo1 main_img">
            	<img id="img1"/>
            </div>
            <div class="photo2">
            	<img id="img2" src="" />
            </div>
            <div class="photo3">
            	<img id="img3" src="" />
            </div>
            <div class="photo4">
            	<img id="img4" src="" />
            </div>
            <div class="photo5">
            	<img id="img5"src="" />
            </div>
        </div>
        <div class="user_info_box user_info1">
        	<ul>
            	<li>
                	<span class="title">ID:</span>
                    <span id="user_info_id"></span>
                </li>
				<li>
                	<span class="title">昵称:</span>
                    <span id="user_info_name"></span>
                </li>
				<li>
                	<span class="title">性别:</span>
                    <span id="user_info_gender"></span>
                </li>
				<li>
                	<span class="title">签名：</span>
                    <span id="user_info_sign"></span>
                </li>
				<li>
                	<span class="title">生日：</span>
                    <span id="user_info_birth"></span>
                </li>
				<li>
                	<span class="title">婚恋状态：</span>
                    <span id="user_info_marriage"></span>
                </li>
				<li>
                	<span class="title">收入：</span>
                    <span id="user_info_money"></span>
                </li>
            </ul>
        </div>
		<div class="user_info_box user_info2">
        	<ul>
            	<li>
                	<div class="title">如果配对成功，我愿意：</div>
                    <div class="select_wrap" id="J_match">吃饭、逛街、喝咖啡</div>
                </li>
                <li>
                	<div class="title">喜爱的食物：</div>
                    <div class="select_wrap" id="J_food">辛辣、酸甜</div>
                </li>
                <li>
                	<div class="title">喜爱的音乐：</div>
                    <div class="select_wrap" id="J_music">古典、流行</div>
                </li>
                <li>
                	<div class="title">喜爱的电影：</div>
                    <div class="select_wrap" id="J_movie">搞笑、恐怖、动作</div>
                </li>
            </ul>
        </div>
        <div class="user_info_box user_info3">
        	<ul>
				<li>
                	<span class="title">最新位置:</span>
                    <span id="new_postion"></span>
                </li>
				<li>
                	<span class="title">最近登录：</span>
                    <span id="new_time"></span>
                </li>
				<li>
                	<span class="title">被喜欢：</span>
                    <span id="like_num"></span>
					<span class="title">不喜欢：</span>
                    <span id="dislike_num"></span>
                </li>
                <li>
                	<label for="key">钥匙：</label>
                    <input type="text" value="" name="key" id="key" />
                </li>
            </ul>
        </div>
        <a href="javascript:;" class="btn mod_info_btn" id="J_user_save">保存</a>
	</div>
<script type="text/javascript" src="static/js/user_info.js"></script>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>