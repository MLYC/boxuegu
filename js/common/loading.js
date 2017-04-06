/**
 * Created by LYC on 2017/4/6.
 */
define(['jquery'],function ($) {
    $(document).on('ajaxStart',function () {
        $('.overlay').show();
    }).on('ajaxStop',function () {
        $('.overlay').hide();
    })
});