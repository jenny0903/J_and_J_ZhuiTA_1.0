var user_feedback = {
	page_items : 10,
	page : 1,
	max_page : 1,
	tpl : [
		'<li>',
			'<span class="name"><a title="{name1}">{name}</a></span>',
			'<span class="app">{app}</span>',
			'<span class="client">{client}</span>',
			'<span class="server">{server}</span>',
			'<span class="content"><a title="{content1}">{content}</a></span>',
			'<span class="time">{time}</span>',
		'</li>'
	].join(''),
	time_php_to_js :function( php_time ){
		var date = php_time.split('T')[0];
		var time = php_time.split('T')[1];
		var hour = time.split(':')[0];
		var min = time.split(':')[1];
		var js_time = date + ' ' + hour + ':' + min;
		return js_time;
	},
	get_feedback_list : function(){
		$('#J_user_feedback li[class!="title"]').remove();
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
			url: ajax_main_path+'libs/controller/list_user_feedback.php',
			data : 'page='+user_feedback.page+'&num='+user_feedback.page_items,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				var feedback_list = data.items;
				var feedback_name, feedback_app, feedback_server, feedback_client,feedback_content,feedback_time;
				user_feedback.max_page = Math.ceil(data.total/user_feedback.page_items);
				
				for(feedback_i in feedback_list){
					feedback_name = feedback_list[feedback_i].user_name;
					switch(feedback_list[feedback_i].appid){
						case 1:
							feedback_app = 'iPhone';
							break;
						case 2:
							feedback_app = 'Android';
							break;
						default:
							feedback_app = feedback_list[feedback_i].appid;
							break;
					}
					feedback_server = feedback_list[feedback_i].server_version;
					feedback_client = feedback_list[feedback_i].client_version;
					feedback_content = feedback_list[feedback_i].content;
					feedback_time = user_feedback.time_php_to_js( feedback_list[feedback_i].created_date );
					
					$('#J_user_feedback').append(user_feedback.tpl.replace('{name}',feedback_name).replace('{name1}',feedback_name).replace('{content1}',feedback_content).replace('{app}',feedback_app).replace('{client}',feedback_client).replace('{server}',feedback_server).replace('{content}',feedback_content).replace('{time}',feedback_time));
				}
				
				for(var i_page=1;i_page<=user_feedback.max_page;i_page++){
					if(i_page==user_feedback.page){
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
					}else{
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
					}
				}
				
				window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
				alert(XMLHttpRequest.readyState);
				alert(textStatus);
			}
		});
	}
}
$('.complain_page_wrap a').die().live('click',function(){
	var _this = $(this);
	var _this_page = _this.attr('value');
	if(_this_page != user_feedback.page){
		user_feedback.page = _this_page;
		user_feedback.get_feedback_list();
	}
});
user_feedback.get_feedback_list();