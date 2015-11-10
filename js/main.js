$(document).ready(function() {
	// 1.fullpage
    $('#fullpage').fullpage({
    	navigation: false,
    	slidesNavigation: true,
        slidesNavPosition: 'bottom',
        autoScrolling: false,
		fitToSection: false
    });
    // 2. animsition
    $(".animsition").animsition({
	    inClass: 'fade-in',
	    outClass: 'fade-out',
	    inDuration: 1500,
	    outDuration: 800,
	    linkElement: '.animsition-link',
	    loading: true,
	    loadingParentElement: 'body', //animsition wrapper element
	    loadingClass: 'animsition-loading',
	    loadingInner: '', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    overlay : false,
	    overlayClass : 'animsition-overlay-slide',
	    overlayParentElement : 'body',
	    transition: function(url){ window.location.href = url; }
	  });
    // 3.stellar
    $(window).stellar({
    	
    });
    // 4.owl carrousel

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        nav:false,
        autoplay:false,
        autoplayHoverPause:true,
    });

    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    });




    // 5.transform scale
    // $("#portfolio li a").on("mouseenter", function(){
    // 	$(this).addClass("scale");
    // });
});