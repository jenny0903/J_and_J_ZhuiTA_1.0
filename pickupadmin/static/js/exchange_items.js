var exchange_items = {
	page_items : 10,
	page : 1,
	max_page : 1,
	tpl : [
		'<li>',
			//'<span class="id">{id}</span>',
			'<span class="name"><a href="javascript:;">{name}</a></span>',
			'<span class="coupon">{coupon}</span>',
			'<span class="amount">{amount}</span>',
			'<span class="type">{type}</span>',
		'</li>'
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
				var exchange_item_id, exchange_item_name, exchange_item_coupon, exchange_item_amount, exchange_item_type;
				exchange_items.max_page = Math.ceil(data.total/exchange_items.page_items);
				for(exchange_item_i in exchange_item_list){
					exchange_item_id = exchange_item_list[exchange_item_i].id;
					exchange_item_name = exchange_item_list[exchange_item_i].name;
					exchange_item_coupon = exchange_item_list[exchange_item_i].coupon;
					exchange_item_amount = exchange_item_list[exchange_item_i].amount;
					if(exchange_item_amount == -1){
						exchange_item_amount = '无限量';
					}
					exchange_item_type = exchange_item_list[exchange_item_i].type;
					switch(exchange_item_type){
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
					$('#J_exchange_items').append(exchange_items.tpl.replace('{id}',exchange_item_id).replace('{name}',exchange_item_name).replace('{coupon}',exchange_item_coupon).replace('{amount}',exchange_item_amount).replace('{type}',exchange_item_type));
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
	}
}
$('.complain_page_wrap a').die().live('click',function(){
	var _this = $(this);
	var _this_page = _this.attr('value');
	if(_this_page != exchange_items.page){
		exchange_items.page = _this_page;
		exchange_items.list_items();
	}
});
exchange_items.list_items();