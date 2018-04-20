require.config({
    paths: {
        jquery    : "/common/jquery-3.3.1.min",
    },
    shim : {

    }
});
define(['jquery'],function($){
    

    $('[component]').each(function(){
        var component=$(this)
        component.load('/components/'+component.attr('component')+'/browser/index.html');
    });


})