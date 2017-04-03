/**
 * Created by LYC on 2017/4/3.
 */
define([], function () {

    //配置
    require.config({
        baseUrl: './',
        paths: {
            //配置自己写的js
            advertAdd:'js/advert/advert_add',
            advertList:'js/advert/advert_list',
            courseAdd:'js/course/coursr_add',
            courseAdd1:'js/course/coursr_add_step1',
            courseAdd2:'js/course/coursr_add_step2',
            courseAdd3:'js/course/coursr_add_step3',
            courseCat:'js/course/course_category',
            courseCatAdd:'js/course/course_category_add',
            courseList:'js/course/course_list',
            courseTpc:'js/course/course_topic',
            login:'js/home/login',
            repass:'js/home/repass',
            setting:'js/home/setting',
            teacherAdd:'js/teacher/teacher_add',
            teacherList:'js/teacher/teacher_list',
            userList:'js/user/user_list',
            userPfl:'js/user/user_profile',
            // 配置第三方库
            template: 'lib/artTemplate/template-debug',
            bootstrap: 'lib/bootstrap/js/bootstrap',
            datepicker: 'lib/bootstrap-datepicker/js/bootstrap-datepicker',
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
            }
        }
    });

    //根据页面加载对应js
});