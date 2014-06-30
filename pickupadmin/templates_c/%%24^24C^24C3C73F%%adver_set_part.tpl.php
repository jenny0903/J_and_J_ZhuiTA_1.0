<?php /* Smarty version 2.6.28, created on 2013-12-03 13:07:57
         compiled from adver_set_part.tpl */ ?>
	<div class="main_wrap list_adver">
		<div class="mod_info_box mod_info_adver">
        	<ul id="J_mod_adver">
				<li>
                	<label for="adver11">横幅广告位1图片标题：</label>
                    <input type="text" id="adver11" class="file_title" value="" />
                </li>
            	<li>
					<input type="hidden" class="file_id" value="" />
                	<label for="adver12">横幅广告位1图片URL：</label>
                    <input type="text" id="adver12" class="file_path" value="" />
                </li>
				<li class="link_li">
                	<label for="adver13">横幅广告位1图片链接：</label>
                    <input type="text" id="adver13" class="file_link" value="" />
                </li>
				<li>
                	<label for="adver21">横幅广告位2图片标题：</label>
                    <input type="text" id="adver21" class="file_title" value="" />
                </li>
                <li>
					<input type="hidden" class="file_id" value="" />
                	<label for="adver22">横幅广告位2图片URL：</label>
                    <input type="text" id="adver22" class="file_path" value="" />
                </li>
				<li class="link_li">
                	<label for="adver23">横幅广告位2图片链接：</label>
                    <input type="text" id="adver23" class="file_link" value="" />
                </li>
				<li>
                	<label for="adver31">横幅广告位3图片标题：</label>
                    <input type="text" id="adver31" class="file_title" value="" />
                </li>
                <li>
					<input type="hidden" class="file_id" value="" />
                	<label for="adver32">横幅广告位3图片URL：</label>
                    <input type="text" id="adver32" class="file_path" value="" />
                </li>
				<li class="link_li">
                	<label for="adver33">横幅广告位3图片链接：</label>
                    <input type="text" id="adver33" class="file_link" value="" />
                </li>
				<li>
                	<label for="adver41">横幅广告位4图片标题：</label>
                    <input type="text" id="adver41" class="file_title" value="" />
                </li>
                <li>
					<input type="hidden" class="file_id" value="" />
                	<label for="adver42">横幅广告位4图片URL：</label>
                    <input type="text" id="adver42" class="file_path" value="" />
                </li>
				<li class="link_li">
                	<label for="adver43">横幅广告位4图片链接：</label>
                    <input type="text" id="adver43" class="file_link" value="" />
                </li>
            </ul>
        </div>
		<a href="javascript:;" class="btn mod_info_btn btn_disable" id="J_adver_save">保存</a>
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			$("#J_menu1 .menu1_li").eq(0).click();
			$("#J_menu1 .menu2").eq(0).find('a').eq(1).click();
			
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
				url: 'get_billboard_news.php',
				dataType:"JSON",
				async: false,
				success: function(data){
					$("#J_loading_wrap").hide();
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
			
			if($("#J_loading_wrap").length==0){
				$('body').append(tpl.loading_box);
				$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
				$("#J_loading_wrap").show();
			}else{
				$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
				$("#J_loading_wrap").show();
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
						if($("#J_alert_wrap").length==0){
							$('body').append(tpl.alert_box);
							$("#J_alert_wrap .alert_content").text('请将信息填写完整！');
							$("#J_alert_wrap").show();
						}else{
							$("#J_alert_wrap .alert_content").text('请将信息填写完整！');
							$("#J_alert_wrap").show();							
						}
						$("#J_loading_wrap").hide();
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
						if($("#J_alert_wrap").length==0){
							$('body').append(tpl.alert_box);
							$("#J_alert_wrap .alert_content").text('请将信息填写完整！');
							$("#J_alert_wrap").show();
						}else{
							$("#J_alert_wrap .alert_content").text('请将信息填写完整！');
							$("#J_alert_wrap").show();							
						}
						$("#J_loading_wrap").hide();
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
						url: submit_url,
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
			$("#J_loading_wrap").hide();
			if(flag0 ==1 && flag1 ==1 && flag2 ==1 && flag3 ==1){
				if($("#J_alert_wrap").length==0){
					$('body').append(tpl.alert_box);
					$("#J_alert_wrap .alert_content").text('保存成功！');
					$("#J_alert_wrap").show();
				}else{
					$("#J_alert_wrap .alert_content").text('保存成功！');
					$("#J_alert_wrap").show();							
				}
			}else{
				if($("#J_alert_wrap").length==0){
					$('body').append(tpl.alert_box);
					$("#J_alert_wrap .alert_content").text('保存失败，请重试！');
					$("#J_alert_wrap").show();
				}else{
					$("#J_alert_wrap .alert_content").text('保存失败，请重试！');
					$("#J_alert_wrap").show();							
				}
			}
			setTimeout(hideAlert, 1000);
		}
		
		$('#J_adver_save').click(function(){
			submitAdverInfo();
		});
		
		function hideAlert(){
			$("#J_alert_wrap").hide();
		};
	</script>