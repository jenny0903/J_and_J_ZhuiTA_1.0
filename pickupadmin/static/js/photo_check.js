var page_now = 0, 
	page_to = 1,
	control_flag = 0;
$(document).ready(function(){
	get_complain_list(page_to);
});
function get_complain_list(page){
	control_flag = 0;
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
		url: ajax_main_path+'libs/controller/get_report_user.php',
		data:'num=10&page='+page,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			display_complain(data);
			window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
		}
	});
}
var complain_tpl=[
		'<li>',
			'<input type="checkbox" autocomplete="off" name="select" class="complain_select" />',
			'<div class="photo_box">',
				'<img src="{img_url}"/>',
			'</div>',
			'<div class="user_info">',
				'<input type="hidden" name="uid" class="uid" value="{uid}"/>',
				'<p class="complain_time">被举报次数：{num}</p>',
				'<p class="complain_gender">性别：{gender}</p>',
				'<div class="opration_btn_box">',
					'<a class="btn single_pass" href="javascript:;">通过</a>',
					'<a class="btn single_delete" href="javascript:;">删除</a>',
					'<a class="btn single_block" href="javascript:;">封号</a>',
				'</div>',
			'</div>',
		'</li>'
	].join('');
var selected_num = 0;
$('#J_complain_wrap input[name="select"]').die().live('click',function(){
	if( $(this).attr('checked') == 'checked' ){
		selected_num = selected_num+1;
	}else{
		selected_num = selected_num-1;
	}
	if(selected_num>0){
		control_flag = 1;
		$('.abatch_action a').removeClass('btn_disable');
	}else{
		control_flag = 0;
		$('.abatch_action a').addClass('btn_disable');
		$('#J_select_all').removeClass('btn_disable');
	}
});
function display_complain(data){
	var total_page = Math.ceil(data.total/10);
	page_now = page_to;
	
	if(total_page>0){
		$('.complain_wrap ul li').remove();
		$('.complain_page_wrap a').remove();
		
		$('.abatch_action a').addClass('btn_disable');
		$('#J_select_all').removeClass('btn_disable');
	
		$('#J_blank_complain').hide();
		$('.complain_wrap ul').show();
		$('.complain_page_wrap').show();
	}else{			
		$('.abatch_action a').addClass('btn_disable');
		
		$('#J_blank_complain').show();
		$('.complain_wrap ul').hide();
		$('.complain_page_wrap').hide();
		
		return false;
	}
	
	for(var i_page=1;i_page<=total_page;i_page++){
		if(i_page==page_to){
			$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
		}else{
			$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
		}
	}
	
	var uid, num, gender,img_id, img_url;
	
	for(i_user in data.reports){
		uid = data.reports[i_user].uid;
		num = data.reports[i_user].count;
		switch(data.reports[i_user].gender){
			case 'male':
				gender = '男';
				break;
			case 'female':
				gender = '女';
				break;
		}
		img_id = data.reports[i_user].avatar.value;
		img_url = ajax_main_path+'libs/controller/get_avatar.php?id='+img_id;
	
		$('.complain_wrap ul').append(complain_tpl.replace('{uid}',uid).replace('{num}',num).replace('{gender}',gender).replace('{img_url}',img_url));
		
		$(".photo_box img").bind("error",function(){   
			$(this).attr('src',"../static/images/error_img.jpg");
		}); 
	}
};
$('#J_select_all').click(function(){
	$('#J_complain_wrap input[name="select"]').attr('checked','checked');
	selected_num = $('#J_complain_wrap input[name="select"]').length;
	if(selected_num>0){
		control_flag = 1;
		$('.abatch_action a').removeClass('btn_disable');
	}else{
		control_flag = 0;
		$('.abatch_action a').addClass('btn_disable');
		$('#J_select_all').removeClass('btn_disable');
	}
});
$('.complain_page_wrap a').die().live('click',function(){
	page_to = $(this).attr('value');
	if(page_to!=page_now){
		get_complain_list(page_to);
	}
});
function operationUser(id,elem,type){
	switch(type){
		case 'pass':
			var operation_url=ajax_main_path+'libs/controller/delete_report_user.php';
			break;
		case 'delete':
			var operation_url=ajax_main_path+'libs/controller/delete_user_avatar.php';
			break;	
		case 'block':
			var operation_url=ajax_main_path+'libs/controller/block_user.php';
			break;
	}
	$.ajax({
		type: "POST",
		url: operation_url,
		data:'id='+id,
		dataType:"JSON",
		async: false,
		success: function(data){
			if(data==1||data=='1'){
				elem.slideUp('fast');
			}else{
				return false;
			}
		}
	});
};
$('#J_list_pass').click(function(){
	if(control_flag == 1){
		if(window.parent.$("#J_confirm_wrap").length==0){
			window.parent.$('body').append(tpl.confirm_box);
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要通过吗？');
			window.parent.$("#J_confirm_wrap").show();
		}else{
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要通过吗？');
			window.parent.$("#J_confirm_wrap").show();
		}
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
		$('#J_complain_wrap input[name="select"]:checked').each(function( index ){
			var this_id = $(this).parents('li').find('.uid').val();
			var this_elem = $(this).parents('li');
			operationUser(this_id, this_elem,'pass');
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
		window.location.reload();
	});
});
$('#J_list_delete').click(function(){
	if(control_flag == 1){
		if(window.parent.$("#J_confirm_wrap").length==0){
			window.parent.$('body').append(tpl.confirm_box);
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除吗？');
			window.parent.$("#J_confirm_wrap").show();
		}else{
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除吗？');
			window.parent.$("#J_confirm_wrap").show();
		}
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
		$('#J_complain_wrap input[name="select"]:checked').each(function( index ){
			var this_id = $(this).parents('li').find('.uid').val();
			var this_elem = $(this).parents('li');
			operationUser(this_id, this_elem,'delete');
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
		window.location.reload();
	});
});
$('#J_list_block').click(function(){
	if(control_flag == 1){
		if(window.parent.$("#J_confirm_wrap").length==0){
			window.parent.$('body').append(tpl.confirm_box);
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要封号吗？');
			window.parent.$("#J_confirm_wrap").show();
		}else{
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要封号吗？');
			window.parent.$("#J_confirm_wrap").show();
		}
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
		$('#J_complain_wrap input[name="select"]:checked').each(function( index ){
			var this_id = $(this).parents('li').find('.uid').val();
			var this_elem = $(this).parents('li');
			operationUser(this_id, this_elem,'block');
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
		window.location.reload();
	});
});
$('.opration_btn_box .single_pass').die().live('click',function(){
	var this_id = $(this).parents('.user_info').find('.uid').val();
	var this_elem = $(this).parents('li');
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要通过吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要通过吗？');
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
		operationUser(this_id, this_elem,'pass');
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
		window.location.reload();
	});
});
$('.opration_btn_box .single_delete').die().live('click',function(){
	var this_id = $(this).parents('.user_info').find('.uid').val();
	var this_elem = $(this).parents('li');
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除吗？');
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
		operationUser(this_id, this_elem,'delete');
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
		window.location.reload();
	});
});
$('.opration_btn_box .single_block').die().live('click',function(){
	var this_id = $(this).parents('.user_info').find('.uid').val();
	var this_elem = $(this).parents('li');
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要封号吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要封号吗？');
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
		operationUser(this_id, this_elem,'block');
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
		window.location.reload();
	});
});
window.parent.$('#J_cancel_btn').die().live('click',function(){
	window.parent.$("#J_confirm_wrap").hide();
});