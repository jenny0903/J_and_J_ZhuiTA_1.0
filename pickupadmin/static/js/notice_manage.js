var page_now = 0, 
	page_to = 1,
	control_flag = 0;
$(document).ready(function(){
	get_notice_list(page_to);
});

var notice_tpl=[
	'<li id="{id}" class="content">',
		'<div class="notice_num">{num}</div>',
		'<input type="text" class="notice_title" value="{title}" />',
		'<input type="text" class="notice_page" value="{noticepage}" />',
		'<input type="text" class="notice_date" value="{noticedate}" />',
		'<a class="delete_notice" href="javascript:;">删除</a>',
		// '<a class="update_notice" href="javascript:;">修改</a>',
	'</li>',
].join('');

var notice_tpl_add=[
	'<li id="{id}" class="content">',
		'<div class="notice_num">{num}</div>',
		'<input type="text" class="notice_title" value="{title}" />',
		'<input type="text" class="notice_page" value="{noticepage}" />',
		'<div class="notice_date">{noticedate}</div>',
		'<a class="add_notice" href="javascript:;">保存</a>',
		'<a class="cancel_add" href="javascript:;">取消</a>',
	'</li>'
].join('');

function get_notice_list(page){
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
		url: ajax_main_path+'libs/controller/get_notice.php',
		data:'num=10&page='+page,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			display_notice(data);
			window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
		}
	});
}

function display_notice(data){
	var total_page = data.total;
	page_now = page_to;	
	if(total_page>0){
		$('.management_wrap ul li.content').remove();
		$('.notice_page_wrap a').remove();
	}else{			
		return false;
	}
	
	for(var i_page=1; i_page <= Math.ceil(total_page/10); i_page++){
		if(i_page == page_to){
			$('.notice_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
		}else{
			$('.notice_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
		}
	}
	
	var id, uid, title, link, status, created_date;
	
	for(i_notice in data.notify){
		id = data.notify[i_notice].id;
		title = data.notify[i_notice].title;
		link = data.notify[i_notice].link;
		created_date = data.notify[i_notice].created_date;	
		// num = i_notice- -1;
		num = ++i_notice;

		$('.management_wrap ul').append(notice_tpl.replace('{num}',num).replace('{id}',id).replace('{title}',title).replace('{noticepage}',link).replace('{noticedate}',created_date));
	}
};

$('.notice_page_wrap a').die().live('click',function(){
	page_to = $(this).attr('value');
	if(page_to != page_now){
		get_notice_list(page_to);
	}
});

$('.manage_btn_new').click(function(){
	if(!$('.manage_btn_new').hasClass('btn_disable')){
		window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+46);
		$('.management_wrap ul li.content:eq(0)').css('margin-top','35px');
		$('.manage_btn_new').addClass('btn_disable');
		$('.management_wrap ul li.title').append(notice_tpl_add.replace('{num}','').replace('{id}','').replace('{title}','').replace('{noticepage}','').replace('{noticedate}',''));
	}	
});

$('.add_notice').die().live('click',function(){
	var title = $(this).parent().find(':input').eq(0).val();
	var link = $(this).parent().find(':input').eq(1).val();
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/add_notice.php',
		data:'title='+title+'&link='+link,
		dataType:"JSON",
		async: false,
		success: function(data){
			if( data == '1' ||data==1){
				$('.manage_btn_new').removeClass('btn_disable');
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
			window.location.reload();
		}
	});
});

$('.cancel_add').die().live('click',function(){
	// window.parent.$("#J_iframe").height($(".inner_main_wrap").height()-34);
	if($('.management_wrap ul li.content').length > 1){
		$('.management_wrap ul li.content:eq(1)').css('margin-top','0');
	}
	$('.manage_btn_new').removeClass('btn_disable');
	$(this).parent().remove();
});

$('.delete_notice').die().live('click',function(){
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除吗？');
		window.parent.$("#J_confirm_wrap").show();
	}
	
	var this_p = $(this).parent();	
	var noticeid = this_p.attr("id");
	
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
			url: ajax_main_path+'libs/controller/delete_notice.php',
			data:'id='+noticeid,
			dataType:"JSON",
			async: false,
			success: function(data){
				this_p.slideUp(500);	
				window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
			}
		});	
		window.location.reload();
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
	});
});

// $('.update_notice').die().live('click',function(){
	// var giftid = $('.update_gift').parent().attr("id");
	// var name = $(this).parent().find(':input').eq(1).val();
	// var price = $(this).parent().find(':input').eq(4).val();
	// var unit = $(this).parent().find(':input').eq(5).val();
	// var image = $(this).parent().find(':input').eq(3).val();
	// var icon = $(this).parent().find(':input').eq(2).val();
	// var position = $(this).parent().find(':input').eq(0).val();
	
	// $.ajax({
		// type: "POST",
		// url: ajax_main_path+'libs/controller/update_notice.php',
		// data:'id='+giftid+'&name='+name+'&icon='+icon+'&image='+image+'&price='+price+'&unit='+unit+'&position='+position+'&discount=0&status=1',
		// dataType:"JSON",
		// async: false,
		// success: function(data){
			// if( data == '1' ||data==1){
				// $('.manage_btn_new').removeClass('btn_disable');
				// if(window.parent.$("#J_alert_wrap").length==0){
					// window.parent.$('body').append(tpl.alert_box);
					// window.parent.$("#J_alert_wrap .alert_content").text('修改成功！');
					// window.parent.$("#J_alert_wrap").show();
				// }else{
					// window.parent.$("#J_alert_wrap .alert_content").text('修改成功！');
					// window.parent.$("#J_alert_wrap").show();							
				// }
			// }else{
				// if(window.parent.$("#J_alert_wrap").length==0){
					// window.parent.$('body').append(tpl.alert_box);
					// window.parent.$("#J_alert_wrap .alert_content").text('修改失败，请重试！');
					// window.parent.$("#J_alert_wrap").show();
				// }else{
					// window.parent.$("#J_alert_wrap .alert_content").text('修改失败，请重试！');
					// window.parent.$("#J_alert_wrap").show();							
				// }
			// }
			// setTimeout(hideAlert, 1000);
		// }
	// });
// });

window.parent.$('#J_cancel_btn').die().live('click',function(){
	window.parent.$("#J_confirm_wrap").hide();
});