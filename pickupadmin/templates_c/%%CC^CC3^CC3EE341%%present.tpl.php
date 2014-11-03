<?php /* Smarty version 2.6.28, created on 2014-11-03 10:26:28
         compiled from present.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	<div class="menu_wrap">
    	<ul class="menu1">
			<li>
            	<a class="menu1_title a_cur" href="javascript:;">收到的礼物</a>
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
			<ul id="J_present_wrap">
				<li class="title">
					<div class="time">时间</div>
					<div class="present">礼物名称</div>
					<div class="amount">礼物数量</div>
					<div class="sender">送礼人</div>
					<div class="status">礼物状态</div>
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
			
			$('.present_user .name').text(name);
			$('.present_user .id').text(id);
			
			getPresentList(page_to);
		});
		
		function getPresentList(page){
			if($("#J_loading_wrap").length==0){
				$('body').append(tpl.loading_box);
				$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
				$("#J_loading_wrap").show();
			}else{
				$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
				$("#J_loading_wrap").show();
			}
			$.ajax({
				type: "POST",
				url: ajax_main_path+'libs/controller/received_gift.php',
				data:"id="+id+"&num="+num_on_page+"&page="+page,
				dataType:"JSON",
				async: false,
				success: function(data){
					loadUserPresent(data);
				}
			});
		}
		
		$('.complain_page_wrap a').die().live('click',function(){
			page_to = $(this).attr('value');
			if(page_to!=page_now){
				getPresentList(page_to);
			}
		});
		
		function loadUserPresent(data){
			var present_info = data.items;
			var total = data.total;
			var total_page = Math.ceil(total/num_on_page);
			page_now = page_to;
			
			$('.complain_page_wrap a').remove();
			$('#J_present_wrap .content').remove();
			
			for(var i_page=1;i_page<=total_page;i_page++){
				if(i_page==page_now){
					$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;" class="page_cur">'+i_page+'</a>');
				}else{
					$('.complain_page_wrap').append('<a value="'+i_page+'" href="javascript:;">'+i_page+'</a>');
				}
			}
			
			if(total!=0){
				var time, present, amount, sender, status;
				for(i in present_info){
					time = present_info[i].updated_date.split('T')[0];
					present = present_info[i].product_name;
/*					switch(present_info[i].product_id){
						case "b6431173-ff31-4d44-b554-c6738e6cd6f4":
							present = "FLOWER";
							break;
						case "1ef7b33e-659e-4c8e-a881-5f30ca5d4bb1":
							present = "CHAMPAGNE";
							break;
						case "dee5fa0d-c6ad-4423-8434-02ec8803f9bc":
							present = "DIAMOND";
							break;
						case "90cddc0c-e84b-45ce-bf52-82a1e4f7a90d":
							present = "CAR";
							break;
						case "c73a197d-dc87-48b0-a199-f03026897b4d":
							present = "HOUSE";
							break;
						case "1f4d5233-732a-4898-804e-73e1f25ec04c":
							present = "LOVE ";
							break;
						default:
							present = "undefined";
							break;
					}*/
					amount = present_info[i].amount;
					sender = present_info[i].sender_name;
					switch(present_info[i].status){
						case 0:
							status = "未处理";
							break;
						case 1:
							status = "接受";
							break;
						case -1:
							status = "拒绝";
							break;
					}
					$('#J_present_wrap').append(tpl_present.replace('{time}',time).replace('{present}',present).replace('{amount}',amount).replace('{sender}',sender).replace('{status}',status));
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