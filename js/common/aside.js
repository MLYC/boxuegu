/**
 * Created by LYC on 2017/4/6.
 */
define(['jquery','jqueryCookie','template','util'],function ($,undefined,template,util) {
    function Aside(cofOptions) {
        var options = {
            defaultIMg:'/images/default.png',
            templateId:'tc_info',
            temTarget:'.user_info',
            cookieKey:'userInfo',
            showBtn:'#course_govern,#system_setting',
            showList:'',
            listWrap:'.navs',
            activeClassName:'active',
            urlPaths : {
                '/html/teacher/teacher_add.html':'/html/teacher/teacher_list.html'
            },
            pathName : location.pathname
        };
        util.extend(this,options,cofOptions);
    }
    util.extend(Aside.prototype,{
        addInfo:function () {
            var data = JSON.parse($.cookie(this.cookieKey));
            this.template(data);
        },
        template:function (data) {
            $(this.temTarget).html(template(this.templateId,data));
        },
        triggerList:function () {
            //如果是在课程管理，则打开课程管理
            if(/^\/html\/course/.test(this.pathName)){
                $(this.showBtn).next().show();
            }
            $(this.showBtn).on('click',function () {
                $(this).next().slideToggle();
            });
        },
        updateActive:function () {
            //检查配置参数里是否有该url
            this.pathName = this.urlPaths[this.pathName]?this.urlPaths[this.pathName]:this.pathName;
            //下拉列表动态添加class
            $(this.listWrap).find('a').removeClass(this.activeClassName).filter('[href = "'+this.pathName+'"]').addClass(this.activeClassName);
        }
    });
    return Aside;
    //如果是在课程管理，则打开课程管理
    // var pathName = location.pathname;
    // if(/^\/html\/course/.test(pathName)){
    //     $('#course_govern').next().show();
    // }
    //添加头像用户名
    // (function () {
    //     //获取用户信息
    //     var data = JSON.parse($.cookie('userInfo'));
    //     console.log(data);
    //     var userStr = '<div class="avatar img-circle">\
    //                     <img src={{tc_avatar?tc_avatar:"/images/default.png"}}>\
    //                 </div>\
    //                 <h4>{{tc_name}}</h4>';
    //     var userRender = template.compile(userStr);
    //     var userHtml = userRender(data);
    //     // var  userHtml = template.render(userStr,data);
    //     $('.user_info').html(userHtml);
    // }());
    //点击展开收缩子菜单
    // $('#course_govern,#system_setting').on('click',function () {
    //     $(this).next().slideToggle();
    // });
    // var urlPaths = {
    //     '/html/teacher/teacher_add.html':'/html/teacher/teacher_list.html'
    // };
    // console.log(pathName);
    // pathName = urlPaths[pathName]?urlPaths[pathName]:pathName;
    // // console.log(pathName);
    // //下拉列表动态添加class
    // $('.navs li a').removeClass('active').filter('[href = "'+pathName+'"]').addClass('active');
});