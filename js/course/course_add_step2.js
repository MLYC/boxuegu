define(['jquery','uploadify', 'template', 'nprogress', 'common', 'jqueryForm'], function($,undefind,template, nprogress, common, undefinde) {
    var csId = common.getUrlParam('cs_id');
	$.get('/v6/course/picture',{cs_id:csId},function (data) {

	    console.log(data);
	    //渲染模板引擎
	    $('.steps').html(template('cs_add_2',data.result));

        //修改aside显示状态
        $('.cs_saide li').eq(0).find('a').addClass('done');
        $('.cs_saide li').eq(1).find('a').addClass('active');

        //初始化上传图片插件
        $('#uploadify').uploadify({
            swf: '/lib/uploadify/uploadify.swf',
            uploader: '/v6/uploader/cover',
            fileObjName: 'cs_cover_original',
            formData:{cs_id:csId},
            buttonText: '选择图片',
            width:'100%',
            height:'100%',
            buttonClass:'btn btn-success btn-sm',
            fileTypeExts: '*.gif; *.jpg; *.png',
            onUploadSuccess: function (file, data, response) {
                console.log(data);
                // data && $('.preview img').attr('src', JSON.parse(data).result.path);
                var path = data && JSON.parse(data).result.path;
                //更新页面头像
                $('.preview img').attr('src', path);
            }
        });
	});
    nprogress.done();
});
