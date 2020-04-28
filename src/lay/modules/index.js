/**
 * Created by Jason on 2018/5/23.
 */

//菜单收缩
$(window).scroll(function() {
    if ($(window).width() > 300) {
        var sT = $(this).scrollTop();
        if (sT >= 318) {
            $('.header').addClass('h_scrolled action');
            $('.header .toolbar_r .go').addClass('action');
        }
        else
        {
            $('.header').removeClass('h_scrolled action');
            $('.header .toolbar_r .go').removeClass('action');
        }
    }
});

//首页菜单点击加载更多


