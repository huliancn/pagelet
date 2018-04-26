require.config({
    paths: {
        jquery    : "/common/browser/js/jquery-3.3.1.min",
    },
    shim : {

    }
});
define(['jquery'],function($){
    
    //动态加载css
    $('[component]').each(function(){
        var component=$(this)
        $('head').append('<link rel="stylesheet" type="text/css" href="'+'/components/'+component.attr('component')+'/browser/css/index.css'+'" />')
    });

    //动态加载html
    $('[component]').each(function(){
        var component=$(this)
        component.load('/components/'+component.attr('component')+'/browser/index.html',function(){
            //加载html完成后，加载js
            require(['/components/'+component.attr('component')+'/browser/js/index.js']);
        });
    });
})