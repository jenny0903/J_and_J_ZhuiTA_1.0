var forum = {
	page_items : 10,
	page : 1,
	max_page : 1,
	tpl : [
		'<li data={id} data-uid={uid} data-thread={thread_id} data-kind={kind} data-is-gag={gag_is} data-is-essence={essence_is} data-is-top={top_is}>',
			'<input type="checkbox" autocomplete="off" name="select" class="report_select" />',
			'<div class="post_title">{post_title}</div>',
			'<span class="num">{num}</span>',
			'<span class="report_content"><a href="javascript:;">{report_content}</a></span>',
			'<span class="memo">{memo}</span>',
			'<span class="created_date">{created_date}</span>',
			//'<span class="is_gag">{is_gag}</span>',
			//'<span class="is_essence">{is_essence}</span>',
			'<span class="operation">',
				//'<span class="delete_report"><a href="javascript:;">清除</a></span>',
				//'<span class="delete_post"><a href="javascript:;">删帖</a></span>',
				//'<span class="delete_reply"><a href="javascript:;">删除回复</a></span>',
				'<span class="is_gag">{is_gag}</span>',
				'{action}',
				// '<select class="user_status" onchange="select_gag_time(this)">',
					// '<option value="0" disabled="disabled" selected="selected"></option>',
					// '<option value="1">禁言3天</option>',
					// '<option value="2">禁言7天</option>',
					// '<option value="3">永久禁言</option>',
				// '</select>',
				//'<span class="set_essence"><a href="javascript:;">精华</a></span>',
				//'<span class="delete_essence"><a href="javascript:;">X</a></span>',
			'</span>',
		'</li>'
	].join(''),
	tpl_select :[
		'<select class="user_status" onchange="select_gag_time(this)">',
			'<option value="0" disabled="disabled" selected="selected"></option>',
			'<option value="1">禁言3天</option>',
			'<option value="2">禁言7天</option>',
			'<option value="3">永久禁言</option>',
		'</select>',
	].join(''),
	tpl_button :[
		'<a href="javascript:;">取消禁言</a>',
	].join(''),
	list_reports : function(){
		$('#J_forum li[class!="title"]').remove();
		$('.complain_page_wrap *').remove();
		
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
			url: ajax_main_path+'libs/controller/get_report_list.php',
			data : 'page='+forum.page+'&num='+forum.page_items,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				var forum_report_list = data.items;
				var forum_report_num,forum_report_user,forum_report_content,forum_report_memo,forum_report_created_date,post_title,action;
				//var user_url,exchange_user_name, user_id;
				forum.max_page = Math.ceil(data.total/forum.page_items);
				for(forum_report_i in forum_report_list){
					forum_report_num = forum_report_list[forum_report_i].id;
					forum_report_id = forum_report_list[forum_report_i].id;
					forum_report_user = forum_report_list[forum_report_i].report_user_id;
					forum_reported_user = forum_report_list[forum_report_i].user_id;
					forum_report_content = forum_report_list[forum_report_i].kind;
					forum_report_kind = forum_report_list[forum_report_i].kind;
					forum_thread_id = forum_report_list[forum_report_i].thread_id;
					forum_is_gag = forum_report_list[forum_report_i].is_gag;
					forum_is_essence = forum_report_list[forum_report_i].is_essence;
					post_title = forum_report_list[forum_report_i].title;
					switch(forum_report_content){
						case 0:
							forum_report_content = '帖子';
							break;
						case 1:
							forum_report_content = '回复';
							break;
						default:
							forum_report_content = '';
							break;
					}
					switch(forum_is_gag){
						case 404:
							forum_is_gag = '未禁言';
							action = forum.tpl_select;
							break;
						case 1:
							forum_is_gag = '已禁言';
							action = forum.tpl_button;
							break;
						default:
							forum_is_gag = '';
							break;
					}
					switch(forum_is_essence){
						case 0:
							forum_is_essence = 1;
							break;
						case 1:
							forum_is_essence = 2;
							//$('#set_essence').addClass(btn_disable);
							break;
						default:
							forum_is_essence = '';
							break;
					}
					if(forum_report_user == ''){
						forum_report_user == 'null';
					}
					forum_report_memo = forum_report_list[forum_report_i].memo;
					if(forum_report_memo == ''){
						forum_report_memo == 'null';
					}
					forum_report_created_date =  forum_report_list[forum_report_i].created_date.substr(0,10);
					if(forum_report_created_date == ''){
						forum_report_created_date == 'null';
					}
					
					$('#J_forum').append(forum.tpl.replace('{num}',forum_report_num).replace('{report_user}',forum_reported_user).replace('{report_content}',forum_report_content).replace('{memo}',forum_report_memo).replace('{created_date}',forum_report_created_date).replace('{id}',forum_report_id).replace('{uid}',forum_reported_user).replace('{thread_id}',forum_thread_id).replace('{pid}',forum_thread_id).replace('{kind}',forum_report_kind).replace('{is_gag}',forum_is_gag).replace('{essence_is}',forum_is_essence).replace('{post_title}',post_title).replace('{action}',action));
					
				}
				$('.forum_action a').addClass('btn_disable');
				$('#J_select_all').removeClass('btn_disable');
				for(var i_page=1;i_page<=forum.max_page;i_page++){
					if(i_page==forum.page){
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
					}else{
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
					}
				}
				
				window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
			
			}
		});
	},
	delete_item : function(_this_li){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		var del_id = _this_li.attr('data');
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/delete_forum_report.php',
			data : 'id='+del_id,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1){
					_this_li.slideUp('fast');
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('删除失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('删除失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	/*
	set_gag : function(_this_li){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		var uid = _this_li.attr('data-uid');
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/set_gag.php',
			data : 'uid='+uid,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1){
					_this_li.children('.is_gag').text('已禁言');
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('禁言失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('禁言失败，请重试！');
						window.parent.$("#J_alert_wrap").show();	
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	*/
	set_gag_time : function(_this_li,gag_time){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		var uid = _this_li.attr('data-uid');
		switch(gag_time){
			case 1 : 
				gag_time = 3;
				break;
			case 2 : 
				gag_time = 7;
				break;
			case 3 : 
				gag_time = 1;
				break;
		}
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/set_gag.php',
			data : 'id='+uid+'&gag_time='+gag_time,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1){
					if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
						window.parent.$("#J_alert_wrap").show();	
					}
					_this_li.find('.is_gag').text('已禁言');
					_this_li.find('select.user_status').remove();
					_this_li.find('.operation').append(forum.tpl_button);
					setTimeout(hideAlert, 1000);
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('禁言失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('禁言失败，请重试！');
						window.parent.$("#J_alert_wrap").show();	
					}
				setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	delete_gag : function(_this_li){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		var uid = _this_li.attr('data-uid');
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/delete_gag.php',
			data : 'uid='+uid,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1){
					_this_li.children('.is_gag').text('未禁言');
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('删除禁言失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('删除禁言失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					forum.is_gag = 1;
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	/*
	set_essence : function(_this_li){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		var post_id = _this_li.attr('data-thread');
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/set_essence.php',
			data : 'id='+post_id,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1){
					_this_li.children('.is_essence').text('已设精华');
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('设置失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('设置失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					forum.is_essence = 0;
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	*/
	delete_essence : function(_this_li){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		var post_id = _this_li.attr('data-thread');
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/delete_essence.php',
			data : 'id='+post_id,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1){
					_this_li.children('.is_essence').text('未设精华');
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('设置失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('设置失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					forum.is_essence = 1;
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	delete_post : function(_this_li){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		var id = _this_li.attr('data-thread');
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/delete_post.php',
			data : 'id='+id,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1){
					
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('删除帖子失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('删除帖子失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	delete_reply : function(_this_li){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		var id = _this_li.attr('data-thread');
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/delete_reply.php',
			data : 'id='+id,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1){
					
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('删除帖子失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('删除帖子失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	get_post_info: function(thread_id,essence_is){
		$('#post_id').text('');
		$('#post_user').text('');
		$('#post_title').text('');
		$('#post_content').text('');
		$('#reply_count').text('');
		$('#post_flag').text('');
		$('#created_time').text('');
		$('#reply_last_updated').text('');
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/get_post_info.php',
			data : 'id='+thread_id,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				var post_info = data;
				var post_id =data.id;
				var post_user =data.user_id;
				var post_title =data.title;
				var post_content =data.content;
				var reply_count =data.reply_count;
				var post_flag =data.flag;
				var created_time =data.created_time;
				var reply_last_updated =data.reply_last_updated;
				var top_is = data.sticky;
				$('#post_id').text(post_id);
				$('#post_user').text(post_user);
				$('#post_title').text(post_title);
				$('#post_content').text(post_content);
				$('#reply_count').text(reply_count);
				$('#post_flag').text(post_flag);
				$('#created_time').text(created_time);
				$('#reply_last_updated').text(reply_last_updated);
					if (essence_is == 1){
						//$('#set_top').before(tpl_button_essence_on);
						$('.post_info').append(tpl_button_essence_off);
					}else{
						//$('#set_top').before(tpl_button_essence_off);
						$('.post_info').append(tpl_button_essence_on);
					}
					
					if (top_is == 1){
						$('.post_info').append(tpl_button_top_off);
					}else{
						$('.post_info').append(tpl_button_top_on);
					}
				//}
				var list_h = $(".forum").height();
				var info_h = $(".forum_post").height();
				if(list_h > info_h){
					window.parent.$("#J_iframe").height(list_h+6);
					$(".forum_post").css({'height':list_h - - 6 +'px'});
				}
			}
		});
	},
	get_reply_info: function(thread_id){
		$('#id').text('');
		$('#user_id').text('');
		$('#post_id').text('');
		$('#reply_id').text('');
		$('#reply_user_id').text('');
		$('#reply_user_name').text('');
		$('#content').text('');
		$('#rate_count').text('');
		$('#created_date').text('');
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/get_reply_info.php',
			data : 'id='+thread_id,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				var post_info = data;
				
				var id =data.id;
				var user_id =data.user_id;
				var post_id =data.post_id;
				var reply_id =data.reply_id;
				var reply_user_id =data.reply_user_id;
				var reply_user_name =data.reply_user_name;
				var content =data.content;
				var rate_count =data.rate_count;
				var created_date =data.created_date;
				
				$('#id').text(id);
				$('#user_id').text(user_id);
				$('#post_id').text(post_id);
				$('#reply_id').text(reply_id);
				$('#reply_user_id').text(reply_user_id);
				$('#reply_user_name').text(reply_user_name);
				$('#content').text(content);
				$('#rate_count').text(rate_count);
				$('#created_date').text(created_date);
				
				var list_h = $(".forum").height();
				var info_h = $(".forum_reply").height();
				if(list_h > info_h){
					window.parent.$("#J_iframe").height(list_h+6);
					$(".forum_reply").css({'height':list_h - - 6 +'px'});
				}
			}
		});
	}
}
$('#J_forum .report_content').die().live('click',function(){
	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}

	var thread_id =$(this).parents('li').attr('data-thread');
	var kind=$(this).parents('li').attr('data-kind');
	var essence_is =$(this).parents('li').attr('data-is-essence');
	
	if(kind == 0){
		if($("#J_post_info_wrap").length==0){
			$('body').append(tpl_post_info);
			$("#J_post_info_wrap").css('height','3260px').show();
		}else{
			$("#J_post_info_wrap").css('height','3260px').show();
		}
		
		window.parent.$("#J_iframe").height(3260);//2200//2420+40*6+230*2+40+100
	
		forum.get_post_info(thread_id,essence_is);
	}else if(kind == 1){
		if($("#J_reply_info_wrap").length==0){
			$('body').append(tpl_reply_info);
			$("#J_reply_info_wrap").css('height','3260px').show();
		}else{
			$("#J_reply_info_wrap").css('height','3260px').show();
		}
		
		window.parent.$("#J_iframe").height(3260);//2200//2420+40*6+230*2+40+100
		forum.get_reply_info(thread_id);
	}
});
function operationUser(_this_li,type){
	switch(type){
		case 'delete_report':
			var operation_url=ajax_main_path+'libs/controller/delete_forum_report.php';
			var id = _this_li.attr('data');
			break;
		case 'gag':
			var operation_url=ajax_main_path+'libs/controller/set_gag.php';
			var id = _this_li.attr('data-uid');
			break;	
		case 'delete_gag':
			var operation_url=ajax_main_path+'libs/controller/delete_gag.php';
			var id = _this_li.attr('data-uid');
			break;
		case 'delete_post':
			var operation_url=ajax_main_path+'libs/controller/delete_post.php';
			var id = _this_li.attr('data-thread');
			break;
		case 'delete_reply':
			var operation_url=ajax_main_path+'libs/controller/delete_reply.php';
			var id = _this_li.attr('data-thread');
			break;
		case 'set_essence':
			var operation_url=ajax_main_path+'libs/controller/set_essence.php';
			var id =$('#post_id').text();
			break;
		case 'delete_essence':
			var operation_url=ajax_main_path+'libs/controller/delete_essence.php';
			var id =$('#post_id').text();
			break;
		case 'set_top':
			var operation_url=ajax_main_path+'libs/controller/set_top.php';
			var id =$('#post_id').text();
			break;
		case 'delete_top':
			var operation_url=ajax_main_path+'libs/controller/delete_top.php';
			var id =$('#post_id').text();
			break;
	}
	
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
		url: operation_url,
		data:'id='+id,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			if(data==1||data=='1'){
				switch(type){
					case 'delete_report':
						_this_li.slideUp('fast');
						break;
					case 'gag':
						_this_li.children('.is_gag').text('已禁言');
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
							window.parent.$("#J_alert_wrap").show();							
						}
						setTimeout(hideAlert, 1000);
						break;	
					case 'delete_gag':
						_this_li.find('.is_gag').text('未禁言');
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
							window.parent.$("#J_alert_wrap").show();	
						}
						_this_li.find('.operation a').remove();
						_this_li.find('.operation').append(forum.tpl_select);
						setTimeout(hideAlert, 1000);
						break;
					case 'delete_post':
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
							window.parent.$("#J_alert_wrap").show();							
						}
						break;
					case 'delete_reply':
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
							window.parent.$("#J_alert_wrap").show();							
						}
						break;
					case 'set_essence':
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
							window.parent.$("#J_alert_wrap").show();							
						}
						$('#set_essence').remove();
						if($('#set_top').length>0){
							$('#set_top').before(tpl_button_essence_off);
						}else{
							$('#delete_top').before(tpl_button_essence_off);
						}
						setTimeout(hideAlert, 1000);
						break;
					case 'delete_essence':
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
							window.parent.$("#J_alert_wrap").show();							
						}
						$('#delete_essence').remove();
						if($('#set_top').length>0){
							$('#set_top').before(tpl_button_essence_on);
						}else{
							$('#delete_top').before(tpl_button_essence_on);
						}
						setTimeout(hideAlert, 1000);
						break;
					case 'set_top':
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
							window.parent.$("#J_alert_wrap").show();							
						}
						$('#set_top').remove();
						if($('#set_essence').length>0){
							$('#set_essence').after(tpl_button_top_off);
						}else{
							$('#delete_essence').after(tpl_button_top_off);
						}
						setTimeout(hideAlert, 1000);
						break;
					case 'delete_top':
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
							window.parent.$("#J_alert_wrap").show();							
						}
						$('#delete_top').remove();
						if($('#set_essence').length>0){
							$('#set_essence').after(tpl_button_top_on);
						}else{
							$('#delete_essence').after(tpl_button_top_on);
						}
						setTimeout(hideAlert, 1000);
						break;
				}
			}else{
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('操作失败，请重试！');
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('操作失败，请重试！');
					window.parent.$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
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
		$('.forum_part input[name="select"]:checked').each(function( index ){
			var _this = $(this);
			var _this_li = _this.parents('li');
			operationUser(_this_li,'delete_report');
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
	});
});

$('#J_delete_reply').click(function(){
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
		$('.forum_part input[name="select"]:checked').each(function( index ){
			var _this = $(this);
			var _this_li = _this.parents('li');
			operationUser(_this_li,'delete_reply');
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
		window.location.reload();
	});
});

$('#J_delete_post').click(function(){
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
		$('.forum_part input[name="select"]:checked').each(function( index ){
			var _this = $(this);
			var _this_li = _this.parents('li');
			operationUser(_this_li,'delete_post');
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
		window.location.reload();
	});
});

$('.delete_report').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	
	//forum.delete_item(_this_li);
	operationUser(_this_li,'delete_report');
	
});
$('.gag').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	//forum.set_gag(_this_li);
	operationUser(_this_li,'gag');
});
function select_gag_time(e){
	var _this = $(e);
	var _this_li = _this.parents('li');
	var gag_time = _this.find("option:selected").val();
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要执行该操作吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要执行该操作吗？');
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
		forum.set_gag_time(_this_li,gag_time);
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
	});
	window.parent.$('#J_cancel_btn').die().live('click',function(){
		window.parent.$("#J_confirm_wrap").hide();
		$('.user_status option[value="0"]').attr('selected','selected'); 
	});
};
$('.operation a').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要取消禁言吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要取消禁言吗？');
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
		operationUser(_this_li,'delete_gag');
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
	});
	//forum.delete_gag(_this_li);	
});
$('.delete_post').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	
	//forum.delete_post(_this_li);
	operationUser(_this_li,'delete_post');
	
});
$('.delete_reply').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	
	//forum.delete_reply(_this_li);
	operationUser(_this_li,'delete_reply');
	
});
$('#set_essence').die().live('click',function(){
	// var _this = $(this);
	// var _this_li = _this.parents('li');
	//forum.set_essence(_this_li);
	operationUser('','set_essence');
	
});
$('#delete_essence').die().live('click',function(){
	// var _this = $(this);
	// var _this_li = _this.parents('li');
	
	//forum.delete_essence(_this_li);
	operationUser('','delete_essence');
	
});
$('#delete_top').die().live('click',function(){
	// var _this = $(this);
	// var _this_li = _this.parents('li');
	//forum.set_essence(_this_li);
	operationUser('','delete_top');
	
});
$('#set_top').die().live('click',function(){
	// var _this = $(this);
	// var _this_li = _this.parents('li');
	
	//forum.delete_essence(_this_li);
	operationUser('','set_top');
	
});
$('.complain_page_wrap a').die().live('click',function(){
	var _this = $(this);
	var _this_page = _this.attr('value');
	if(_this_page != forum.page){
		forum.page = _this_page;
		forum.list_reports();
	}
});
$('#J_reply_back').die().live('click',function(){
	$("#J_reply_info_wrap").remove();
	forum.list_reports();
});
$('#J_post_back').die().live('click',function(){
	$("#J_post_info_wrap").remove();
	forum.list_reports();
});
var selected_num = 0;
$('#J_forum input[name="select"]').die().live('click',function(){
	if( $(this).attr('checked') == 'checked' ){
		selected_num = selected_num+1;
	}else{
		selected_num = selected_num-1;
	}
	if(selected_num>0){
		control_flag = 1;
		$('.forum_action a').removeClass('btn_disable');
	}else{
		control_flag = 0;
		$('.forum_action a').addClass('btn_disable');
		$('#J_select_all').removeClass('btn_disable');
	}
});
$('#J_select_all').click(function(){
	$('#J_forum input[name="select"]').attr('checked','checked');
	selected_num = $('#J_forum input[name="select"]').length;
	if(selected_num>0){
		control_flag = 1;
		$('.forum_action a').removeClass('btn_disable');
	}else{
		control_flag = 0;
		$('.forum_action a').addClass('btn_disable');
		$('#J_select_all').removeClass('btn_disable');
	}
});
window.parent.$('#J_cancel_btn').die().live('click',function(){
	window.parent.$("#J_confirm_wrap").hide();
});
forum.list_reports();