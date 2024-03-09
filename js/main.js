$(document).ready(function(){



$('.hahaha img').click(function(){
    $('.left').addClass('boxani')
    $('.right').addClass('boxani2')
    $('.hahaha img').addClass('totop')
    $('.hahaha').addClass('totop2')
})


let count = 0
$(".content_wrap .next").click(function(){
    count++
    if(count>3){count=0}
    $(".pb_list").css("transform",`translateX(${(-25*count)}%)`)
    $(".page_dot>li").removeClass("on")
    $(".page_dot>li").eq(count).addClass("on")

    if(count==3){
        $(".content_wrap .next").hide()
     }else {
     $(".content_wrap .next").show()
    }
    if (count === 0) {
        $(".content_wrap .prev").hide();
    } else {
        $(".content_wrap .prev").show();
    }
})
$(".content_wrap .prev").click(function(){
    count--
    if(count<0){count=3}
    $(".pb_list").css("transform",`translateX(${(-25*count)}%)`)
    $(".page_dot>li").removeClass("on")
    $(".page_dot>li").eq(count).addClass("on")
    if(count==0){
        $(".content_wrap .prev").hide()
     }else{
     $(".content_wrap .prev").show()
    }
    if(count==3){
        $(".content_wrap .next").hide()
     }else {
     $(".content_wrap .next").show()
    }
    
})
$(document).ready(function() {
    $(".content_wrap .prev").hide(); 
});

$(".viewstyle>li").click(function() {
    let etc_li = $(this).index();

    $(".viewstyle>li").removeClass("on");
    $(this).addClass("on");

    $(".v_s_output>li").each(function(i) {
        if (i === etc_li) {
            $(this).addClass("on");
        } else {
            $(this).removeClass("on");
        }
    });
});

let images = [];

function preload() {
  for(let i = 0; i < preload.arguments.lenght; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments.src;
  }
}

preload(
  "./img/SVG/Asset 3.svg",
  "./img/SVG/Asset 1.svg",
  "./img/Asset 11.svg",
  "./img/my.png",
  "./img/mgame.svg",
  "./img/Naver_icon_2018.svg",
  "./img/Asset 11.svg",
  "./img/chu.svg",
  "./img/mgame.svg",
  "./img/firepop.png",
  "./img/11st.png",
  "./img/nodampop.png",
  "./img/Arsenalpop.png",
  "./img/newyear2.png",
  "./img/blackpop.png",
  "./img/newyear.png",
  "./img/gamabanner.png",
  "./img/bfbanner.png",
  "./img/christmas-banner.png",
  "./img/pepsipop.png",
  "./img/Dong-A-banner.png",
  "./img/11stmock.png",
  "./img/firemock.png",
  "./img/nodammock.png",
  "./img/arsmock.png",
  "./img/newyearmock2.png",
  "./img/blackmock.png",
  "./img/newyearmock.png",
  "./img/pepsimock.png",
  "./img/bfmock.jpg",
  "./img/christmock.png",
  "./img/dongamock.jpg",
  "./img/gamamock.png"
)




})

