define(['aside','header','jquery', 'template', 'nprogress', 'common', 'jqueryForm'], function (Aside,Header,$, template, nprogress, util, undefinde) {
    new Header().logout();
    var aside = new Aside();
    aside.addInfo();
    aside.triggerList();
    aside.updateActive();
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
        // render({});
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
