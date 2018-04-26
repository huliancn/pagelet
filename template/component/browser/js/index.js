//定义AMD模块
define(['jquery', '../../config.js'], function ($, config) {

    
    $('#helloWorldButton').click(function(){

        $.get({
            url:config.path.helloWorld,
            success:function(data) {
            alert(data);
        }});

    });

});