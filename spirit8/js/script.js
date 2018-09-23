var navindex=1;
$("a").on("click",function(){
    return false;
});
$(window).on("scroll",function(){
    var scrh=$(window).height();
    var rolh=$(window).scrollTop();		
    if(rolh>670){
        $(".navbar-default").addClass("navscroll");
    }else{
        $(".navbar-default").removeClass("navscroll");
    }
});
$("nav a").on("click",function(){
    $("#navhome").removeClass("txtfcac45");
});
$(".arrow").on("click",function(){
    $('html, body').stop().animate({scrollTop: $('#about').offset().top}, 1000);
});
$("#navhome").on("click",function(){
    $('html, body').stop().animate({scrollTop: $('#home').offset().top}, 1000);
});
$("#navabout").on("click",function(){
    $('html, body').stop().animate({scrollTop: $('#about').offset().top}, 1000);
});
$("#navteam").on("click",function(){
    $('html, body').stop().animate({scrollTop: $('#team').offset().top}, 1000);
});
$("#navservices").on("click",function(){
    $('html, body').stop().animate({scrollTop: $('#services').offset().top}, 1000);
});
$("#navportfolio").on("click",function(){
    $('html, body').stop().animate({scrollTop: $('#portfolio').offset().top}, 1000);
});

$(".navbar-right li").on("click",function(){
    $(this).addClass("txtfcac45");
});
$(".side").click(function(ev){
    $(".side").mousemove(function(ev){  
    });
});

var $see=$(".slide .container .row");
var $slideindex=$(".footer span");
var index=0;
$slideindex.on("click",function(){
    $slideindex.removeClass("bgfcac45");
    $(this).addClass("bgfcac45");
    index=$(this).index();
    $see.css("left",$(this).index()*-100 + "%");
});

$(window).resize(function(){
    if (this.innerWidth>=400&&this.innerWidth<=768){//index數量為4
        if (index>=4){
            var changeIndex=Math.floor((index/2));          
            $slideindex.removeClass("bgfcac45");
            $slideindex.eq(changeIndex).addClass("bgfcac45");
            index=changeIndex;
            $see.css("left",changeIndex*-100 + "%");
        }
    }
    if (this.innerWidth>768){//index數量為2
        if (index>=2){
            var changeIndex=Math.floor((index/4));
            $slideindex.removeClass("bgfcac45");
            $slideindex.eq(changeIndex).addClass("bgfcac45");
            index=changeIndex;
            $see.css("left",changeIndex*-100 + "%");
        }
    }
});
