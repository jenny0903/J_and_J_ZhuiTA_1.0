var key_num1 = 0;
var key_num2 = 0;
var black_flag = 1;
var black_url;
var black_text;
var black_id;
var check_flag = 0;
var avatar = 0;
var education = 0;
var job = 0;
var money = 0;
var uid = "";
var coupon_num = 0;
var flag_key = {
	ios : false,
	android : false,
	check_ios : function(){
		var key_new1 = $('#key1').val();
		if(!/^(-|\+)?\d+$/.test(key_new1) || key_new1<0 || key_new1 == key_num1){
			flag_key.ios = false;
			$('#J_user_save1').addClass('btn_disable');
		}else{
			flag_key.ios = true;
			$('#J_user_save1').removeClass('btn_disable');
		}
	},
	check_android : function(){
		var key_new2 = $('#key2').val();
		if(!/^(-|\+)?\d+$/.test(key_new2) || key_new2<0 || key_new2 == key_num2){
			flag_key.android = false;
			$('#J_user_save2').addClass('btn_disable');
		}else{
			flag_key.android = true;
			$('#J_user_save2').removeClass('btn_disable');
		}
	}
};
$('#J_save_coupon').die().live('click',function(){
	var coupon_new_num = $('#coupon').val();
	
	if(!/^(-|\+)?\d+$/.test(coupon_new_num) || coupon_new_num<0){
		if(window.parent.$("#J_alert_wrap").length==0){
			window.parent.$('body').append(tpl.alert_box);
			window.parent.$("#J_alert_wrap .alert_content").text('礼券数目格式不正确，请填写大于等于0的整数！');
			window.parent.$("#J_alert_wrap").show();
		}else{
			window.parent.$("#J_alert_wrap .alert_content").text('礼券数目格式不正确，请填写大于等于0的整数！');
			window.parent.$("#J_alert_wrap").show();							
		}
		setTimeout(hideAlert, 1000);
		return false;
	}else{
		var coupon_add_num = coupon_new_num - coupon_num;
		
		if(coupon_add_num==0){
			if(window.parent.$("#J_alert_wrap").length==0){
				window.parent.$('body').append(tpl.alert_box);
				window.parent.$("#J_alert_wrap .alert_content").text('请修改礼券数目！');
				window.parent.$("#J_alert_wrap").show();
			}else{
				window.parent.$("#J_alert_wrap .alert_content").text('请修改礼券数目！');
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
			url: ajax_main_path+'libs/controller/add_coupon.php',
			data:"id="+$('#user_info_uid').text()+"&coupon="+coupon_add_num,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data=='1'||data==1){
					coupon_num = coupon_new_num;
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
						window.parent.$("#J_alert_wrap").show();							
					}
					// $('#J_user_info_wrap').hide();
					// window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
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
$('#key1').die().live({
	keyup: function(){
		flag_key.check_ios();
	},
	blur: function(){
		flag_key.check_ios();
	}
});
$('#key2').die().live({
	keyup: function(){
		flag_key.check_android();
	},
	blur: function(){
		flag_key.check_android();
	}
});
function getUserInfo(ParamId){
// console.log(ParamId);
	uid = ParamId;
	
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
		url: ajax_main_path+'libs/controller/get_key_num.php',
		data:"id="+ParamId,
		dataType:"JSON",
		async: false,
		success: function(data){
			loadUserKey(data);
		}
	});
	
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/get_user_hobbies.php',
		data:"id="+ParamId,
		dataType:"JSON",
		async: false,
		success: function(data){
			loadUserHobby(data);
		}
	});
	
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/received_gift.php',
		data:"id="+ParamId+"&num=5&page=1",
		dataType:"JSON",
		async: false,
		success: function(data){
			loadUserPresent(data);
		}
	});
	
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/get_purchase_record.php',
		data:"id="+ParamId+"&num=5&page=1",
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			loadUserBill(data);
		},
		error: function () {
			window.parent.$("#J_loading_wrap").hide();
		},
		failure: function () {
			window.parent.$("#J_loading_wrap").hide();
		}
	});
	
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/get_blacklist.php',
		data:"id="+ParamId,
		dataType:"JSON",
		async: false,
		success: function(data){
			// window.parent.$("#J_loading_wrap").hide();
			isInBlacklist(data,ParamId);
		},
		error: OnError,
		failure: function () {
			alert(response);
		}
	});
	
	function OnError(request, status, error) {
		alert(request.statusText);
		return false;
	}
}

function isInBlacklist(data,ParamId){
	black_id = ParamId;
	if(data){
		$('#J_blacklist').text('恢复');
		black_flag = 0;
	}else{
		$('#J_blacklist').text('拉黑');
		black_flag = 1;
	}
}
function loadUserKey(data){
	var key_data = data.keys;
	var key_platform;
	for(key_data_i in key_data){
		key_platform = key_data[key_data_i].platform;
		if(key_platform == 'apple'){
			key_num1 = key_data[key_data_i].quantity;
		}else{
			key_num2 = key_data[key_data_i].quantity;
		}
	}
	$('#key1').val(key_num1);
	$('#key2').val(key_num2);
}
function loadUserBill(data){
	$('#J_bill_wrap .content').remove();
	
	var bill_info1 = data.apple;
	var bill_info2 = data.iapppay;
	
	var bill_info1_info = bill_info1.apple;
	var bill_info1_num = bill_info1.total;
	
	var bill_info2_info = bill_info2.iapppay;
	var bill_info2_num = bill_info2.total;
	
	var total = bill_info1_num + bill_info2_num;
	
	if(total<=5){
		$('#J_more_bill').hide();
	}else{
		$('#J_more_bill').show();
	}
	if(total!=0){
		var code,key,value,purchase,create,platform;
		for(apple_i in bill_info1_info){
			code = bill_info1_info[apple_i].transaction_id;
			switch(bill_info1_info[apple_i].product_id){
				// case "pickup_product_1":
					// key = 6;
					// value = "6.00";
					// break;
				// case "pickup_product_2":
					// key = 20;
					// value = "18.00";
					// break;
				// case "pickup_product_3":
					// key = 40;
					// value = "30.00";
					// break;
				// case "pickup_product_4":
					// key = 100;
					// value = "68.00";
					// break;
				// case "pickup_product_6":
					// key = 500;
					// value = "308.00";
					// break;
				// case "pickup_product_7":
					// key = 1200;
					// value = "698.00";
					// break;
				case "pickup_keyprice_1":
				case "1":
					key = 6;
					value = "6.00";
					break;
				case "pickup_keyprice_2":
				case "2":
					key = 20;
					value = "18.00";
					break;
				case "pickup_keyprice_3":
				case "3":
					key = 40;
					value = "30.00";
					break;
				case "pickup_keyprice_4":
				case "4":
					key = 100;
					value = "68.00";
					break;
				case "pickup_keyprice_5":
				case "5":
					key = 500;
					value = "258.00";
					break;
				case "pickup_keyprice_6":
				case "6":
					key = 1200;
					value = "588.00";
					break;
				default:
					key = "error";
					value = "error";
					break;
			}
			purchase = bill_info1_info[apple_i].purchase_date.split(' ')[0]; 
			create = bill_info1_info[apple_i].created_date.split('T')[0];
			platform = 'apple';
			
			$('#J_bill_wrap').append(tpl_bill.replace('{code}',code).replace('{key}',key).replace('{value}',value).replace('{purchase}',purchase).replace('{create}',create).replace('{platform}',platform));
		}
		for(android_i in bill_info2_info){
			code = bill_info2_info[android_i].transaction_id;
			switch(bill_info2_info[android_i].product_id){
				case "pickup_product_1":
					key = 6;
					value = "6.00";
					break;
				case "pickup_product_2":
					key = 20;
					value = "18.00";
					break;
				case "pickup_product_3":
					key = 40;
					value = "30.00";
					break;
				case "pickup_product_4":
					key = 100;
					value = "68.00";
					break;
				case "pickup_product_6":
					key = 500;
					value = "308.00";
					break;
				case "pickup_product_7":
					key = 1200;
					value = "698.00";
					break;
				default:
					key = "error";
					value = "error";
					break;
			}
			purchase = bill_info2_info[android_i].purchase_date.split(' ')[0]; 
			create = bill_info2_info[android_i].created_date.split('T')[0];
			platform = 'iapppay';
			
			$('#J_bill_wrap').append(tpl_bill.replace('{code}',code).replace('{key}',key).replace('{value}',value).replace('{purchase}',purchase).replace('{create}',create).replace('{platform}',platform));
		}
	}
}
function loadUserPresent(data){
	$('#J_present_wrap .content').remove();

	var present_info = data.items;
	var total = data.total;
	if(total<=5){
		$('#J_more_present').hide();
	}else{
		$('#J_more_present').show();
	}
	if(total!=0){
		var time, present, amount, sender, status;
		for(i in present_info){
// console.log('1');
			time = present_info[i].updated_date.split('T')[0];
			present = present_info[i].product_name;
			// switch(present_info[i].product_id){
				// case "b6431173-ff31-4d44-b554-c6738e6cd6f4":
					// present = "FLOWER";
					// break;
				// case "1ef7b33e-659e-4c8e-a881-5f30ca5d4bb1":
					// present = "CHAMPAGNE";
					// break;
				// case "dee5fa0d-c6ad-4423-8434-02ec8803f9bc":
					// present = "DIAMOND";
					// break;
				// case "90cddc0c-e84b-45ce-bf52-82a1e4f7a90d":
					// present = "CAR";
					// break;
				// case "c73a197d-dc87-48b0-a199-f03026897b4d":
					// present = "HOUSE";
					// break;
				// case "1f4d5233-732a-4898-804e-73e1f25ec04c":
					// present = "LOVE ";
					// break;
				// default:
					// present = "undefined";
					// break;
			// }
			amount = present_info[i].amount;
			sender = present_info[i].sender_name;
			switch(present_info[i].status){
				case 0:
					status = "未处理";
					break;
				case 1:
					status = "接受";
					break;
				case -1:
					status = "拒绝";
					break;
			}
			$('#J_present_wrap').append(tpl_present.replace('{time}',time).replace('{present}',present).replace('{amount}',amount).replace('{sender}',sender).replace('{status}',status));
		}
	}
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
				default:
					food_temp = food_origin[i_food];
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
				default:
					movie_temp = movie_origin[i_movie];
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
				default:
					music_temp = music_origin[i_music];
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
				default:
					match_temp = match_origin[i_match];
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
	var degree_option = new Array("secret status","undergraduate course status","a master's degree status","Dr. status","postdoctoral status","the MBA status","other status");
	var trade_option = new Array("secret status","economic and financial status","tax law status","the Internet status","civil servants status","sales market status","advertising design status","the private owner status","education status","the mechanic","the waiter status","the security guard cleaning status","freelance status","other status");
	
	var user_uid = data.uid;
	var user_zid = data.zid;
	var user_avater_id = data.avatar.value;
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
	coupon_num = data.quantity_coupons;
	
	var user_height = data.height;
	var user_school = data.school;
	var user_job = data.job;
	var user_degree = data.degree;
	var user_trade = data.trade;
	var user_certificate = data.certificate;
	
	key_num = data.keys;
	if(key_num == ''){
		key_num = 0;
	}
	
	var present_more_url = '../present.php?'+user_name+'&'+user_uid;
	var bill_more_url = '../bill.php?'+user_name+'&'+user_uid;
	
	// var img1_url = ajax_main_path+'libs/controller/get_user_avatar.php?id='+user_id;
	var img1_url = ajax_main_path+'libs/controller/get_avatar.php?id='+user_avater_id;
	
	// var img2_url = ajax_main_path+'libs/controller/get_user_picture.php?id='+user_id+'&n=1';
	// var img3_url = ajax_main_path+'libs/controller/get_user_picture.php?id='+user_id+'&n=2';
	// var img4_url = ajax_main_path+'libs/controller/get_user_picture.php?id='+user_id+'&n=3';
	// var img5_url = ajax_main_path+'libs/controller/get_user_picture.php?id='+user_id+'&n=4';
	
	$('#J_more_present').attr('link',present_more_url);
	$('#J_more_bill').attr('link',bill_more_url);
	
	$('#user_info_uid').text(user_uid);
	$('#user_info_zid').text(user_zid);
	$('#user_info_name').text(user_name);
	
	$('#coupon').val(coupon_num);
	
	switch(user_gender){
		case 'male':
			$('#user_info_gender').text(gender_option[0]);
			break;
		case 'female':
			$('#user_info_gender').text(gender_option[1]);
			break;
	}
	
	switch(user_certificate){
		case 1:
			$('#J_check_photo').attr('checked','checked');
			break;
		case 2:
			$('#J_check_school').attr('checked','checked');
			break;
		case 4:
			$('#J_check_job').attr('checked','checked');
			break;
		case 8:
			$('#J_check_money').attr('checked','checked');
			break;
			
			
		case 3:
			$('#J_check_photo').attr('checked','checked');
			$('#J_check_school').attr('checked','checked');
			break;
		case 5:
			$('#J_check_photo').attr('checked','checked');
			$('#J_check_job').attr('checked','checked');
			break;
		case 9:
			$('#J_check_photo').attr('checked','checked');
			$('#J_check_money').attr('checked','checked');
			break;
		case 6:
			$('#J_check_school').attr('checked','checked');
			$('#J_check_job').attr('checked','checked');
			break;
		case 10:
			$('#J_check_school').attr('checked','checked');
			$('#J_check_money').attr('checked','checked');
			break;
		case 12:
			$('#J_check_job').attr('checked','checked');
			$('#J_check_money').attr('checked','checked');
			break;
			
		
		case 7:
			$('#J_check_photo').attr('checked','checked');
			$('#J_check_school').attr('checked','checked');
			$('#J_check_job').attr('checked','checked');
			break;
		case 11:
			$('#J_check_photo').attr('checked','checked');
			$('#J_check_school').attr('checked','checked');
			$('#J_check_money').attr('checked','checked');
			break;
		case 13:
			$('#J_check_photo').attr('checked','checked');
			$('#J_check_job').attr('checked','checked');
			$('#J_check_money').attr('checked','checked');
			break;
		case 14:
			$('#J_check_school').attr('checked','checked');
			$('#J_check_job').attr('checked','checked');
			$('#J_check_money').attr('checked','checked');
			break;
			
			
			
		case 15:
			$('#J_check_photo').attr('checked','checked');
			$('#J_check_school').attr('checked','checked');
			$('#J_check_job').attr('checked','checked');
			$('#J_check_money').attr('checked','checked');
			break;
	}
	
	if(user_height>0){
		$('#user_info_height').text(user_height+' cm');
	}
	$('#user_info_school').text(user_school);
	$('#user_info_job').text(user_job);
	$('#user_info_degree').text(degree_option[user_degree]);
	$('#user_info_trade').text(trade_option[user_trade]);
	
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
	
	// $('#img2').attr('src',img2_url);
	// $('#img3').attr('src',img3_url);
	// $('#img4').attr('src',img4_url);
	// $('#img5').attr('src',img5_url);
	
	$(".photo_wrap img").bind("error",function(){   
		$(this).attr('src',"../static/images/error_img.jpg");
	}); 
	
}

$('#J_user_save1').die().live('click',function(){
	flag_key.check_ios();
	if(flag_key.ios){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		var key_new1 = $('#key1').val();
		var key_add_num1 = key_new1 - key_num1;
		var key_add_free1 = $('#key_free1').find("option:selected").attr('value');
		var key_add_kind1 = $('#key_kind1').find("option:selected").attr('value');
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/add_key2.php',
			data:"id="+$('#user_info_uid').text()+"&key="+key_add_num1+'&free='+key_add_free1+'&kind='+key_add_kind1+'&platform=apple',
			dataType:"JSON",
			async: false,
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data=='1'||data==1){
					key_num1 = key_new1;
					$('#key1').val(key_num1);
					flag_key.check_ios();
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
						window.parent.$("#J_alert_wrap").show();							
					}
					// $('#J_user_info_wrap').hide();
					// window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
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
$('#J_user_save2').die().live('click',function(){
	flag_key.check_android();
	if(flag_key.android){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		var key_new2 = $('#key2').val();
		var key_add_num2 = key_new2 - key_num2;
		var key_add_free2 = $('#key_free2').find("option:selected").attr('value');
		var key_add_kind2 = $('#key_kind2').find("option:selected").attr('value');
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/add_key2.php',
			data:"id="+$('#user_info_uid').text()+"&key="+key_add_num2+'&free='+key_add_free2+'&kind='+key_add_kind2+'&platform=android',
			dataType:"JSON",
			async: false,
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data=='1'||data==1){
					key_num2 = key_new2;
					$('#key2').val(key_num2);
					flag_key.check_android();
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
						window.parent.$("#J_alert_wrap").show();							
					}
					// $('#J_user_info_wrap').hide();
					// window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
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
/*
$('#J_user_save').die().live('click',function(){
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
					$('#J_user_info_wrap').hide();
					window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
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
*/
$('#J_blacklist').die().live('click',function(){
	if(black_flag != 1 ){
		if(window.parent.$("#J_confirm_wrap").length==0){
			window.parent.$('body').append(tpl.confirm_box);
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要将该用户从黑名单中恢复吗？');
			window.parent.$("#J_confirm_wrap").show();	
		}else{
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要将该用户从黑名单中恢复吗？');
			window.parent.$("#J_confirm_wrap").show();
		}
	}else{
		if(window.parent.$("#J_confirm_wrap").length==0){
			window.parent.$('body').append(tpl.confirm_box);
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要将该用户拉入黑名单吗？');
			window.parent.$("#J_confirm_wrap").show();	
		}else{
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要将该用户拉入黑名单吗？');
			window.parent.$("#J_confirm_wrap").show();
		}
	}
	
	window.parent.$('#J_cancel_btn').die().live('click',function(){
		window.parent.$("#J_confirm_wrap").hide();
	});
	
	if( black_flag == 1 ){
		black_url = ajax_main_path+'libs/controller/new_blacklist.php';
		black_text = "该用户已被拉入黑名单！";
	}else{
		black_url = ajax_main_path+'libs/controller/delete_blacklist.php';
		black_text = "该用户已从黑名单中恢复！";
	}
	window.parent.$('#J_confirm_btn').die().live('click',function(){	
		$.ajax({
			type: "POST",
			url: black_url,
			data:"id="+black_id,
			dataType:"JSON",
			async: false,
			success: function(data){
				window.parent.$("#J_confirm_wrap").hide();
				if(data=='1'||data==1){
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text( black_text );
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text( black_text );
						window.parent.$("#J_alert_wrap").show();							
					}
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text( black_text );
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text( black_text );
						window.parent.$("#J_alert_wrap").show();							
					}
				}
				$('#J_user_info_wrap').hide();
				window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
				window.location.reload();
				setTimeout(hideAlert, 500);
			}
		});
	});
});

$('#J_user_back').die().live('click',function(){
	$('#J_user_info_wrap').hide();
	window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
});

$('#J_more_present').live('click',function(){
	var link = $('#J_more_present').attr('link');
	window.parent.open(link);
});
$('#J_more_bill').live('click',function(){
	var link = $('#J_more_bill').attr('link');
	window.parent.open(link);
});
$('#J_check_box .check_select').die().live('click',function(){
	check_flag = 1;
	$('#J_save_check').removeClass('btn_disable');
}); 
$('#J_save_check').die().live('click',function(){

	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定保存该认证设置吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定保存该认证设置吗？');
		window.parent.$("#J_confirm_wrap").show();
	}

	window.parent.$('#J_cancel_btn').die().live('click',function(){
		window.parent.$("#J_confirm_wrap").hide();
	});
	
	window.parent.$('#J_confirm_btn').die().live('click',function(){	
		if(check_flag == 1){
			var select_array = [];
			var select_id,select_data,select_checked;
			$("#J_check_box .check_select").each(function(i){
				select_id = $(this).attr('data');
				select_data = $(this).attr('checked');
				if(select_data == 'checked'){
					select_checked = 1;
				}else{
					select_checked = 0;
				}
				select_array[select_array.length]={select_id:select_id,select_checked:select_checked};		
			});
			var select_json = JSON.stringify(select_array);
	// console.log(select_json);
			$.each(JSON.parse(select_json),function(key,value){
				switch(value['select_id']){
					case "1":
						avatar = value['select_checked'];
						break;
					case "2":
						education = value['select_checked'];
						break;
					case "4":
						job = value['select_checked'];
						break;
					case "8":
						money = value['select_checked'];
						break;
				}
			});
	// console.log(avatar);
	// console.log(education);
	// console.log(job);
	// console.log(money);
			$.ajax({
				type: "POST",
				url: ajax_main_path+'libs/controller/set_user_cert.php',
				data:"uid="+uid+"&avatar="+avatar+"&education="+education+"&job="+job+"&money="+money,
				dataType:"JSON",
				async: false,
				success: function(data){
					window.parent.$("#J_confirm_wrap").hide();
					if(data=='1'||data==1){
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text( "认证设置成功！" );
							window.parent.$("#J_alert_wrap").show();
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text( "认证设置成功！" );
							window.parent.$("#J_alert_wrap").show();							
						}
					}else{
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text( "认证设置失败！" );
							window.parent.$("#J_alert_wrap").show();
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text( "认证设置失败！" );
							window.parent.$("#J_alert_wrap").show()							
						}
					}
					$('#J_user_info_wrap').hide();
					window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
					window.location.reload();
					setTimeout(hideAlert, 1000);
				}
			});
		}
	});
});