<?php /* Smarty version 2.6.28, created on 2013-12-03 11:02:29
         compiled from user_info_part.tpl */ ?>
	<div class="main_wrap user_info">
    	<div class="photo_wrap">
        	<div class="photo1 main_img">
            	<img id="img1" src="" />
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
                <!--<li>
                	<label for="user_info_name">昵称：</label>
                    <input type="text" value="" name="user_info_name" id="user_info_name" />
                </li>
                <li>
                    <label for="user_info_gender">性别：</label>
                    <select name="user_info_gender" id="user_info_gender">
                        <option value="0">男</option>
                        <option value="1">女</option>
                    </select>
                </li>
                <li>
                	<label for="user_info_sign">签名：</label>
                    <input type="text" value="" name="user_info_sign" id="user_info_sign" class="long_input1" />
                </li>
                <li>
                	<label for="user_info_birth">生日：</label>
                    <input type="text" value="" name="user_info_birth" id="user_info_birth" />
                </li>
                <li>
                	<label for="user_info_height">身高：</label>
                    <input type="text" value="172cm" name="user_info_height" id="user_info_height" />
                </li>
                <li>
                    <label for="user_info_marriage">婚恋状态：</label>
                    <select name="user_info_marriage" id="user_info_marriage">
                        <option value="0">保密</option>
                        <option value="1">单身</option>
                        <option value="2">寻找对象中</option>
						<option value="3">恋爱中</option>
						<option value="4">已婚</option>
                    </select>
                </li>
                <li>
                	<label for="user_info_school">学校：</label>
                    <input type="text" value="山东蓝翔技校挖掘机专业学校" name="user_info_school" id="user_info_school" />
                </li>
                <li>
                    <label for="user_info_degree">学历：</label>
                    <select name="user_info_degree" id="user_info_degree">
                        <option value="0" selected="selected">单身</option>
                        <option value="1">恋爱中</option>
                        <option value="2">丧偶</option>
                    </select>
                </li>
                <li>
                    <label for="user_info_profession">行业：</label>
                    <select name="user_info_profession" id="user_info_profession">
                        <option value="0" selected="selected">单身</option>
                        <option value="1">恋爱中</option>
                        <option value="2">丧偶</option>
                    </select>
                </li>
                <li>
                	<label for="user_info_position">职位：</label>
                    <input type="text" value="挖掘机经理" name="user_info_position" id="user_info_position" />
                </li>
                <li>
                    <label for="user_info_money">收入：</label>
                    <select name="user_info_money" id="user_info_money">
                        <option value="0">保密</option>
                        <option value="1">10万元以下</option>
                        <option value="2">10到20万元</option>
						<option value="3">20到30万元</option>
						<option value="4">30到50万元</option>
						<option value="5">50到100万元</option>
						<option value="6">100到500万元</option>
						<option value="7">500到1000万元</option>
						<option value="8">1000到5000万元</option>
						<option value="9">5000万到1亿元</option>
						<option value="10">1亿元以上</option>
                    </select>
                </li>-->
            </ul>
        </div>
<!--        <div class="user_info_box user_info2">
        	<ul>
            	<li>
                	<div class="title">如果配对成功，我愿意：</div>
                    <div class="select_wrap" id="J_match">
                    	<span class="select_box">
                    		<input type="checkbox" name="match1" id="match1" checked="checked" />
                            <label for="match1">吃饭</label>
						</span>
                        <span class="select_box">
                    		<input type="checkbox" name="match2" id="match2" checked="checked" />
                            <label for="match2">逛街</label>
						</span>
                        <span class="select_box">
                    		<input type="checkbox" name="match3" id="match3" checked="checked" />
                            <label for="match3">喝咖啡</label>
						</span>
                    </div>
                </li>
                <li>
                	<div class="title">喜爱的食物：</div>
                    <div class="select_wrap" id="J_food">
                    	<span class="select_box">
                    		<input type="checkbox" name="food1" id="food1" checked="checked" />
                            <label for="food1">辛辣</label>
						</span>
                        <span class="select_box">
                    		<input type="checkbox" name="food2" id="food2" checked="checked" />
                            <label for="food2">酸甜</label>
						</span>
                    </div>
                </li>
                <li>
                	<div class="title">喜爱的音乐：</div>
                    <div class="select_wrap" id="J_music">
                    	<span class="select_box">
                    		<input type="checkbox" name="music1" id="music1" checked="checked" />
                            <label for="music1">古典</label>
						</span>
                        <span class="select_box">
                    		<input type="checkbox" name="music2" id="music2" checked="checked" />
                            <label for="music2">流行</label>
						</span>
                    </div>
                </li>
                <li>
                	<div class="title">喜爱的电影：</div>
                    <div class="select_wrap" id="J_movie">
                    	<span class="select_box">
                    		<input type="checkbox" name="movie1" id="movie1" />
                            <label for="movie1">搞笑</label>
						</span>
                        <span class="select_box">
                    		<input type="checkbox" name="movie2" id="movie2" />
                            <label for="movie2">恐怖</label>
						</span>
                        <span class="select_box">
                    		<input type="checkbox" name="movie3" id="movie3" />
                            <label for="movie3">动作</label>
						</span>
                    </div>
                </li>
            </ul>
        </div>
-->
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
            	<!--<li>
                	<label for="new_postion">最新位置：</label>
                    <input type="text" value="" name="new_postion" id="new_postion"  class="long_input1"/>
                </li>
                <li>
                	<label for="new_time">最近登录：</label>
                    <input type="text" value="" name="new_time" id="new_time"  class="long_input1"/>
                </li>
                <li>
                	<label for="like_num">被喜欢：</label>
                    <input type="text" value="" name="like_num" id="like_num" class="short_input"/>
                	<label for="dislike_num">不喜欢：</label>
                    <input type="text" value="" name="dislike_num" id="dislike_num" class="short_input"/>
                </li>-->
                <li>
                	<label for="key">钥匙：</label>
                    <input type="text" value="" name="key" id="key" />
                </li>
            </ul>
        </div>
        <a href="javascript:;" class="btn mod_info_btn" id="J_user_save">保存</a>
	</div>
	<script type="text/javascript">
		var key_num;
		
		function getUserInfo(){
			var ParamUrl = window.location.href;
			//'http://viewer.yunio.me:8080/smarty/pickup/user_info.php?948ce228-12ad-4859-8e8f-ef1840b19a26';
			
			var ParamId = ParamUrl.split('?')[1];
			
			if($("#J_loading_wrap").length==0){
				$('body').append(tpl.loading_box);
				$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
				$("#J_loading_wrap").show();
			}else{
				$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
				$("#J_loading_wrap").show();
			}
			
			$.ajax({
				type: "POST",
				url: 'get_user_info.php',
				data:"id="+ParamId,
				dataType:"JSON",
				async: false,
				success: function(data){
					$("#J_loading_wrap").hide();
					loadUserInfo(data);
				}
			});
		}
		function loadUserInfo(data){
			var gender_option = new Array("男","女");
			var marriage_option = new Array("保密","单身","寻找对象中","恋爱中","已婚");
			var money_option = new Array("保密","10万元以下","10到20万元","20到30万元","30到50万元","50到100万元","100到500万元","500到1000万元","1000到5000万元","5000万到1亿元","1亿元以上");
			
		
			var user_id = data.uid;
			var user_name = data.nick;
			var user_gender = data.gender;
			var user_sign = data.description;
			var user_birth = data.birthday;
			var user_marriage = data.marriage;
			var user_income_level = data.income_level;
			var new_position = data.loc.coordinates[0]+','+data.loc.coordinates[1];
			var new_time = data.last_updated;
			var like_num = data.score.like;
			var dislike_num = data.score.dislike;
			key_num = data.keys;
			if(key_num == ''){
				key_num = 0;
			}
			
			var img1_url = 'get_user_avatar.php?id='+user_id;
			
			$('#user_info_id').text(user_id);
			$('#user_info_name').text(user_name);
			
			
			switch(user_gender){
				case 'male':
					$('#user_info_gender').text(gender_option[0]);
					//$('#user_info_gender option').eq(0).attr('selected','selected');
					break;
				case 'female':
					$('#user_info_gender').text(gender_option[1]);
					//$('#user_info_gender option').eq(1).attr('selected','selected');
					break;
			}
			
			$('#user_info_sign').text(user_sign);
			$('#user_info_birth').text(user_birth);
			
			$('#user_info_marriage').text(marriage_option[user_marriage]);
			//$('#user_info_marriage option').eq(user_marriage).attr('selected','selected');
			
			$('#user_info_money').text(money_option[user_income_level]);
			//$('#user_info_money option').eq(user_income_level).attr('selected','selected');
			
			$('#new_postion').text(new_position);
			$('#new_time').text(new_time);
			
			$('#like_num').text(like_num);
			$('#dislike_num').text(dislike_num);
			$('#key').val(key_num);
			
			$('#img1').attr('src',img1_url);
			
		}
		
		$('#J_user_save').click(function(){
			var key_new_num = $('#key').val();
			
			if(isNaN(key_new_num)){
				if($("#J_alert_wrap").length==0){
					$('body').append(tpl.alert_box);
					$("#J_alert_wrap .alert_content").text('钥匙数目格式不正确，请填写数值！');
					$("#J_alert_wrap").show();
				}else{
					$("#J_alert_wrap .alert_content").text('钥匙数目格式不正确，请填写数值！');
					$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
				return false;
			}else if(key_new_num<0){
				if($("#J_alert_wrap").length==0){
					$('body').append(tpl.alert_box);
					$("#J_alert_wrap .alert_content").text('钥匙数目必须大于等于0，请重新填写！');
					$("#J_alert_wrap").show();
				}else{
					$("#J_alert_wrap .alert_content").text('钥匙数目必须大于等于0，请重新填写！');
					$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
				return false;
			}else{
				var key_add_num = key_new_num - key_num;
				
				if($("#J_loading_wrap").length==0){
					$('body').append(tpl.loading_box);
					$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
					$("#J_loading_wrap").show();
				}else{
					$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
					$("#J_loading_wrap").show();
				}
				
				$.ajax({
					type: "POST",
					url: 'add_key.php',
					data:"id="+$('#user_info_id').text()+"&key="+key_add_num,
					dataType:"JSON",
					async: false,
					success: function(data){
						$("#J_loading_wrap").hide();
						if(data=='1'||data==1){
							key_num = key_new_num;
							if($("#J_alert_wrap").length==0){
								$('body').append(tpl.alert_box);
								$("#J_alert_wrap .alert_content").text('保存成功！');
								$("#J_alert_wrap").show();
							}else{
								$("#J_alert_wrap .alert_content").text('保存成功！');
								$("#J_alert_wrap").show();							
							}
						}else{
							if($("#J_alert_wrap").length==0){
								$('body').append(tpl.alert_box);
								$("#J_alert_wrap .alert_content").text('保存失败，请重试！');
								$("#J_alert_wrap").show();
							}else{
								$("#J_alert_wrap .alert_content").text('保存失败，请重试！');
								$("#J_alert_wrap").show();							
							}
						}
						setTimeout(hideAlert, 1000);
					}
				});
			
			}
		});
		
		function hideAlert(){
			$("#J_alert_wrap").hide();
		};
		
		$(document).ready(function() {
			$("#J_menu1 .menu1_li").eq(0).click();
			$("#J_menu1 .menu2").eq(0).find('a').eq(2).click();
			getUserInfo();
		   //$('#user_info_gender option').eq(1).attr('selected','selected');
		   //$('#movie1').attr('checked','checked');
		});
	</script>