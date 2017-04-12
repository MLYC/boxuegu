define(['jquery', 'nprogress', 'common','jqueryForm',], function($,  nprogress, common,undefinde) {
    $('#cs_add_form').ajaxForm(function (data) {
        if(data.code==200){
            location.href='/html/course/course_add_step1.html?cs_id=' + data.result.cs_id;
        }
    });
	nprogress.done();
});
