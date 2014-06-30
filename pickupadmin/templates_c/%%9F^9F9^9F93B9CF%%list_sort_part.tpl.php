<?php /* Smarty version 2.6.28, created on 2013-12-02 11:08:55
         compiled from list_sort_part.tpl */ ?>
	<div class="main_wrap list_sort">
    	<form>
        	<div class="sort_num_wrap">
                <label for="sort_num">查看榜单：</label>
                <select name="sort_num" class="sort_num" id="J_sort_num" onchange="sort_num_change()">
                    <!--<option value="1">撩菜撩汤用户榜单第一期</option>
                    <option value="2">撩菜撩汤用户榜单第二期</option>
                    <option value="3" selected="selected">撩菜撩汤用户榜单第三期（最新）</option>-->
                </select>
            </div>
            <ul class="sort_type" id="J_sort_type">
            	<li><a value="1" class="a_cur" href="javascript:;">倾城榜</a></li>
                <li><a value="2" href="javascript:;">才俊榜</a></li>
                <li><a value="3" href="javascript:;">财富榜</a></li>
            </ul>
        </form>
        <div class="sort_list_wrap">
            <ul id="J_sort_content">
			</ul>
                <!--<li>
                    <div class="sort_no">100000</div>
                    <div class="sort_name">沙发小板凳</div>
                    <div class="sort_id">{b5759568-d714-4bae-bec1-219b9fb7a016}</div>
                    <div class="sort_point">{100000}</div>
                </li>
                <li>
                    <div class="sort_no">100000</div>
                    <div class="sort_name">沙发小板凳</div>
                    <div class="sort_id">{b5759568-d714-4bae-bec1-219b9fb7a016}</div>
                    <div class="sort_point">{100000}</div>
                </li>
                <li>
                    <div class="sort_no">100000</div>
                    <div class="sort_name">沙发小板凳</div>
                    <div class="sort_id">{b5759568-d714-4bae-bec1-219b9fb7a016}</div>
                    <div class="sort_point">{100000}</div>
                </li>
                <li>
                    <div class="sort_no">100000</div>
                    <div class="sort_name">沙发小板凳</div>
                    <div class="sort_id">{b5759568-d714-4bae-bec1-219b9fb7a016}</div>
                    <div class="sort_point">{100000}</div>
                </li>
                <li>
                    <div class="sort_no">100000</div>
                    <div class="sort_name">沙发小板凳</div>
                    <div class="sort_id">{b5759568-d714-4bae-bec1-219b9fb7a016}</div>
                    <div class="sort_point">{100000}</div>
                </li>-->
        </div>
        <div class="pageControlWrap hide">
        	<ul>
                <li><a href="javascript:;" id="page_prev" value="">&lt;&lt;上一页</a></li>
                <div id="page_show_wrap">
                    <li><a href="javascript:;" id="page_prev2" value="">1</a></li>
                    <li><a href="javascript:;" id="page_prev1" value="">2</a></li>
                    <li><a href="javascript:;" class="page_cur" id="page_now" value="">3</a></li>
                    <li><a href="javascript:;" id="page_next1" value="">4</a></li>
                    <li><a href="javascript:;" id="page_next2" value="">5</a></li>
                </div>
                <li><a href="javascript:;" id="page_next" value="">下一页&gt;&gt;</a></li>
                <li class="page_skip_wrap">跳转到第<input type="text" name="page_skip" id="page_skip" class="page_in_box"/>页</li>
            </ul>
        </div>
	</div>
	<script type="text/javascript">
		var type_cur = '1';
		var page_now = 1;
		var page_total;
		var page_prev1, page_prev2, page_next1, page_next2;
		var num_cur;
		$(document).ready(function() {
			$("#J_menu1 .menu1_li").eq(0).click();
			$("#J_menu1 .menu2").eq(0).find('a').eq(2).click();
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
				url: 'get_billboard_events.php',
				dataType:"JSON",
				async: false,
				success: function(data){
					display_sort(data);
					num_cur = $("#J_sort_num").find("option:selected").val();
				}
			});
			rank_list_show();
		});
		var sort_normal_tpl='<option value="{list_num}">{list_name}</option>',
			sort_cur_tpl='<option value="{list_num}" selected="selected">{list_name}（最新）</option>';
		
		function display_sort(data){
			var list_num, list_name;
			for(i in data){
				list_num = data[i].number;
				list_name = data[i].name;
				switch( data[i].state )
				{
					case 0:
					case 1:
					case 2:
						$("#J_sort_num").append(sort_normal_tpl.replace('{list_num}',list_num).replace('{list_name}',list_name));
						break;
					case 3:
						$("#J_sort_num").append(sort_cur_tpl.replace('{list_num}',list_num).replace('{list_name}',list_name));
						break;
				}
			}
		};
		function sort_num_change(){
			num_cur = $("#J_sort_num").find("option:selected").val();
			rank_list_show();
		}
		$('#page_prev, #page_prev2, #page_prev1, #page_now, #page_next1, #page_next2, #page_next').click(function(){
		//$('.pageControlWrap a').click(function(){
			var new_page = $(this).attr('value');
			if(new_page==page_now){
				return false;
			}else{
				page_now=new_page;
				rank_list_show();
			}
		});
		
		$('#page_skip').keydown(function(e){
			if( e.keyCode == 13 ){
				var page_new=$('#page_skip').val();
				if(page_new==page_now){
					return false;
				}else if(page_new<=page_total && page_new>=1){
					page_now=page_new;
					rank_list_show();
					$('#page_skip').val('');
				}else{
					return false;
				}
			}
		});
		
		var sort_list_title=[
                '<li class="sort_title">',
                    '<div class="sort_no">排名</div>',
                    '<div class="sort_name">昵称</div>',
                    '<div class="sort_id">ID</div>',
                    '<div class="sort_point">积分</div>',
				'</li>'
			].join('');
		
		function rank_list_show(){
			//console.log($('#J_sort_content li'));
			$('#J_sort_content li').remove();
			$('#J_sort_content').append(sort_list_title);
			$.ajax({
				type: "POST",
				url: 'list_billboard.php',
				data: 'number='+num_cur+'&type='+type_cur+'&num=1&page='+page_now,
				dataType:"JSON",
				async: false,
				success: function(data){
					$("#J_loading_wrap").hide();
					display_rank(data.rank);
				}
			});
		}
		var rank_tpl=[
				'<li>',
                    '<div class="sort_no">{rank_no}</div>',
                    '<div class="sort_name"><a href={user_set} target="_blank">{rank_name}</a></div>',
                    '<div class="sort_id">{rank_id}</div>',
                    '<div class="sort_point">{rank_point}</div>',
                '</li>'
				].join('');

		function display_rank(data){
			var rank_no = (page_now-1)*1+1;
			var rank_name, rank_id, rank_point, user_set;
			page_total = data.page;
			if(page_total == 0){
				$('.pageControlWrap').hide();
				return false;
			}
			page_wrap_control();
			$('.pageControlWrap').show();
			user = data.users;
			for(i in user){
				rank_name = user[i].nick;
				rank_id = user[i].uid;
				rank_point = user[i].score;
				user_set = 'user_info.php?'+user[i].uid;
				$('#J_sort_content').append(rank_tpl.replace('{rank_no}',rank_no).replace('{rank_name}',rank_name).replace('{rank_id}',rank_id).replace('{rank_point}',rank_point).replace('{user_set}',user_set));
				rank_no++;
			}
		};

		
		$('#J_sort_type a').click(function(){
			if( $(this).attr('value') == type_cur ){
				return false;
			}else{
				$('#J_sort_type a').eq(type_cur-1).removeClass('a_cur');
				$(this).addClass('a_cur');
				type_cur = $(this).attr('value'); 
				rank_list_show();
			}
		});
	//	var page_now = 8;
	//	var page_total = 10;
		function page_wrap_control(){
			page_prev1 = page_now - 1;
			page_prev2 = page_now - 2;
			page_next1 = page_now - - 1;
			page_next2 = page_now - - 2;
			
			$('#page_now').attr('value',page_now).text(page_now);
			
			if(page_now==1){
				$('#page_prev').attr('value',page_now);
				$('#page_prev1').hide();
				$('#page_prev2').hide();
			}else if(page_now==2){
				$('#page_prev').attr('value',page_prev1);
				$('#page_prev1').attr('value',page_prev1).text(page_prev1).show();
				$('#page_prev2').hide();
			}else{
				$('#page_prev').attr('value',page_prev1);
				$('#page_prev1').attr('value',page_prev1).text(page_prev1).show();
				$('#page_prev2').attr('value',page_prev2).text(page_prev2).show();
			}
			if(page_now==page_total){
				$('#page_next').attr('value',page_now);
				$('#page_next1').hide();
				$('#page_next2').hide();
			}else if(page_now==page_total-1){
				$('#page_next').attr('value',page_next1);
				$('#page_next1').attr('value',page_next1).text(page_next1).show();
				$('#page_next2').hide();
			}else{
				$('#page_next').attr('value',page_next1);
				$('#page_next1').attr('value',page_next1).text(page_next1).show();
				$('#page_next2').attr('value',page_next2).text(page_next2).show();
			}
		}
	</script>