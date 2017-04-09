define(['jquery', 'template', 'nprogress', 'common', 'jqueryForm'], function ($, template, nprogress, util, undefinde) {
    var cgId = util.getUrlParam('cg_id');
    //根据是否有cg_id请求不同api
    if (cgId) {
        $.get('/v6/category/edit', {cg_id: cgId}, function (data) {
            console.log(data.result);
            if (data.code == 200) {
                render(data.result);
            }
        });
    } else {
        $.get('/v6/category/top', function (data) {
            if (data.code == 200) {
                render({top: data.result});
            }
        });
    }
    //定义渲染模板方法
    function render(data) {
        $('.course-category').html(template('cg_add_tem', data));
    }
    //监听表单提交
    $('#cg_add_form').ajaxForm({
        delegation: true,
        success: function (data) {
            if (data.code == 200) {
                location.href = '/html/course/course_category.html'
            }
        }
    });
    nprogress.done();
});
