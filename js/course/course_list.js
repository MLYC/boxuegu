define(['jquery', 'template', 'nprogress', 'common'], function($, template, nprogress, util) {
	$.get('/v6/course',function (data) {
	    console.log(data);
	    template.helper('random',function (option,value) {
	        var options = option.split('-');
	        return Math.ceil(Math.random()*(options[1]-options[0])+options[0]);
	    });
        $('.courses').append(template('course_list_tem',data))
	});
    nprogress.done();
});
