/**
 * Created by LYC on 2017/4/6.
 */
define(['jquery','jqueryCookie','nprogress'], function($,undefined,nprogress) {
    //登陆状态验证
    if($.cookie('PHPSESSID')){
        location.href = '/';
    }
    //登陆验证
    (function () {
        var loginForm = $('#login_form'),infoBox = $('.error_info');
        loginForm.on('submit',function () {
            $.ajax({
                type:'post',
                url:'/v6/login',
                data:$(this).serialize(),
                success:function (data) {
                    if(data.code==200){
                        $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                        location.href = '/';
                    }
                },
                error:function () {
                    // console.log(arguments);
                    if(arguments[2]=='Not Found'){
                        infoBox.html('用户名或密码错误，请重新输入');
                    }else if(arguments[2]=='Service Unavailable'){
                        infoBox.html('不能连接到服务器');
                    }
                }
            });
            return false;
        });
        loginForm.find('input').focus(function () {
            infoBox.html('');
        });
    }());
    nprogress.done();
});