var sex_num_cur,date_num_cur;
var page_items = 10, page = 1, max_page = 1;
var rank_num = 0;
var tpl_pk_rank_content=[
	'<li data-id="{rank_id}" data-id="{rank_date}" data-id="{rank_defeated_count}">',
		'<div class="rank_no">{rank_no}</div>',
		'<div class="rank_user" data-uid="{rank_uid}">{rank_username}</div>',
		'<div class="rank_win_count"><input id="win_count" type="text" value="{rank_win_count}"></input>&nbsp;胜</div>',
		'<a href="javascript:;" id="update_rank" class="update_rank">修改</a>',
	'</li>'
].join('');

$(document).ready(function(){
	type_num_change();
});

function type_num_change(){
	sex_num_cur = $("#J_sex_type_num").find("option:selected").val();
	date_num_cur = $("#J_date_type_num").find("option:selected").val();
	get_pk_rank();
};
function get_pk_rank(){
	$('#result_box li[class!="title"]').remove();
	$('.pk_rank_page_wrap *').remove();
	
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
		url: ajax_main_path+'libs/controller/get_pk_rank.php',
		data: 'gender='+sex_num_cur+'&tp='+date_num_cur+'&page='+page+'&num='+page_items,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			if( data!='' && data!='[]'){
				if( data.total_num ){
					loadResultInfo(data);
				}
			}
		},
		error: function(data){
		}
	});
}
function loadResultInfo(data){
	var rank_id, rank_uid, win_count, defeated_count, total_vote, rank_date ,user_name;

	rank_num = page_items*(page-1);
	var pks = data.data;
	max_page = Math.ceil(data.total_num/page_items);

	for(i in pks){
		rank_id = pks[i].id;
		rank_uid = pks[i].uid;
		win_count = pks[i].won_count;
		defeated_count = pks[i].defeated_count;
		total_vote = pks[i].total_vote;
		rank_date = pks[i].pk_date;
		user_name = pks[i].user_name;
	
		rank_num++;
	
		$('#result_box').append(tpl_pk_rank_content.replace('{rank_id}',rank_id).replace('{rank_no}',rank_num).replace('{rank_uid}',rank_uid).replace('{rank_username}',user_name).replace('{rank_win_count}',win_count).replace('{rank_defeated_count}',defeated_count).replace('{rank_date}',rank_date));	
	}
	
	for(var i_page=1;i_page<=max_page;i_page++){
		if(i_page == page){
			$('.pk_rank_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
		}else{
			$('.pk_rank_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
		}
	}
	
	window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
}

$('#update_rank').die().live('click',function(){
	var _this = $(this).parents('li');
	var rank_id = _this.attr("data-id");
	var won_count = _this.find('#win_count').val();

	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在修改，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在修改，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/update_pk_rank.php',
		data:'id='+rank_id+'&won_count='+won_count,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			if(data=='1' || data==1){
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
});

$('.pk_rank_page_wrap a').die().live('click',function(){
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