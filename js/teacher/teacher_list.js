define(['jquery','template','nprogress','bootstrap','aside'], function($,template,nprogress,undefined,Aside) {
    var aside = new Aside();
    aside.addInfo();
    aside.triggerList();
    aside.updateActive();
	$.get('/v6/teacher',function (data) {
	    // console.log(data);
        // console.log(template('teacher_list',data));
        // data.result.length=10;
        $('#tbody_tc_list').html(template('teacher_list',data));
	});
    // //编辑
    // $('.tc_edit').on()
    //查看按钮
    $(document).on('click','.tc_view',function () {
        // console.log($(this));
        $.get('/v6/teacher/view',{tc_id:$(this).data('tc_id')},function (data) {
            console.log(data.result);
            $('#teacherModal').html(template('tc_view_modal',data.result));
        });
    });
    //注销。启用按钮
    $(document).on('click','.tc_status',function () {
        console.log($(this).data());
        var _this = this;
        $.get('/v6/teacher/handle',{tc_id:$(this).data('tc_id'),tc_status:$(this).data('tc_status')},function (data) {

            $(_this).data('tc_status',data.result.tc_status);
            // $(_this).attr('data-tc_idw',data.result.tc_status);
            // $(_this).attr('data-tc_status',data.result.tc_status);
            console.log(data.result);
            if(+$(_this).data('tc_status')==0){
                $(_this).html('注 销');
            }else{
                $(_this).html('启 用');
            }
        });
    });
    nprogress.done();
});
