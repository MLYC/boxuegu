/**
 * Created by LYC on 2017/4/9.
 */
define([],function () {
    return {
        extend: function () {
            for (var i = arguments.length;--i;) {
                for (var key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key)) {
                        arguments[i-1][key] = arguments[i][key];
                    }
                }
            }
            return arguments[0];
        },
        getUrlParam: function (key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
            var result = window.location.search.substr(1).match(reg);
            return result ? decodeURIComponent(result[2]) : null;
        }
    };
});
