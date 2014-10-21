<?php
	if(isset($_GET['id']) && isset($_GET['source'])){
		$userid = $_GET['id'];
		$source = $_GET['source'];
?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" /> 
<meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
<title>追TA 钥匙游戏</title>
<style type="text/css">
html,body,div,img,i,span,em,p,h1{
	margin:0;
	padding:0;
}
body{
	font: 12px/1.4 Arial,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
	background-image: url(body.png);
	background-repeat: repeat;
}
a{
	text-decoration:none;
	color:#000;
}
img{
	border:0 none;
}
em,i{
	font-style:normal;
}
.background{
	position:absolute;
	top:0;
	left:0;
	width:100%;
}
.background img{
	width:100%;
}
.score_layer{
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	font-size:18px;
	text-shadow:2px 2px 1px rgba(255, 255, 255, 1);
}
.score_wrap{
	position:absolute;
	top:10px;
	left:10px;
}
.timer_wrap{
	position:absolute;
	top:10px;
	right:10px;
}
.score_wrap *,
.timer_wrap *{
	vertical-align:middle;
}
.player_layer{
	position:relative;
}
.player_box{
	position:absolute;
	width:130px;
	height:160px;
	left:50%;
	margin-left:-80px;
	top:250px;
}
.avater_box2,
.avater_box{
	width: 72px;
	height: 72px;
	border-radius: 50%;
	-webkit-border-radius: 50%;
 	-moz-border-radius: 50%;
	position:absolute;
	top:0;
	left:14px;
	overflow:hidden;
	border: 4px solid #fff;
}
.avater2,
.avater{
	top:-4px;
	left:-4px;
	width:80px;
	height:80px;
	position:absolute;
}
i{
	background-image:url(img.png);
	display:block;
}
.i_key1{
	background-position:-55px -10px;
	width:35px;
	height:35px;
	display:inline-block;
}
.i_timer{
	background-position:-10px -10px;
	width:35px;
	height:35px;
	display:inline-block;
}
.i_play_btn{
	background-position:-65px -55px;
	width:160px;
	height:70px;
	position:absolute;
	margin-left:-80px;
	left:50%;
	top:430px;
}
.i_box{
	background-position:-250px -125px;
	width:95px;
	height:90px;
	position:absolute;
	top:110px;
	left:50%;
	margin-left:-20px;
}
.i_key2{
	background-position:-10px -55px;
	width:45px;
	height:65px;
	position:absolute;
	top:-30px;
	left:25px;
	opacity:0;
}
.i_player_body{
	background-position:-10px -125px;
	width:125px;
	height:145px;
	position:absolute;
	top:12px;
	left:0;
}
.jump1 .player_box{
	animation: jump_ani1 0.3s;
	-moz-animation: jump_ani1 0.3s;
	-webkit-animation: jump_ani1 0.3s;
	-o-animation: jump_ani1 0.3s;
}
@keyframes jump_ani1{
	0%   	{top:250px;}
	50%   	{top:162px;}
	100% 	{top:250px;}
}

@-moz-keyframes jump_ani1 /* Firefox */
{
	0%   	{top:250px;}
	50%   	{top:162px;}
	100% 	{top:250px;}
}

@-webkit-keyframes jump_ani1 /* Safari 和 Chrome */
{
	0%   	{top:250px;}
	50%   	{top:162px;}
	100% 	{top:250px;}
}

@-o-keyframes jump_ani1 /* Opera */
{
	0%   	{top:250px;}
	50%   	{top:162px;}
	100% 	{top:250px;}
}

.jump2 .player_box{
	animation: jump_ani2 0.3s;
	-moz-animation: jump_ani2 0.3s;
	-webkit-animation: jump_ani2 0.3s;
	-o-animation: jump_ani2 0.3s;
}
@keyframes jump_ani2{
	0%   	{top:250px;}
	50%   	{top:162px;}
	100% 	{top:250px;}
}

@-moz-keyframes jump_ani2 /* Firefox */
{
	0%   	{top:250px;}
	50%   	{top:162px;}
	100% 	{top:250px;}
}

@-webkit-keyframes jump_ani2 /* Safari 和 Chrome */
{
	0%   	{top:250px;}
	50%   	{top:162px;}
	100% 	{top:250px;}
}

@-o-keyframes jump_ani2 /* Opera */
{
	0%   	{top:250px;}
	50%   	{top:162px;}
	100% 	{top:250px;}
}

.jump1 .i_key2{
	animation: key_ani1 0.4s;
	-moz-animation: key_ani1 0.4s;
	-webkit-animation: key_ani1 0.4s;
	-o-animation: key_ani1 0.4s;
}

@keyframes key_ani1{
	0%   	{opacity:0;}
	20%   	{opacity:0;}
	20.1%   	{opacity:1;}
	80%   	{opacity:1;}
	80.1%   	{opacity:0;}
	100% 	{opacity:0;}
}

@-moz-keyframes key_ani1 /* Firefox */
{
	0%   	{opacity:0;}
	20%   	{opacity:0;}
	20.1%   	{opacity:1;}
	80%   	{opacity:1;}
	80.1%   	{opacity:0;}
	100% 	{opacity:0;}
}

@-webkit-keyframes key_ani1 /* Safari 和 Chrome */
{
	0%   	{opacity:0;}
	20%   	{opacity:0;}
	20.1%   	{opacity:1;}
	80%   	{opacity:1;}
	80.1%   	{opacity:0;}
	100% 	{opacity:0;}
}

@-o-keyframes key_ani1 /* Opera */
{
	0%   	{opacity:0;}
	20%   	{opacity:0;}
	20.1%   	{opacity:1;}
	80%   	{opacity:1;}
	80.1%   	{opacity:0;}
	100% 	{opacity:0;}
}

.jump2 .i_key2{
	animation: key_ani2 0.4s;
	-moz-animation: key_ani2 0.4s;
	-webkit-animation: key_ani2 0.4s;
	-o-animation: key_ani2 0.4s;
}

@keyframes key_ani2{
	0%   	{opacity:0;}
	20%   	{opacity:0;}
	20.1%   	{opacity:1;}
	80%   	{opacity:1;}
	80.1%   	{opacity:0;}
	100% 	{opacity:0;}
}

@-moz-keyframes key_ani2 /* Firefox */
{
	0%   	{opacity:0;}
	20%   	{opacity:0;}
	20.1%   	{opacity:1;}
	80%   	{opacity:1;}
	80.1%   	{opacity:0;}
	100% 	{opacity:0;}
}

@-webkit-keyframes key_ani2 /* Safari 和 Chrome */
{
	0%   	{opacity:0;}
	20%   	{opacity:0;}
	20.1%   	{opacity:1;}
	80%   	{opacity:1;}
	80.1%   	{opacity:0;}
	100% 	{opacity:0;}
}

@-o-keyframes key_ani2 /* Opera */
{
	0%   	{opacity:0;}
	20%   	{opacity:0;}
	20.1%   	{opacity:1;}
	80%   	{opacity:1;}
	80.1%   	{opacity:0;}
	100% 	{opacity:0;}
}

.jump1 .i_box{
	animation: box_ani1 0.4s;
	-moz-animation: box_ani1 0.4s;
	-webkit-animation: box_ani1 0.4s;
	-o-animation: box_ani1 0.4s;
}

@keyframes box_ani1{
	0%   	{background-position:-250px -125px;}
	20%   	{background-position:-250px -125px;}
	20.1%   	{background-position:-145px -125px;}
	80%   	{background-position:-145px -125px;}
	80.1%   	{background-position:-250px -125px;}
	100% 	{background-position:-250px -125px;}
}

@-moz-keyframes box_ani1 /* Firefox */
{
	0%   	{background-position:-250px -125px;}
	20%   	{background-position:-250px -125px;}
	20.1%   	{background-position:-145px -125px;}
	80%   	{background-position:-145px -125px;}
	80.1%   	{background-position:-250px -125px;}
	100% 	{background-position:-250px -125px;}
}

@-webkit-keyframes box_ani1 /* Safari 和 Chrome */
{
	0%   	{background-position:-250px -125px;}
	20%   	{background-position:-250px -125px;}
	20.1%   	{background-position:-145px -125px;}
	80%   	{background-position:-145px -125px;}
	80.1%   	{background-position:-250px -125px;}
	100% 	{background-position:-250px -125px;}
}

@-o-keyframes box_ani1 /* Opera */
{
	0%   	{background-position:-250px -125px;}
	20%   	{background-position:-250px -125px;}
	20.1%   	{background-position:-145px -125px;}
	80%   	{background-position:-145px -125px;}
	80.1%   	{background-position:-250px -125px;}
	100% 	{background-position:-250px -125px;}
}

.jump2 .i_box{
	animation: box_ani2 0.4s;
	-moz-animation: box_ani2 0.4s;
	-webkit-animation: box_ani2 0.4s;
	-o-animation: box_ani2 0.4s;
}

@keyframes box_ani2{
	0%   	{background-position:-250px -125px;}
	20%   	{background-position:-250px -125px;}
	20.1%   	{background-position:-145px -125px;}
	80%   	{background-position:-145px -125px;}
	80.1%   	{background-position:-250px -125px;}
	100% 	{background-position:-250px -125px;}
}

@-moz-keyframes box_ani2 /* Firefox */
{
	0%   	{background-position:-250px -125px;}
	20%   	{background-position:-250px -125px;}
	20.1%   	{background-position:-145px -125px;}
	80%   	{background-position:-145px -125px;}
	80.1%   	{background-position:-250px -125px;}
	100% 	{background-position:-250px -125px;}
}

@-webkit-keyframes box_ani2 /* Safari 和 Chrome */
{
	0%   	{background-position:-250px -125px;}
	20%   	{background-position:-250px -125px;}
	20.1%   	{background-position:-145px -125px;}
	80%   	{background-position:-145px -125px;}
	80.1%   	{background-position:-250px -125px;}
	100% 	{background-position:-250px -125px;}
}

@-o-keyframes box_ani2 /* Opera */
{
	0%   	{background-position:-250px -125px;}
	20%   	{background-position:-250px -125px;}
	20.1%   	{background-position:-145px -125px;}
	80%   	{background-position:-145px -125px;}
	80.1%   	{background-position:-250px -125px;}
	100% 	{background-position:-250px -125px;}
}

.blockUI{
	width:100%;
	height:100%;
	position:fixed;
	top:0;
	left:0;
	z-index:9999;
	background-color:rgba(0,0,0,0.5);
}
.blockBox{
	width:305px;
	top:50%;
	left:50%;
	margin:-119px 0 0 -152px;
	border-radius:6px;
	position:absolute;
	background-color:rgba(255,255,255,1);
	font-size:16px;
	color:#000;
	text-align:left;
}
.blockBox_alert,
.blockBox_loading{
	height:100px;
	line-height:100px;
	margin:-50px 0 0 -135px;
	text-align:center;
}
.blockBox_start{
	margin:-94px 0 0 -153px;
}
.blockBox_result{
	margin:-105px 0 0 -153px;
	padding-top:25px;
	text-align:center;
}
.blockBox_result h1{
	font-size:24px;
	margin-bottom:15px;
	font-weight:normal;
}
.blockBox_start{
	padding-top:56px;
	text-align:center;
}
.blockBox_start .btn_box,
.blockBox_result .btn_box{
	text-align:center;
	margin:25px 0;
}
.blockBox_start .btn_box a,
.blockBox_result .btn_box a{
	display:inline-block;
	height:38px;
	line-height:38px;
	padding:0 26px;
	text-align:center;
	margin:0 10px;
	border:2px solid #EF3C6B;
	border-radius:19px;
}
.blockBox_start .btn_box .btn_red,
.blockBox_result .btn_box .btn_red{
	color:#fff;
	background-color:#EF3C6B;
}
.blockBox_start .btn_box .btn_white,
.blockBox_result .btn_box .btn_white{
	color:#EF3C6B;
	background-color:#fff;
}

.blockBox_start .avater_box{
	top:-40px;
	box-shadow:0 1px 0 rgba(255, 255, 255, 0.3) inset, 0 1px 2px rgba(0, 0, 0, 0.3);
}
.audio_wrap{
	width:0;
	height:0;
	position:absolute;
	top:0;
	left:0;
}
.hide{
	display:none;
}
/* Hi-res retina display */
@media only screen and (-webkit-min-device-pixel-ratio: 2)
{
	i{
		background-image:url(img@2x.png);
		-webkit-background-size: 400px 300px;
	}
}
@media (max-height: 499px) { /* 320*480 */
	.background{
		top:-50px;
	}
	.player_layer{
		top:-50px;
	}
	.i_play_btn{
		top:350px;
	}
}
</style>
</head>

<body>
<div class="background">
	<img src="background.png" />
</div>
<div class="player_layer">
    <div class="player_box">
    	<i class="i_player_body"></i>
        <div class="avater_box">
    		<img class="avater" id="J_avater" src="avater.png"/>
        </div>
    </div>
    <i class="i_box">
    	<i class="i_key2"></i>
    </i>
</div>
<div class="score_layer">
	<div class="score_wrap">
    	<i class="i_key1"></i>
    	<span>x<em id="J_key_num">0</em></span>
    </div>
	<div class="timer_wrap">
    	<i class="i_timer"></i>
    	<span id="J_timer">10.0</span>
    </div>
    <i class="i_play_btn" id="J_play"></i>
</div>
<div class="blockUI hide" id="J_loading">
	<div class="blockBox blockBox_loading">
		正在加载中...
	</div>
</div>
<div class="blockUI" id="J_start">
	<div class="blockBox blockBox_start">
		<div class="avater_box">
    		<img class="avater" id="J_avater2" src="avater.png"/>
        </div>
		<p>“10秒之内，疯狂的点击按钮，</p>
		<p>就能帮我拿钥匙啦，拜托拜托。”</p>
		<div class="btn_box">
			<a id="J_start_btn" class="btn_red">放心交给我吧！</a>
		</div>
	</div>
</div>
<div class="blockUI hide" id="J_alert">
	<div class="blockBox blockBox_alert">
	</div>
</div>
<div class="blockUI hide" id="J_result">
	<div class="blockBox blockBox_result">
		<h1>太给力了!</h1>
		<p>你刚刚帮我拿到了<em id="J_key_result"></em>把钥匙，</p>
		<p>下载追TA免费钥匙你也能拿！</p>
		<div class="btn_box">
			<a id="J_restart" class="btn_red">再试一次</a>
			<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yunio.pickup" class="btn_white">不客气</a>
		</div>
	</div>
</div>

<div class="audio_wrap">
	<audio id="coin_audio" src="Mario_Coin.mp3" preload="auto"></audio>
</div>

<script type="text/javascript" src="jquery-1.8.3.min.js"></script>
<script type="text/javascript">
/*
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires *24 *60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
*/

var appid = '<?php echo $userid; ?>';
var source = '<?php echo $source; ?>';

var key_now = 0;
var jump_now = 0;
var jump_flag = true;
var timer_jump;
var time_per = 100;
var time_now = 10000;
var timer_t;
var userid;

var coin_audio;

var isiOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod');

function time_meter(){
	time_now -= time_per;
	if(time_now % 1000 == 0){
		var s_time = time_now / 1000 + '.0';
	}else{
		var s_time = time_now / 1000;
	}
	$("#J_timer").text(s_time);
	if(time_now > 0){
		timer_t = setTimeout("time_meter()",time_per);
	}
	if(time_now == 0){
		game_over();
	}
}
function jump(){
	if(jump_now % 2 == 0){
		$('.player_layer').removeClass('jump2').addClass('jump1');
		// $('.player_box').removeClass('jump_ani2').addClass('jump_ani1');
		// $('.i_key2').removeClass('key_ani2').addClass('key_ani1');
	}else{
		$('.player_layer').removeClass('jump1').addClass('jump2');
		// $('.player_box').removeClass('jump_ani1').addClass('jump_ani2');
		// $('.i_key2').removeClass('key_ani1').addClass('key_ani2');
	}
	
	jump_now++;
	
	timer_jump = setTimeout(function(){
		jump_flag = true;
	},
		400
	);

	coin_audio = $('#coin_audio')[0];
	if (!isiOS) {
		coin_audio.currentTime = 0;
	}
	coin_audio.play();

}

function add_key(){
	key_now++;
	$('#J_key_num').text(key_now);
	if(jump_flag){
		jump_flag = false;
		jump();
	}
}

var add_key_f = true;
var add_key_cookie_f = true;

function game_over(){
	$('#J_key_result').text(key_now);
	
	clearTimeout(timer_jump);
	
/*	var add_key_cookie = $.cookie('add_key');
	if( add_key_cookie != null && add_key_cookie != undefined && add_key_cookie != 'undefined'){
		add_key_cookie_f = false;
	}else{
		add_key_cookie_f = true;
	}
	if(add_key_f == true && add_key_cookie_f == true){
	*/
	if(add_key_f == true){
		add_key_f = false;
		
		var key_post = key_now;
	
		$.ajax({
			type: 'POST',
			url: 'add_key.php',
			data: 'uid=' + userid + '&keys=' + key_post + '&source=' + source + '&id=' + appid,
			dataType: "json",
			success:function(data){
				if(data == 1){
					/*$.cookie('add_key', true,{ expires: 365 });
					add_key_cookie_f = false;*/
					$('#J_result').show();
					// alert('success');
				}else{
					$('#J_result').show();
					// alert('error');
				}
			},
			error:function(){
				$('#J_result').show();
				//alert('ajax error');
			}
		});
	}else{
		$('#J_result').show();
	}
}

$(document).ready(function(){
	var windowH = $(window).height();
	var windowW = $(window).width();
	
	if( windowW > 320 ){
		// var player_start = ( windowW - 320 ) * 404 / 320 + 250; 
		// $('.player_box').css({'top':player_start+'px'});
		
		var back_top = ( windowW - 320 ) * 404 / 320; 
		$('.background').css({'top':'-'+back_top+'px'});
	}
	
	//alert(windowH);
	//$('.score_layer').css({'height':windowH+'px'});
	
	getuserinfo();
});

function getuserinfo(){
	$.ajax({
		type: 'POST',
		url: 'get_username.php',
		data: 'id=' + appid,
		dataType: "json",
		success:function(data){
			if(data.code == 200){
				$('#J_loading').hide();
				var avater_src = 'get_avarter.php?id='+data.data['avatar'];
				userid = data.data['uid'];
				$('#J_avater').attr({'src':avater_src,'onerror':"avater_error();"}).hide();
				$('#J_avater2').attr({'src':avater_src,'onerror':"avater_error();"}).hide();
				reset_avater();
			}else{
				$('#J_loading').hide();
				$('#J_alert .blockBox_alert').text('无法获取用户信息！');
				$('#J_alert').show();
			}
		}
	});
}

function avater_error(){
	$('#J_avater').attr('src','avater.png');
	$('#J_avater2').attr('src','avater.png');
	reset_avater();
}

function reload_avater(width,height,src){
	var pic_box_a = 80;
	var pic_origin_w = width;
	var pic_origin_h = height;
	var pic_scale;
	var pic_new_w, pic_new_h;
	var pic_top, pic_left;
	if( pic_origin_w > pic_origin_h ){
		pic_scale = 80/pic_origin_h;
		pic_new_w = pic_scale * pic_origin_w;
		pic_new_h = 80;
		pic_top = 0;
		pic_left = (pic_new_w-80)/2;
	}else{
		pic_scale = 80/pic_origin_w;
		pic_new_h = pic_scale * pic_origin_h;
		pic_new_w = 80;
		pic_left = 0;
		pic_top = (pic_new_h-80)/2;
	}
	$('#J_avater').css({'height':pic_new_h+'px','width':pic_new_w+'px','top':'-'+pic_top+'px','left':'-'+pic_left+'px'}).show();
	$('#J_avater2').css({'height':pic_new_h+'px','width':pic_new_w+'px','top':'-'+pic_top+'px','left':'-'+pic_left+'px'}).show();
}

function reset_avater(){
	//-----修正头像位置大小
	var originImage = new Image();
	originImage.src = $('#J_avater').attr('src');
	if( originImage.complete ){
		var pic_origin_w = originImage.width;
		var pic_origin_h = originImage.height;
		reload_avater(pic_origin_w,pic_origin_h);
	}else{
		originImage.onload = function(){
			var pic_origin_w = originImage.width;
			var pic_origin_h = originImage.height;
			reload_avater(pic_origin_w,pic_origin_h);
		};
	}
}

function restart(){
	key_now = 0;
	$('#J_key_num').text(key_now);
	
	jump_now = 0;
	jump_flag = true;
	
	time_now = 10000;
	$("#J_timer").text('10.0');
	
	$('.player_layer').removeClass('jump1').removeClass('jump2');
}

$('#J_play').bind({
	'touchstart':function(){
		if(key_now == 0){
			timer_t = setTimeout("time_meter()",time_per);
		}
		if(time_now > 0){
			add_key();
		}
	}
});

$('#J_restart').bind({
	'touchstart':function(){
		restart();
		$('#J_result').hide();
		return false;
	}
});
$('#J_start_btn').bind({
	'touchstart':function(){
		$('#J_start').hide();
		return false;
	}
});
</script>
</body>
</html>
<?php
	}else{
		echo 'error';
	}
?>