$(document).ready(function(){
    var start = function()
    {
        $(".hide").fadeIn(300);
        $(".hide").removeClass("hide");
        $("#starter").removeClass("starter");
    };
    start();


    

    var NavY = $("#stickyMenu").offset().top;

    var stickyNav = function() {
    var ScrollY = $(window).scrollTop();

    if(ScrollY > NavY) {
        $('#stickyMenu').addClass('sticky');
    } else{
        $('#stickyMenu').removeClass('sticky'); 
    }
    };
    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });






});


