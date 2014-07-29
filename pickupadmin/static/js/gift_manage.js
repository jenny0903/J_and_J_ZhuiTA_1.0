var page_now = 0, 
	page_to = 1,
	control_flag = 0;
$(document).ready(function(){
	get_gift_list(page_to);
});

var gift_hide_tpl=[
	'<li id={id} class="content">',
		'<input type="text" class="gift_num" value="{position}" />',
		'<input type="text" class="gift_name" value="{name}" />',
		'<input type="text" class="gift_pic1" value="{icon}" />',
		'<input type="text" class="gift_pic2" value="{image}" />',
		'<input type="text" class="gift_price" value="{price}" />',
		'<input type="text" class="gift_unit" value="{unit}" />',
		'<input type="text" class="gift_coupon" value="{coupon}" />',
		'<a class="hide_gift" href="javascript:;">下架</a>',
		'<a class="update_gift" href="javascript:;">修改</a>',
	'</li>'
].join('');
var gift_show_tpl=[
	'<li id={id} class="content">',
		'<input type="text" class="gift_num" value="{position}" />',
		'<input type="text" class="gift_name" value="{name}" />',
		'<input type="text" class="gift_pic1" value="{icon}" />',
		'<input type="text" class="gift_pic2" value="{image}" />',
		'<input type="text" class="gift_price" value="{price}" />',
		'<input type="text" class="gift_unit" value="{unit}" />',
		'<input type="text" class="gift_coupon" value="{coupon}" />',
		'<a class="show_gift" href="javascript:;">上架</a>',
		'<a class="update_gift" href="javascript:;">修改</a>',
	'</li>'
].join('');
var gift_tpl_add=[
	'<li id={id} class="content">',
		'<input type="text" class="gift_num" value="{position}" />',
		'<input type="text" class="gift_name" value="{name}" />',
		'<input type="text" class="gift_pic1" value="{icon}" />',
		'<input type="text" class="gift_pic2" value="{image}" />',
		'<input type="text" class="gift_price" value="{price}" />',
		'<input type="text" class="gift_unit" value="{unit}" />',
		'<input type="text" class="gift_coupon" value="{coupon}" />',
		'<a class="add_gift" href="javascript:;">保存</a>',
		'<a class="cancel_add" href="javascript:;">取消</a>',
	'</li>'
].join('');

function get_gift_list(page){
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
		url: ajax_main_path+'libs/controller/get_gift.php',
		data:'num=1000&page='+page,
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			display_gift(data);
			window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
		}
	});
}

function display_gift(data){
	var total_page = data.total;
	page_now = page_to;	
	if(total_page>0){
		$('.management_wrap ul li.content').remove();
		$('.gift_page_wrap a').remove();
		
		$('.abatch_action a').addClass('btn_disable');
		$('#J_select_all').removeClass('btn_disable');
	
		$('#J_blank_complain').hide();
		$('.management_wrap ul').show();
		$('.gift_page_wrap').show();
	}else{			
		$('.abatch_action a').addClass('btn_disable');
		
		$('#J_blank_complain').show();
		$('.management_wrap ul').hide();
		$('.gift_page_wrap').hide();
		
		return false;
	}
	
	// for(var i_page=1; i_page <= Math.ceil(total_page/1000); i_page++){
		// if(i_page == page_to){
			// $('.gift_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
		// }else{
			// $('.gift_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
		// }
	// }
	
	var id, name, price, discount, unit, image, icon, position, status ,created_date,coupon;
	
	for(i_gift in data.gift_items){
		id = data.gift_items[i_gift].id;
		name = data.gift_items[i_gift].name;
		price = data.gift_items[i_gift].price;
		discount = data.gift_items[i_gift].discount;
		unit = data.gift_items[i_gift].unit;
		image = data.gift_items[i_gift].image;
		icon = data.gift_items[i_gift].icon;
		position = data.gift_items[i_gift].position;
		status = data.gift_items[i_gift].status;
		created_date = data.gift_items[i_gift].created_date;
		coupon = data.gift_items[i_gift].coupon;
		if(status == 0){
			$('.management_wrap ul').append(gift_show_tpl.replace('{id}',id).replace('{position}',position).replace('{name}',name).replace('{price}',price).replace('{icon}',icon).replace('{image}',image).replace('{unit}',unit).replace('{coupon}',coupon));
		}else{
			$('.management_wrap ul').append(gift_hide_tpl.replace('{id}',id).replace('{position}',position).replace('{name}',name).replace('{price}',price).replace('{icon}',icon).replace('{image}',image).replace('{unit}',unit).replace('{coupon}',coupon));
		}
		
	}
};

$('.gift_page_wrap a').die().live('click',function(){
	page_to = $(this).attr('value');
	if(page_to != page_now){
		get_gift_list(page_to);
	}
});

$('.manage_btn_new').click(function(){
	if(!$('.manage_btn_new').hasClass('btn_disable')){
		window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+46);
		$('.management_wrap ul li.content:eq(0)').css('margin-top','35px');
		$('.manage_btn_new').addClass('btn_disable');
		$('.management_wrap ul li.title').append(gift_tpl_add.replace('{id}',"").replace('{position}',"").replace('{name}',"").replace('{price}',"").replace('{icon}',"").replace('{image}',"").replace('{unit}',"").replace('{coupon}',""));
	}	
});

$('.add_gift').die().live('click',function(){
	var name = $(this).parent().find(':input').eq(1).val();
	var price = $(this).parent().find(':input').eq(4).val();
	var unit = $(this).parent().find(':input').eq(5).val();
	var image = $(this).parent().find(':input').eq(3).val();
	var icon = $(this).parent().find(':input').eq(2).val();
	var position = $(this).parent().find(':input').eq(0).val();
	var coupon = $(this).parent().find(':input').eq(6).val();
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/add_gift.php',
		data:'name='+name+'&icon='+icon+'&image='+image+'&price='+price+'&unit='+unit+'&position='+position+'&coupon='+coupon+'&discount=0&status=1',
		dataType:"JSON",
		async: false,
		success: function(data){
			if( data == '1' ||data==1){
				// $.ajax({
					// type: "POST",
					// url: ajax_main_path+'libs/controller/exchange_html.php',
					// data:'',
					// dataType:"JSON",
					// async: false,
					// success: function(data){
						// if( data == '1' ||data==1){
							$('.manage_btn_new').removeClass('btn_disable');
							if(window.parent.$("#J_alert_wrap").length==0){
								window.parent.$('body').append(tpl.alert_box);
								window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
								window.parent.$("#J_alert_wrap").show();
							}else{
								window.parent.$("#J_alert_wrap .alert_content").text('保存成功！');
								window.parent.$("#J_alert_wrap").show();							
							}
						// }else{
							// if(window.parent.$("#J_alert_wrap").length==0){
								// window.parent.$('body').append(tpl.alert_box);
								// window.parent.$("#J_alert_wrap .alert_content").text('保存礼物成功，生成礼券兑换网页失败，请重试！');
								// window.parent.$("#J_alert_wrap").show();
							// }else{
								// window.parent.$("#J_alert_wrap .alert_content").text('保存礼物成功，生成礼券兑换网页失败，请重试！');
								// window.parent.$("#J_alert_wrap").show();							
							// }
						// }
					// }
				// });	
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
	window.parent.$("#J_iframe").height($(".inner_main_wrap").height()-34);
	$('.management_wrap ul li.content:eq(0)').css('margin-top','0');
	$('.manage_btn_new').removeClass('btn_disable');
	$(this).parent().remove();
});

$('.update_gift').die().live('click',function(){
	var giftid = $(this).parent().attr("id");
	var name = $(this).parent().find(':input').eq(1).val();
	var price = $(this).parent().find(':input').eq(4).val();
	var unit = $(this).parent().find(':input').eq(5).val();
	var image = $(this).parent().find(':input').eq(3).val();
	var icon = $(this).parent().find(':input').eq(2).val();
	var position = $(this).parent().find(':input').eq(0).val();
	var coupon = $(this).parent().find(':input').eq(6).val();
	var f_status = $(this).parent().find('a').eq(0).text();
	if( f_status == '上架' ){
		status = 0;//页面上显示“上架”，表示该礼物处在“下架”状态，所以status为0
	}else if( f_status == '下架' ){
		status = 1;
	}
	
	$.ajax({
		type: "POST",
		url: ajax_main_path+'libs/controller/update_gift.php',
		data:'id='+giftid+'&name='+name+'&icon='+icon+'&image='+image+'&price='+price+'&unit='+unit+'&position='+position+'&coupon='+coupon+'&discount=0&status='+status,
		dataType:"JSON",
		async: false,
		success: function(data){
			if( data == '1' ||data==1){
				$('.manage_btn_new').removeClass('btn_disable');
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('修改成功！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('修改成功！');
					window.parent.$("#J_alert_wrap").show();							
				}
			}else{
				if(window.parent.$("#J_alert_wrap").length==0){
					window.parent.$('body').append(tpl.alert_box);
					window.parent.$("#J_alert_wrap .alert_content").text('修改失败，请重试！');
					window.parent.$("#J_alert_wrap").show();
				}else{
					window.parent.$("#J_alert_wrap .alert_content").text('修改失败，请重试！');
					window.parent.$("#J_alert_wrap").show();							
				}
			}
			setTimeout(hideAlert, 1000);
			window.location.reload();
		}
	});
});

$('.hide_gift').die().live('click',function(){
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要将该礼物下架吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要将该礼物下架吗？');
		window.parent.$("#J_confirm_wrap").show();
	}
	var this_p = $(this).parent();
	var giftid = this_p.attr("id");
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
			url: ajax_main_path+'libs/controller/delete_gift.php',
			data:'id='+giftid,
			dataType:"JSON",
			async: false,
			success: function(data){
				if( data == '1' ||data==1){
					// this_p.slideUp(500);			
					// window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
					window.location.reload();
				}
			}
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
	});
});

$('.show_gift').die().live('click',function(){
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要将该礼物上架吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定要将该礼物上架吗？');
		window.parent.$("#J_confirm_wrap").show();
	}
	var this_p = $(this).parent();
	var giftid = this_p.attr("id");
	var name = this_p.find(':input').eq(1).val();
	var price = this_p.find(':input').eq(4).val();
	var unit = this_p.find(':input').eq(5).val();
	var image = this_p.find(':input').eq(3).val();
	var icon = this_p.find(':input').eq(2).val();
	var position = this_p.find(':input').eq(0).val();
	var coupon = this_p.find(':input').eq(6).val();
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
			url: ajax_main_path+'libs/controller/update_gift.php',
			data:'id='+giftid+'&name='+name+'&icon='+icon+'&image='+image+'&price='+price+'&unit='+unit+'&position='+position+'&coupon='+coupon+'&discount=0&status=1',
			dataType:"JSON",
			async: false,
			success: function(data){
				if( data == '1' ||data==1){
					window.location.reload();
				}
			}
		});
		window.parent.$("#J_loading_wrap").hide();
		window.parent.$("#J_confirm_wrap").hide();
	});
});

window.parent.$('#J_cancel_btn').die().live('click',function(){
	window.parent.$("#J_confirm_wrap").hide();
});