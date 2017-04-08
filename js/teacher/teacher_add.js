define(['jquery', 'template', 'nprogress', 'common'], function ($, template, nprogress, util) {
    //----------------------下面是template方式---------------------//
    //用别人的方法获取url-id
    var tcId = util.getUrlParam('id');
    //-------------------自己写的获取url参数方法--------//
    function getUrl(str) {
        //处理字符串
        var urlArr = location.search.slice(1).split('&'),urlObj ={};
        for(var i=urlArr.length;i--;){
            urlObj[urlArr[i].split('=')[0]]=urlArr[i].split('=')[1];
        }
        //如果存在则返回该值，如果不存在则不返回
        if(urlObj.hasOwnProperty(str)){
            return urlObj[str];
        }
    }
    //-------------------自己写的获取url参数方法--------//
    //根据是否存在id修改模板渲染内容
    if (tcId) {
        $.get('/v6/teacher/edit', {tc_id: tcId}, function (data) {
            console.log(data);
            $('.teacher').html(template('tc_from_wrap', data.result));
        });
    } else {
        $('.teacher').html(template('tc_from_wrap', {}));
    }
    //添加按钮提交事件
    $(document).on('click', '#tc_add_submit', function () {
        var formStr = $('#tc_form').serialize(),
            urlStr = '/v6/teacher/add';
        if (tcId) {
            urlStr = '/v6/teacher/update';
        }
        $.ajax({
            url: urlStr,
            type: 'post',
            data: formStr,
            success: function (data) {
                console.log(data);
                location.href = '/html/teacher/teacher_list.html';
            },
            error: function (data) {
                console.log(data);
            }
        });
    });
    //----------------------上面是template方式---------------------//

    //-------------------------下面是传统方式-----------------------//
    // var tcId = util.getUrlParam('id'),
    //     submitBtn = $('#tc_add_submit');
    // // console.log(tcId);
    // if (tcId) {
    //     $('.breadcrumb .active').html('讲师修改');
    //     $('.pass-box').hide();
    //     $.get('/v6/teacher/edit', {tc_id: tcId}, function (data) {
    //         // console.log(data);
    //         var tcForm = $('#tc_form');
    //         //姓名赋值
    //         tcForm.find('input[name="tc_name"]').val(data.result.tc_name);
    //         //入职时间赋值
    //         tcForm.find('input[name="tc_join_date"]').val(data.result.tc_join_date);
    //         //类型赋值
    //         if (+data.result.tc_type == 0) {
    //             tcForm.find('select[name="tc_type"]').find('option').eq(1).prop('selected', true);
    //         }
    //         //性别赋值
    //         if (+data.result.tc_gender == 1) {
    //             tcForm.find('input[name="tc_gender"]').eq(1).prop('checked', true);
    //         }
    //     });
    //     submitBtn.html(' 修 改 ');
    // }
    // submitBtn.on('click', function () {
    //     // $.post('/v6/teacher/add',{
    //     //    data:$('#tc_form').serialize()
    //     // },function (data) {
    //     //     console.log(data);
    //     // })
    //     // console.log($('#tc_form').serialize());
    //     var formStr = $('#tc_form').serialize(),
    //         urlStr = '/v6/teacher/add';
    //     if (tcId) {
    //         urlStr = '/v6/teacher/update';
    //         formStr += '&tc_id=' + tcId;
    //     }
    //     console.log(urlStr);
    //     console.log(formStr);
    //     $.ajax({
    //         url: urlStr,
    //         type: 'post',
    //         data: formStr,
    //         success: function (data) {
    //             console.log(data);
    //             location.href='/html/teacher/teacher_list.html';
    //         },
    //         error: function (data) {
    //             console.log(data);
    //         }
    //     })
    // });
    //-------------------------------上面是传统方式---------------------------------//
    nprogress.done();
});
