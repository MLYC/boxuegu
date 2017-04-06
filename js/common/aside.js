/**
 * Created by LYC on 2017/4/6.
 */
define(['jquery','jqueryCookie','template'],function ($,undefined,template) {
    //如果是在课程管理，则打开课程管理
    var pathName = location.pathname;
    if(/^\/html\/course/.test(pathName)){
        $('#course_govern').next().show();
    }
    //添加头像用户名
    (function () {
        //获取用户信息
        var data = JSON.parse($.cookie('userInfo'));
        console.log(data);
        var userStr = '<div class="avatar img-circle">\
                        <img src={{tc_avatar?tc_avatar:"/images/default.png"}}>\
                    </div>\
                    <h4>{{tc_name}}</h4>';
        var userRender = template.compile(userStr);
        var userHtml = userRender(data);
        $('.user_info').html(userHtml);
    }());
    //点击展开收缩子菜单
    $('#course_govern,#system_setting').on('click',function () {
        $(this).next().slideToggle();
    });
    var urlPaths = {
        '/html/teacher/teacher_add.html':'/html/teacher/teacher_list.html',
    };
    // console.log(pathName);
    pathName = urlPaths[pathName]?urlPaths[pathName]:pathName;
    // console.log(pathName);
    //下拉列表动态添加class
    $('.navs li a').removeClass('active').filter('[href = "'+pathName+'"]').addClass('active');
});