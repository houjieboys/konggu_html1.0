/** moai-v1.0 MIT License By https://www.layui.com */
 ;$(window).scroll(function(){if($(window).width()>1){var t=$(this).scrollTop();t>=1?$(".header").addClass("h_scrolled action h60"):$(".header").removeClass("h_scrolled action h60"),t>=60?($(".photo_sidebar").addClass("action_fixed"),$(".photo_share").addClass("action_share")):($(".photo_sidebar").removeClass("action_fixed"),$(".photo_share").removeClass("action_share")),t>=60?($(".photo_sticky_header").addClass("sticky_header_fixed"),$(".photo_list").addClass("action_mt")):($(".photo_sticky_header").removeClass("sticky_header_fixed"),$(".photo_list").removeClass("action_mt")),t>=160?$(".photo_sticky_header").addClass("sticky_header_fixed_all"):$(".photo_sticky_header").removeClass("sticky_header_fixed_all")}}),$(document).ready(function(){$("#query").focus(),$(".panel .share").click(function(){$(this).closest(".panel").find(".commentbar").animate({width:"toggle"},350)}),$(".panel .commentbar i").click(function(){$(this).closest(".panel").find(".commentbar").animate({width:"toggle"},350)}),$(".col_con .panel .more").click(function(){$(this).closest(".col_con").find(".morebar").fadeIn(),$(this).closest(".col_con").find(".morebar .animated").addClass("fadeInUp"),$(this).closest(".col_con").find(".morebar .animated").removeClass("fadeOutUp")}),$(".col_con .morebar .m_bg").click(function(){$(this).closest(".col_con").find(".morebar").fadeOut(1500),$(this).closest(".col_con").find(".morebar .animated").removeClass("fadeInUp"),$(this).closest(".col_con").find(".morebar .animated").addClass("fadeOutUp")}),$(".atlas_card .stats .share").click(function(){$(this).closest(".atlas_card .stats").find(".sharebar").animate({right:"0"},"slow")}),$(".atlas_card .stats .sharebar .icon_close").click(function(){$(this).closest(".atlas_card .stats").find(".sharebar").animate({right:"-260px"},"slow")}),$(".photo_sidebar .sharebar .icon_close").click(function(){$(this).closest(".photo_sidebar ").find(".photo_share").animate({right:"-320px"},"slow")})});var windowWidth=$(window).width();windowWidth<1440&&$(".list_user .col_list li").find(".commentbar").animate({width:"25%"},350),$(document).ready(function(){$(".btn_next").mouseup(function(){}),$(".btn_next").mousedown(function(){}),$(".btn_next").on("click",function(){e()});var t="Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact.",o="Paul Erdos",e=function(){$.getJSON("https://sslapi.hitokoto.cn/?encode=json",function(e){t=e.hitokoto,o=e.from,$(".quote-content").html(t),$(".quote-author").html("——"+o)})};e(),$(".shareQQ").on("click",function(){console.log(t+o),window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.baidu.com&desc="+t+"——"+o+"&title=吟游佳句&summary=我发现了一句很漂亮的话，快来看看吧&pics=&site=bshare")})}),$(document).ready(function(){var t=$(window).height();$("div.photo_content").height(t-60)}),$(window).resize(function(){var t=$(window).height();$("div.photo_content").height(t-60)}),$(document).ready(function(){$(".btn_attention a").click(function(){$(".btn_attention i").toggleClass("icon-42 icon_action")})});