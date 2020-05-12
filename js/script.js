// Load is being used for height calculations, this is for the sake of Webkit-based browers
jQuery(window).load(function() 
{
	// define the window position and scroll tracking variables 
	var windowHeight, windowScrollPosTop, windowScrollPosBotton = 0;
	
	//calculate window position and scroll tracking variables
	function calcScrollValues() 
	{
		windowHeight = jQuery(window).height();
		windowScrollPosTop = jQuery(window).scrollTop();
		windowScrollPosBotton = windowHeight + windowScrollPosTop;		
	} // end of calcScrollValues
	
	// create a reveal on scroll method
	jQuery.fn.revealOnScroll = function(direction,speed)
	{		
		return this.each(function()
		{
			var objectOffset = jQuery(this).offset();
			var objectOffsetTop = objectOffset.top;
			
			//only hide and offset elements once 
			if(!jQuery(this).hasClass("hidden"))
			{				
				//if argument is "right"
				if(direction == "right")
				{
					jQuery(this).css(
					{
						"opacity"  : 0,
						"right"    : "700px",
						"position" : "relative"
					});
				}
				//if argument is left
				else 
				{
					jQuery(this).css(
					{
						"opacity" : 0,
						"right"   : "-700px",
						"position": "relative"						
					});
				}// end of if else block for checking right/left
				
				jQuery(this).addClass("hidden");				
			}// end only hide and offset elements once 
			// only reaveal the element once
			if(!jQuery(this).hasClass("animation-complete"))
			{
				//if the page been scrolled far enough to reaveal the element 
				if(windowScrollPosBotton > objectOffsetTop)
				{
					jQuery(this).animate({"opacity" : 1, "right" : 0}, speed).addClass("animation-complete");					
				}// end only reaveal the element once
			}
		});
	}// end reaveal on scroll function
	// reveal commands
	
	function revealCommands()
	{
		jQuery("img:nth-of-type(1)").revealOnScroll("right",800);
		jQuery("img:nth-of-type(2)").revealOnScroll("left",400);
		jQuery("img:nth-of-type(3)").revealOnScroll("right",1200);
		jQuery("ul li:even").revealOnScroll("left", 800);
		jQuery("ul li:odd").revealOnScroll("right",800);
		jQuery(".sidebar").revealOnScroll("left",1500);
	}// end of adding the reveal commands
	// loads the values
	calcScrollValues();
	//load the reaveal commands
	revealCommands();
	// run on every scroll
	jQuery(window).scroll(function() 
	{
		calcScrollValues()
		revealCommands();
	});	
	
	
});

















