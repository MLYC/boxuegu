define(['jquery', 'template', 'nprogress', 'common', 'jqueryForm', 'datepicker', 'datepickerCN', 'ckeditor', 'jqueryRegion', 'uploadify', 'jqueryCookie'], function ($, template, nprogress, util, undefinde, undefinde, undefinde, ckeditor, undefinde, undefinde, undefinde) {
    var editor = null;
    $.get('/v6/teacher/profile', function (data) {
        console.log(data);
        $('.settings').html(template('setting_from_tmp', data.result));
        $('.date-picker').datepicker({
            format: 'yyyy-mm-dd',
            language: 'zh-CN',
            endDate: new Date(),
            todayBtn: true,
            todayHighlight: true

            // startDate:''
        });
        editor = ckeditor.replace('tc_int');
        $('#chose_city').region({
            url: '/lib/jquery-region/region.json'
        });
        $('#uploadify').uploadify({
            swf: '/lib/uploadify/uploadify.swf',
            uploader: '/v6/uploader/avatar',
            fileObjName: 'tc_avatar',
            buttonText: '',
            fileTypeExts: '*.gif; *.jpg; *.png',
            height: $('.preview').height(),
            onUploadSuccess: function (file, data, response) {
                console.log(data);
                // data && $('.preview img').attr('src', JSON.parse(data).result.path);
                var path = data && JSON.parse(data).result.path;
                //更新页面头像
                $('.preview img').attr('src', path);
                //更新aside头像
                $('.img-circle img').attr('src', path);
                //更新cookie
                var json = JSON.parse($.cookie('userInfo'));
                json.tc_avatar = path;
                $.cookie('userInfo', JSON.stringify(json), {path: '/'});
            }
        });
        // $('#uploadify').uploadify({
        //     swf: '/lib/uploadify/uploadify.swf',
        //     uploader: '/v6/uploader/avatar',
        //     fileObjName: 'tc_avatar',
        //     buttonText: '',
        //     height: $('.preview').height(),
        //     onUploadSuccess: function(file, data, response) {
        //         data && $('.preview img').attr('src', JSON.parse(data).result.path);
        //     }
        // });
    });
    $(document).on('submit', '#setting_from', function () {
        editor.updateElement();
        $(this).ajaxSubmit({
            data: {tc_hometown: $('#p').find('option:selected').text() + '|' + $('#c').find('option:selected').text() + '|' + $('#d').find('option:selected').text()},
            success: function () {
                location.reload();
            }
        });
        return false;
    });
    nprogress.done();
});
