define(['jquery', 'template', 'nprogress', 'common'], function($, template, nprogress, util) {
	$.get('/v6/category',function (data) {
	    console.log(data);
	    $('#cg_tbody').html(template('cg_list_tem',data));
	});
    nprogress.done();
});
