define(['jquery','nprogress','jqueryCookie','aside','header'], function($,nprogress,undefined,Aside,Header) {
    new Header().logout();
    var aside = new Aside();
    aside.addInfo();
    aside.triggerList();
    aside.updateActive();

    // $.ajax({
    //     type:'post',
    //     url:'/v6/login',
    //     data:{
    //         tc_name:'前端学院',
    //         tc_pass:'123456'
    //     },
    //     success:function (data) {
    //       console.log(data);
    //
    //     }
    // });
    // $.ajax({
    //     type:'jsonp',
    //     url:'http://api.botue.com/v6/login',
    //         data:{
    //             tc_name:'前端学院',
    //             tc_pass:'123456'
    //         },
    //         success:function (data) {
    //           console.log(data);
    //         }
    // })
    nprogress.done();
});
