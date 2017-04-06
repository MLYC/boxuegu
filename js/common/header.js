/**
 * Created by LYC on 2017/4/6.
 */
define(['jquery'],function ($) {
    $('#logout').on('click',function () {
        $.post('/v6/logout?'+ Date.now(),function (data) {
            // console.log(data);
            // if(data.code==200){
            //     location.href = '/html/home/login.html';
            // }
            data.code==200&&(location.href = '/html/home/login.html');
        });
    });
});