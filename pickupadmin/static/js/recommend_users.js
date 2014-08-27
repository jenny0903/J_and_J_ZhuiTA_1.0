var recommand_users = {
	page_items : 10,
	page : 1,
	max_page : 1,
	gender : 'female',
	tpl : [
		'<li data="{uid}" data-gender="{gender}">',
			'<span class="name"><a class="user_name" href="javascript:;">{name}</a></span>',
			'<span class="operation"><a class="delete" href="javascript:;">删除</a></span>',
		'</li>'
	].join(''),
	list_items : function(){
		var _this = recommand_users;
		
		$('#J_recommend_users li[class!="title"]').remove();
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
			url: ajax_main_path+'libs/controller/list_recommend_users.php',
			data : 'page='+_this.page+'&num='+_this.page_items+'&gender='+_this.gender,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				var recommand_users_list = data.items;
				_this.max_page = Math.ceil(data.total/_this.page_items);
				
				var name,uid,gender;
				
				for(recommand_users_i in recommand_users_list){
					name = recommand_users_list[recommand_users_i].name;
					uid = recommand_users_list[recommand_users_i].uid;
					gender = recommand_users_list[recommand_users_i].gender;
					
					$('#J_recommend_users').append(_this.tpl.replace('{uid}',uid).replace('{name}',name).replace('{gender}',gender));
				}
				
				for(var i_page=1;i_page<=_this.max_page;i_page++){
					if(i_page==_this.page){
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
		
		var del_uid = _this_li.attr('data');
		var del_gender = _this_li.attr('data-gender');
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/del_recommend_users.php',
			data : 'uid='+del_uid+'&gender='+del_gender,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1){
					_this_li.slideUp('fast');
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('删除优质用户失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('删除优质用户失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	}
}
$('.delete').die().live('click',function(){
	var _this = $(this);
	var _this_li = _this.parents('li');
	
	recommand_users.delete_item(_this_li);
});
$('.complain_page_wrap a').die().live('click',function(){
	var _this = $(this);
	var _this_page = _this.attr('value');
	if(_this_page != recommand_users.page){
		recommand_users.page = _this_page;
		recommand_users.list_items();
	}
});
$('#J_recommend_users .user_name').die().live('click',function(){
	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}

	var user_info_id=$(this).parents('li').attr('data');
	
	if($("#J_user_info_wrap").length==0){
		$('body').append(tpl_user_info);
		$("#J_user_info_wrap").css('height','3260px').show();
	}else{
		$("#J_user_info_wrap").css('height','3260px').show();
	}
	
	window.parent.$("#J_iframe").height(3260);//2200//2420+40*6+230*2+40+100
	
	getUserInfo(user_info_id);
});
$('.recommend_gender_btn').die().live('click',function(){
	if(	recommand_users.gender != $(this).attr('data') ){
		$('.recommend_gender_btn').removeClass('recommend_gender_btn_cur');
		$(this).addClass('recommend_gender_btn_cur');
		recommand_users.gender = $(this).attr('data');
		recommand_users.list_items();
	}
});
recommand_users.list_items();