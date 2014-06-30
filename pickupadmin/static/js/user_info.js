var key_num;

function getUserInfo(){
	var ParamUrl = window.location.href;	
	var ParamId = ParamUrl.split('?')[1];
	
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/get_user_info.php',
		data:"id="+ParamId,
		dataType:"JSON",
		async: false,
		success: function(data){
			loadUserInfo(data);
		}
	});
	
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/get_user_hobbies.php',
		data:"id="+ParamId,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			loadUserHobby(data);
		}
	});
}
function loadUserHobby(data){

	var food_origin = '';
	var movie_origin = '';
	var music_origin = '';
	var match_origin = '';
	
	for(i in data){
		switch(data[i].category){
			case 'food':
				food_origin = data[i].tags;
				break;
			case 'movie':
				movie_origin = data[i].tags;
				break;
			case 'music':
				music_origin = data[i].tags;
				break;
			case 'would_like_to':
				match_origin = data[i].tags;
				break;
		}
	}
	
	var food_temp, movie_temp, music_temp, match_temp;
	
	var food_show = '';
	var movie_show = '';
	var music_show = '';
	var match_show = '';
	
	if(food_origin!=''){
		for(i_food in food_origin){
			if(i_food!=0){
				food_show = food_show + '、';
			}
			switch(food_origin[i_food]){
				case 'Fast food snacks':
					food_temp = '快餐小吃';
					break;
				case 'Street vendors':
					food_temp = '路边摊';
					break;
				case 'Seafood':
					food_temp = '海鲜';
					break;
				case 'Steaks':
					food_temp = '牛排';
					break;
				case 'Salads':
					food_temp = '色拉';
					break;
				case 'Desserts':
					food_temp = '甜品';
					break;
				case 'Hot pot':
					food_temp = '火锅';
					break;
				case 'Chinese food':
					food_temp = '中餐';
					break;
				case 'Japanese food':
					food_temp = '日本料理';
					break;
				case 'Korean food':
					food_temp = '韩国料理';
					break;
				case 'Italian food':
					food_temp = '意大利餐';
					break;
				case 'French food':
					food_temp = '法国餐';
					break;
				case 'Indian food':
					food_temp = '印度餐';
					break;
				case 'Thai food':
					food_temp = '泰国餐';
					break;
				case 'Vietnamese meal':
					food_temp = '越南餐';
					break;
			}
			food_show = food_show + food_temp;
		}
	}else{
		food_show = ' ';
	}
	
	if(movie_origin!=''){
		for(i_movie in movie_origin){
			if(i_movie!=0){
				movie_show = movie_show + '、';
			}
			switch(movie_origin[i_movie]){
				case 'Love':
					movie_temp = '爱情';
					break;
				case 'Comedy':
					movie_temp = '搞笑';
					break;
				case 'Animation':
					movie_temp = '动画短片';
					break;
				case 'Classic':
					movie_temp = '经典';
					break;
				case 'Sci-fi':
					movie_temp = '科幻';
					break;
				case 'Action':
					movie_temp = '动作';
					break;
				case 'Drama':
					movie_temp = '剧情';
					break;
				case 'Suspense':
					movie_temp = '悬疑';
					break;
				case 'Horror':
					movie_temp = '惊悚';
					break;
				case 'Documentaries':
					movie_temp = '纪录片';
					break;
				case 'Crime':
					movie_temp = '犯罪';
					break;
				case 'Inspirational':
					movie_temp = '励志';
					break;
				case 'Art':
					movie_temp = '文艺';
					break;
				case 'War':
					movie_temp = '战争';
					break;
				case 'Magic':
					movie_temp = '魔幻';
					break;
				case 'Video clip':
					movie_temp = '短片';
					break;
				case 'Biography':
					movie_temp = '传记';
					break;
				case 'Violence':
					movie_temp = '暴力';
					break;
				case 'Music':
					movie_temp = '音乐';
					break;
				case 'Romance':
					movie_temp = '浪漫';
					break;
				case 'Family':
					movie_temp = '家庭';
					break;
				case 'Fairy':
					movie_temp = '童话';
					break;
			}
			movie_show = movie_show + movie_temp;
		}
	}else{
		movie_show = ' ';
	}
	
	if(music_origin!=''){
		for(i_music in music_origin){
			if(i_music!=0){
				music_show = music_show + '、';
			}
			switch(music_origin[i_music]){
				case 'Pop':
					music_temp = '流行';
					break;
				case 'Folk':
					music_temp = '民谣';
					break;
				case 'Rock':
					music_temp = '摇滚';
					break;
				case 'Electronic music':
					music_temp = '电音';
					break;
				case 'Jazz':
					music_temp = '爵士';
					break;
				case 'R & B':
					music_temp = 'R&B';
					break;
				case 'Punk':
					music_temp = '庞克';
					break;
				case 'Classical':
					music_temp = '古典';
					break;
				case 'New World':
					music_temp = '新世界';
					break;
				case 'Metal':
					music_temp = '金属';
					break;
				case 'House':
					music_temp = '浩室';
					break;
			}
			music_show = music_show + music_temp;
		}
	}else{
		music_show = ' ';
	}
	
	if(match_origin!=''){
		for(i_match in match_origin){
			if(i_match!=0){
				match_show = match_show + '、';
			}
			switch(match_origin[i_match]){
				case 'Coffee':
					match_temp = '喝咖啡';
					break;
				case 'Tea':
					match_temp = '喝茶';
					break;
				case 'Eat':
					match_temp = '吃饭';
					break;
				case 'KTV':
					match_temp = '唱K';
					break;
				case 'Drink':
					match_temp = '小酌';
					break;
				case 'Nightclub':
					match_temp = '夜店';
					break;
				case 'Movies':
					match_temp = '看电影';
					break;
			}
			match_show = match_show + match_temp;
		}
	}else{
		match_show = ' ';
	}
	
	$('#J_match').text(match_show);
	$('#J_food').text(food_show);
	$('#J_music').text(music_show);
	$('#J_movie').text(movie_show);
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
	
	var img1_url = ajax_main_path+'libs/controller/get_user_avatar.php?id='+user_id;
	
	var img2_url = ajax_main_path+'libs/controller/get_user_picture.php?id='+user_id+'&n=1';
	var img3_url = ajax_main_path+'libs/controller/get_user_picture.php?id='+user_id+'&n=2';
	var img4_url = ajax_main_path+'libs/controller/get_user_picture.php?id='+user_id+'&n=3';
	var img5_url = ajax_main_path+'libs/controller/get_user_picture.php?id='+user_id+'&n=4';
	
	$('#user_info_id').text(user_id);
	$('#user_info_name').text(user_name);
	
	switch(user_gender){
		case 'male':
			$('#user_info_gender').text(gender_option[0]);
			break;
		case 'female':
			$('#user_info_gender').text(gender_option[1]);
			break;
	}
	
	$('#user_info_sign').text(user_sign);
	$('#user_info_birth').text(user_birth);
	
	$('#user_info_marriage').text(marriage_option[user_marriage]);
	
	$('#user_info_money').text(money_option[user_income_level]);
	
	$('#new_postion').text(new_position);
	$('#new_time').text(new_time);
	
	$('#like_num').text(like_num);
	$('#dislike_num').text(dislike_num);
	$('#key').val(key_num);
	
	$('#img1').attr('src',img1_url);
	
	$('#img2').attr('src',img2_url);
	$('#img3').attr('src',img3_url);
	$('#img4').attr('src',img4_url);
	$('#img5').attr('src',img5_url);
	
	$(".photo_wrap img").bind("error",function(){   
		$(this).attr('src',"../static/images/error_img.jpg");
	}); 
	
}

$('#J_user_save').click(function(){
	var key_new_num = $('#key').val();
	
	if(!/^(-|\+)?\d+$/.test(key_new_num) || key_new_num<0){
		if(window.parent.$("#J_alert_wrap").length==0){
			window.parent.$('body').append(tpl.alert_box);
			window.parent.$("#J_alert_wrap .alert_content").text('钥匙数目格式不正确，请填写大于等于0的整数！');
			window.parent.$("#J_alert_wrap").show();
		}else{
			window.parent.$("#J_alert_wrap .alert_content").text('钥匙数目格式不正确，请填写大于等于0的整数！');
			window.parent.$("#J_alert_wrap").show();							
		}
		setTimeout(hideAlert, 1000);
		return false;
	}else{
		var key_add_num = key_new_num - key_num;
		
		if(key_add_num==0){
			if(window.parent.$("#J_alert_wrap").length==0){
				window.parent.$('body').append(tpl.alert_box);
				window.parent.$("#J_alert_wrap .alert_content").text('请修改钥匙数目！');
				window.parent.$("#J_alert_wrap").show();
			}else{
				window.parent.$("#J_alert_wrap .alert_content").text('请修改钥匙数目！');
				window.parent.$("#J_alert_wrap").show();							
			}
			setTimeout(hideAlert, 1000);
			return false;
		}
		
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/add_key.php',
			data:"id="+$('#user_info_id').text()+"&key="+key_add_num,
			dataType:"JSON",
			async: false,
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data=='1'||data==1){
					key_num = key_new_num;
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
						window.parent.$("#J_alert_wrap").show();							
					}
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('保存失败，请重试！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('保存失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
				}
				setTimeout(hideAlert, 1000);
			}
		});	
		
	}
});

$(document).ready(function() {
	getUserInfo();
});