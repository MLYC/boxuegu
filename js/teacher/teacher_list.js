define(['jquery','template','nprogress'], function($,template,nprogress) {
	$.get('/v6/teacher',function (data) {
	    // console.log(data);
        // console.log(template('teacher_list',data));
        // data.result.length=10;
        $('#tbody_tc_list').html(template('teacher_list',data));
	});
    // //编辑
    // $('.tc_edit').on()
    nprogress.done();
});
