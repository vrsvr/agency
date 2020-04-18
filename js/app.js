$(() => {
    const navOpen = $('#nav-toggle');
    const mobMenu = $('#mob-menu');

    navOpen.click(function() {
        navOpen.toggleClass('active');
        mobMenu.toggleClass('active');
        $('body').toggleClass('active');
    });

});