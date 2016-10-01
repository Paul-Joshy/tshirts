$(window).on("load", function(){
    makeFixedNav();
});

var makeFixedNav = function(){
    var $fixedNav = $("#nav");
    $fixedNav.topOffset = $fixedNav.offset().top;

    $(window).on("scroll", function(){
        if( $(window).scrollTop() >= $fixedNav.topOffset )
        {
            $fixedNav.addClass("fixed");
        } else {
           $fixedNav.removeClass("fixed");
        }
    });
}