var essence_sort={
	page_items : 10,
	page : 1,
	max_page : 1,
	tpl : [
		'<li data-id={l_id} data-uid={l_uid} data-title={l_title} data-content={l_content} data-reply-count={l_reply_count} data-flag={l_flag} data-created-date={l_created_date} data-reply-last-updated={reply_last_updated} data-sticky={l_sticky}>',
			//'<div class="post_title">{post_title}</div>',
			'<span class="num">{num}</span>',
			'<span class="report_content"><a href="javascript:;">贴子</a></span>',
			'<span class="essence_title">{essence_title}</span>',
			'<span class="change_sort">',
				//'<span class="position">{position}</span>',
				'<input type="text" name="change_sort" value={value} />',
				'<span class="save_sort"><a href="javascript:;">保存</a></span>',
			'</span>',
		'</li>'
	].join(''),
	list_essence : function(){
		$('#J_essence_sort li[class!="title"]').remove();
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
			url: ajax_main_path+'libs/controller/get_essence_list.php',
			data : 'page='+essence_sort.page+'&num='+essence_sort.page_items,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				var essence_sort_list = data.items;
				var essence_sort_num,essence_sort_title;
				//var user_url,exchange_user_name, user_id;
				essence_sort.max_page = Math.ceil(data.total/essence_sort.page_items);
				for(essence_sort_i in essence_sort_list){
					essence_sort_num = essence_sort_list[essence_sort_i].id;
					essence_sort_title = essence_sort_list[essence_sort_i].title;
					essence_sort_position = essence_sort_list[essence_sort_i].position;
					l_id = essence_sort_list[essence_sort_i].id;
					l_uid = essence_sort_list[essence_sort_i].user_id;
					l_title = essence_sort_list[essence_sort_i].title;
					l_content = essence_sort_list[essence_sort_i].content;
					l_reply_count = essence_sort_list[essence_sort_i].reply_count;
					l_flag = essence_sort_list[essence_sort_i].flags;
					l_created_date = essence_sort_list[essence_sort_i].created_date;
					reply_last_updated = essence_sort_list[essence_sort_i].reply_last_updated;
					l_sticky = essence_sort_list[essence_sort_i].sticky;
	
					$('#J_essence_sort').append(essence_sort.tpl.replace('{num}',essence_sort_num).replace('{essence_title}',essence_sort_title).replace('{position}',essence_sort_position).replace('{value}',essence_sort_position).replace('{l_id}',l_id)
					.replace('{l_uid}',l_uid).replace('{l_title}',l_title).replace('{l_content}',l_content).replace('{l_reply_count}',l_reply_count).replace('{l_flag}',l_flag).replace('{l_created_date}',l_created_date).replace('{reply_last_updated}',reply_last_updated).replace('{l_sticky}',l_sticky));
					
				}
				for(var i_page=1;i_page<=essence_sort.max_page;i_page++){
					if(i_page==essence_sort.page){
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
					}else{
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
					}
				}
				
				window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
			
			}
		});
	},
	change_essence_sort: function(id,position){
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
			url: ajax_main_path+'libs/controller/change_essence_sort.php',
			data : 'id='+id+'&position='+position,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('操作成功！');
					window.parent.$("#J_alert_wrap").show();	
				}
				setTimeout(hideAlert, 1000);
			}
		});
	},
	get_essence_info: function(_this_li){
		$('#essence_id').text('');
		$('#essence_user_id').text('');
		$('#essence_title').text('');
		$('#essence_content').text('');
		$('#essence_reply_count').text('');
		$('#essence_flag').text('');
		$('#essence_created_time').text('');
		$('#essence_reply_last_updated').text('');
		$('#essence_sticky').text('');
		//window.parent.$("#J_loading_wrap").hide();
		var essence_id = _this_li.attr('data-id');
		var essence_user_id = _this_li.attr('data-uid');
		var essence_title = _this_li.attr('data-title');
		var essence_content = _this_li.attr('data-content');
		var essence_reply_count = _this_li.attr('data-reply-count');
		var essence_flag = _this_li.attr('data-flag');
		var essence_created_time = _this_li.attr('data-created-time');
		var essence_reply_last_updated = _this_li.attr('data-reply-last-updated');
		var essence_sticky = _this_li.attr('data-sticky');
		$('#essence_id').text(essence_id);
		$('#essence_user_id').text(essence_user_id);
		$('#essence_title_li').text(essence_title);
		$('#essence_content').text(essence_content);
		$('#essence_reply_count').text(essence_reply_count);
		$('#essence_flag').text(essence_flag);
		$('#essence_created_time').text(essence_created_time);
		$('#essence_reply_last_updated').text(essence_reply_last_updated);
		$('#essence_sticky').text(essence_sticky);
		var list_h = $(".essence_sort").height();
		var info_h = $(".essence_info").height();
		if(list_h > info_h){
			window.parent.$("#J_iframe").height(list_h+6);
			$(".essence_info").css({'height':list_h - - 6 +'px'});
		}
	}
}
var	tpl_essence_info = [
	'<div class="essence_info" id="J_essence_info_wrap">',
		'<a href="javascript:;" class="btn btn_essence_info" id="J_essence_back">返回</a>',
		'<ul>',
			'<li>',
				'<span class="essence_title">ID : </span>',
				'<span id="essence_id"></span>',
			'</li>',
			'<li>',
				'<span class="essence_title">发帖人 : </span>',
				'<span id="essence_user_id"></span>',
			'</li>',
			'<li>',
				'<span class="essence_title">标题 : </span>',
				'<span id="essence_title_li"></span>',
			'</li>',
			'<li>',
				'<span class="essence_title">回帖次数 : </span>',
				'<span id="essence_reply_count"></span>',
			'</li>',
			'<li>',
				'<span class="essence_title">贴子内容 : </span>',
				'<span id="essence_content"></span>',
			'</li>',
			'<li>',
				'<span class="essence_title">最后回帖时间 : </span>',
				'<span id="essence_reply_last_updated"></span>',
			'</li>',
			'<li>',
				'<span class="essence_title">是否已置顶: </span>',
				'<span id="essence_sticky"></span>',
			'</li>',
			'<li>',
				'<span class="essence_title">标记 : </span>',
				'<span id="essence_flag"></span>',
			'</li>',
			'<li>',
				'<span class="essence_title">发帖时间 : </span>',
				'<span id="essence_created_time"></span>',
			'</li>',
		'</ul>',
	'</div>'
].join('');

$('#J_essence_sort .report_content').die().live('click',function(){
	/*if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}
	*/
	var _this = $(this);
	var _this_li = _this.parents('li');
	if($("#J_essence_info_wrap").length==0){
		$('body').append(tpl_essence_info);
	}
	essence_sort.get_essence_info(_this_li);
});

$('.save_sort a').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	var id = _this_li.attr('data-id');
	var position = _this_li.find("input[name='change_sort']").val();
	essence_sort.change_essence_sort(id,position);
	essence_sort.list_essence();
});
$('.complain_page_wrap a').die().live('click',function(){
	var _this = $(this);
	var _this_page = _this.attr('value');
	if(_this_page != essence_sort.page){
		essence_sort.page = _this_page;
		essence_sort.list_essence();
	}
});
$('#J_essence_back').die().live('click',function(){
	$("#J_essence_info_wrap").remove();
	essence_sort.list_essence();
});
essence_sort.list_essence();