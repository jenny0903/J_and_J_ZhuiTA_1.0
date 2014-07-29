var search_id_flag = false;
var search_name_flag = false;
var myDate = new Date();
var now_year = myDate.getFullYear() - -0;

function search_btn_check(){
	if(search_name_flag){
		$("#J_user_search").removeClass('btn_disable');
	}else{
		$("#J_user_search").addClass('btn_disable');
	}
	
	if(search_id_flag){
		$("#J_user_id_search").removeClass('btn_disable');
	}else{
		$("#J_user_id_search").addClass('btn_disable');
	}
}
$('#search_input').bind({
	keyup: function(){
		if($("#search_input").val()!=''){
			search_name_flag=true;
		}else{
			search_name_flag=false;
		}
		search_btn_check();
	},
	blur: function(){
		if($("#search_input").val()!=''){
			search_name_flag=true;
		}else{
			search_name_flag=false;
		}
		search_btn_check();
	},
	keydown: function(e){
		if($("#search_input").val()!=''){
			search_name_flag=true;
		}else{
			search_name_flag=false;
		}
		search_btn_check();
		if( e.keyCode == 13 ){
			user_search('name');
		}
	}
});
$('#search_id_input').bind({
	keyup: function(){
		if($("#search_id_input").val()!=''){
			search_id_flag=true;
		}else{
			search_id_flag=false;
		}
		search_btn_check();
	},
	blur: function(){
		if($("#search_id_input").val()!=''){
			search_id_flag=true;
		}else{
			search_id_flag=false;
		}
		search_btn_check();
	},
	keydown: function(e){
		if($("#search_id_input").val()!=''){
			search_id_flag=true;
		}else{
			search_id_flag=false;
		}
		search_btn_check();
		if( e.keyCode == 13 ){
			user_search('id');
		}
	}
});
$('#J_user_search').click(function(){
	user_search('name');
});
$('#J_user_id_search').click(function(){
	user_search('id');
});
function user_search(type){
	var search_flag;
	if(type == 'id'){
		search_flag = search_id_flag;
	}else{
		search_flag = search_name_flag;
	}
	if(search_flag){
		var post_parameter;
		
		$('#result_box .content').remove();
	
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在查找，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在查找，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		if(type == 'id'){
			post_parameter = 'id='+$('#search_id_input').val();
		}else{
			post_parameter = 'name='+$('#search_input').val();
		}
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/search_user.php',
			data: post_parameter,
			dataType:"JSON",
			async: false,
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data!='' && data!='[]'){
					loadResultInfo(data);
				}else{
					$('#search_count').text('搜索到 0 个结果：');
				}
			}
		});
	}
}
var tpl_search_content=[
			'<li class="content">',
				'<div class="result_no">{result_num}</div>',
				'<div class="result_name"><a value="{user_url}" href="javascript:;">{user_name}</a></div>',
				'<div class="result_gender">{user_gender}</div>',
				'<div class="result_age">{user_age}</div>',
				'<div class="result_city">{user_city}</div>',
				'<div class="result_like">{like_num}人喜欢</div>',
			'</li>'
		].join('');
function loadResultInfo(data){
	var result_num, user_id, user_name, user_gender, user_birth, user_city, user_age, user_url, like_num;
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
		user_city = data[i].city;
		if(user_city==''){
			user_city = '&nbsp;';
		}
		like_num = data[i].score.like;
		user_age = now_year - user_birth;
		user_url = 'user_info.html?'+user_id;
		
		result_num++;
		
		$('#result_box').append(tpl_search_content.replace('{result_num}',result_num).replace('{user_url}',user_id).replace('{user_name}',user_name).replace('{user_gender}',user_gender).replace('{user_age}',user_age).replace('{user_city}',user_city).replace('{like_num}',like_num));
		
	}
	
	$('#search_count').text('搜索到 '+result_num+' 个结果：');
	
	window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
}

$('#result_box .result_name a').live('click',function(){
	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}

	var user_info_id=$(this).attr('value');
	
	if($("#J_user_info_wrap").length==0){
		$('body').append(tpl_user_info);
		$("#J_user_info_wrap").css('height','3260px').show();
	}else{
		$("#J_user_info_wrap").css('height','3260px').show();
	}
	
	window.parent.$("#J_iframe").height(3260);//2200//2420+40*6+230*2+40+100
	
	getUserInfo(user_info_id);
});