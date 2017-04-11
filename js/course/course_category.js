define(['aside','jquery', 'template', 'nprogress', 'common'], function(Aside,$, template, nprogress, util) {
    var aside = new Aside();
    aside.addInfo();
    aside.triggerList();
    aside.updateActive();
	$.get('/v6/category',function (data) {
	    console.log(data);
	    $('#cg_tbody').html(template('cg_list_tem',data));
	});
    nprogress.done();
});
