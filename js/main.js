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
})