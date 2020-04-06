$(document).ready(function () {

  // sticky header
  // $(window).scroll(function (e) {
  //   var height = $(this).scrollTop();
  //   if (height > 150) {
  //     $('.header').addClass("header--sticky");
  //   } else {
  //     $('.header').removeClass("header--sticky");
  //   }
  // });

  // slick.js
  $('.slick__large-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true,
    asNavFor: '.slick__thumb-img'
  });

  $('.slick__thumb-img').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.btn__thumb-item',
    nextArrow: '.btn__thumb-item',
    asNavFor: '.slick__large-img',
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 730, settings: { slidesToShow: 2 } },
    ]
  });

  $('.active-by-product').slick({
    speed: 700,
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '.related__product-btn--prev',
    nextArrow: '.related__product-btn--next',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 479, settings: { slidesToShow: 2 } }
    ]
  });

  // scroll Top
  var scrollTop = $(".back-to-top");

  $(window).scroll(function () {

    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
      $(scrollTop).css("visibility", "visible");

    } else {
      $(scrollTop).css("opacity", "0");
      $(scrollTop).css("visibility", "hidden");
    }
  });

  $(scrollTop).click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  // tăng giảm số lượng
  if ($('.cart-plus-minus-box').val() == 1) {
    $('.dec').addClass('disable-el');
  }
  $('.cart-plus-minus-box').on('change', function () {
    if ($(this).val() == "" || $(this).val() == 0 || $(this).val() < 0) {
      $(this).val('' + 1 + '');
    } else if ($(this).val() > 1) {
      $('.dec').removeClass('disable-el');
    }
  });
  $(".qtybutton").click(function (e) {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    console.log(oldValue);
    if ($button.text() == "+") {
      var newVal = parseInt(oldValue) + 1;
    }
    else {
      if (oldValue > 0) {
        var newVal = parseInt(oldValue) - 1;
      }
      else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
    $button.parent().find("input").trigger("change");
  });

});