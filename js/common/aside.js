/**
 * Created by LYC on 2017/4/6.
 */
define(['jquery','jqueryCookie','template'],function ($,undefined,template) {
    //获取用户信息
    var data = JSON.parse($.cookie('userInfo'));
    console.log(data);
    var userStr = '<div class="profile">\
                    <div class="avatar img-circle">\
                        <img src={{tc_avatar?tc_avatar:"/images/default.png"}}>\
                    </div>\
                    <h4>{{tc_name}}</h4>\
                </div>';
    var userRender = template.compile(userStr);
    var userHtml = userRender(data);
    $('.aside').prepend(userHtml);
});