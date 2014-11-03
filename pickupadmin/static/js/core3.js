function showLoading(){
	if($("#J_loading_wrap").length==0){
		$('body').append(tpl.loading_box);
		$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		$("#J_loading_wrap").show();
	}else{
		$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		$("#J_loading_wrap").show();
	}
};
function hideLoading(){
	$("#J_loading_wrap").hide();
};
function showAlert(alert_message){
	if($("#J_alert_wrap").length==0){
		$('body').append(tpl.alert_box);
		$("#J_alert_wrap .alert_content").text(alert_message);
	}else{
		$("#J_alert_wrap .alert_content").text(alert_message);
		$("#J_alert_wrap").show();							
	}
};
function showConfirm(confirm_message){
	if($("#J_confirm_wrap").length==0){
		$('body').append(tpl.confirm_box);
		$("#J_confirm_wrap .confirm_content").text(confirm_message);
		$("#J_confirm_wrap").show();
	}else{
		$("#J_confirm_wrap .confirm_content").text(confirm_message);
		$("#J_confirm_wrap").show();
	}
};
function hideConfirm(){
	$("#J_confirm_wrap").hide();
};