define(['jquery', 'nprogress','jqueryForm'], function ($, nprogress,undefinde) {
	$('#repass_form').on('submit',function () {
	    $(this).ajaxSubmit(function (data) {
	        if(data.code == 200){
                $('#logout').trigger('click');
            }
	    });
	    return false;
	});
    nprogress.done();
});
