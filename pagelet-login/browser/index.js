//定义AMD模块
define(['/common/jquery.js','../config.js'],function($,config){

    //初始化函数
    function init(){

        //刷新验证码
        $('#pagelet-login-captcha-refresh').click(function(){
            $('#pagelet-login-captcha').attr('src', config.path.captcha+'?t='+Date.now());
        });
        $('#pagelet-login-captcha').click(function(){
            this.src=config.path.captcha+'?t='+Date.now();
        });

        //Form提交
    
    }

    //返回AMD模块对象
    return {
        init:init
    }

});