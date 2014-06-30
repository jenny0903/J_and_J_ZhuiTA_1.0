<?php /* Smarty version 2.6.28, created on 2013-12-03 14:36:02
         compiled from user_search_part.tpl */ ?>
	<div class="main_wrap user_search">
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
	<script type="text/javascript">
		var search_flag = false;
		var myDate = new Date();
		var now_year = myDate.getFullYear() - -0;
		
		function search_btn_check(){
			if(search_flag){
				$("#J_user_search").removeClass('btn_disable');
			}else{
				$("#J_user_search").addClass('btn_disable');
			}
		}
		$('#search_input').bind({
			keyup: function(){
				if($("#search_input").val()!=''){
					search_flag=true;
				}else{
					search_flag=false;
				}
				search_btn_check();
			},
			blur: function(){
				if($("#search_input").val()!=''){
					search_flag=true;
				}else{
					search_flag=false;
				}
				search_btn_check();
			}
		});
		$('#J_user_search').click(function(){
			if(search_flag){
				$('#result_box .content').remove();
			
				if($("#J_loading_wrap").length==0){
					$('body').append(tpl.loading_box);
					$("#J_loading_wrap .loading_content").text('正在查找，请稍等……');
					$("#J_loading_wrap").show();
				}else{
					$("#J_loading_wrap .loading_content").text('正在查找，请稍等……');
					$("#J_loading_wrap").show();
				}
				
				$.ajax({
					type: "POST",
					url: 'search_user.php',
					data: 'name='+$('#search_input').val(),
					dataType:"JSON",
					async: false,
					success: function(data){
						$("#J_loading_wrap").hide();
						if(data!='' && data!='[]'){
							loadResultInfo(data);
						}else{
							$('#search_count').text('搜索到 0 个结果：');
						}
					}
				});
			}
		});
		var tpl_search_content=[
					'<li class="content">',
						'<div class="result_no">{result_num}</div>',
						'<div class="result_name"><a target="_blank" href={user_url}>{user_name}</a></div>',
						'<div class="result_gender">{user_gender}</div>',
						'<div class="result_age">{user_age}</div>',
						'<div class="result_city">{use_city}</div>',
						'<div class="result_like">{like_num}人喜欢</div>',
					'</li>'
				].join('');
		function loadResultInfo(data){
			var result_num, user_id, user_name, user_gender, user_birth, use_city, user_age, user_url, like_num;
			result_num = 0;
			for(i in data){
				user_id = data[i].uid;
				user_name = data[i].nick;

				switch(data[i].gender){
					case 'male':
						user_gender = '男';
						break;
					case 'female':
						user_gender = '女';
						break;
				}
				
				user_birth = data[i].birthday.split('-')[0] - - 0;
				use_city = data[i].city;
				like_num = data[i].score.like;
				user_age = now_year - user_birth;
				user_url = 'user_info.php?'+user_id;
				
				result_num++;
				
				$('#result_box').append(tpl_search_content.replace('{result_num}',result_num).replace('{user_url}',user_url).replace('{user_name}',user_name).replace('{user_gender}',user_gender).replace('{user_age}',user_age).replace('{use_city}',use_city).replace('{like_num}',like_num));
				
			}
			
			$('#search_count').text('搜索到 '+result_num+' 个结果：');
		}
		$(document).ready(function() {
			$("#J_menu1 .menu1_title").eq(0).click();
		});
	</script>