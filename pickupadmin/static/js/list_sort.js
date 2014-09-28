var type_cur = '1';
var page_now = 1;
var page_total;
var page_prev1, page_prev2, page_next1, page_next2;
var num_cur;
var rank_ids_arr;
var money_rank_flag = {
	uid : false,
	score : false,
	btn : false,
	check_uid : function(){
		var uid_content = window.parent.$('#manual_money_uid').val();
		if(uid_content.length > 0){
			money_rank_flag.uid = true;
		}else{
			money_rank_flag.uid = false;
		}
	},
	check_score : function(){
		var score_content = window.parent.$('#manual_money_score').val();
		if(score_content.length > 0){
			money_rank_flag.score = true;
		}else{
			money_rank_flag.score = false;
		}
	},
	check_btn : function(){
		money_rank_flag.check_uid();
		money_rank_flag.check_score();
		if( money_rank_flag.uid && money_rank_flag.score ){
			money_rank_flag.btn = true;
			window.parent.$('#J_manual_money_user').removeClass('btn_disable');
		}else{
			money_rank_flag.btn = false;
			window.parent.$('#J_manual_money_user').addClass('btn_disable');
		}
	}
}
$(document).ready(function() {
	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/get_billboard_events.php',
		dataType:"JSON",
		async: false,
		success: function(data){
			display_sort(data);
			num_cur = $("#J_sort_num").find("option:selected").val();
		}
	});
	rank_list_show();
	
	//$('body').append(tpl_user_info);
});
var sort_normal_tpl='<option value="{list_num}" state="{state}">{list_name}</option>',
	sort_cur_tpl='<option value="{list_num}" state="{state}" selected="selected">{list_name}（最新）</option>';

function display_sort(data){
	var list_num, list_name, list_state;
	for(i in data){
		list_num = data[i].number;
		list_name = data[i].name;
		list_state = data[i].state;
		switch( list_state )
		{
			case 0:
				$("#J_sort_num").append(sort_normal_tpl.replace('{list_num}',list_num).replace('{state}',list_state).replace('{list_name}',list_name));
				break;
			case 1:
			case 2:
				$("#J_sort_num").append(sort_normal_tpl.replace('{list_num}',list_num).replace('{state}',list_state).replace('{list_name}',list_name));
				break;
			case 3:
				$("#J_sort_num").append(sort_cur_tpl.replace('{list_num}',list_num).replace('{state}',list_state).replace('{list_name}',list_name));
				break;
		}
	}
};
function sort_num_change(){
	num_cur = $("#J_sort_num").find("option:selected").val();
	rank_list_show();
};

$('#page_prev, #page_prev2, #page_prev1, #page_now, #page_next1, #page_next2, #page_next').click(function(){
	var new_page = $(this).attr('value');
	if(new_page==page_now){
		return false;
	}else{
		page_now=new_page;
		rank_list_show();
	}
});

$('#page_skip').keydown(function(e){
	if( e.keyCode == 13 ){
		var page_new=$('#page_skip').val();
		if(page_new==page_now){
			return false;
		}else if(page_new<=page_total && page_new>=1){
			page_now=page_new;
			rank_list_show();
			$('#page_skip').val('');
		}else{
			return false;
		}
	}
});

var sort_list_title=[
		'<li class="sort_title">',
			'<div class="sort_no">排名</div>',
			'<div class="sort_name">昵称</div>',
			'<div class="sort_id">ID</div>',
			'<div class="sort_point">积分</div>',
		'</li>'
	].join('');
$('#J_rank_money_user').die().live('click',function(){
	window.parent.$('body').append(tpl.new_rank_money_user);
	window.parent.$('#J_manual_money_user_cancel').die().live('click',function(){
		window.parent.$('#J_manual_money_user_wrap').remove();
	});
	window.parent.$('#manual_money_uid').bind({
		'keyup' : function(){
			money_rank_flag.check_btn();
		},
		'blur' : function(){
			money_rank_flag.check_btn();
		}
	});
	window.parent.$('#manual_money_score').bind({
		'keyup' : function(){
			money_rank_flag.check_btn();
		},
		'blur' : function(){
			money_rank_flag.check_btn();
		}
	});
	window.parent.$('#J_manual_money_user').die().live('click',function(){
		money_rank_flag.check_btn();
		if( money_rank_flag.btn ){
			var manual_uid = window.parent.$('#manual_money_uid').val();
			var manual_score = window.parent.$('#manual_money_score').val();
			
			new_rank(manual_uid, type_cur, manual_score, num_cur , 1);
		}
	});
	
});
function rank_list_show(){
	$('#J_sort_content li').remove();
	$('#J_sort_content').append(sort_list_title);
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/list_billboard.php',
		data: 'number='+num_cur+'&type='+type_cur+'&num=100&page='+page_now,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			display_rank(data.rank);
			window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
		}
	});
}
function new_rank(id, type, score, num , is_manual_money){
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/update_billboard_rank.php',
		data: 'id='+id+'&type='+type+'&score='+score+'&number='+num,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			if(data=='1'||data==1){
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('积分修改成功！');
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('积分修改成功！');
					window.parent.$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
				if(window.parent.$("#J_loading_wrap").length==0){
					window.parent.$('body').append(tpl.loading_box);
					window.parent.$("#J_loading_wrap .loading_content").text('正在重新计算排名，请稍等……');
					window.parent.$("#J_loading_wrap").show();
				}else{
					window.parent.$("#J_loading_wrap .loading_content").text('正在重新计算排名，请稍等……');
					window.parent.$("#J_loading_wrap").show();
				}
				$.ajax({
					type: "POST",
					url: ajax_main_path+'libs/controller/recalculate_billboard_rank.php',
					data: 'type='+type+'&number='+num,
					dataType:"JSON",
					async: false,
					success: function(data){
						window.parent.$("#J_loading_wrap").hide();
						if(data=='1'||data==1){
							if(is_manual_money == 1){
								window.parent.$('#J_manual_money_user_wrap').remove();
							}
							rank_list_show();
						}else{
							if(window.parent.$("#J_alert_wrap").length==0){
								window.parent.$('body').append(tpl.alert_box);
								window.parent.$("#J_alert_wrap .alert_content").text('重新计算排名失败！');
							}else{
								window.parent.$("#J_alert_wrap .alert_content").text('重新计算排名失败！');
								window.parent.$("#J_alert_wrap").show();							
							}
							window.location.reload();
						}
					}
				});
			}else{
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('积分修改失败，请重试！');
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('积分修改失败，请重试！');
					window.parent.$("#J_alert_wrap").show();							
				}
				window.location.reload();
			}
		}
	});
};

$('.sort_point').die().live('click',function(){
	if($("#J_sort_num").find("option:selected").attr('state')!=0){
		var _this = $(this);
		var _this_li = _this.parents('li');
		var _this_new_input = _this_li.find('.sort_new_point');
		_this.hide();
		_this_new_input.show();
		_this_new_input.find('.sort_update').focus();
	}
});

$('.sort_update').live('blur',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	var _this_id = _this_li.find('.sort_id').text();
	var _this_score = _this.val();
	
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要修改该积分吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要修改该积分吗？');
		window.parent.$("#J_confirm_wrap").show();
	}
	window.parent.$('#J_confirm_btn').die().live('click',function(){
		window.parent.$("#J_confirm_wrap").hide();
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		new_rank(_this_id, type_cur, _this_score, num_cur , 0);
	});
	window.parent.$('#J_cancel_btn').die().live('click',function(){
		window.parent.$("#J_confirm_wrap").hide();
		window.location.reload();
	});
});
$('.sort_update').live('keydown',function(e){
	if( e.keyCode == 13 ){
		var _this = $(this);
		var _this_li = _this.parents('li');
		var _this_id = _this_li.find('.sort_id').text();
		var _this_score = _this.val();
		
		if(window.parent.$("#J_confirm_wrap").length==0){
			window.parent.$('body').append(tpl.confirm_box);
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要修改该积分吗？');
			window.parent.$("#J_confirm_wrap").show();
		}else{
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要修改该积分吗？');
			window.parent.$("#J_confirm_wrap").show();
		}
		window.parent.$('#J_confirm_btn').die().live('click',function(){
			window.parent.$("#J_confirm_wrap").hide();
			if(window.parent.$("#J_loading_wrap").length==0){
				window.parent.$('body').append(tpl.loading_box);
				window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
				window.parent.$("#J_loading_wrap").show();
			}else{
				window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
				window.parent.$("#J_loading_wrap").show();
			}
			new_rank(_this_id, type_cur, _this_score, num_cur , 0);
		});
		window.parent.$('#J_cancel_btn').die().live('click',function(){
			window.parent.$("#J_confirm_wrap").hide();
			window.location.reload();
		});
	}
	
});

var rank_tpl=[
		'<li>',
			'<div class="sort_no">{rank_no}</div>',
			'<div class="sort_name"><a value="{user_set}" href="javascript:;">{rank_name}</a></div>',
			'<div class="sort_id">{rank_id}</div>',
			'<div class="sort_point">{rank_point}</div>',
			'<div class="sort_new_point hide"><input class="sort_update" type="text" value="{new_point}" /></div>',
		'</li>'
		].join('');

function display_rank(data){
	rank_ids_arr = new Array();
	var rank_no = (page_now-1)*20+1;
	var rank_name, rank_id, rank_point, user_set;
	page_total = data.page;
	if(page_total == 0){
		$('.pageControlWrap').hide();
		return false;
	}
	page_wrap_control();
	$('.pageControlWrap').show();
	user = data.users;
	for(i in user){
		rank_name = user[i].nick;
		rank_id = user[i].uid;
		rank_point = user[i].score;
		user_set = 'user_info.html?'+user[i].uid;
		$('#J_sort_content').append(rank_tpl.replace('{rank_no}',rank_no).replace('{rank_name}',rank_name).replace('{rank_id}',rank_id).replace('{rank_point}',rank_point).replace('{new_point}',rank_point).replace('{user_set}',rank_id));
		rank_ids_arr.push(rank_id);
		rank_no++;
	}
	if($("#J_sort_num").find("option:selected").attr('state')!=0){
		$('.sort_point').addClass('point_modify');
		$('#J_sort_content .sort_title .sort_point').removeClass('point_modify');
	}
};

$("#J_sort_list_id").click(function(){
	var id_string = rank_ids_arr.join(',');
	window.parent.$('body').append(tpl.list_id_box.replace('{user_id}',id_string));
});


$('#J_sort_type a').click(function(){
	if( $(this).attr('value') == type_cur ){
		return false;
	}else{
		$('#J_sort_type a').eq(type_cur-1).removeClass('a_cur');
		$(this).addClass('a_cur');
		type_cur = $(this).attr('value'); 
		rank_list_show();
	}
	if( $(this).attr('value') == 3 ){
		$('#J_rank_money_user').css('display','block');
	}else{
		$('#J_rank_money_user').css('display','none');
	}
});

function page_wrap_control(){
	page_prev1 = page_now - 1;
	page_prev2 = page_now - 2;
	page_next1 = page_now - - 1;
	page_next2 = page_now - - 2;
	
	$('#pageNum').text(page_total);
	
	$('#page_now').attr('value',page_now).text(page_now);
	
	if(page_now==1){
		$('#page_prev').attr('value',page_now);
		$('#page_prev1').hide();
		$('#page_prev2').hide();
	}else if(page_now==2){
		$('#page_prev').attr('value',page_prev1);
		$('#page_prev1').attr('value',page_prev1).text(page_prev1).show();
		$('#page_prev2').hide();
	}else{
		$('#page_prev').attr('value',page_prev1);
		$('#page_prev1').attr('value',page_prev1).text(page_prev1).show();
		$('#page_prev2').attr('value',page_prev2).text(page_prev2).show();
	}
	if(page_now==page_total){
		$('#page_next').attr('value',page_now);
		$('#page_next1').hide();
		$('#page_next2').hide();
	}else if(page_now==page_total-1){
		$('#page_next').attr('value',page_next1);
		$('#page_next1').attr('value',page_next1).text(page_next1).show();
		$('#page_next2').hide();
	}else{
		$('#page_next').attr('value',page_next1);
		$('#page_next1').attr('value',page_next1).text(page_next1).show();
		$('#page_next2').attr('value',page_next2).text(page_next2).show();
	}
}

$('.sort_name a').live('click',function(){
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
	
	window.parent.$("#J_iframe").height(3300);//2200//2420+40*6+230*2+40+100
	
	getUserInfo(user_info_id);

});