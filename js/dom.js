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


var decrement = function(i)
{
	$leftArrow = $('#left-arrow');
	$leftArrow.on('click',function(){
		console.log("dsfds");
		if(i !== 0)
			i--;
	});
	
}

var increment = function(i)
{
	$rightArrow = $('#right-arrow');
	$rightArrow.on('click',function(){
		console.log("dsfds");
		i++;
	});
	
}