/**
 * Created by LYC on 2017/4/6.
 */
define(['jquery','util'],function ($,util) {
    function Header(cofOptions) {
        var options = {
            logoutBtn:'#logout',
            logoutApi:'/v6/logout',
            method:'post',
            targetUrl:'/html/home/login.html'
        };
        util.extend(this,options,cofOptions);
    }
    util.extend(Header.prototype,{
        logout:function () {
            var _this = this;
            $(_this.logoutBtn).on('click',function () {
                $[_this.method](_this.logoutApi,function (data) {
                    data.code==200&&(location.href = _this.targetUrl);
                });
            })
        }
    });
    return Header;
    // function Header(cofOptions) {
    //     var options = {
    //         logoutBtn:'#logout',
    //     };
    //     util.extend(options,cofOptions);
    //     util.extend(this,options);
    // }
    // util.extend(Header.prototype,{
    //     :function () {
    //     }
    // });
});