$(function(){
    var HWidth = $('.header').width(),
        Hheight = $('.header').height(),
        flake = [$('<img src="img/petal1.png"/>'),$('<img src="img/petal2.png"/>'),$('<img src="img/petal3.png"/>'),$('<img src="img/petal4.png"/>')],
    petalInterval = setInterval(function() {
        var n = Math.floor(Math.random()*4),//取值0、1、2、3
            startLeft = Math.random() * HWidth,
            endLeft = startLeft + HWidth/2 - Math.random() * HWidth,
            pieceFalling = 4000 + Math.random() * 4000;
        flake[n].clone().appendTo('.header').css({
            position: "absolute",
            top: "-50px",
            left: startLeft,
            width:'1rem',
            zIndex: "999"
        }).animate({
            top: Hheight,
            left: endLeft,
            opacity:0
        }, pieceFalling,"linear",function() {
            $(this).remove();
        });
    },800);
});