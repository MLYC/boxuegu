define(['jquery', 'uploadify', 'template', 'nprogress', 'common', 'jqueryForm', 'bootstrap'], function ($, undefind, template, nprogress, common, undefinde, undefinde) {
    var csId = common.getUrlParam('cs_id');
    $.get('/v6/course/lesson', {cs_id: csId}, function (data) {
        console.log(data);
        //渲染模板引擎
        $('.steps').html(template('cs_add_3', data.result));

        //修改aside显示状态
        $('.cs_saide li').eq(0).find('a').addClass('done');
        $('.cs_saide li').eq(1).find('a').addClass('done');
        $('.cs_saide li').eq(2).find('a').addClass('active');
    });
    $(document).on('click', '#edit_ct_id', function () {
        $.get('/v6/course/chapter/edit', {ct_id: $(this).data('ct_id')}, function (data) {
            console.log(data);
            $('#chapterModal').html(template('ct_info_tmp', data.result));
        })
    })
    $(document).on('click', '#ct_add', function () {
        var data = {ct_cs_id:csId};
        $('#chapterModal').html(template('ct_info_tmp', data));
    });
    //这种方式不行，非选中的checkbox是不提交的
    // $(document).on('click', '#ct_isFree', function () {
    //     if($(this).prop('checked')){
    //         $(this).val(1);
    //     }else{
    //         $(this).val(0);
    //     }
    // });
    $(document).on('click','#submitBtn',function () {
        $('#ct_form').ajaxSubmit({
            delegation: true,
            data:{ct_is_free:($('#ct_isFree').prop('checked')?1:0)},
            success: function (data) {
                data.code == 200 && location.reload();
            }
        });
        return false;
    })
    // $('#ct_form').ajaxForm({
    //     delegation: true,
    //     data:{ct_is_free:($('#ct_isFree').prop('checked')?1:0)},
    //     success: function (data) {
    //         data.code == 200 && location.reload();
    //     }
    // })
    nprogress.done();
});