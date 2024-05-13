$(document).ready(function() {
    let lastScrollTop = 0;
    let timeout = null;

    $(window).scroll(function() {
        let scrollTop = $(this).scrollTop();
        let headerHeight = $('.header').outerHeight(); // Get the height of the header

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // If scrolling down and not in the header area, hide navbar
            if (scrollTop > headerHeight) {
                $('.navbar').css('top', '-100px');
            }
        } else { 
            // If scrolling up, show navbar
            $('.navbar').css('top', '0').addClass('scrolled');
        }
        lastScrollTop = scrollTop;

        // Remove the 'scrolled' class if at the top of the page
        if(scrollTop <= 50) {
            $('.navbar').removeClass('scrolled');
        }

        // Automatically hide navbar after a delay, only if not in the header area
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if (scrollTop > headerHeight) {
                $('.navbar').css('top', '-100px');
            }
        }, 2000);
    });
});



