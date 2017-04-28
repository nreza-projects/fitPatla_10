
jQuery(document).ready(function() {

//jquery.navscript.js
	jQuery('#navBttn').on('click', function() {
      		jQuery('#navBox').fadeIn(400);
    	});

	jQuery('#navBttnX').on('click', function() {
    		jQuery('#navBox').fadeOut(350);
    	});  

// jquery.vpcheck.js animations

	//vp-theBounceUp
	jQuery('.vp-theBounceUp').addClass("space-invisible").viewportChecker({
		    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
		    classToAdd: 'space-visible nuM-theBounceUp', // Class to add to the elements when they are visible,
		    removeClassAfterAnimation: false, // Remove added classes after animation has finished
		   	repeat: true, // Add the possibility to remove the class if the elements are not visible
		    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	});

	//vp-theFadeUp
	jQuery('.vp-theFadeUp').addClass("space-invisible").viewportChecker({
		    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
		    classToAdd: 'space-visible nuM-theFadeUp', // Class to add to the elements when they are visible,
		    removeClassAfterAnimation: false, // Remove added classes after animation has finished
		   	repeat: true, // Add the possibility to remove the class if the elements are not visible
		    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	});

	//vp-theJumpy
	jQuery('.vp-theJumpy').addClass("space-invisible").viewportChecker({
		    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
		    classToAdd: 'space-visible nuM-theJumpy', // Class to add to the elements when they are visible,
		    removeClassAfterAnimation: false, // Remove added classes after animation has finished
		   	repeat: true, // Add the possibility to remove the class if the elements are not visible
		    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	});

	//vp-theZoomEntry
	jQuery('.vp-theZoomEntry').addClass("space-invisible").viewportChecker({
		    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
		    classToAdd: 'space-visible nuM-theZoomEntry', // Class to add to the elements when they are visible,
		    removeClassAfterAnimation: false, // Remove added classes after animation has finished
		   	repeat: true, // Add the possibility to remove the class if the elements are not visible
		    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	});

	//vp-theShaking
	jQuery('.vp-theShaking').addClass("space-invisible").viewportChecker({
		    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
		    classToAdd: 'space-visible nuM-theShaking', // Class to add to the elements when they are visible,
		    removeClassAfterAnimation: false, // Remove added classes after animation has finished
		   	repeat: true, // Add the possibility to remove the class if the elements are not visible
		    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	});

	// rellax.js
	var rellax = new Rellax('.rellax');

	/* 
	FOR ACTIVATING onepage.js
	jQuery(".main").onepage_scroll(); 
	*/

//~~~~~~~~~~~~~~~~~~~~~
});










