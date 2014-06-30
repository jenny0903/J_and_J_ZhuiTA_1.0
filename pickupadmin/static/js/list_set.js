var mod_type;
var save_flag = 0;
var publish_flag = 0;
var state_flag = 1;
function loadAwardsInfo(data){
	var award21=data.male.level1;
	var award22=data.male.level2;
	var award23=data.male.level3;

	var id_award21=data.male.id;//规则id放入每个奖品id中
	var id_award22=data.male.id;
	var id_award23=data.male.id;
	
	var award11=data.female.level1;
	var award12=data.female.level2;
	var award13=data.female.level3;
	
	var id_award11=data.female.id;
	var id_award12=data.female.id;
	var id_award13=data.female.id;
	var id_award13=data.female.id;
	
	var award31=data.money.level1;
	var award32=data.money.level2;
	var award33=data.money.level3;
	
	var id_award31=data.money.id;
	var id_award32=data.money.id;
	var id_award33=data.money.id;
	
	$('#prize11').val(award11);
	$('#prize12').val(award12);
	$('#prize13').val(award13);
	
	$('#id_prize_11').val(id_award11);
	$('#id_prize_12').val(id_award12);
	$('#id_prize_13').val(id_award13);
	
	$('#prize21').val(award21);
	$('#prize22').val(award22);
	$('#prize23').val(award23);
	
	$('#id_prize_21').val(id_award21);
	$('#id_prize_22').val(id_award22);
	$('#id_prize_23').val(id_award23);
	
	$('#prize31').val(award31);
	$('#prize32').val(award32);
	$('#prize33').val(award33);
	
	$('#id_prize_31').val(id_award31);
	$('#id_prize_32').val(id_award32);
	$('#id_prize_33').val(id_award33);
};
function typeAndInfo(){
	var url=window.location.href;
	var type=url.split("type=")[1];
	if(type=='0'){
		mod_type=0;
		
		$(".new_hide").hide();
	}else{
		mod_type=1;
		
		$(".mod_hide").hide();
	
		var info_url=type.split('#')[1];
		var info_id=info_url.split('&')[0];
		var info_num=info_url.split('&')[1];
		var info_name=decodeURIComponent(info_url.split('&')[2]);
		var info_start=info_url.split('&')[3];
		var info_end=info_url.split('&')[4];
		var info_state=decodeURIComponent(info_url.split('&')[5]);
		var info_resource_url=info_url.split('&')[6];	
		$('.mod_info_id').text(info_id);
		$('#mod_info_name').val(info_name);
		$('.mod_info_state').text(info_state);
		$('.mod_info_num').text(info_num);
		//$('#mod_info_num').val(info_num);
		$('#mod_info_start').val(info_start);
		$('#mod_info_end').val(info_end);
		$('#activity_url').val(info_resource_url);
		
		if(info_state=='统计完'){
			publish_flag=1;
			$('#J_mod_publish').removeClass('btn_disable');
		}
		
		if(info_state=='已结束'){
			state_flag=0;
			$('#J_mod_save').addClass('btn_disable');
			$('#J_mod_delete').addClass('btn_disable');
		}
		
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
			url: ajax_main_path+'libs/controller/get_awards_rule.php',
			data:"number="+info_num,
			dataType:"JSON",
			async: false,
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				loadAwardsInfo(data);
			}
		});
	}
};
function timeCheck(time){
	if(/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}\+\d{2}\:\d{2}$/.test(time)){
		return true;
	}else{
		return false;
	}
}
$('#J_mod_publish').click(function(){
	if(publish_flag==1){
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/publish_billboard.php',
			data:'number='+$('.mod_info_num').text(),
			dataType:"JSON",
			async: false,
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if( data == '1' || data == 1 ){
					//window.location.href='main.php';
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('发布成功！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('发布成功！');
						window.parent.$("#J_alert_wrap").show();							
					}
					window.location.href='list_detail.html';
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('发布失败，请重试！');
						window.parent.$("#J_alert_wrap").show();
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('发布失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	}
});
$("#J_mod_save").click(function(){
	if(state_flag!=0){
		if(mod_type==0){
			var new_post_name=encodeURIComponent($('#mod_info_name').val());
			var new_post_num=$('#mod_info_num').val();
			
			var origin_post_begin = $('#mod_info_start').val();
			var origin_post_end = $('#mod_info_end').val();
			
			if(!/^[0-9]*[1-9][0-9]*$/.test(new_post_num)){
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('期数必须为正整数！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('期数必须为正整数！');
					window.parent.$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
				return false;
			}
			
			if(!timeCheck(origin_post_begin)||!timeCheck(origin_post_end)){
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('时间格式不正确！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('时间格式不正确！');
					window.parent.$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
				return false;
			}
			
			var new_post_begin= encodeURIComponent(origin_post_begin);
			var new_post_end= encodeURIComponent(origin_post_end);
			var new_post_url=encodeURIComponent($('#activity_url').val());
			
			// var new_post_rule1=encodeURIComponent($('#activity_rule1').val());
			// var new_post_rule2=encodeURIComponent($('#activity_rule2').val());
			// var new_post_rule3=encodeURIComponent($('#activity_rule3').val());
			
			var new_post_prize11=encodeURIComponent($('#prize11').val());
			var new_post_prize12=encodeURIComponent($('#prize12').val());
			var new_post_prize13=encodeURIComponent($('#prize13').val());
			
			var new_post_prize21=encodeURIComponent($('#prize21').val());
			var new_post_prize22=encodeURIComponent($('#prize22').val());
			var new_post_prize23=encodeURIComponent($('#prize23').val());
			
			var new_post_prize31=encodeURIComponent($('#prize31').val());
			var new_post_prize32=encodeURIComponent($('#prize32').val());
			var new_post_prize33=encodeURIComponent($('#prize33').val());
			
			if(new_post_name!=''&&new_post_num!=''&&new_post_begin!=''&&new_post_end!=''&&new_post_url!=''){
				if(new_post_prize11!=''&&new_post_prize12!=''&&new_post_prize13!=''){
					if(new_post_prize21!=''&&new_post_prize22!=''&&new_post_prize23!=''){
						if(new_post_prize31!=''&&new_post_prize32!=''&&new_post_prize33!=''){
							save_flag = 1;
						}else{
							save_flag = 0;
						}
					}else{
						save_flag = 0;
					}
				}else{
					save_flag = 0;
				}
			}else{
				save_flag = 0;
			}
			
			if(save_flag==0){
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('请将所有信息填写完整！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('请将所有信息填写完整！');
					window.parent.$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
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
			
			$.ajax({
				type: "POST",
				url: ajax_main_path+'libs/controller/new_billboard_events.php',
				data:'name='+new_post_name+'&number='+new_post_num+'&begin='+new_post_begin+'&end='+new_post_end+'&intro='+new_post_url+'&prize11='+new_post_prize11+'&prize12='+new_post_prize12+'&prize13='+new_post_prize13+'&prize21='+new_post_prize21+'&prize22='+new_post_prize22+'&prize23='+new_post_prize23+'&prize31='+new_post_prize31+'&prize32='+new_post_prize32+'&prize33='+new_post_prize33,
				dataType:"JSON",
				async: false,
				success: function(data){
					window.parent.$("#J_loading_wrap").hide();
					if( data == '1' ||data==1){
						// window.location.href='list_detail.html';
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
							window.parent.$("#J_alert_wrap").show();
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
							window.parent.$("#J_alert_wrap").show();							
						}
						window.location.href='list_detail.html';
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
			});
		}else{
			var mod_post_id=$('.mod_info_id').text();
			var mod_post_name=encodeURIComponent($('#mod_info_name').val());
			var mod_post_num=$('.mod_info_num').text();//$('#mod_info_num').val();
			
			var origin_post_begin = $('#mod_info_start').val();
			var origin_post_end = $('#mod_info_end').val();
			
			var mod_post_begin=encodeURIComponent(origin_post_begin);
			var mod_post_end= encodeURIComponent(origin_post_end);
			var mod_post_url=encodeURIComponent($('#activity_url').val());
			
			// var mod_post_rule1=encodeURIComponent($('#activity_rule1').val());
			// var mod_post_rule2=encodeURIComponent($('#activity_rule2').val());
			// var mod_post_rule3=encodeURIComponent($('#activity_rule3').val());
			
			var mod_post_prize11=encodeURIComponent($('#prize11').val());
			var mod_post_prize12=encodeURIComponent($('#prize12').val());
			var mod_post_prize13=encodeURIComponent($('#prize13').val());
			
			var mod_post_prize21=encodeURIComponent($('#prize21').val());
			var mod_post_prize22=encodeURIComponent($('#prize22').val());
			var mod_post_prize23=encodeURIComponent($('#prize23').val());
			
			var mod_post_prize31=encodeURIComponent($('#prize31').val());
			var mod_post_prize32=encodeURIComponent($('#prize32').val());
			var mod_post_prize33=encodeURIComponent($('#prize33').val());
			
			var mod_post_id_rule1=$('#id_prize_11').val();//规则id放入每个奖品id中
			var mod_post_id_rule2=$('#id_prize_21').val();
			var mod_post_id_rule3=$('#id_prize_31').val();
			
			if(!/^[0-9]*[1-9][0-9]*$/.test(mod_post_num)){
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('期数必须为正整数！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('期数必须为正整数！');
					window.parent.$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
				return false;
			}
			
			if(!timeCheck(origin_post_begin)||!timeCheck(origin_post_end)){
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('时间格式不正确！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('时间格式不正确！');
					window.parent.$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
				return false;
			}
			
			if(mod_post_name!=''&&mod_post_num!=''&&mod_post_begin!=''&&mod_post_end!=''&&mod_post_url!=''){
					if(mod_post_prize11!=''&&mod_post_prize12!=''&&mod_post_prize13!=''){
						if(mod_post_prize21!=''&&mod_post_prize22!=''&&mod_post_prize23!=''){
							if(mod_post_prize31!=''&&mod_post_prize32!=''&&mod_post_prize33!=''){
								save_flag = 1;
							}else{
								save_flag = 0;
							}
						}else{
							save_flag = 0;
						}
					}else{
						save_flag = 0;
					}
			}else{
				save_flag = 0;
			}
			
			if(save_flag==0){
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('请将所有信息填写完整！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('请将所有信息填写完整！');
					window.parent.$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
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
			
			$.ajax({
				type: "POST",
				url: ajax_main_path+'libs/controller/update_billboard_events.php',
				data:'id='+mod_post_id+'&name='+mod_post_name+'&number='+mod_post_num+'&begin='+mod_post_begin+'&end='+mod_post_end+'&intro='+mod_post_url+'&prize11='+mod_post_prize11+'&prize12='+mod_post_prize12+'&prize13='+mod_post_prize13+'&prize21='+mod_post_prize21+'&prize22='+mod_post_prize22+'&prize23='+mod_post_prize23+'&prize31='+mod_post_prize31+'&prize32='+mod_post_prize32+'&prize33='+mod_post_prize33+'&id_rule1='+mod_post_id_rule1+'&id_rule2='+mod_post_id_rule2+'&id_rule3='+mod_post_id_rule3,
				dataType:"JSON",
				async: false,
				success: function(data){
					window.parent.$("#J_loading_wrap").hide();
					if( data == '1' ||data==1){
						//window.location.href='main.php';
						if(window.parent.$("#J_alert_wrap").length==0){
							window.parent.$('body').append(tpl.alert_box);
							window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
							window.parent.$("#J_alert_wrap").show();
						}else{
							window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
							window.parent.$("#J_alert_wrap").show();							
						}
						window.location.href='list_detail.html';
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
			});
		}
	}
});
$('#J_mod_delete').click(function(){
	if(state_flag!=0){
		if(window.parent.$("#J_confirm_wrap").length==0){
			window.parent.$('body').append(tpl.confirm_box);
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除此榜单吗？');
			window.parent.$("#J_confirm_wrap").show();
		}else{
			window.parent.$("#J_confirm_wrap .confirm_content").text('确定要删除此榜单吗？');
			window.parent.$("#J_confirm_wrap").show();
		}
	}
});
window.parent.$('#J_cancel_btn').die().live('click',function(){
	window.parent.$("#J_confirm_wrap").hide();
});
window.parent.$('#J_confirm_btn').die().live('click',function(){
	var del_id = $('.mod_info_id').text();
	var rule_id1 = $('#id_prize_11').val();
	var rule_id2 = $('#id_prize_21').val();
	var rule_id3 = $('#id_prize_31').val();
	
	window.parent.$("#J_confirm_wrap").hide();

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
		url: ajax_main_path+'libs/controller/delete_billboard_events.php',
		data:"id="+del_id+"&rule_id1="+rule_id1+"&rule_id2="+rule_id2+"&rule_id3="+rule_id3,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			if(data=='1'||data==1){
				//window.location.href='main.php';
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('删除成功！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('删除成功！');
					window.parent.$("#J_alert_wrap").show();							
				}
				window.location.href='view/list_detail.html';
			}else{
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('删除失败，请重试！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('删除失败，请重试！');
					window.parent.$("#J_alert_wrap").show();							
				}
				setTimeout(hideAlert, 1000);
			}
		}
	});
});
$(document).ready(function() {
	typeAndInfo();
});