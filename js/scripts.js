var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

    getMapParams();

});

$(window).resize(function() {

    getMapParams();

});

$(document).ready(function() {
   


});

function getMapParams() {

    $(".map-sect").find("#map").css({
        "width" : $(".map-sect").find(".contacts_content").offset().left + "px"
    });

}