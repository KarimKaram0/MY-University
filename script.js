window.onscroll = function() { showNavOnScroll() };

function showNavOnScroll() {
    var nav = document.querySelector('.second-nav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.animation = "slideDown 0.5s forwards"; // تظهر بعد سكول 50px
    } else {
        nav.style.animation = "none"; // لما تبقى فوق، الانيميشين مش شغال
    }
}

