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
                stars.forEach((s) => {
                    s.classList.remove('selected');
                });
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('selected');
                }
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

$('.menu__btn').on('click', function () {
   $('.menu__list').slideToggle();
});

$('.header__btn-menu').on('click', function () {
   $('.header__box').toggleClass('active');
});

// document.getElementById("modal").addEventListener("click", () => {
//    new Fancybox(
//       [
//          {
//             src: "<p>Lorem ipsum dolor sit amet.</p>",
//             type: "html",
//          },
//       ],
//       {
//          // Your custom options
//       }
//    );
// })

Fancybox.bind('[data-fancybox]', {
   // Custom options for all galleries
});

