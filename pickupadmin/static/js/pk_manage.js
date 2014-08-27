var search_zid_flag = false;
var pk_num, pk_id, initiator, initiator_vote, initiator_canvass, acceptor, acceptor_vote, acceptor_canvass, start, end, status, winner, loser, total_vote,initiator_nickname,acceptor_nickname;
var page_items = 10, page = 1, max_page = 1;
var tpl_search_content=[
	'<li>',
		'<div class="pk_no"><a value="{pk_id}" href="javascript:;">{pk_no}</a></div>',
		'<div class="initiator">{initiator}</div>',
		'<div class="acceptor">{acceptor}</div>',
		'<div class="start">{start}</div>',
		'<div class="end">{end}</div>',
		'<div class="total_vote">{total_vote}</div>',
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
				'<span id="J_edit_pk_initiator"></span>',
			'</li>',
			'<li>',
				'<label for="J_edit_pk_initiator_vote">发起者票数</label>',
				'<input id="J_edit_pk_initiator_vote" name="J_edit_pk_initiator_vote" type="text" value="" />',
			'</li>',
			'<li>',
				'<label for="J_edit_pk_initiator_canvass">发起者宣言</label>',
				'<input id="J_edit_pk_initiator_canvass" name="J_edit_pk_initiator_canvass" type="text" value="" />',
			'</li>',
			'<li>',
				'<span class="title">接受者</span>',
				'<span id="J_edit_pk_acceptor"></span>',
			'</li>',
			'<li>',
				'<label for="J_edit_pk_acceptor_vote">接受者票数</label>',
				'<input id="J_edit_pk_acceptor_vote" name="J_edit_pk_acceptor_vote" type="text" value="" />',
			'</li>',
			'<li>',
				'<label for="J_edit_pk_acceptor_canvass">接受者宣言</label>',
				'<input id="J_edit_pk_acceptor_canvass" name="J_edit_pk_acceptor_canvass" type="text" value="" />',
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
			'<a id="J_delete_pk" class="btn" href="javascript:;">删除</a>',
			'<a id="J_save_edit_pk" class="btn" href="javascript:;">保存</a>',
			'<a id="J_cancel_edit_pk" class="btn" href="javascript:;">返回</a>',
		'</div>',
	'</div>'
].join('');
function search_btn_check(){
	if(search_id_flag){
		$("#J_user_zid_search").removeClass('btn_disable');
	}else{
		$("#J_user_zid_search").addClass('btn_disable');
	}
}
$('#search_zid_input').bind({
	keyup: function(){
		if($("#search_zid_input").val()!=''){
			search_id_flag=true;
		}else{
			search_id_flag=false;
		}
		search_btn_check();
	},
	blur: function(){
		if($("#search_zid_input").val()!=''){
			search_id_flag=true;
		}else{
			search_id_flag=false;
		}
		search_btn_check();
	},
	keydown: function(e){
		if($("#search_zid_input").val()!=''){
			search_id_flag=true;
		}else{
			search_id_flag=false;
		}
		search_btn_check();
		if( e.keyCode == 13 ){
			user_search();
		}
	}
});
$('#J_user_zid_search').click(function(){
	user_search('zid');
});
function user_search(){
	$('#result_box .content').remove();
	
	$('#J_pk_items li[class!="title"]').remove();
	$('.complain_page_wrap *').remove();

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
		url: ajax_main_path+'libs/controller/search_pk.php',
		data: 'id='+$('#search_zid_input').val()+'&page='+page+'&num='+page_items,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			if( data!='' && data!='[]'){
				if( data.pks ){
					loadResultInfo(data);
				}
			}else{
				$('#search_count').text('搜索到 0 个结果：');
			}
		}
	});
}
function loadResultInfo(data){
	pk_num = 0;
	var pks = data.pks;
	max_page = Math.ceil(data.total/page_items);
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
		winner = pks[i].winner;
		loser = pks[i].loser;
		total_vote = pks[i].total_vote;
		initiator_nickname = pks[i].initiator_nickname;
		acceptor_nickname = pks[i].acceptor_nickname;
		
		pk_num++;
		
		$('#result_box').append(tpl_search_content.replace('{pk_id}',pk_id).replace('{pk_no}',pk_num).replace('{initiator}',initiator_nickname).replace('{acceptor}',acceptor_nickname).replace('{start}',start_s).replace('{end}',end_s).replace('{total_vote}',total_vote));	
	}
	
	$('#search_count').text('搜索到 '+pk_num+' 个结果：');
	
	for(var i_page=1;i_page<=max_page;i_page++){
		if(i_page==page){
			$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
		}else{
			$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
		}
	}
	
	window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
}

function getPkInfo(pk_id, initiator, initiator_vote, initiator_canvass, acceptor, acceptor_vote, acceptor_canvass, start, end, status, winner, loser, total_vote){
		$('#J_edit_pk_wrap').attr('data',1);
		if($('#J_edit_pk_wrap').height() > $('.inner_main_wrap').height()){
			window.parent.$("#J_iframe").height($("#J_edit_pk_wrap").height()+6);
		}	
		$('#J_edit_pk_id').text(pk_id);
		$('#J_edit_pk_start').text(start);
		$('#J_edit_pk_end').text(end);
		$('#J_edit_pk_status').text(status);
		$('#J_edit_pk_initiator').text(initiator);
		$('#J_edit_pk_initiator_vote').val(initiator_vote);
		$('#J_edit_pk_initiator_canvass').val(initiator_canvass);
		$('#J_edit_pk_acceptor').text(acceptor);
		$('#J_edit_pk_acceptor_vote').val(acceptor_vote);
		$('#J_edit_pk_acceptor_canvass').val(acceptor_canvass);
		$('#J_edit_pk_winner').text(winner);
		$('#J_edit_pk_loser').text(loser);
		$('#J_edit_pk_total_vote').text(total_vote);
		
		$('#J_edit_pk_wrap').show();
}
$('#result_box .pk_no a').live('click',function(){
	if($("#J_pk_info_wrap").length==0){
		$('body').append(tpl_pk_info);
		$("#J_pk_info_wrap").css('height','3260px').show();
	}else{
		$("#J_pk_info_wrap").css('height','3260px').show();
	}
	window.parent.$("#J_iframe").height(3260);//2200//2420+40*6+230*2+40+100
	getPkInfo(pk_id, initiator, initiator_vote, initiator_canvass, acceptor, acceptor_vote, acceptor_canvass, start, end, status, winner, loser, total_vote);
});

$('#J_delete_pk').die().live('click',function(){
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除这条PK吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除这条PK吗？');
		window.parent.$("#J_confirm_wrap").show();
	}
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
					window.location.reload();
				}
			}
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
	});
});
$('#J_save_edit_pk').die().live('click',function(){
	var i_vote = $('#J_edit_pk_initiator_vote').text();
	var i_canvass = $('#J_edit_pk_initiator_canvass').text();
	var a_vote = $('#J_edit_pk_acceptor_vote').text();
	var a_canvass = $('#J_edit_pk_acceptor_canvass').text();
	
	var initiator_flag = false,acceptor_falg = false;
	var initiator_ajax_flag = false,acceptor_ajax_falg = false;
	
	if( i_vote != initiator_vote ||  i_canvass != initiator_canvass){
		initiator_flag = true;
	}else{
		initiator_flag = false;
	}
	if( a_vote != acceptor_vote ||  a_canvass != acceptor_canvass){
		acceptor_flag = true;
	}else{
		acceptor_flag = false;
	}

	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}
	if( initiator_flag ){
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/update_pk.php',
			data:"pkid="+pk_id+"&uid="+initiator+"&initiator=1&num="+i_vote,//todosomething
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data=='1'||data==1){
					initiator_ajax_flag = true;
				}else{
					initiator_ajax_flag = false;
				}
			}
		});			
	}else{
		initiator_ajax_flag = true;
	}
	if( acceptor_flag ){
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/update_pk.php',
			data:"pkid="+pk_id+"&uid="+acceptor+"&initiator=&num="+a_vote,//todosomething
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data=='1'||data==1){
					acceptor_ajax_falg = true;
				}else{
					acceptor_ajax_falg = false;
				}
			}
		});			
	}else{
		acceptor_ajax_falg = true;
	}
	if( initiator_ajax_flag && acceptor_ajax_falg){
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
});
$('#J_cancel_edit_pk').die().live('click',function(){
	// if(window.parent.$("#J_confirm_wrap").length==0){
		// window.parent.$('body').append(tpl.confirm_box);
		// window.parent.$("#J_confirm_wrap .confirm_content").text('确定取消本次编辑？');
		// window.parent.$("#J_confirm_wrap").show();
	// }else{
		// window.parent.$("#J_confirm_wrap .confirm_content").text('确定取消本次编辑？');
		// window.parent.$("#J_confirm_wrap").show();
	// }
	// window.parent.$('#J_confirm_btn').die().live('click',function(){
		// window.parent.$("#J_confirm_wrap").hide();
		// $('#J_edit_pk_wrap').remove();
		// window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
	// });
	$('#J_edit_pk_wrap').remove();
});
window.parent.$('#J_cancel_btn').die().live('click',function(){
	window.parent.$("#J_confirm_wrap").hide();
});