
jQuery(document).ready(function() {
//jquery.navscript.js
    
	jQuery('#navBttn').on('click', function() {
      		jQuery('#navBox').fadeIn(400);
    	});

	jQuery('#navBttnX').on('click', function() {
    		jQuery('#navBox').fadeOut(350);
    	});  

// jquery.vpcheck.js animations

jQuery('.vp-ani-theRise').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-theRise', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});
			
jQuery('.vp-ani-theRiseHit').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-theRiseHit', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

jQuery('.vp-ani-zoomCloser').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-zoomCloser', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

jQuery('.vp-ani-flyLeft').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-flyLeft', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

jQuery('.vp-ani-flyRight').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-flyRight', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

jQuery('.vp-ani-theFall').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-theFall', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

jQuery('.vp-ani-theFallHit').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-theFallHit', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

jQuery('.vp-ani-spinRight').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-spinRight', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

jQuery('.vp-ani-spinLeft').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-spinLeft', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

jQuery('.vp-ani-slideLeft').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-slideLeft', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

jQuery('.vp-ani-slideRight').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible ani-slideRight', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});

// fullpage.js
jQuery(document).ready(function() {
	jQuery('#fullpage').fullpage();
});


//~~~~~~~~~~~~~~~~~~~~~
});

// rellax.js
var rellax = new Rellax('.rellax');








