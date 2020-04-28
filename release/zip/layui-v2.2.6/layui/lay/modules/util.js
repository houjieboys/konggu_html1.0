/** layui-v2.2.6 MIT License By https://www.layui.com */
 ;layui.define("jquery",function(t){"use strict";var e=layui.$;t("util",{fixbar:function(t){var i,o,a=e(document),r=e("body");(t=e.extend({showHeight:200},t)).bar1=!0===t.bar1?"&#xe606;":t.bar1,t.bar2=!0===t.bar2?"&#xe607;":t.bar2,t.bgcolor=t.bgcolor?"background-color:"+t.bgcolor:"";var l=[t.bar1,t.bar2,"&#xe604;"],n=e(['<ul class="layui-fixbar">',t.bar1?'<li class="layui-icon" lay-type="bar1" style="'+t.bgcolor+'">'+l[0]+"</li>":"",t.bar2?'<li class="layui-icon" lay-type="bar2" style="'+t.bgcolor+'">'+l[1]+"</li>":"",'<li class="layui-icon layui-fixbar-top" lay-type="top" style="'+t.bgcolor+'">'+l[2]+"</li>","</ul>"].join("")),c=n.find(".layui-fixbar-top"),s=function(){a.scrollTop()>=t.showHeight?i||(c.show(),i=1):i&&(c.hide(),i=0)};e(".layui-fixbar")[0]||("object"==typeof t.css&&n.css(t.css),r.append(n),s(),n.find("li").on("click",function(){var i=e(this).attr("lay-type");"top"===i&&e("html,body").animate({scrollTop:0},200),t.click&&t.click.call(this,i)}),a.on("scroll",function(){clearTimeout(o),o=setTimeout(function(){s()},100)}))},countdown:function(t,e,i){var o=this,a="function"==typeof e,r=new Date(t).getTime(),l=new Date(!e||a?(new Date).getTime():e).getTime(),n=r-l,c=[Math.floor(n/864e5),Math.floor(n/36e5)%24,Math.floor(n/6e4)%60,Math.floor(n/1e3)%60];a&&(i=e);var s=setTimeout(function(){o.countdown(t,l+1e3,i)},1e3);return i&&i(n>0?c:[0,0,0,0],e,s),n<=0&&clearTimeout(s),s},timeAgo:function(t,e){var i=[[],[]],o=(new Date).getTime()-new Date(t).getTime();return o>6912e5?(o=new Date(t),i[0][0]=this.digit(o.getFullYear(),4),i[0][1]=this.digit(o.getMonth()+1),i[0][2]=this.digit(o.getDate()),e||(i[1][0]=this.digit(o.getHours()),i[1][1]=this.digit(o.getMinutes()),i[1][2]=this.digit(o.getSeconds())),i[0].join("-")+" "+i[1].join(":")):o>=864e5?(o/1e3/60/60/24|0)+"天前":o>=36e5?(o/1e3/60/60|0)+"小时前":o>=12e4?(o/1e3/60|0)+"分钟前":o<0?"未来":"刚刚"},digit:function(t,e){var i="";t=String(t),e=e||2;for(var o=t.length;o<e;o++)i+="0";return t<Math.pow(10,e)?i+(0|t):t},toDateString:function(t,e){var i=new Date(t||new Date),o=[this.digit(i.getFullYear(),4),this.digit(i.getMonth()+1),this.digit(i.getDate())],a=[this.digit(i.getHours()),this.digit(i.getMinutes()),this.digit(i.getSeconds())];return(e=e||"yyyy-MM-dd HH:mm:ss").replace(/yyyy/g,o[0]).replace(/MM/g,o[1]).replace(/dd/g,o[2]).replace(/HH/g,a[0]).replace(/mm/g,a[1]).replace(/ss/g,a[2])}})});