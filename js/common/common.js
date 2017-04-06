/**
 * Created by LYC on 2017/4/6.
 */
define(['jquery','jqueryCookie'], function ($,undefined) {
    if(!$.cookie('PHPSESSID')){
        location.href = '/html/home/login.html';
    }
    // var cookieArr = document.cookie.split('; ');
    // var isLogin = false;
    // for (var i = cookieArr.length; i--;) {
    //     if (/^PHPSESSID=/.test(cookieArr[i])) {
    //         isLogin = true;
    //         break;
    //     }
    // }
    // if (!isLogin&&location.pathname!=='/html/home/login.html') {
    //     location.href = '/html/home/login.html';
    // }else if(isLogin&&location.pathname ==='/html/home/login.html'){
    //     location.href = '/';
    // }
});