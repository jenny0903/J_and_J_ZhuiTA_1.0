$(document).ready(function() {	
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
		url: ajax_main_path+'libs/controller/get_billboard_news.php',
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			if(data!='' && data!='[]'){
				$('#J_adver_save').removeClass('btn_disable');
				loadAdverInfo(data);
			}
		}
	});
	
});

function loadAdverInfo(data){
	var adver_pos, adver_link, adver_title, adver_url, adver_id;
	for(i in data){
		adver_id = data[i].id;
		adver_title = data[i].title;
		adver_url = data[i].image;
		adver_pos = data[i].position;
		adver_link = data[i].link;
		
		$("#J_mod_adver .file_id").eq(adver_pos).val(adver_id);
		$("#J_mod_adver .file_title").eq(adver_pos).val(adver_title);
		$("#J_mod_adver .file_path").eq(adver_pos).val(adver_url);
		$("#J_mod_adver .file_link").eq(adver_pos).val(adver_link);
	}
}

function submitAdverInfo(){
	var flag0, flag1, flag2, flag3, ajax_flag, delete_flag;
	flag0 = 0;
	flag1 = 0;
	flag2 = 0;
	flag3 = 0;
	var submit_url, submit_param;
	
	if($("#J_mod_adver .file_id").eq(0).val() == '' && $("#J_mod_adver .file_title").eq(0).val() == '' && $("#J_mod_adver .file_path").eq(0).val() =='' && $("#J_mod_adver .file_link").eq(0).val() == '' && $("#J_mod_adver .file_id").eq(1).val() == '' && $("#J_mod_adver .file_title").eq(1).val() == '' && $("#J_mod_adver .file_path").eq(1).val() =='' && $("#J_mod_adver .file_link").eq(1).val() == '' && $("#J_mod_adver .file_id").eq(2).val() == '' && $("#J_mod_adver .file_title").eq(2).val() == '' && $("#J_mod_adver .file_path").eq(2).val() =='' && $("#J_mod_adver .file_link").eq(2).val() == '' && $("#J_mod_adver .file_id").eq(3).val() == '' && $("#J_mod_adver .file_title").eq(3).val() == '' && $("#J_mod_adver .file_path").eq(3).val() =='' && $("#J_mod_adver .file_link").eq(3).val() == ''){
		return false;
	}
	
	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}
	
	for(var submit_num = 0;submit_num<=3;submit_num++){
		if($('.file_id').eq(submit_num).val()==''){
			if($('.file_title').eq(submit_num).val()!='' && $('.file_path').eq(submit_num).val()!='' && $('.file_link').eq(submit_num).val()!=''){
				delete_flag = 0;
				ajax_flag = 1;
				submit_url = 'new_billboard_news.php';
				submit_param = 'title='+$("#J_mod_adver .file_title").eq(submit_num).val()+'&image='+$("#J_mod_adver .file_path").eq(submit_num).val()+'&link='+$("#J_mod_adver .file_link").eq(submit_num).val()+'&position='+submit_num;
			}else if($('.file_title').eq(submit_num).val()=='' && $('.file_path').eq(submit_num).val()=='' && $('.file_link').eq(submit_num).val()==''){
				ajax_flag = 0;
				switch(submit_num){
					case 0:
						flag0 = 1;
						break;
					case 1:
						flag1 = 1;
						break;
					case 2:
						flag2 = 1;
						break;
					case 3:
						flag3 = 1;
						break;
				}
			}else{
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('请将信息填写完整！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('请将信息填写完整！');
					window.parent.$("#J_alert_wrap").show();							
				}
				window.parent.$("#J_loading_wrap").hide();
				setTimeout(hideAlert, 1000);
				return false;
			}
		}else{
			if($('.file_title').eq(submit_num).val()=='' && $('.file_path').eq(submit_num).val()=='' && $('.file_link').eq(submit_num).val()==''){
				ajax_flag = 1;
				delete_flag = 1;
				submit_url = 'delete_billboard_news.php';
				submit_param = 'id='+$("#J_mod_adver .file_id").eq(submit_num).val();
			}else if($('.file_title').eq(submit_num).val()=='' || $('.file_path').eq(submit_num).val()=='' || $('.file_link').eq(submit_num).val()==''){
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('请将信息填写完整！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('请将信息填写完整！');
					window.parent.$("#J_alert_wrap").show();							
				}
				window.parent.$("#J_loading_wrap").hide();
				setTimeout(hideAlert, 1000);
				return false;
			}else{
				ajax_flag = 1;
				delete_flag = 0;
				submit_url = 'update_billborad_news.php';
				submit_param = 'id='+$("#J_mod_adver .file_id").eq(submit_num).val()+'&title='+$("#J_mod_adver .file_title").eq(submit_num).val()+'&image='+$("#J_mod_adver .file_path").eq(submit_num).val()+'&link='+$("#J_mod_adver .file_link").eq(submit_num).val()+'&position='+submit_num;
			}
		}
		if(ajax_flag == 1){
			$.ajax({
				type: "POST",
				url: ajax_main_path+'libs/controller/'+submit_url,
				data: submit_param,
				async: false,
				success: function(data){
					if(data=='1'||data==1){
						switch(submit_num){
							case 0:
								flag0 = 1;
								break;
							case 1:
								flag1 = 1;
								break;
							case 2:
								flag2 = 1;
								break;
							case 3:
								flag3 = 1;
								break;
						}
						if(delete_flag == 1){
							$("#J_mod_adver .file_id").eq(submit_num).val('');
						}
					}
				}
			});
		}
	}
	window.parent.$("#J_loading_wrap").hide();
	if(flag0 ==1 && flag1 ==1 && flag2 ==1 && flag3 ==1){
		if(window.parent.$("#J_alert_wrap").length==0){
			window.parent.$('body').append(tpl.alert_box);
			window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
			window.parent.$("#J_alert_wrap").show();
		}else{
			window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
			window.parent.$("#J_alert_wrap").show();							
		}
		window.location.reload();
	}else{
		if(window.parent.$("#J_alert_wrap").length==0){
			window.parent.$('body').append(tpl.alert_box);
			window.parent.$("#J_alert_wrap .alert_content").text('保存失败，请重试！');
			window.parent.$("#J_alert_wrap").show();
		}else{
			window.parent.$("#J_alert_wrap .alert_content").text('保存失败，请重试！');
			window.parent.$("#J_alert_wrap").show();							
		}
		setTimeout(hideAlert, 1000);
	}	
}
$('#J_adver_save').click(function(){
	submitAdverInfo();
});
