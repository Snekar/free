

//右滑栏
//var righttop = document.getElementById('slide'),
//	rightbig = document.getElementsByClassName('slide')[0],
//	ctn = document.getElementsByClassName('container')[0];
//righttop.onclick = function(){
//	rightbig.classList.add('active')
//	ctn.style.display = "block"
//}
//ctn.onclick = function(){
//	ctn.style.display = "none"
//	rightbig.classList.remove('active')
//}

//点击搜索显示
$(".ipt-k").on("focus",function(){
	$(".record").addClass("active-s");
})

$(".ipt-k").on("blur",function(){
	$(".record").removeClass("active-s");
})
//右滑栏
$("#slide").on("click",function(){
	$(".container").show();
	$(".slide").addClass("active");
})
$(".container").on("click",function(){
	$(".container").hide();
	$(".slide").removeClass("active");
})