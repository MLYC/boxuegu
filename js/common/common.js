/**
 * Created by LYC on 2017/4/6.
 */
define(['jquery', 'jqueryCookie'], function ($, undefined) {
    if (!$.cookie('PHPSESSID')) {
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
    return {
        getUrlParam: function (key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
            var result = window.location.search.substr(1).match(reg);
            return result ? decodeURIComponent(result[2]) : null;
        }
    };
});