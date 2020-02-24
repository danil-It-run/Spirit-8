$('.mobile-menu').on('click', function (e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active')
    $('.menu-wrap').toggleClass('menu-active')
})