define(['jquery','template','nprogress','common'], function($,template,nprogress,util) {
    var tcId = util.getUrlParam('id'),
        submitBtn = $('#tc_add_submit');
    // console.log(tcId);
    if(tcId){
        $.get('/v6/teacher/edit',{tc_id:tcId},function (data) {
            // console.log(data);
            var tcForm = $('#tc_form');
            //姓名赋值
            tcForm.find('input[name="tc_name"]').val(data.result.tc_name);
            //入职时间赋值
            tcForm.find('input[name="tc_join_date"]').val(data.result.tc_join_date);
            //类型赋值
            if(data.result.tc_type==0) {
                tcForm.find('select[name="tc_type"]').find('option').eq(1).prop('selected', true);
            }
            //性别赋值
            if(data.result.tc_gender==0){
                tcForm.find('input[name="tc_gender"]').eq(1).prop('checked',true);
            }
        });
        submitBtn.html(' 修 改 ');
    }
    submitBtn.on('click',function () {
        // $.post('/v6/teacher/add',{
	     //    data:$('#tc_form').serialize()
        // },function (data) {
        //     console.log(data);
        // })
        // console.log($('#tc_form').serialize());
        var formStr = $('#tc_form').serialize(),
            urlStr = '/v6/teacher/add';
        if(tcId){
            urlStr = '/v6/teacher/update';
            formStr += '&tc_id='+tcId;
        }
        console.log(urlStr);
        console.log(formStr);
        $.ajax({
            url:urlStr,
            type:'post',
            data:formStr,
            success:function (data) {
                console.log(data);
            },
            error:function (data) {
                console.log(data);
            }
        })
	});
    nprogress.done();
});
