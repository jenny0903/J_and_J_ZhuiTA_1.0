var forum = {
	page_items : 10,
	page : 1,
	max_page : 1,
	tpl : [
		'<li data={id} data-uid={uid} data-thread={thread_id} data-kind={kind}>',
			'<span class="num">{num}</span>',
			'<span class="report_content"><a href="javascript:;">{report_content}</a></span>',
			'<span class="memo">{memo}</span>',
			'<span class="created_date">{created_date}</span>',
			'<span class="operation">',
				'<span class="delete_report"><a href="javascript:;">删除</a></span>',
				'<span class="gag"><a href="javascript:;">禁言</a></span>',
				'<span class="delete_gag"><a href="javascript:;">删除禁言</a></span>',
				'<span class="set_essence"><a href="javascript:;">设为精华</a></span>',
				'<span class="delete_essence"><a href="javascript:;">取消精华</a></span>',
			'</span>',
		'</li>'
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
				var forum_report_num,forum_report_user,forum_report_content,forum_report_memo,forum_report_created_date;
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
					
					
					$('#J_forum').append(forum.tpl.replace('{num}',forum_report_num).replace('{report_user}',forum_reported_user).replace('{report_content}',forum_report_content).replace('{memo}',forum_report_memo).replace('{created_date}',forum_report_created_date).replace('{id}',forum_report_id).replace('{uid}',forum_reported_user).replace('{thread_id}',forum_thread_id).replace('{pid}',forum_thread_id).replace('{kind}',forum_report_kind));
				}
				
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
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('设置失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('设置失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
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
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('设置失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('设置失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	get_post_info: function(thread_id){
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
				
				$('#post_id').text(post_id);
				$('#post_user').text(post_user);
				$('#post_title').text(post_title);
				$('#post_content').text(post_content);
				$('#reply_count').text(reply_count);
				$('#post_flag').text(post_flag);
				$('#created_time').text(created_time);
				$('#reply_last_updated').text(reply_last_updated);
				
				window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
			}
		});
	},
	get_reply_info: function(thread_id){
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
				
				window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
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
	var kind=$(this).parents('li').attr('data-kind')
	console.log(kind);
	if (kind = 0){
		
		if($("#J_post_info_wrap").length==0){
			$('body').append(tpl_post_info);
			$("#J_post_info_wrap").css('height','3260px').show();
		}else{
			$("#J_post_info_wrap").css('height','3260px').show();
		}
		
		window.parent.$("#J_iframe").height(3260);//2200//2420+40*6+230*2+40+100
	
		forum.get_post_info(thread_id);
	}else if(kind = 1){
		if($("#J_reply_info_wrap").length==0){
			$('body').append(tpl_reply_info);
			$("#J_reply_info_wrap").css('height','3260px').show();
		}else{
			$("#J_reply_info_wrap").css('height','3260px').show();
		}
		
		window.parent.$("#J_iframe").height(3260);//2200//2420+40*6+230*2+40+100
		console.log(thread_id);
		forum.get_reply_info(thread_id);
	}
});
$('.delete_report').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	
	forum.delete_item(_this_li);
	
});
$('.gag').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	
	forum.set_gag(_this_li);
	
});
$('.delete_gag').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	
	forum.delete_gag(_this_li);
	
});
$('.set_essence').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	
	forum.set_essence(_this_li);
	
});
$('.delete_essence').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	
	forum.delete_essence(_this_li);
	
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
	$("#J_reply_info_wrap").hide();
	forum.list_reports();
});
$('#J_post_back').die().live('click',function(){
	$("#J_post_info_wrap").hide();
	forum.list_reports();
});
forum.list_reports();