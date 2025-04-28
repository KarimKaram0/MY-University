window.onscroll = function() { showNavOnScroll() };
function showNavOnScroll() {
    var nav = document.querySelector('.second-nav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.animation = "slideDown 0.5s forwards";
    } else {
        nav.style.animation = "none";
    }
}

