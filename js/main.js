//Слайдер с отзывами
$('.reviews__cnt').owlCarousel({
      nav: true,
      dots: false,
      items: 3,
      loop: true,
      navText: ["<img src='img/slider__prev.png'>", "<img src='img/slider__next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 3
        }
      }
});
//Слайдер с брендами
$('.brands__cnt').owlCarousel({
      nav: true,
      dots: false,
      loop: true,
      navText: ["<img src='img/slider__prev.png'>", "<img src='img/slider__next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 2
        },
        768 : {
            items: 4
        },
        1040 : {
            items: 6
        }
      }
});
//Tabs
$(".tab-content__item").hide();
$(".tabs__container div.tab-content__item:first-child").show();
$('ul.tabs__list > li').click(function () {
    if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
    }
});
//Блок с отзывами
$('.reviews__item-more').on('click', function() {
  $(this).parent().parent('.reviews__item-wrp').toggleClass('active');
  $(this).css('display','none');
});

//Мобильное меню
// $('.header__hamburger').on('click', function() {
//   $(this).toggleClass('active','slow');
//   $('.header__bot-wrp').toggleClass('active');
//   $('body').toggleClass('fixed');
// });
// if (screen.width <= 768) {
//   window.onload = function(){
//       $('.main-nav__link-wrp_sub .main-nav__link').on('click', function(e){
//         e.preventDefault();
//         $(this).parent().toggleClass('active','slow');
//       });
//   };
// };
  
// Закрываем AjaxForm popup после успешной отправки
$(document).on('af_complete', function(event,res) {
  if(res.success) parent.$.fancybox.close();
});
