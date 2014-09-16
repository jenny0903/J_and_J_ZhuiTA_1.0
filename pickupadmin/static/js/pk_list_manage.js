var num_cur;
var page_items = 10, page = 1, max_page = 1;
var pk_num = 0;
var tpl_pk_list_content=[
	'<li data-id="{pk_id}" data-status="{status}"  data-winner="{winner}"  data-loser="{loser}">',
		'<div class="pk_no">{pk_no}</div>',
		'<div class="initiator" data-id="{initiator}" data-vote="{initiator_vote}" data-canvass="{initiator_canvass}">{initiator_nickname}</div>',
		'<div class="vs"  data-start="{start_time}" data-end="{end_time}"  data_total="{total_vote}">VS</div>',
		'<div class="acceptor" data-id="{acceptor}" data-vote="{acceptor_vote}" data-canvass="{acceptor_canvass}">{acceptor_nickname}</div>',
		'<a href="javascript:;" class="delete_pk">删除</a>',
		'<a href="javascript:;" class="update_pk">修改</a>',
	'</li>'
].join('');
var tpl_pk_info = [
	'<div class="edit_pk_wrap" data="" id="J_edit_pk_wrap">',
		'<ul>',
			'<li class="new_hide">',
				'<span class="title">id</span>',
				'<span id="J_edit_pk_id"></span>',
			'</li>',
			'<li class="new_hide">',
				'<span class="title">开始时间</span>',
				'<span id="J_edit_pk_start"></span>',
			'</li>',
			'<li class="new_hide">',
				'<span class="title">结束时间</span>',
				'<span id="J_edit_pk_end"></span>',
			'</li>',
			'<li>',
				'<span class="title">状态</span>',
				'<span id="J_edit_pk_status"></span>',
			'</li>',
			'<li>',
				'<span class="title">发起者</span>',
				'<span id="J_edit_pk_initiator"  data-id=""></span>',
			'</li>',
			'<li>',
				'<label for="J_edit_pk_initiator_vote">发起者票数</label>',
				'<input id="J_edit_pk_initiator_vote" name="J_edit_pk_initiator_vote" type="text" value="" data-value="" />',
			'</li>',
			'<li>',
				'<label for="J_edit_pk_initiator_canvass">发起者宣言</label>',
				'<input id="J_edit_pk_initiator_canvass" name="J_edit_pk_initiator_canvass" type="text" value="" data-value="" />',
			'</li>',
			'<li>',
				'<span class="title">接受者</span>',
				'<span id="J_edit_pk_acceptor" data-id=""></span>',
			'</li>',
			'<li>',
				'<label for="J_edit_pk_acceptor_vote">接受者票数</label>',
				'<input id="J_edit_pk_acceptor_vote" name="J_edit_pk_acceptor_vote" type="text" value="" data-value="" />',
			'</li>',
			'<li>',
				'<label for="J_edit_pk_acceptor_canvass">接受者宣言</label>',
				'<input id="J_edit_pk_acceptor_canvass" name="J_edit_pk_acceptor_canvass" type="text" value="" data-value="" />',
			'</li>',
			'<li>',
				'<span class="title">胜者</span>',
				'<span id="J_edit_pk_winner"></span>',
			'</li>',
			'<li>',
				'<span class="title">败者</span>',
				'<span id="J_edit_pk_winner"></span>',
			'</li>',
		'</ul>',
		'<div class="pk_btn_box">',
			'<a id="J_save_edit_pk" class="btn" href="javascript:;">保存</a>',
			'<a id="J_cancel_edit_pk" class="btn" href="javascript:;">返回</a>',
		'</div>',
	'</div>'
].join('');

$(document).ready(function(){
	type_num_change();
});

function type_num_change(){
	num_cur = $("#J_type_num").find("option:selected").val();
	get_pk_list();
};
function get_pk_list(){
	$('#result_box li[class!="title"]').remove();
	$('.pk_list_page_wrap *').remove();
	
	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在查找，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在查找，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}
	
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/get_pk_market.php',
		data: 'gender='+num_cur+'&page='+page+'&num='+page_items,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			if( data!='' && data!='[]'){
				if( data.total_num ){
					loadResultInfo(data);
				}
			}
		}
	});
}
function loadResultInfo(data){
	var pk_id, initiator, initiator_vote, initiator_canvass, acceptor, acceptor_vote, acceptor_canvass, start, end, status, total_vote,initiator_nickname,acceptor_nickname;
	var winner, loser;

	pk_num = page_items*(page-1);
	var pks = data.data;
	max_page = Math.ceil(data.total_num/page_items);

	for(i in pks){
	
		pk_id = pks[i].id;
		initiator = pks[i].initiator;
		initiator_vote = pks[i].initiator_vote;
		initiator_canvass = pks[i].initiator_canvass;
		acceptor = pks[i].acceptor;
		acceptor_vote = pks[i].acceptor_vote;
		acceptor_canvass = pks[i].acceptor_canvass;
		var start_s = pks[i].start.split('T')[0];
		var end_s = pks[i].end.split('T')[0];
		start = pks[i].start;
		end = pks[i].end;
		status = pks[i].status;

		total_vote = pks[i].total_vote;
		initiator_nickname = pks[i].initiator_nickname;
		acceptor_nickname = pks[i].acceptor_nickname;
		
		if( status == 1){
			if( initiator_vote > acceptor_vote){
				winner = initiator_nickname;
				loser = acceptor_nickname;
			}else if( initiator_vote < acceptor_vote){
				winner = acceptor_nickname;
				loser = initiator_nickname;
			}else{
				winner = initiator_nickname+"，"+acceptor_nickname;
				loser = '';
			}
		}else{
			winner = '';
			loser = '';
		}
			
		pk_num++;
		
		$('#result_box').append(tpl_pk_list_content.replace('{status}',status).replace('{winner}',winner).replace('{loser}',loser).replace('{pk_id}',pk_id).replace('{pk_no}',pk_num).replace('{initiator}',initiator).replace('{initiator_nickname}',initiator_nickname).replace('{initiator_canvass}',initiator_canvass).replace('{acceptor_canvass}',acceptor_canvass).replace('{initiator_vote}',initiator_vote).replace('{acceptor_vote}',acceptor_vote).replace('{acceptor}',acceptor).replace('{acceptor_nickname}',acceptor_nickname).replace('{start}',start_s).replace('{end}',end_s).replace('{start_time}',start).replace('{end_time}',end).replace('{total_vote}',total_vote));	
	}
	
	for(var i_page=1;i_page<=max_page;i_page++){
		if(i_page==page){
			$('.pk_list_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
		}else{
			$('.pk_list_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
		}
	}
	
	window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
}

function getPkInfo(pk_id, initiator, initiator_vote, initiator_canvass, acceptor, acceptor_vote, acceptor_canvass, start, end, status, winner, loser,initiator_id,acceptor_id){
		$('#J_edit_pk_wrap').attr('data',1);
		if($('#J_edit_pk_wrap').height() > $('.inner_main_wrap').height()){
			window.parent.$("#J_iframe").height($("#J_edit_pk_wrap").height()+6);
		}	
		$('#J_edit_pk_id').text(pk_id);
		$('#J_edit_pk_start').text(start);
		$('#J_edit_pk_end').text(end);
		$('#J_edit_pk_status').text(status);
		$('#J_edit_pk_initiator').text(initiator);
		$('#J_edit_pk_initiator').attr('data-id',initiator_id);
		$('#J_edit_pk_initiator_vote').val(initiator_vote);
		$('#J_edit_pk_initiator_vote').attr('date-value',initiator_vote);
		$('#J_edit_pk_initiator_canvass').val(initiator_canvass);
		$('#J_edit_pk_initiator_canvass').attr('date-value',initiator_canvass);
		$('#J_edit_pk_acceptor').text(acceptor);
		$('#J_edit_pk_acceptor').attr('data-id',acceptor_id);
		$('#J_edit_pk_acceptor_vote').val(acceptor_vote);
		$('#J_edit_pk_acceptor_vote').attr('date-value',acceptor_vote);
		$('#J_edit_pk_acceptor_canvass').val(acceptor_canvass);
		$('#J_edit_pk_acceptor_canvass').attr('date-value',acceptor_canvass);
		$('#J_edit_pk_winner').text(winner);
		$('#J_edit_pk_loser').text(loser);
		
		$('#J_edit_pk_wrap').show();
}
$('#result_box .update_pk').live('click',function(){
	if($("#J_pk_info_wrap").length==0){
		$('body').append(tpl_pk_info);
		$("#J_pk_info_wrap").css('height','3260px').show();
	}else{
		$("#J_pk_info_wrap").css('height','3260px').show();
	}
	
	var _this = $(this).parents('li');
	var _pk_id = _this.attr('data-id');
	var _initiator = _this.find('.initiator').text();
	var _initiator_vote = _this.find('.initiator').attr('data-vote');
	var _initiator_canvass = _this.find('.initiator').attr('data-canvass');
	var _acceptor = _this.find('.acceptor').text();
	var _acceptor_vote = _this.find('.acceptor').attr('data-vote');
	var _acceptor_canvass = _this.find('.acceptor').attr('data-canvass');
	var _start = _this.find('.vs').attr('data-start');
	var _end = _this.find('.vs').attr('data-end');
	var _status = _this.attr('data-status');
	var _winner = _this.attr('data-winner');
	var _loser = _this.attr('data-loser');
	var _initiator_id = _this.find('.initiator').attr('data-id');
	var _acceptor_id = _this.find('.acceptor').attr('data-id');
	
	window.parent.$("#J_iframe").height(3260);//2200//2420+40*6+230*2+40+100
	getPkInfo(_pk_id, _initiator, _initiator_vote, _initiator_canvass, _acceptor, _acceptor_vote, _acceptor_canvass, _start, _end, _status, _winner, _loser,_initiator_id,_acceptor_id);
});

$('#result_box .delete_pk').die().live('click',function(){
	var _this = $(this).parents('li');
	
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除这条PK吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除这条PK吗？');
		window.parent.$("#J_confirm_wrap").show();
	}
	var pk_id = _this.attr('data-id');
	
	window.parent.$('#J_confirm_btn').die().live('click',function(){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/delete_pk.php',
			data:'pkid='+pk_id,
			dataType:"JSON",
			async: false,
			success: function(data){
				if( data == '1' ||data==1){
					// type_num_change();
					_this.remove();
				}
			}
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
	});
});
$('#J_save_edit_pk').die().live('click',function(){
	var pk_id = $('#J_edit_pk_id').text();
	var initiator = $('#J_edit_pk_initiator').attr('data-id');
	var initiator_vote = $('#J_edit_pk_initiator_vote').val();
	var initiator_canvass = $('#J_edit_pk_initiator_canvass').val();
	var acceptor = $('#J_edit_pk_acceptor').attr('data-id');
	var acceptor_vote = $('#J_edit_pk_acceptor_vote').val();
	var acceptor_canvass = $('#J_edit_pk_acceptor_canvass').val();
	
	var i_vote = $('#J_edit_pk_initiator_vote').attr('date-value');
	var i_canvass = $('#J_edit_pk_initiator_canvass').attr('date-value');
	var a_vote = $('#J_edit_pk_acceptor_vote').attr('date-value');
	var a_canvass = $('#J_edit_pk_acceptor_canvass').attr('date-value');
	
	var vote_flag = false,canvass_falg = false;
	// var initiator_ajax_flag = false,acceptor_ajax_falg = false;
	
	if( i_vote != initiator_vote ||  a_vote != acceptor_vote){
		vote_flag = true;
	}else{
		vote_flag = false;
	}
	if( i_canvass != initiator_canvass ||  a_canvass != acceptor_canvass){
		canvass_falg = true;
	}else{
		canvass_falg = false;
	}

//ajax请求等待完成 发起者和接受者分开请求 
// console.log(initiator_flag);
// console.log(acceptor_flag);
	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}
	
	if( vote_flag ){
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/update_pk.php',
			data:"pkid="+pk_id+"&tp=vote&initiator="+initiator+"&initiator_num="+initiator_vote+"&acceptor="+acceptor+"&acceptor_num="+acceptor_vote,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data=='1'||data==1){
					 if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('修改成功！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('修改成功！');
						window.parent.$("#J_alert_wrap").show();							
					}
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('票数信息修改失败，请重试！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('票数信息修改失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
				}
				setTimeout(hideAlert, 1000);
			}
		});
	}
	
	if( canvass_falg ){
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/update_pk.php',
			data:"pkid="+pk_id+"&tp=canvass&initiator="+initiator+"&initiator_canvass="+initiator_canvass+"&acceptor="+acceptor+"&acceptor_canvass="+acceptor_canvass,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data=='1'||data==1){
					 if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('修改成功！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('修改成功！');
						window.parent.$("#J_alert_wrap").show();							
					}
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('宣言信息修改失败，请重试！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('宣言信息修改失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
				}
				setTimeout(hideAlert, 1000);
			}
		});	
	}
	$('#J_edit_pk_wrap').remove();
	type_num_change();
});
$('#J_cancel_edit_pk').die().live('click',function(){
	$('#J_edit_pk_wrap').remove();
});
$('.pk_list_page_wrap a').die().live('click',function(){
	var _this = $(this);
	var _this_page = _this.attr('value');
	if(_this_page != page){
		page = _this_page;
		type_num_change();
	}
});
window.parent.$('#J_cancel_btn').die().live('click',function(){
	window.parent.$("#J_confirm_wrap").hide();
});