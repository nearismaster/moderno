$(function () {

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    var mixer = mixitup('.products__inner-box');

})

document.addEventListener('DOMContentLoaded', function () {
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach((rating) => {
        const stars = rating.querySelectorAll('.star');

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const value = star.getAttribute('data-value');

                // Удалите все классы 'selected' перед добавлением нового значения
                stars.forEach((s) => {
                    s.classList.remove('selected');
                });

                // Добавьте класс 'selected' к звездам до текущей
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('selected');
                }

                // alert(`Вы поставили рейтинг ${value} в блоке с ID: ${rating.id}`);
                // Добавьте здесь логику для сохранения рейтинга или других действий
            });

            star.addEventListener('mouseover', () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });

            star.addEventListener('mouseout', () => {
                stars.forEach((s) => {
                    s.classList.remove('active');
                });
            });
        });
    });
});

