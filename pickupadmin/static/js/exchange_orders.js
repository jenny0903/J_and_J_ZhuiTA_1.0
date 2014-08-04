var exchange_orders = {
	page_items : 10,
	page : 1,
	max_page : 1,
	tpl : [
		'<li data={id}>',
			'<span class="name"><a title="{name2}">{name}</a></span>',
			'<span class="product"><a title="{product2}">{product}</a></span>',
			'<span class="address"><a title="{address2}">{address}</a></span>',
			'<span class="phone">{phone}</span>',
			'<span class="order_date">{order_date}</span>',
			'<span class="status"><a class="manage_order" data={state} href="javascript:;">{status}</a></span>',
		'</li>'
	].join(''),
	list_orders : function(){
		$('#J_exchange_orders li[class!="title"]').remove();
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
			url: ajax_main_path+'libs/controller/list_exchange_orders.php',
			data : 'page='+exchange_orders.page+'&num='+exchange_orders.page_items,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				var exchange_orders_list = data.orders;
				var exchange_user_name, exchange_product_name, exchange_address,exchange_state ,exchange_status,exchange_phone,exchange_order_date;
				exchange_orders.max_page = Math.ceil(data.total/exchange_orders.page_items);
				for(exchange_orders_i in exchange_orders_list){
					exchange_user_id = exchange_orders_list[exchange_orders_i].id;
					exchange_user_name = exchange_orders_list[exchange_orders_i].user_name;
					if(exchange_user_name == ''){
						exchange_user_name == 'null';
					}
					exchange_product_name = exchange_orders_list[exchange_orders_i].product_name;
					if(exchange_product_name == ''){
						exchange_product_name == 'null';
					}
					exchange_phone = exchange_orders_list[exchange_orders_i].phone;
					if(exchange_phone){
						exchange_phone == 'null';
					}
					exchange_address = exchange_orders_list[exchange_orders_i].address;
					if(exchange_address == ''){
						exchange_address == 'null';
					}
					exchange_order_date =  exchange_orders_list[exchange_orders_i].created_date.substr(0,10);
					if(exchange_order_date == ''){
						exchange_order_date == 'null';
					}
					exchange_state = exchange_orders_list[exchange_orders_i].status;
					
					switch(exchange_state){
						case 0:
							exchange_status = '未处理';
							break;
						case 1:
							exchange_status = '已处理';
							break;
						default:
							exchange_status = 'error';
							break;
					}
					
					$('#J_exchange_orders').append(exchange_orders.tpl.replace('{id}',exchange_user_id).replace('{name}',exchange_user_name).replace('{product}',exchange_product_name).replace('{address}',exchange_address).replace('{name2}',exchange_user_name).replace('{product2}',exchange_product_name).replace('{address2}',exchange_address).replace('{state}',exchange_state).replace('{status}',exchange_status).replace('{phone}',exchange_phone).replace('{order_date}',exchange_order_date));
				}
				
				for(var i_page=1;i_page<=exchange_orders.max_page;i_page++){
					if(i_page==exchange_orders.page){
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
					}else{
						$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
					}
				}
				
				window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
			}
		});
	},
	manage_orders : function(order_li){
		var order_id = order_li.attr('data');
		var type = order_li.find('.manage_order').attr('data');
		var new_status;
		if( type == 1 || type == '1' ){
			new_status = 0;
		}else{
			new_status = 1;
		}
		$.ajax({
			type: "POST",
			url: ajax_main_path+'libs/controller/exchnage_order.php',
			data : 'id='+order_id+'&status='+new_status,
			dataType:"JSON",
			success: function(data){
				window.parent.$("#J_loading_wrap").hide();
				if(data == 1 || data == '1'){
					if( new_status == 1 ){
						order_li.find('.manage_order').attr('data',1).text('已处理');
					}else{
						order_li.find('.manage_order').attr('data',0).text('未处理');
					}
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('该订单状态修改成功！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('该订单状态修改成功！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}else{
					if(window.parent.$("#J_alert_wrap").length==0){
						window.parent.$('body').append(tpl.alert_box);
						window.parent.$("#J_alert_wrap .alert_content").text('该订单状态修改失败，请重试！');
					}else{
						window.parent.$("#J_alert_wrap .alert_content").text('该订单状态修改失败，请重试！');
						window.parent.$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
				}
			}
		});
	}
}
$('.complain_page_wrap a').die().live('click',function(){
	var _this = $(this);
	var _this_page = _this.attr('value');
	if(_this_page != exchange_orders.page){
		exchange_orders.page = _this_page;
		exchange_orders.list_orders();
	}
});
$('.manage_order').die().live('click',function(){
	var _this_li = $(this).parents('li');
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定修改该订单状态吗？');
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text('确定修改该订单状态吗？');
		window.parent.$("#J_confirm_wrap").show();
	}
	window.parent.$('#J_confirm_btn').die().live('click',function(){
		window.parent.$("#J_confirm_wrap").hide();
		if(window.parent.$("#J_loading_wrap").length==0){
			window.parent.$('body').append(tpl.loading_box);
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}else{
			window.parent.$("#J_loading_wrap .loading_content").text('正在处理，请稍等……');
			window.parent.$("#J_loading_wrap").show();
		}
		exchange_orders.manage_orders( _this_li );
	});
	window.parent.$('#J_cancel_btn').die().live('click',function(){
		window.parent.$("#J_confirm_wrap").hide();
	});
	
});
exchange_orders.list_orders();