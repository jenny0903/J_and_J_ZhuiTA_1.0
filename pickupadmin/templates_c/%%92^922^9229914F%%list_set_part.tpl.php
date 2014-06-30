<?php /* Smarty version 2.6.28, created on 2013-12-02 11:12:26
         compiled from list_set_part.tpl */ ?>
	<div class="main_wrap list_modify">
    	<div class="mod_info_box mod_info_basic">
        	<ul>
            	<li class="new_hide">
                	<span class="mod_info_title">榜单ID：</span>
                    <span class="mod_info_id"> </span>
                </li>
                <li>
                	<label for="mod_info_name">榜单名称：</label>
                    <input type="text" id="mod_info_name" value="" autocomplete="off" name="mod_info_name"/>
                </li>
				<li class="new_hide">
                	<span class="mod_info_title">状态：</span>
                    <span class="mod_info_state"> </span>
                </li>
                <li>
                	<label for="mod_info_num">期数：</label>
                    <input type="text" id="mod_info_num" value="" autocomplete="off" name="mod_info_num" />
                </li>
                <li>
                	<label for="mod_info_start">开始日期：</label>
                    <input type="text" id="mod_info_start" value="" autocomplete="off"  name="mod_info_start"/>
                </li>
                <li>
                	<label for="mod_info_end">结束日期：</label>
                    <input type="text" id="mod_info_end" value="" autocomplete="off" name="mod_info_end" />
                </li>
            </ul>
        </div>
        <div class="mod_info_box activity_url">
        	<div class="title">活动网页URL：</div>
            <input type="text" id="activity_url" value="" autocomplete="off" name="activity_url"/>
        </div>
        <div class="mod_info_prize_wrap">
            <div class="mod_info_box activity_rule">
                <div class="title">倾城榜 领奖规则：</div>
                <textarea cols="60" rows="4" id="activity_rule1" value="" name="activity_rule1"></textarea>
				<input type="hidden" name="id_rule_1" id="id_rule_1" value="" />
            </div>
            <div class="mod_info_box mod_info_prize">
                <ul>
                    <li>
                        <label for="prize11">倾城榜一等奖奖品（1名）：</label>
                        <input type="text" id="prize11" value="" name="prize11" />
						<input type="hidden" name="id_prize_11" id="id_prize_11" value="" />
                    </li>
                    <li>
                        <label for="prize12">倾城榜二等奖奖品（2名）：</label>
                        <input type="text" id="prize12" value="" name="prize12" />
						<input type="hidden" name="id_prize_12" id="id_prize_12" value="" />
                    </li>
                    <li>
                        <label for="prize13">倾城榜三等奖奖品（6名）：</label>
                        <input type="text" id="prize13" value="" name="prize13"/>
						<input type="hidden" name="id_prize_13" id="id_prize_13" value="" />
                    </li>
                </ul>
            </div>
            <div class="mod_info_box activity_rule">
                <div class="title">才俊榜 领奖规则：</div>
                <textarea cols="60" rows="4" id="activity_rule2" value="" name="activity_rule2"></textarea>
				<input type="hidden" name="id_rule_2" id="id_rule_2" value="" />
            </div>
            <div class="mod_info_box mod_info_prize">
                <ul>
                    <li>
                        <label for="prize21">才俊榜一等奖奖品（1名）：</label>
                        <input type="text" id="prize21" value="" name="prize21" />
						<input type="hidden" name="id_prize_21" id="id_prize_21" value="" />
                    </li>
                    <li>
                        <label for="prize22">才俊榜二等奖奖品（2名）：</label>
                        <input type="text" id="prize22" value="" name="prize22" />
						<input type="hidden" name="id_prize_22" id="id_prize_22" value="" />
                    </li>
                    <li>
                        <label for="prize23">才俊榜三等奖奖品（6名）：</label>
                        <input type="text" id="prize23" value="" name="prize23"/>
						<input type="hidden" name="id_prize_23" id="id_prize_23" value="" />
                    </li>
                </ul>
            </div>
            <div class="mod_info_box activity_rule">
                <div class="title">财富榜 领奖规则：</div>
                <textarea cols="60" rows="4" id="activity_rule3" value="" name="activity_rule3"></textarea>
				<input type="hidden" name="id_rule_3" id="id_rule_3" value="" />
            </div>
            <div class="mod_info_box mod_info_prize">
                <ul>
                    <li>
                        <label for="prize31">财富榜一等奖奖品（1名）：</label>
                        <input type="text" id="prize31" value="" name="prize31" />
						<input type="hidden" name="id_prize_31" id="id_prize_31" value="" />
                    </li>
                    <li>
                        <label for="prize32">财富榜二等奖奖品（2名）：</label>
                        <input type="text" id="prize32" value="" name="prize32" />
						<input type="hidden" name="id_prize_32" id="id_prize_32" value="" />
                    </li>
                    <li>
                        <label for="prize33">财富榜三等奖奖品（6名）：</label>
                        <input type="text" id="prize33" value="" name="prize33"/>
						<input type="hidden" name="id_prize_33" id="id_prize_33" value="" />
                    </li>
                </ul>
            </div>
        </div>
        <a href="javascript:;" class="btn mod_info_btn" id="J_mod_save">保存</a>
        <a href="javascript:;" class="btn mod_info_btn btn_disable" id="J_mod_publish">发布</a>
    </div>
	<script type="text/javascript">
		var mod_type;
		var save_flag = 0;
		var publish_flag = 0;
		function loadAwardsInfo(data){
			var awards=data.awards;
			var rule=data.rule;
			
			var award21=awards.male[0].name;
			var award22=awards.male[1].name;
			var award23=awards.male[2].name;
			
			var id_award21=awards.male[0].id;
			var id_award22=awards.male[1].id;
			var id_award23=awards.male[2].id;
			
			var award11=awards.female[0].name;
			var award12=awards.female[1].name;
			var award13=awards.female[2].name;
			
			var id_award11=awards.female[0].id;
			var id_award12=awards.female[1].id;
			var id_award13=awards.female[2].id;
			
			var award31=awards.money[0].name;
			var award32=awards.money[1].name;
			var award33=awards.money[2].name;
			
			var id_award31=awards.money[0].id;
			var id_award32=awards.money[1].id;
			var id_award33=awards.money[2].id;
			
			var rule2=rule.male.rule;
			var rule1=rule.female.rule;
			var rule3=rule.money.rule;
			
			var id_rule2=rule.male.id;
			var id_rule1=rule.female.id;
			var id_rule3=rule.money.id;
			
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
			
			$('#activity_rule1').val(rule1);
			$('#activity_rule2').val(rule2);
			$('#activity_rule3').val(rule3);
			
			$('#id_rule_1').val(id_rule1);
			$('#id_rule_2').val(id_rule2);
			$('#id_rule_3').val(id_rule3);
		};
		function typeAndInfo(){
			var url=window.location.href;
			//"http://viewer.yunio.me:8080/smarty/pickup/list_set.php?type=0";
			//"http://viewer.yunio.me:8080/smarty/pickup/list_set.php?type=1#528c595189595d9daaa86b74&5&%E6%B5%8B%E8%AF%95%E6%B4%BB%E5%8A%A8&2013/11/18&2013/11/20&%E5%B7%B2%E7%BB%93%E6%9D%9F&";
			var type=url.split("type=")[1];
			if(type=='0'){
				mod_type=0;
				
				$(".new_hide").hide();
			}else{
				mod_type=1;
			
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
				$('#mod_info_num').val(info_num);
				$('#mod_info_start').val(info_start);
				$('#mod_info_end').val(info_end);
				$('#activity_url').val(info_resource_url);
				
				if(info_state=='统计完'){
					publish_flag=1;
					$('#J_mod_publish').removeClass('btn_disable');
				}
				
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
					url: 'get_awards_rule.php',
					data:"number="+info_num,
					dataType:"JSON",
					async: false,
					success: function(data){
						$("#J_loading_wrap").hide();
						loadAwardsInfo(data);
					}
				});
			}
		};
		function timeChange(time){
			if(/^([0-9]{4})+\/+([0-9]{2})+\/+([0-9]{2})$/.test(time)){
				var year = time.split('/')[0];
				var month = time.split('/')[1];
				var day = time.split('/')[2];
				
				var new_time = year + '-' + month + '-' + day + 'T00:00:00.000+08:00';
				
				return new_time;
			}else{
				return false;
			}
		}
		$('#J_mod_publish').click(function(){
			if(publish_flag==1){
				if($("#J_loading_wrap").length==0){
					$('body').append(tpl.loading_box);
					$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
					$("#J_loading_wrap").show();
				}else{
					$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
					$("#J_loading_wrap").show();
				}
				
				$.ajax({
					type: "POST",
					url: 'publish_billboard.php',
					data:'number='+$('#mod_info_num').val(),
					dataType:"JSON",
					async: false,
					success: function(data){
						$("#J_loading_wrap").hide();
						if( data == '1' ){
							window.location.href='main.php';
							if($("#J_alert_wrap").length==0){
								$('body').append(tpl.alert_box);
								$("#J_alert_wrap .alert_content").text('发布成功！');
								$("#J_alert_wrap").show();
							}else{
								$("#J_alert_wrap .alert_content").text('发布成功！');
								$("#J_alert_wrap").show();							
							}
						}else{
							if($("#J_alert_wrap").length==0){
								$('body').append(tpl.alert_box);
								$("#J_alert_wrap .alert_content").text('发布失败，请重试！');
								$("#J_alert_wrap").show();
							}else{
								$("#J_alert_wrap .alert_content").text('发布失败，请重试！');
								$("#J_alert_wrap").show();							
							}
						}
						setTimeout(hideAlert, 1000);
					}
				});
			}
		});
		$("#J_mod_save").click(function(){
			if(mod_type==0){
				var new_post_name=$('#mod_info_name').val();
				var new_post_num=$('#mod_info_num').val();
				var new_post_begin= encodeURIComponent(timeChange($('#mod_info_start').val()));
				var new_post_end= encodeURIComponent(timeChange($('#mod_info_end').val()));
				var new_post_url=$('#activity_url').val();
				
				var new_post_rule1=$('#activity_rule1').val();
				var new_post_rule2=$('#activity_rule2').val();
				var new_post_rule3=$('#activity_rule3').val();
				
				var new_post_prize11=$('#prize11').val();
				var new_post_prize12=$('#prize12').val();
				var new_post_prize13=$('#prize13').val();
				
				var new_post_prize21=$('#prize21').val();
				var new_post_prize22=$('#prize22').val();
				var new_post_prize23=$('#prize23').val();
				
				var new_post_prize31=$('#prize31').val();
				var new_post_prize32=$('#prize32').val();
				var new_post_prize33=$('#prize33').val();
				
				if(new_post_name!=''&&new_post_num!=''&&new_post_begin!=''&&new_post_end!=''&&new_post_url!=''){
					if(new_post_rule1!=''&&new_post_rule2!=''&&new_post_rule3!=''){
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
				}else{
					save_flag = 0;
				}
				
				if(save_flag==0){
					if($("#J_alert_wrap").length==0){
						$('body').append(tpl.alert_box);
						$("#J_alert_wrap .alert_content").text('请将所有信息填写完整！');
						$("#J_alert_wrap").show();
					}else{
						$("#J_alert_wrap .alert_content").text('请将所有信息填写完整！');
						$("#J_alert_wrap").show();							
					}
					setTimeout(hideAlert, 1000);
					return false;
				}
				
				if($("#J_loading_wrap").length==0){
					$('body').append(tpl.loading_box);
					$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
					$("#J_loading_wrap").show();
				}else{
					$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
					$("#J_loading_wrap").show();
				}
				
				$.ajax({
					type: "POST",
					url: 'new_billboard_events.php',
					data:'name='+new_post_name+'&number='+new_post_num+'&begin='+new_post_begin+'&end='+new_post_end+'&intro='+new_post_url+'&rule1='+new_post_rule1+'&rule2='+new_post_rule2+'&rule3='+new_post_rule3+'&prize11='+new_post_prize11+'&prize12='+new_post_prize12+'&prize13='+new_post_prize13+'&prize21='+new_post_prize21+'&prize22='+new_post_prize22+'&prize23='+new_post_prize23+'&prize31='+new_post_prize31+'&prize32='+new_post_prize32+'&prize33='+new_post_prize33,
					dataType:"JSON",
					async: false,
					success: function(data){
						$("#J_loading_wrap").hide();
						if( data == '1' ){
							window.location.href='main.php';
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
				});
			}else{
				var mod_post_id=$('.mod_info_id').text();
				var mod_post_name=$('#mod_info_name').val();
				var mod_post_num=$('#mod_info_num').val();
				var mod_post_begin= encodeURIComponent(timeChange($('#mod_info_start').val()));
				var mod_post_end= encodeURIComponent(timeChange($('#mod_info_end').val()));
				var mod_post_url=$('#activity_url').val();
				
				var mod_post_rule1=$('#activity_rule1').val();
				var mod_post_rule2=$('#activity_rule2').val();
				var mod_post_rule3=$('#activity_rule3').val();
				
				var mod_post_prize11=$('#prize11').val();
				var mod_post_prize12=$('#prize12').val();
				var mod_post_prize13=$('#prize13').val();
				
				var mod_post_prize21=$('#prize21').val();
				var mod_post_prize22=$('#prize22').val();
				var mod_post_prize23=$('#prize23').val();
				
				var mod_post_prize31=$('#prize31').val();
				var mod_post_prize32=$('#prize32').val();
				var mod_post_prize33=$('#prize33').val();
				
				var mod_post_id_prize11=$('#id_prize_11').val();
				var mod_post_id_prize12=$('#id_prize_12').val();
				var mod_post_id_prize13=$('#id_prize_13').val();
				
				var mod_post_id_prize21=$('#id_prize_21').val();
				var mod_post_id_prize22=$('#id_prize_22').val();
				var mod_post_id_prize23=$('#id_prize_23').val();
				
				var mod_post_id_prize31=$('#id_prize_31').val();
				var mod_post_id_prize32=$('#id_prize_32').val();
				var mod_post_id_prize33=$('#id_prize_33').val();
				
				var mod_post_id_rule1=$('#id_rule_1').val();
				var mod_post_id_rule2=$('#id_rule_2').val();
				var mod_post_id_rule3=$('#id_rule_3').val();
				
				if($("#J_loading_wrap").length==0){
					$('body').append(tpl.loading_box);
					$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
					$("#J_loading_wrap").show();
				}else{
					$("#J_loading_wrap .loading_content").text('正在保存，请稍等……');
					$("#J_loading_wrap").show();
				}
				
				
				
				$.ajax({
					type: "POST",
					url: 'update_billboard_events.php',
					data:'id='+mod_post_id+'&name='+mod_post_name+'&number='+mod_post_num+'&begin='+mod_post_begin+'&end='+mod_post_end+'&intro='+mod_post_url+'&rule1='+mod_post_rule1+'&rule2='+mod_post_rule2+'&rule3='+mod_post_rule3+'&prize11='+mod_post_prize11+'&prize12='+mod_post_prize12+'&prize13='+mod_post_prize13+'&prize21='+mod_post_prize21+'&prize22='+mod_post_prize22+'&prize23='+mod_post_prize23+'&prize31='+mod_post_prize31+'&prize32='+mod_post_prize32+'&prize33='+mod_post_prize33+'&id_prize11='+mod_post_id_prize11+'&id_prize12='+mod_post_id_prize12+'&id_prize13='+mod_post_id_prize13+'&id_prize21='+mod_post_id_prize21+'&id_prize22='+mod_post_id_prize22+'&id_prize23='+mod_post_id_prize23+'&id_prize31='+mod_post_id_prize31+'&id_prize32='+mod_post_id_prize32+'&id_prize33='+mod_post_id_prize33+'&id_rule1='+mod_post_id_rule1+'&id_rule2='+mod_post_id_rule2+'&id_rule3='+mod_post_id_rule3,
					dataType:"JSON",
					async: false,
					success: function(data){
						$("#J_loading_wrap").hide();
						if( data == '1' ){
							window.location.href='main.php';
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
				});
			}
		});
		
		function hideAlert(){
			$("#J_alert_wrap").hide();
		};
		
		$(document).ready(function() {
			$("#J_menu1 .menu1_li").eq(0).click();
			$("#J_menu1 .menu2").eq(0).find('a').eq(0).click();
			typeAndInfo();
		});
	</script>