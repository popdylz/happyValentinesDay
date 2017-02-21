var sh = document.getElementById("sh"),
	donkey = document.getElementById("donkey");
//背景音自动播放
//window.onload = function(){
//	sh.play();
//};
function musicPlay (){
	$('.noteBox').removeClass('music-pause');
	$('.note-play').removeClass('pause').css({opacity:1});
    $('.note-little1,.note-little2,.note-little3').show();
    $('.note-pause').hide();
	sh.play();
};
function musicPause (){
	$('.noteBox').addClass("music-pause");
    $('.note-play').addClass('pause').css({opacity:0});
    $('.note-little1,.note-little2,.note-little3').hide();
    $('.note-pause').show();
    sh.pause();
};
//音乐播放控制盒			
$(".noteBox").on("click",function(){
    if($(this).hasClass("music-pause")){
//暂停状态转播放					    	
	    musicPlay ();
    }else{
//播放状态转暂停	
		musicPause ();
    }
});
//刷新页面
$('.f5').click(function(){
	window.location.reload();
});
//屏幕自动下滑
$(".QA button").click(function(){
	$(this).addClass('btn-select');
	$('html,body').animate({scrollTop:$('.box-bottom').offset().top}, 800)
});
//摇摆的叶子				
var leaf = $(".leaves");
leaf.bind("webkitAnimationEnd", function() {
    leaf.removeClass("leaf1").addClass("leaf2");			    
});
//提示框
$('.reminder').click(function(){
	musicPlay();
	$("body").find(".ask").eq(0).show(500);
	$('.reminder').hide(500);
});
//问答一
$('.Qbtn1-1').click(function(){
	$('.ans1-1').show(500);$('.ans1-2').hide();
	$('.Qbtn1-1,.Qbtn1-2').attr('disabled','disabled')
});
$('.Qbtn1-2').click(function(){
	$('.ans1-2').show(500);$('.ans1-1').hide();
	$('.Qbtn1-1,.Qbtn1-2').attr('disabled','disabled')
});
$('.next1-1,.next1-2').click(function(){
	$('.ask2').show(500);
});
//问答二
$('.Qbtn2-1').click(function(){
	$('.ans2-1').show(500);$('.ans2-2').hide();
	$('.Qbtn2-1,.Qbtn2-2').attr('disabled','disabled')
});
$('.Qbtn2-2').click(function(){
	$('.ans2-2').show(500);$('.ans2-1').hide();
	$('.Qbtn2-1,.Qbtn2-2').attr('disabled','disabled')
});
$('.next2-1,.next2-2').click(function(){
	$('.ask3').show(500);
});
//问答三
$('.Qbtn3-1').click(function(){
	$('.ans3-1').show(500);$('.ans3-2').hide();
	$('.Qbtn3-1,.Qbtn3-2').attr('disabled','disabled')
});
$('.Qbtn3-2').click(function(){
	$('.ans3-2').show(500);$('.ans3-1').hide();
	$('.Qbtn3-1,.Qbtn3-2').attr('disabled','disabled')
});
$('.next3-1,.next3-2').click(function(){
	$('.ask4').show(500);
});
//问答四
$('.Qbtn4-1').click(function(){
	$('.ans4-1').show(500);$('.ans4-2').hide();
	$('.Qbtn4-1,.Qbtn4-2').attr('disabled','disabled')
});
$('.Qbtn4-2').click(function(){
	$('.ans4-2').show(500);$('.ans4-1').hide();
	$('.Qbtn4-1,.Qbtn4-2').attr('disabled','disabled')
});
$('.next4-1').click(function(){
	$('.next4-1').attr('disabled','disabled')
});
$('.next4-2').click(function(){
	$('.next4-2').attr('disabled','disabled')
});
//情书
$('.next4-1').click(function(){
	$('.popup').show();
	$('.card').show();
	$('.cet').show();
});
$('.cet4').click(function(){
	$('.card').hide();
	$('.cet').hide();
	$('.doutu').show();
});
$('.cet0').click(function(){
	$('.card').hide();
	$('.cet').hide();
	$('.heheda').show();
});
$('.btn-doutu').click(function(){
	$('.popup,.QA,.reminder').hide();
	$('.redhou').show();
});
//红包
$('.next4-2').click(function(){
	$('.popup').show();
	$('.packet,.chai1').show();
});
$('.chai').on("click",function(){
	$('.packet,.chai').hide();
	if ($('.chai').hasClass('chai1')) {
		$('.result1').show();
	} else{
		$('.result2').show();
	}
});
$('.Pbtn1-1').click(function(){
	$('.popup,.QA,.reminder').hide();
	$('.redhou').show();
});
$('.Pbtn1-2').click(function(){
	$('.result').hide();
	$('.chai').removeClass('chai1').addClass('chai2');
	$('.packet,.chai').show();
});
$('.Pbtn2-2').click(function(){
	$('.popup,.QA,.reminder').hide();
	$('.redhou').show();
});
$('.Pbtn2-1').click(function(){
	$('.result').hide();
	$('.hai').show();
	sh.pause();
	donkey.play();
});
$(".Pbtn2-1-1").click(function() {
    donkey.play(); 
});
$('.Pbtn2-1-2').click(function(){
	$('.popup,.QA,.reminder,.hai').hide();
	$('.redhou').show();
	donkey.pause();
	if (!$('.noteBox').hasClass('music-pause')) {
		sh.play();
	} else{
		
	};
});