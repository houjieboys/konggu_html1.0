layui.use('layer', function(){ //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
    //触发事件
    var active = {
        //注册
        OnReg: function(){
            layer.open({
                type: 2,
                title: false,
                area: ['500px', '440px'],
                shade: 0.6,
                //skin: 'layui-layer-rim', //加上边框
                content: ['/html/reg_iframe.html','no'],
                //content: '<div class="wrap wrap_w400"><div class="reg_con"><h1>用第三方帐号注册空谷道</h1><h3>专注于高品质图片分享和兴趣社交的的社群</h3><form class="from_item layui-form layui-form-pane" action=""><div class="buttons"><a class="icon-6" title="微信帐号登录"></a><a class="icon-7" title="QQ帐号登录"></a><a class="icon-8" title="微博帐号登录"></a></div><div class="reg_link"><a href="reg.html">使用手机号注册</a></div><div class="t_r On-btn">已有账号？去<a href="javascript:void(0)" data-method="OnLogin" title="登录" class="txt_link j-btn">登录</a></div></form></div></div>',
                zIndex: layer.zIndex, //重点1
                success: function(layero){
                    layer.setTop(layero); //重点2
                }
            });
        },
        //登录
        OnLogin: function(){
            //配置一个透明的询问框
            layer.open({
                type: 2,
                title: false,
                shade: false,
                area: ['500px', '560px'],
                shade: 0.6,
                content: ['/html/login_iframe.html','no'],
                //content: '<div class="wrap wrap_w400 On-btn"><div class="login_con"><h1>寻一方净土</h1><form class="from_item layui-form layui-form-pane" action=""><ul class="m_list"><li><input type="text" placeholder="手机号" name="phone" class="in_control"></li><li><input type="password" placeholder="6-20位密码，以数字和英文为主" name="password" class="in_control"></li><li><a class="layui-btn layui-btn-primary d_block">登录</a></li></ul><div class="txt_link"><div class="t_r"><a href="javascript:void(0)" data-method="Onreg" class="j-btn">点击注册</a> |<a href="login.html" class="txt_link_s">忘记密码</a></div></div><div class="buttons"><p class="title">使用第三方帐号登录</p><a class="icon-6" title="微信帐号登录"></a><a class="icon-7" title="QQ帐号登录"></a><a class="icon-8" title="微博帐号登录"></a></div></form></div></div>',
                zIndex: layer.zIndex, //重点1
                success: function(layero){
                    layer.setTop(layero); //重点2
                }
            });
        },
        //收藏图集
        OnFav_atlas: function(){
            //配置一个透明的询问框
            layer.open({
                type: 2,
                title: false,
                area: ['620px', '420px'],
                shade: 0.6,
                content: ['/html/fav_atlas.html','no'] //iframe的url
            });
        },
        //新建图集
        OnNew_atlas: function(){
            //配置一个透明的询问框
            layer.open({
                type: 2,
                title: false,
                area: ['620px', '420px'],
                shade: 0.6,
                content: ['/html/add_atlas.html','no'] //iframe的url
            });
        },
        //新建图文
        OnNew_imgtxt: function(){
            //配置一个透明的询问框
            layer.open({
                type: 2,
                title: false,
                area: ['620px', '360px'],
                shade: 0.6,
                content: ['/html/add_imgtxt.html','no'] //iframe的url
            });
        },
        //编辑图集
        OnEdit_atlas: function(){
            //配置一个透明的询问框
            layer.open({
                type: 1,
                title: false,
                shade: false,
                area: ['500px', '560px'],
                shade: 0.6,
                //content: ['/html/login_iframe.html','no'],
                content: '<div class="wrap wrap_w400 On-btn"><div class="login_con"><h1>寻一方净土</h1><form class="from_item layui-form layui-form-pane" action=""><ul class="m_list"><li><input type="text" placeholder="手机号" name="phone" class="in_control"></li><li><input type="password" placeholder="6-20位密码，以数字和英文为主" name="password" class="in_control"></li><li><a class="layui-btn layui-btn-primary d_block">登录</a></li></ul><div class="txt_link"><div class="t_r"><a href="javascript:void(0)" data-method="Onreg" class="j-btn">点击注册</a> |<a href="login.html" class="txt_link_s">忘记密码</a></div></div><div class="buttons"><p class="title">使用第三方帐号登录</p><a class="icon-6" title="微信帐号登录"></a><a class="icon-7" title="QQ帐号登录"></a><a class="icon-8" title="微博帐号登录"></a></div></form></div></div>',
                zIndex: layer.zIndex, //重点1
                success: function(layero){
                    layer.setTop(layero); //重点2
                }
            });
        }
    };

    $('.On-btn .j-btn').on('click', function(){
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });

});