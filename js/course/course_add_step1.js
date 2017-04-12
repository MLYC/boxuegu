define(['jquery', 'template', 'nprogress', 'common', 'jqueryForm'], function ($, template, nprogress, common, undefinde) {
    var csId = common.getUrlParam('cs_id');
    if (csId) {
        $.get('/v6/course/basic', {cs_id: csId}, function (data) {
            if (data.code == 200) {
                console.log(data);
                $('.steps').html(template('cs_add_1', data.result));
                // initCgList();
                //修改aside显示状态
                $('.cs_saide li').eq(0).find('a').addClass('active');
            }
        });
    }
    ;
    $('#cs_add_1_form').ajaxForm({
        delegation: true,
        success: function () {
            location.href = '/html/course/course_add_step2.html?cs_id=' + csId;
        }
    });
    $(document).on('change','#cs_cg_pid',function () {
        initCgList();
    });

    function initCgList() {
        $.get('/v6/category/child',{cg_id:$('#cs_cg_pid').val()},function (data) {
            console.log(data);
            var options = [];
            for(var i= data.result.length;i--;){
                options.push('<option value='+data.result[i].cg_id+'>'+data.result[i].cg_name+'</option>')
            }
            $('#cs_cg_id').html(options.join(''));
        });
    }
    nprogress.done();
});
