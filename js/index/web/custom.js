$('.product_wrapAll').mouseenter(function () {
    $('.disableBox1').css('margin-top', '60px').css('margin-left', '252px').css('transition', '0.8s');

})

$('.disableBox1').mouseenter(function () {
    $('.disableBox1').css('margin-top', '60px').css('margin-left', '252px').css('transition', '0.8s');

})


$('.disableBox1').mouseleave(function () {
    $('.disableBox1').css('margin-top', '-500px').css('margin-left', '252px').css('transition', '1.2s');

})
$('.product_wrapAll').mouseleave(function () {
    $('.disableBox1').css('margin-top', '-500px').css('margin-left', '252px').css('transition', '1.2s');

})




$('.product_wrapAll2').mouseenter(function () {
    $('.disableBox2').css('margin-top', '60px').css('margin-left', '455px').css('transition', '0.8s');

})


$('.product_wrapAll2').mouseleave(function () {
    $('.disableBox2').css('margin-top', '-500px').css('margin-left', '455px').css('transition', '1.2s');

})

$('.disableBox2').mouseenter(function () {
    $('.disableBox2').css('margin-top', '60px').css('margin-left', '455px').css('transition', '0.8s');

})


$('.disableBox2').mouseleave(function () {
    $('.disableBox2').css('margin-top', '-500px').css('margin-left', '455px').css('transition', '1.2s');
})







$('.product_wrapAll3').mouseenter(function () {
    $('.disableBox3').css('margin-top', '60px').css('margin-left', '670px').css('transition', '0.8s');

})


$('.product_wrapAll3').mouseleave(function () {
    $('.disableBox3').css('margin-top', '-500px').css('margin-left', '670px').css('transition', '1.2s');

})

$('.disableBox3').mouseenter(function () {
    $('.disableBox3').css('margin-top', '60px').css('margin-left', '670px').css('transition', '0.8s');

})


$('.disableBox3').mouseleave(function () {
    $('.disableBox3').css('margin-top', '-500px').css('margin-left', '670px').css('transition', '1.2s');
})









$('.product_wrapAll4').mouseenter(function () {
    $('.disableBox4').css('margin-top', '60px').css('margin-left', '880px').css('transition', '0.8s');

})


$('.product_wrapAll4').mouseleave(function () {
    $('.disableBox4').css('margin-top', '-500px').css('margin-left', '880px').css('transition', '1.2s');

})

$('.disableBox4').mouseenter(function () {
    $('.disableBox4').css('margin-top', '60px').css('margin-left', '880px').css('transition', '0.8s');

})


$('.disableBox4').mouseleave(function () {
    $('.disableBox4').css('margin-top', '-500px').css('margin-left', '880px').css('transition', '1.2s');
})








$('.product_wrapAll5').mouseenter(function () {
    $('.disableBox5').css('margin-top', '60px').css('margin-left', '1085px').css('transition', '0.8s');

})


$('.product_wrapAll5').mouseleave(function () {
    $('.disableBox5').css('margin-top', '-500px').css('margin-left', '1085px').css('transition', '1.2s');

})

$('.disableBox5').mouseenter(function () {
    $('.disableBox5').css('margin-top', '60px').css('margin-left', '1085px').css('transition', '0.8s');

})


$('.disableBox5').mouseleave(function () {
    $('.disableBox5').css('margin-top', '-500px').css('margin-left', '1085px').css('transition', '1.2s');
})







$('.product_wrapAll6').mouseenter(function () {
    $('.disableBox6').css('margin-top', '60px').css('margin-left', '1280px').css('transition', '0.8s');

})


$('.product_wrapAll6').mouseleave(function () {
    $('.disableBox6').css('margin-top', '-500px').css('margin-left', '1280px').css('transition', '1.2s');

})

$('.disableBox6').mouseenter(function () {
    $('.disableBox6').css('margin-top', '60px').css('margin-left', '1280px').css('transition', '0.8s');

})


$('.disableBox5').mouseleave(function () {
    $('.disableBox5').css('margin-top', '-500px').css('margin-left', '1280px').css('transition', '1.2s');
})




$(function () {
    /* 按下GoTop按鈕時的事件 */
    $('#gotop2').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow'); /* 返回到最頂上 */
        return false;
    });

    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#gotop2').fadeIn();
        } else {
            $('#gotop2').fadeOut();
        }
    });
});