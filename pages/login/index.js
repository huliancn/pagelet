require(['/common/jquery.js'],function($){

    $('[component]').each(function(){
        var component=$(this)
        component.load('/components/'+component.attr('component')+'/browser/index.html');
    });

});
