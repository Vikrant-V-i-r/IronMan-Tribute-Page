window.addEventListener('scroll', function () {
    var value = window.scrollY;
    document.body.style.backgroundPosition = '0 ' + value * 0.7 + 'px';
});



var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        var carousel = card.parentElement;
        var currentScrollPosition = carousel.scrollLeft;
        var cardOffset = card.offsetLeft;
        carousel.scrollTo({
            left: currentScrollPosition + cardOffset - 20,
            behavior: 'smooth'
        });
    });
});

