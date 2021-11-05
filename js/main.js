document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
})

ScrollReveal().reveal('.banner');
ScrollReveal().reveal('.cards-des', {delay: 200});
ScrollReveal().reveal('.cards-promo-one', {delay: 200});
ScrollReveal().reveal('.cards-promo-two', {delay: 200});
