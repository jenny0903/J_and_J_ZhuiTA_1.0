var message = {
		flag: {
			all: false,
			single: false
		}
	};
$('#message_name,#message_content,#message_id').keyup(function(){
	if($("#message_name").val()!=''&&$("#message_content").val()!=''){
		message.flag.all = true;
		$('#J_all_message').removeClass('btn_disable');
		if($("#message_id").val()!=''){
			message.flag.single = true;
			$('#J_single_message').removeClass('btn_disable');
		}else{
			message.flag.single = false;
		}
	}else{
		message.flag.all = false;
	}
});
$('#J_all_message').click(function(){
	if(message.flag.all){
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
			url: ajax_main_path+'libs/controller/notify_user.php',
			data:"title="+$("#message_name").val()+"&content="+encodeURIComponent($("#message_content").val())+"&id=&all=true",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if( data == '1' ||  data == 1){
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('推送消息成功！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('推送消息成功！');
						window.parent.$("#J_alert_wrap").show();							
					}
					window.location.reload();
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('推送消息失败，请重试！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('推送消息失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	}
});
$('#J_single_message').click(function(){
	if(message.flag.single){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		var message_name = $("#message_name").val();
		var message_content = encodeURIComponent($("#message_content").val());
		var id_str = $("#message_id").val();
		var id_array = id_str.split(',');
		var id_json = '["'+id_array.join('","')+'"]';
		/*var error_array = new Array();
		var id_single;
		for(i in id_array){
			id_single = id_array [i];
			$.ajax({
				type: "POST",
				url: ajax_main_path+'libs/controller/notify_user.php',
				data:"title="+message_name+"&content="+message_content+"&id="+id_single+"&all=false",
				success: function(data){
					if( data != '1' &&  data != 1){
						error_array.push(id_single);
					}
				}
			});
		}
		window.parent.$("#J_loading_wrap").hide();
		if(error_array.length>0){
			
		}else{
			if(window.parent.$("#J_alert_wrap").length==0){
				window.parent.$('body').append(tpl.alert_box);
				window.parent.$("#J_alert_wrap .alert_content").text('推送消息成功！');
				window.parent.$("#J_alert_wrap").show();
			}else{
				window.parent.$("#J_alert_wrap .alert_content").text('推送消息成功！');
				window.parent.$("#J_alert_wrap").show();							
			}
			window.location.reload();
		}*/
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/notify_user.php',
			// data:"title="+$("#message_name").val()+"&content="+$("#message_content").val()+"&id="+$("#message_id").val()+"&all=false",
			data:"title="+message_name+"&content="+message_content+"&id="+id_json+"&all=false",
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				var success = data.success;
				var fail = data.fail;
				var success_num = success.length;
				var fail_num = fail.length;
				var success_id = success.join();
				var fail_id = fail.join();
				window.parent.$('body').append(tpl.message_callback.replace('{success_num}',success_num).replace('{success_id}',success_id).replace('{fail_num}',fail_num).replace('{fail_id}',fail_id));
			}
		});
	}
});