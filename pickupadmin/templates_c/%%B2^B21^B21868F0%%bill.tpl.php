<?php /* Smarty version 2.6.28, created on 2014-07-29 17:18:01
         compiled from bill.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	<div class="menu_wrap">
    	<ul class="menu1">
			<li>
            	<a class="menu1_title a_cur" href="javascript:;">充值历史</a>
            </li>
		</ul>
	</div>
	<div class="main_wrap present_wrap">
		<div class="present_user">
			<ul>
				<li>
					<span class="title">用户名：</span>
					<span class="name"></span>
				</li>
				<li>
					<span class="title">用户ID：</span>
					<span class="id"></span>
				</li>
			</ul>
		</div>
		<div class="present_list">
			<ul id="J_bill_wrap">
				<li class="title">
					<div class="transaction">流水号</div>
					<div class="key_num">钥匙数量</div>
					<div class="value">价格(￥)</div>
					<div class="purchase_date">实际支付日期</div>
					<div class="created_date">订单验证日期</div>
					<div class="platform">平台</div>
				</li>
			</ul>
		</div>
		<div class="complain_page_wrap">
		</div>
    </div>
	<script type="text/javascript">
		var page_to = 1,
			page_now = 0;
		var id;
		var num_on_page = 5;
	
		$(document).ready(function(){
			var user_info = window.location.href.split('?')[1];
			var name = decodeURIComponent(user_info.split('&')[0]);
			id = user_info.split('&')[1];
			
			$(".present_user .name").text(name);
			$(".present_user .id").text(id);
			
			getBillList(page_to);
		});
		
		function getBillList(page){
			if($("#J_loading_wrap").length==0){
				$("body").append(tpl.loading_box);
				$("#J_loading_wrap .loading_content").text("正在加载，请稍等……");
				$("#J_loading_wrap").show();
			}else{
				$("#J_loading_wrap .loading_content").text("正在加载，请稍等……");
				$("#J_loading_wrap").show();
			}
			$.ajax({
				type: "POST",
				url: ajax_main_path+"libs/controller/get_purchase_record.php",
				data:"id="+id+"&num="+num_on_page+"&page="+page,
				dataType:"JSON",
				async: false,
				success: function(data){
					loadUserBill(data);
				}
			});
		};
		
		$('.complain_page_wrap a').die().live('click',function(){
			page_to = $(this).attr('value');
			if(page_to!=page_now){
				getBillList(page_to);
			}
		});
		
		function loadUserBill(data){
			var bill_info1 = data.apple;
			var bill_info2 = data.iapppay;
			
			var bill_info1_info = bill_info1.apple;
			var bill_info1_num = bill_info1.total;
			
			var bill_info2_info = bill_info2.iapppay;
			var bill_info2_num = bill_info2.total;
			
			var total = bill_info1_num + bill_info2_num;
			
			var total_page = Math.ceil(total/num_on_page);
			page_now = page_to;
			
			$(".complain_page_wrap a").remove();
			$("#J_bill_wrap .content").remove();
			
			for(var i_page=1;i_page<=total_page;i_page++){
				if(i_page==page_now){
					$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
				}else{
					$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
				}
			}
			
			if(total!=0){
				var code,key,value,purchase,create,platform;
				for(apple_i in bill_info1_info){
					code = bill_info1_info[apple_i].transaction_id;
					switch(bill_info1_info[apple_i].product_id){
						// case "pickup_product_1":
							// key = 6;
							// value = "6.00";
							// break;
						// case "pickup_product_2":
							// key = 20;
							// value = "18.00";
							// break;
						// case "pickup_product_3":
							// key = 40;
							// value = "30.00";
							// break;
						// case "pickup_product_4":
							// key = 100;
							// value = "68.00";
							// break;
						// case "pickup_product_6":
							// key = 500;
							// value = "308.00";
							// break;
						// case "pickup_product_7":
							// key = 1200;
							// value = "698.00";
							// break;
						case "pickup_keyprice_1":
						case "1":
							key = 6;
							value = "6.00";
							break;
						case "pickup_keyprice_2":
						case "2":
							key = 20;
							value = "18.00";
							break;
						case "pickup_keyprice_3":
						case "3":
							key = 40;
							value = "30.00";
							break;
						case "pickup_keyprice_4":
						case "4":
							key = 100;
							value = "68.00";
							break;
						case "pickup_keyprice_5":
						case "5":
							key = 500;
							value = "258.00";
							break;
						case "pickup_keyprice_6":
						case "6":
							key = 1200;
							value = "588.00";
							break;
						default:
							key = "error";
							value = "error";
							break;
					}
					purchase = bill_info1_info[apple_i].purchase_date.split(' ')[0]; 
					create = bill_info1_info[apple_i].created_date.split('T')[0];
					platform = 'apple';
					
					$('#J_bill_wrap').append(tpl_bill.replace('{code}',code).replace('{key}',key).replace('{value}',value).replace('{purchase}',purchase).replace('{create}',create).replace('{platform}',platform));
				}
				for(android_i in bill_info2_info){
					code = bill_info2_info[android_i].transaction_id;
					switch(bill_info2_info[android_i].product_id){
						// case "pickup_product_1":
							// key = 6;
							// value = "6.00";
							// break;
						// case "pickup_product_2":
							// key = 20;
							// value = "18.00";
							// break;
						// case "pickup_product_3":
							// key = 40;
							// value = "30.00";
							// break;
						// case "pickup_product_4":
							// key = 100;
							// value = "68.00";
							// break;
						// case "pickup_product_6":
							// key = 500;
							// value = "308.00";
							// break;
						// case "pickup_product_7":
							// key = 1200;
							// value = "698.00";
							// break;
						case "pickup_keyprice_1":
						case "1":
							key = 6;
							value = "6.00";
							break;
						case "pickup_keyprice_2":
						case "2":
							key = 20;
							value = "18.00";
							break;
						case "pickup_keyprice_3":
						case "3":
							key = 40;
							value = "30.00";
							break;
						case "pickup_keyprice_4":
						case "4":
							key = 100;
							value = "68.00";
							break;
						case "pickup_keyprice_5":
						case "5":
							key = 500;
							value = "258.00";
							break;
						case "pickup_keyprice_6":
						case "6":
							key = 1200;
							value = "588.00";
							break;
						default:
							key = "error";
							value = "error";
							break;
					}
					purchase = bill_info2_info[android_i].purchase_date.split(' ')[0]; 
					create = bill_info2_info[android_i].created_date.split('T')[0];
					platform = 'iapppay';
					
					$('#J_bill_wrap').append(tpl_bill.replace('{code}',code).replace('{key}',key).replace('{value}',value).replace('{purchase}',purchase).replace('{create}',create).replace('{platform}',platform));
				}
			}
			$("#J_loading_wrap").hide();
		};
	</script>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>