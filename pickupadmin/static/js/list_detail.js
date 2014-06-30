var tpl_list=[
			'<li>',
				'<div class="list_id">{count_id}</div>',
				'<input type="hidden" name="resource_id" class="resource_id" value={resource_id} />',
				'<div class="list_no">{list_num}</div>',
				'<div class="list_name"><a href="javascript:;" value="{name_url}">{list_name}</a></div>',
				'<div class="start_time">{start_time}</div>',
				'<div class="end_time">{end_time}</div>',
				'<div class="status">{state}</div>',
				'<input type="hidden" name="resource_url" class="resource_url" value={resource_url} />',
				'<div class="operate">',
					'<a href="javascript:;" class="modify" value="{mod_url}">{mod_type}</a>',
				'</div>',
			'</li>'
		].join('');
$('.add_list_btn').click(function(){
	window.parent.$('#J_iframe').attr('src','view/list_set.html?type=0');
});
$('.modify').die().live('click',function(){
	window.parent.$('#J_iframe').attr('src',$(this).attr('value'));
});
$('.list_name a').die().live('click',function(){
	window.parent.$('#J_iframe').attr('src',$(this).attr('value'));
});
$(document).ready(function() {	
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
		url: ajax_main_path+'libs/controller/get_billboard_events.php',
		dataType:"JSON",
		async: false,
		success: function(data){
			window.parent.$("#J_loading_wrap").hide();
			if(data!='[]'){
				display_item(data);
			}
			window.parent.$("#J_iframe").height($(".inner_main_wrap").height()+6);
		}
	});
});
function timeShow(time){
	var year = time.split('-')[0];
	var month = time.split('-')[1];
	var day = time.split('-')[2].split('T')[0];
	
	var time_show = year + '/' + month + '/' +day;
	
	return time_show;
}
function display_item(data){
	var count_num = 1;
	var resource_id, list_num, list_name, start_time, end_time, state, resource_url, mod_url, start_time_post, end_time_post, mod_type;
	for(i in data){
		resource_id = data[i].id;
		list_num = data[i].number;
		list_name = data[i].name;
		
		if(list_name==''){
			list_name = '测试榜单';
		}
		
		start_time = timeShow(data[i].begin);
		end_time = timeShow(data[i].end);
		
		start_time_post = data[i].begin;
		end_time_post = data[i].end;
		
		resource_url = data[i].introduction;
		switch( data[i].state )
		{
			case 0:
				state = '已结束';
				mod_type = '查看';
				break;
			case 1:
				state = '统计完';
				mod_type = '修改';
				break;
			case 2:
				state = '统计中';
				mod_type = '修改';
				break;
			case 3:
				state = '已开始';
				mod_type = '修改';
				break;
			case 4:
				state = '未开始';
				mod_type = '修改';
				break;
		}
		mod_url = 'view/list_set.html?type=1#'+resource_id+'&'+list_num+'&'+list_name+'&'+start_time_post+'&'+end_time_post+'&'+state+'&'+resource_url;
		
		$("#J_list_detail").append(tpl_list.replace('{count_id}',count_num).replace('{resource_id}',resource_id).replace('{list_num}',list_num).replace('{name_url}',mod_url).replace('{list_name}',list_name).replace('{start_time}',start_time).replace('{end_time}',end_time).replace('{state}',state).replace('{resource_url}',resource_url).replace('{mod_url}',mod_url).replace('{mod_type}',mod_type));
		
		count_num++;
	}
};