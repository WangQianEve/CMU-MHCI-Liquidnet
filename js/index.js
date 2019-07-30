function expandNav(elem) {
    let nav_section = $(elem).parents('.nav-section');
    if (nav_section.hasClass('opened')) {
        nav_section.removeClass('opened');
    } else {
        nav_section.addClass('opened');
    }
}

function expandRef(elem) {
    let nav_section = $(elem).parents('.references');
    if (nav_section.hasClass('opened')) {
        nav_section.removeClass('opened');
    } else {
        nav_section.addClass('opened');
    }
}

function openNavMenu() {
    $('.nav-bg').addClass('visible');
    $('.nav').addClass('visible');
}

function closeNavMenu() {
    $('.nav-bg').removeClass('visible');
    $('.nav').removeClass('visible');
}