$(document).ready(function(){

        var $menu = $("#menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 940 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 940 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });


$(document).ready(function() { 
	
	$(".image").click(function(){	
	  	var img = $(this);	
		var src = img.attr('src'); 
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ 
						 "<img src='"+src+"' class='popup_img' />"+ 
						 "</div>"); 
		$(".popup").fadeIn(700); 
		$(".popup_bg").click(function(){	  
			$(".popup").fadeOut(800);	
			setTimeout(function() {	
			  $(".popup").remove(); 
			}, 800);
		});
	});
	
});