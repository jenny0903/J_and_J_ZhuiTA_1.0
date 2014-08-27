var exchange_items = {
	page_items : 10,
	page : 1,
	max_page : 1,
	check_blank : function(input){
		var content = input.val();
		if( content.length > 0 ){
			return true;
		}else{
			return false;
		}
	},
	check_number : function(input){
		var number = input.val();
		if(/^[0-9]*[1-9][0-9]*$/.test(number)){
			return true;
		}else{
			return false;
		}
	},
	tpl : [
		'<li data={id}>',
			//'<span class="id">{id}</span>',
			'<input type="hidden" id="J_price" value="{price}" />',
			'<input type="hidden" id="J_pic" value="{pic}" />',
			'<input type="hidden" id="J_icon" value="{icon}" />',
			'<input type="hidden" id="J_status" value="{status}" />',
			'<input type="hidden" id="J_intro" value="{intro}" />',
			'<input type="hidden" id="J_create" value="{create}" />',
			'<span class="name"><a href="javascript:;" title="{name2}">{name}</a></span>',
			'<span class="coupon">{coupon}</span>',
			'<span class="amount" data={amount_code}>{amount}</span>',
			'<span class="type" data={type_code}>{type}</span>',
			'<span class="pos">{pos}</span>',
			'<span class="status">{status_text}</span>',
		'</li>'
	].join(''),
	detail_tpl : [
		'<div class="edit_exchange_wrap" data="" id="J_edit_exchange_wrap">',
			'<ul>',
				'<li class="new_hide">',
					'<span class="title">id</span>',
					'<span id="J_edit_exchange_id"></span>',
				'</li>',
				'<li class="new_hide">',
					'<span class="title">创建时间</span>',
					'<span id="J_edit_exchange_create"></span>',
				'</li>',
				'<li>',
					'<label for="J_edit_exchange_name">名称</label>',
					'<input id="J_edit_exchange_name" name="J_edit_exchange_name" type="text" value="" />',
				'</li>',
				'<li>',
					'<label for="J_edit_exchange_pos">位置</label>',
					'<input id="J_edit_exchange_pos" name="J_edit_exchange_pos" type="text" value="" />',
				'</li>',
				'<li>',
					'<label for="J_edit_exchange_coupon">需要礼券</label>',
					'<input id="J_edit_exchange_coupon" name="J_edit_exchange_coupon" type="text" value="" />',
				'</li>',
				'<li>',
					'<label for="J_edit_exchange_price">市场价格</label>',
					'<input id="J_edit_exchange_price" name="J_edit_exchange_price" type="text" value="" />',
				'</li>',
				'<li>',
					'<label for="J_edit_exchange_image">图片</label>',
					'<input id="J_edit_exchange_image" name="J_edit_exchange_image" type="text" value="" class="long_input"/>',
				'</li>',
				'<li>',
					'<label for="J_edit_exchange_icon">图标</label>',
					'<input id="J_edit_exchange_icon" name="J_edit_exchange_icon" type="text" value="" class="long_input" />',
				'</li>',
				'<li>',
					'<span class="title">数量</span>',
					'<span class="exchange_num_box">',
						'<input type="radio" name="exchange_num" id="J_exchange_num1" value="-1" checked="checked" />',
						'<label for="J_exchange_num1">无限量</label>',
					'</span>',
					'<span class="exchange_num_box last_exchange_num_box">',
						'<input type="radio" name="exchange_num" id="J_exchange_num2" value="0" />',
						'<label for="J_exchange_num2">限量</label>',
					'</span>',
					'<input id="J_edit_exchange_number" name="J_edit_exchange_number" type="text" value="" class="short_input" />',
				'</li>',
				'<li>',
					'<span class="title">类型</span>',
					'<select name="J_exchange_type" class="exchange_type" id="J_exchange_type">',
						'<option value="1">实物</option>',
						'<option value="2">虚拟物品</option>',
						'<option value="3">抽奖机会</option>',
					'</select>',
				'</li>',
				'<li>',
					'<span class="title">状态</span>',
					'<span class="exchange_onshelf_box">',
						'<input type="radio" name="exchange_onshelf" id="J_exchange_onshelf1" value="1" checked="checked" />',
						'<label for="J_exchange_onshelf1">上架</label>',
					'</span>',
					'<span class="exchange_onshelf_box">',
						'<input type="radio" name="exchange_onshelf" id="J_exchange_onshelf2" value="0" /> ',
						'<label for="J_exchange_onshelf2">下架</label>',
					'</span>',
				'</li>',
				'<li>',
					'<p>介绍</p>',
					'<textarea cols="60" rows="4" id="J_exchange_intro" value="" autocomplete="off" name="J_exchange_intro"></textarea>',
				'</li>',
			'</ul>',
			'<div class="exchange_btn_box">',
				'<a id="J_save_edit_exchange" class="btn" href="javascript:;">保存</a>',
				'<a id="J_cancel_edit_exchange" class="btn" href="javascript:;">取消</a>',
			'</div>',
		'</div>'
	].join(''),
	list_items : function(){
		$('#J_exchange_items li[class!="title"]').remove();
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
			url: ajax_main_path+'libs/controller/list_exchange_items.php',
			data : 'page='+exchange_items.page+'&num='+exchange_items.page_items,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				var exchange_item_list = data.items;
				var exchange_item_id, exchange_item_name, exchange_item_coupon, exchange_item_price, exchange_item_pic, exchange_item_icon, exchange_item_intro, exchange_item_status, exchange_item_create, exchange_item_amount_code, exchange_item_amount,exchange_item_type_code, exchange_item_type,exchange_item_pos,exchange_item_status_text;
				exchange_items.max_page = Math.ceil(data.total/exchange_items.page_items);
				
				for(exchange_item_i in exchange_item_list){
					exchange_item_id = exchange_item_list[exchange_item_i].id;
					exchange_item_name = exchange_item_list[exchange_item_i].name;
					exchange_item_coupon = exchange_item_list[exchange_item_i].coupon;
					
					exchange_item_price = exchange_item_list[exchange_item_i].price;
					exchange_item_pic = exchange_item_list[exchange_item_i].image;
					exchange_item_icon = exchange_item_list[exchange_item_i].icon;
					exchange_item_intro = exchange_item_list[exchange_item_i].introduction;
					exchange_item_status = exchange_item_list[exchange_item_i].status;
					if(exchange_item_status == 0){
						exchange_item_status_text='下架';
					}else{
						exchange_item_status_text='上架';
					}
					exchange_item_create = exchange_item_list[exchange_item_i].created_date;
					
					exchange_item_amount_code = exchange_item_list[exchange_item_i].amount;
					if(exchange_item_amount_code == -1){
						exchange_item_amount = '无限量';
					}else{
						exchange_item_amount = exchange_item_amount_code;
					}
					exchange_item_type_code = exchange_item_list[exchange_item_i].type;
					exchange_item_pos = exchange_item_list[exchange_item_i].position;
					switch(exchange_item_type_code){
						case 1:
							exchange_item_type = '实物';
							break;
						case 2:
							exchange_item_type = '虚拟物品';
							break;
						case 3:
							exchange_item_type = '抽奖机会';
							break;
					}
					$('#J_exchange_items').append(exchange_items.tpl.replace('{id}',exchange_item_id).replace('{name}',exchange_item_name).replace('{name2}',exchange_item_name).replace('{coupon}',exchange_item_coupon).replace('{amount_code}',exchange_item_amount_code).replace('{type_code}',exchange_item_type_code).replace('{amount}',exchange_item_amount).replace('{type}',exchange_item_type).replace('{pos}',exchange_item_pos).replace('{price}',exchange_item_price).replace('{pic}',exchange_item_pic).replace('{icon}',exchange_item_icon).replace('{intro}',exchange_item_intro).replace('{status}',exchange_item_status).replace('{create}',exchange_item_create).replace('{status_text}',exchange_item_status_text));
				}
				
				for(var i_page=1;i_page<=exchange_items.max_page;i_page++){
					if(i_page==exchange_items.page){
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
					}else{
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
					}
				}

				window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
			}
		});
	},
	show_item_detail : function(id,name,coupon,price,pic,icon,amount,type,status,intro,create,pos){
		$('body').append(exchange_items.detail_tpl);
		$('#J_edit_exchange_wrap').attr('data',1);
		if($('#J_edit_exchange_wrap').height() > $('.inner_main_wrap').height()){
			window.parent.$("#J_iframe").height($("#J_edit_exchange_wrap").height()+6);
		}
		
		$('#J_edit_exchange_id').text(id);
		$('#J_edit_exchange_create').text(create);
		
		$('#J_edit_exchange_name').val(name);
		$('#J_edit_exchange_pos').val(pos);
		$('#J_edit_exchange_coupon').val(coupon);
		$('#J_edit_exchange_price').val(price);
		$('#J_edit_exchange_image').val(pic);
		$('#J_edit_exchange_icon').val(icon);
		$('#J_exchange_intro').val(intro);
		
		if(amount == -1){
			$('.exchange_num_box input').removeAttr('checked');
			$('#J_exchange_num1').attr('checked','checked');
			$('#J_edit_exchange_number').hide();
		}else{
			$('.exchange_num_box input').removeAttr('checked');
			$('#J_exchange_num2').attr('checked','checked');
			$('#J_edit_exchange_number').val(amount);
		}
		
		$('#J_exchange_type option[value="'+type+'"]').attr('selected','selected');
		
		if(status == 1){
			$('.exchange_onshelf_box input').removeAttr('checked');
			$('#J_exchange_onshelf1').attr('checked','checked');
		}else{
			$('.exchange_onshelf_box input').removeAttr('checked');
			$('#J_exchange_onshelf2').attr('checked','checked');
		}
		
		$('#J_edit_exchange_wrap').show();
	},
	show_new_item : function(){
		$('body').append(exchange_items.detail_tpl);
		$('#J_edit_exchange_wrap').attr('data',0);
		$('#J_edit_exchange_wrap').addClass('new_edit_exchange_wrap');
		if($('#J_edit_exchange_wrap').height() > $('.inner_main_wrap').height()){
			window.parent.$("#J_iframe").height($("#J_edit_exchange_wrap").height()+6);
		}
		$('#J_edit_exchange_number').hide();
		$('#J_edit_exchange_wrap').show();
	},
	save_new_exchange_items : function(){
		var n_name = encodeURIComponent( $('#J_edit_exchange_name').val() );
		var n_pos = $('#J_edit_exchange_pos').val();
		var n_coupon = $('#J_edit_exchange_coupon').val();
		var n_price = $('#J_edit_exchange_price').val();
		var n_pic = encodeURIComponent( $('#J_edit_exchange_image').val() );
		var n_icon = encodeURIComponent( $('#J_edit_exchange_icon').val() );
		var n_intro = encodeURIComponent( $('#J_exchange_intro').val() );
		var n_num, n_type, n_status;
		
		if($('#J_exchange_num1').attr('checked') == 'checked'){
			n_num = -1;
		}else{
			n_num = $('#J_edit_exchange_number').val();
		}
		
		n_type = $('#J_exchange_type option:selected').attr('value');
		
		n_status = $('.exchange_onshelf_box input:checked').attr('value');

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
			url: ajax_main_path+'libs/controller/add_exchange_item.php',
			data : 'name='+n_name+'&coupon='+n_coupon+'&price='+n_price+'&position='+n_pos+'&image='+n_pic+'&icon='+n_icon+'&introduction='+n_intro+'&amount='+n_num+'&type='+n_type+'&status='+n_status,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1 || data == '1'){
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('新建成功');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('新建成功');
						window.parent.$("#J_alert_wrap").show();							
					}
					window.location.reload();
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('新建失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('新建失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	save_edit_exchange_items : function(){
		var n_id = $('#J_edit_exchange_id').text();
		var n_name = encodeURIComponent( $('#J_edit_exchange_name').val() );
		var n_pos = $('#J_edit_exchange_pos').val();
		var n_coupon = $('#J_edit_exchange_coupon').val();
		var n_price = $('#J_edit_exchange_price').val();
		var n_pic = encodeURIComponent( $('#J_edit_exchange_image').val() );
		var n_icon = encodeURIComponent( $('#J_edit_exchange_icon').val() );
		var n_intro = encodeURIComponent( $('#J_exchange_intro').val() );
		var n_num, n_type, n_status;
		
		if($('#J_exchange_num1').attr('checked') == 'checked'){
			n_num = -1;
		}else{
			n_num = $('#J_edit_exchange_number').val();
		}
		
		n_type = $('#J_exchange_type option:selected').attr('value');
		
		n_status = $('.exchange_onshelf_box input:checked').attr('value');

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
			url: ajax_main_path+'libs/controller/update_exchange_item.php',
			data : 'id='+n_id+'&name='+n_name+'&coupon='+n_coupon+'&price='+n_price+'&position='+n_pos+'&image='+n_pic+'&icon='+n_icon+'&introduction='+n_intro+'&amount='+n_num+'&type='+n_type+'&status='+n_status,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1 || data == '1'){
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('修改成功');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('修改成功');
						window.parent.$("#J_alert_wrap").show();							
					}
					window.location.reload();
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('修改失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('修改失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	},
	new_html : function(){
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
			url: ajax_main_path+'libs/controller/new_exchange_html.php',
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1 || data == '1'){
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('生成礼券兑换网页成功');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('生成礼券兑换网页成功');
						window.parent.$("#J_alert_wrap").show();							
					}
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('生成礼券兑换网页失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('生成礼券兑换网页失败，请重试！');
						window.parent.$("#J_alert_wrap").show();					
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	}
}
$('#J_new_exchange_html').click(function(){
	exchange_items.new_html();
});
$('#J_new_exchange_item').click(function(){
	exchange_items.show_new_item();
});
$('.exchange_num_box input').die().live('click',function(){
	if($('#J_exchange_num2').attr('checked') == 'checked'){
		$('#J_edit_exchange_number').show();
	}else{
		$('#J_edit_exchange_number').hide();
	}
});
$('#J_exchange_items .name a').die().live('click',function(){
	var _this_li = $(this).parents('li');
	
	var _this_id = _this_li.attr('data');
	
	var _this_name = $(this).text();
	var _this_coupon = _this_li.find('.coupon').text();
	var _this_price = _this_li.find('#J_price').val();
	var _this_pic = _this_li.find('#J_pic').val();
	var _this_icon = _this_li.find('#J_icon').val();
	var _this_amount = _this_li.find('.amount').attr('data');
	var _this_type = _this_li.find('.type').attr('data');
	var _this_status = _this_li.find('#J_status').val();
	var _this_intro = _this_li.find('#J_intro').val();
	var _this_create = _this_li.find('#J_create').val();
	var _this_pos = _this_li.find('.pos').text();
	
	exchange_items.show_item_detail(_this_id, _this_name, _this_coupon, _this_price, _this_pic, _this_icon, _this_amount, _this_type, _this_status, _this_intro, _this_create, _this_pos);
});
$('#J_save_edit_exchange').die().live('click',function(){
	var submit_type = $('#J_edit_exchange_wrap').attr('data');
	var submit_flag, submit_error;
		
	if(exchange_items.check_blank($('#J_edit_exchange_name')) && exchange_items.check_blank($('#J_edit_exchange_pos')) && exchange_items.check_blank($('#J_edit_exchange_coupon')) && exchange_items.check_blank($('#J_edit_exchange_price')) && exchange_items.check_blank($('#J_edit_exchange_image')) && exchange_items.check_blank($('#J_edit_exchange_icon')) && exchange_items.check_blank($('#J_exchange_intro')) ){
		if($('#J_exchange_num2').attr('checked')=='checked'){
			if(exchange_items.check_blank($('#J_edit_exchange_number')) && exchange_items.check_number($('#J_edit_exchange_number'))){
				submit_flag = 1;
			}else{
				submit_flag = 0;
				submit_error = '限量数量必须为正整数！';
			}
		}else{
			submit_flag = 1;
		}
		
		if(submit_flag == 1){
			if(exchange_items.check_number($('#J_edit_exchange_pos'))){
				submit_flag = 1;
			}else{
				submit_flag = 0;
				submit_error = '位置必须为正整数！';
			}
		}
	}else{
		submit_flag = 0;
		submit_error = '请将信息填写完整！';
	}
	
	if(submit_flag == 0){
		if(window.parent.$("#J_alert_wrap").length==0){
			window.parent.$('body').append(tpl.alert_box);
			window.parent.$("#J_alert_wrap .alert_content").text(submit_error);
		}else{
			window.parent.$("#J_alert_wrap .alert_content").text(submit_error);
			window.parent.$("#J_alert_wrap").show();							
		}
		setTimeout(hideAlert, 1000);
	}else{
		if(submit_type == 0){
			exchange_items.save_new_exchange_items();
		}else{
			exchange_items.save_edit_exchange_items();
		}
	}
});
$('#J_cancel_edit_exchange').die().live('click',function(){
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定取消本次编辑？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定取消本次编辑？');
		window.parent.$("#J_confirm_wrap").show();
	}
	window.parent.$('#J_confirm_btn').die().live('click',function(){
		window.parent.$("#J_confirm_wrap").hide();
		$('#J_edit_exchange_wrap').remove();
		window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
	});
	window.parent.$('#J_cancel_btn').die().live('click',function(){
		window.parent.$("#J_confirm_wrap").hide();
	});
});
$('.complain_page_wrap a').die().live('click',function(){
	var _this = $(this);
	var _this_page = _this.attr('value');
	if(_this_page != exchange_items.page){
		exchange_items.page = _this_page;
		exchange_items.list_items();
	}
});
exchange_items.list_items();