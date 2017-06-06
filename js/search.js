
//点击搜索显示
$(".ipt-k").on("focus",function(){
	$(".record").addClass("active-s");
})

// $(".ipt-k").on("blur",function(){
// 	$(".record").removeClass("active-s");
// })
//右滑栏
$("#slide").on("click",function(){
	$(".container").show();
	$(".slide").addClass("active");
})
$(".container").on("click",function(){
	$(".container").hide();
	$(".slide").removeClass("active");
})