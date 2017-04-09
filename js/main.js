/**
 * Created by LYC on 2017/4/3.
 */
define([], function () {

    //配置
    require.config({
        baseUrl: '/',
        paths: {
            //配置自己写的js
            advertAdd:'js/advert/advert_add',
            advertList:'js/advert/advert_list',
            common:'js/common/common',
            aside:'js/common/aside',
            header:'js/common/header',
            loading:'js/common/loading',
            courseAdd:'js/course/coursr_add',
            courseAdd1:'js/course/coursr_add_step1',
            courseAdd2:'js/course/coursr_add_step2',
            courseAdd3:'js/course/coursr_add_step3',
            courseCat:'js/course/course_category',
            courseCatAdd:'js/course/course_category_add',
            courseList:'js/course/course_list',
            courseTpc:'js/course/course_topic',
            index:'js/home/index',
            login:'js/home/login',
            repass:'js/home/repass',
            settings:'js/home/settings',
            teacherAdd:'js/teacher/teacher_add',
            teacherList:'js/teacher/teacher_list',
            userList:'js/user/user_list',
            userPfl:'js/user/user_profile',
            // 配置第三方库
            template: 'lib/artTemplate/template-debug',
            bootstrap: 'lib/bootstrap/js/bootstrap',
            datepicker: 'lib/bootstrap-datepicker/js/bootstrap-datepicker',
            datepickerCN: 'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
            ckeditor: 'lib/ckeditor/ckeditor',
            ckeditorLand: 'lib/ckeditor/lang/zh-cn',
            echarts: 'lib/echarts/echarts.min',
            jquery: 'lib/jquery/jquery.min',
            jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
            jqueryForm: 'lib/jquery-form/jquery.form',
            jqueryRegion: 'lib/jquery-region/jquery.region',
            nprogress: 'lib/nprogress/nprogress'
        },
        shim:{
            bootstrap:{
                deps:['jquery']
            },
            // datepicker:{
            //     deps:['bootstrap']
            // },
            datepickerCN:{
                deps:['datepicker']
            }
        }
    });
    //开始进度条
    require(['nprogress','loading'],function (nprogress,undefinde) {
        nprogress.start();
    });
    //根据页面加载对应js
    var pathname = location.pathname;
    if(pathname !== '/html/home/login.html'){
        // 如果不是登陆页面加载公共js
        require(['common','header','aside']);
    }
    switch(pathname) {
        case '/':
            require(['index']);
            break;
        case '/html/home/login.html':
            require(['login']);
            break;
        case '/html/home/repass.html':
            require(['repass']);
            break;
        case '/html/home/settings.html':
            require(['settings']);
            break;
        case '/html/advert/advert_add.html':
            require(['advertAdd']);
            break;
        case '/html/advert/advert_list.html':
            require(['advertList']);
            break;
        case '/html/course/course_add_step1.html':
            require(['courseAdd1']);
            break;
        case '/html/course/course_add_step2.html':
            require(['courseAdd2']);
            break;
        case '/html/course/course_add_step3.html':
            require(['courseAdd3']);
            break;
        case '/html/course/course_add.html':
            require(['courseAdd']);
            break;
        case '/html/course/course_category_add.html':
            require(['courseCatAdd']);
            break;
        case '/html/course/course_category.html':
            require(['courseCat']);
            break;
        case '/html/course/course_list.html':
            require(['courseList']);
            break;
        case '/html/course/course_topic.html':
            require(['courseTpc']);
            break;
        case '/html/teacher/teacher_add.html':
            require(['teacherAdd']);
            break;
        case '/html/teacher/teacher_list.html':
            require(['teacherList']);
            break;
        case '/html/user/user_profile.html':
            require(['userPfl']);
            break;
        case '/html/user/user_list.html':
            require(['userList']);
            break;
    }
});