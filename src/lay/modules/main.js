/**
 * Created by Jason on 2018/5/23.
 */

//菜单收缩
$(window).scroll(function() {
    if ($(window).width() > 1) {
        var sT = $(this).scrollTop();
        if (sT >= 1) {
            $('.header').addClass('h_scrolled action h60');
        }
        else
        {
            $('.header').removeClass('h_scrolled action h60');
        }
        if (sT >= 60) {
            $('.photo_sidebar').addClass('action_fixed');
            $('.photo_share').addClass('action_share');
        }
        else
        {
            $('.photo_sidebar').removeClass('action_fixed');
            $('.photo_share').removeClass('action_share');
        }
        if (sT >= 60) {
            $('.photo_sticky_header').addClass('sticky_header_fixed');
            $('.photo_list').addClass('action_mt');
        }
        else
        {
            $('.photo_sticky_header').removeClass('sticky_header_fixed');
            $('.photo_list').removeClass('action_mt');
        }
        if (sT >= 160) {
            $('.photo_sticky_header').addClass('sticky_header_fixed_all');
            //$('.photo_list').addClass('action_mt');
        }
        else
        {
            $('.photo_sticky_header').removeClass('sticky_header_fixed_all');
            //$('.photo_list').removeClass('action_mt');
        }
    }
    //if mainbar
});

$(document).ready(function(){
    $("#query").focus();

    //评论
    $('.panel .share').click(function() {
        $(this).closest(".panel").find(".commentbar").animate({width:'toggle'},350);
        //$(this).closest(".panel").find(".commentbar").animate({height:'toggle'},350);
    });
    $('.panel .commentbar i').click(function(){
        $(this).closest(".panel").find(".commentbar").animate({width:'toggle'},350);
    });

    //更多
    $('.col_con .panel .more').click(function() {
        $(this).closest(".col_con").find(".morebar").fadeIn();
        $(this).closest(".col_con").find(".morebar .animated").addClass('fadeInUp');
        $(this).closest(".col_con").find(".morebar .animated").removeClass('fadeOutUp');
    });
    $('.col_con .morebar .m_bg').click(function(){
        $(this).closest(".col_con").find(".morebar").fadeOut(1500);
        $(this).closest(".col_con").find(".morebar .animated").removeClass('fadeInUp');
        $(this).closest(".col_con").find(".morebar .animated").addClass('fadeOutUp');
    });

    //分享
    $('.atlas_card .stats .share').click(function() {
        $(this).closest(".atlas_card .stats").find(".sharebar").animate({right:'0'},"slow");
    });
    $('.atlas_card .stats .sharebar .icon_close').click(function(){
        $(this).closest(".atlas_card .stats").find(".sharebar").animate({right:'-260px'},"slow");
    });

    //$('.action_share .sharebar').click(function() {
    //    $(this).closest(".photo_share .sharebar").find(".sharebar").animate({right:'0'},"slow");
    //});
    $('.photo_sidebar .sharebar .icon_close').click(function(){
        $(this).closest(".photo_sidebar ").find(".photo_share").animate({right:'-320px'},"slow");
    });
});

//定义变量获取屏幕视口宽度
var windowWidth = $(window).width();
if(windowWidth < 1440){
    $('.list_user .col_list li').find(".commentbar").animate({width:'25%'},350);
}
if(windowWidth >= 1440){
    // do something
}

//随机格言
$(document).ready(function(){
    $(".btn_next").mouseup(function(){
        //$(".btn_next").css("border","0");
        //$(".btn_next").css("color","#fff");
        //$(".btn_next").css("border",0);
    });
    $(".btn_next").mousedown(function(){
        //$(".btn_next").css("border-color","#096148");
        //$(".btn_next").css("color","#66bab7");
        //$(".btn_next").css("border",0);
    });
    //调用一言api
    $(".btn_next").on("click",function(){
        getQuote();
    });
    var content="Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact.";
    var author="Paul Erdos";
    var getQuote = function(){
        $.getJSON("https://sslapi.hitokoto.cn/?encode=json",function(json){
            content = json["hitokoto"];
            author = json["from"];
            //console.log(content+"_"+author);

            $(".quote-content").html(content);
            $(".quote-author").html("——"+author);
        });
    }
    getQuote();
    //分享
    $(".shareQQ").on("click",function(){
        console.log(content+author);
        window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.baidu.com&desc='+content+'——'+author+'&title=吟游佳句&summary=我发现了一句很漂亮的话，快来看看吧&pics=&site=bshare');
    });
});


//设置内容区域合适高度
$(document).ready(function() {
    var h = $(window).height();
    $("div.photo_content").height(h-60);
});
$(window).resize(function() {
    var h = $(window).height();
    $("div.photo_content").height(h-60);
});

$(document).ready(function() {
    $(".btn_attention a").click(function(){
        $(".btn_attention i").toggleClass("icon-42 icon_action");
    });
});






