define(['jquery', 'template', 'nprogress', 'common','jqueryForm','datepicker','datepickerCN'], function ($, template, nprogress, util,undefinde,undefinde,undefinde) {
	$.get('/v6/teacher/profile',function (data) {
	    console.log(data);
	    $('.settings').html(template('setting_from_tmp',data.result));
        $('.date-picker').datepicker({
            format: 'yyyy-mm-dd',
            language:'zh-CN',
            endDate:new Date(),
            todayBtn:true,
            todayHighlight:true

            // startDate:''
        });
	});
	$(document).on('submit','#setting_from',function () {
	    $(this).ajaxSubmit(function () {
	        location.reload();
	    });
	    return false;
	});
    nprogress.done();
});
