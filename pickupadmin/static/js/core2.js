function showLoading(){
	if(window.parent.$("#J_loading_wrap").length==0){
		window.parent.$('body').append(tpl.loading_box);
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}else{
		window.parent.$("#J_loading_wrap .loading_content").text('正在加载，请稍等……');
		window.parent.$("#J_loading_wrap").show();
	}
};
function hideLoading(){
	window.parent.$("#J_loading_wrap").hide();
};
function showAlert(alert_message){
	if(window.parent.$("#J_alert_wrap").length==0){
		window.parent.$('body').append(tpl.alert_box);
		window.parent.$("#J_alert_wrap .alert_content").text(alert_message);
	}else{
		window.parent.$("#J_alert_wrap .alert_content").text(alert_message);
		window.parent.$("#J_alert_wrap").show();							
	}
};
function showConfirm(confirm_message){
	if(window.parent.$("#J_confirm_wrap").length==0){
		window.parent.$('body').append(tpl.confirm_box);
		window.parent.$("#J_confirm_wrap .confirm_content").text(confirm_message);
		window.parent.$("#J_confirm_wrap").show();
	}else{
		window.parent.$("#J_confirm_wrap .confirm_content").text(confirm_message);
		window.parent.$("#J_confirm_wrap").show();
	}
};
function hideConfirm(){
	window.parent.$("#J_confirm_wrap").hide();
};