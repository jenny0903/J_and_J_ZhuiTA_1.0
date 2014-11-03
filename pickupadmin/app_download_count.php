<?php
session_start();

if(isset($_SESSION['cookie'])){
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
<link rel="shortcut icon" type="image/png" href="static/pickup_icon.png" />
<title>追TA后台管理系统</title>
</head>

<body>
<div style="border-radius:5px; border:1px solid #c6c6c6; width:100%;">
	<div id="container" style="clear:both; width: 96%; height: 400px; margin: 0 auto;"></div>
</div>
<script type="text/javascript" src="static/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="static/js/highcharts-custom.js"></script>
<script type="text/javascript" src="static/js/exporting.js"></script>
<script type="text/javascript">
$(function () {
	var id = <?php echo $_GET['id']; ?>;
	$.ajax({
		type: "POST",
		url: 'libs/controller/app_download_count.php',
		data:'id='+id,
		dataType:"JSON",
		success: function(data){
			if(data.code == 1){
				var chart_date = data.data.date;
				var chart_list = data.data.list;
				var chart_ios = chart_list['ios'];
				var chart_android = chart_list['android'];
				var chart_total = chart_list['total'];
				
				$('#container').highcharts({
					title: {
						text: '大象册应用推荐点击量统计图 - <?php echo $_GET['name']; ?>',
						x: -20 //center
					},
			/*        subtitle: {
						text: 'Source: WorldClimate.com',
						x: -20
					},*/
					xAxis: {
						categories: chart_date
					},
					yAxis: {
						title: {
							text: '点击量（次）'
						},
						plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
						}]
					},
					tooltip: {
						valueSuffix: '次'
					},
					legend: {
						layout: 'vertical',
						align: 'right',
						verticalAlign: 'middle',
						borderWidth: 0
					},
					series: [{
						name: 'iOS',
						data: chart_ios
					}, {
						name: 'Android',
						data: chart_android
					}, {
						name: 'Total',
						data: chart_total
					}]
				});
			}else{
				alert('获取30天点击量失败！');
			}
		},
		error:function(data){
			alert('获取30天点击量失败！');
		}
	});
    
});
</script>
</body>
</html>
<?php
}else{
	header("location: index.php");
}
?>