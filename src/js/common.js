window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(event) {
    var matrix = "+7 (___) ___ __ __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
  };
  var input2 = document.querySelector("#phone-1");
  input2.addEventListener("input", mask, false);
  input2.addEventListener("focus", mask, false);
  input2.addEventListener("blur", mask, false);
  var input2 = document.querySelector("#call-me-phone-2");
  input2.addEventListener("input", mask, false);
  input2.addEventListener("focus", mask, false);
  input2.addEventListener("blur", mask, false);
});


$(document).ready(function () {


  $('.slider__container').slick();

  $('.product-carousel').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.product-carousel-2').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.product-carousel-lider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $(".mobile-menu__btn").click(function (e) {
    e.preventDefault();
    $(".top-menu").toggleClass("active");
    $(".mobile-menu__close").toggleClass("active");
  });

  $(".mobile-menu__close").click(function (e) {
    e.preventDefault();
    $(".top-menu").toggleClass("active");
    $(".mobile-menu__close").toggleClass("active");
  });

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

});
var priceBegin;
$(".main-order").click(function () {
  $("#price").text($(this).closest(".product__item").find(".product__price").text());
  $("#quanty").val(1);
  $("#product-img").attr("src", $(this).closest(".product__item").find("img").attr("src"));
  $("#product-name").text($(this).closest(".product__item").find(".product__header").text());
  $("#description-1").text($(this).closest(".product__item").find(".d-1").text());
  priceBegin = $('#price').text().replace(/руб./g, "");
});

$('#pay').click(function () {
  $('.order-form').addClass('active');
  var price = priceBegin;
  var count = $('#quanty').val();
  var sum = +price * +count;
  var sum2 = sum.toString().split('');
  sum2.splice(sum2.length - 3, 0, " ");
  sum = sum2.join('');
  $('#quality-order').val($('#quanty').val());
  $('#sum').val(sum + " руб.");
  $('#price-order').val(price);
  $('#count-order').val(count);
  $('#sum-order').val(sum);
  $('#name-order').val($('#product-name').text());
  $('.close').removeClass('close-active');
});

$("#quanty").bind('keyup mouseup', function () {
  $('#quality-order').val($(this).val());
  $("#price").text(+priceBegin * $(this).val() + " руб.");
});

$("#quality-order").bind('keyup mouseup', function () {
  $("#sum").val(+priceBegin * $(this).val() + " руб.");
});


$('.mfp-close').click(function () {
  $('.order-form').removeClass('active');
});

$('.close').click(function () {
  $('.order-form').removeClass('active');
  $(this).addClass('close-active');

});

// отправка подписки
function AjaxFormRequest(result_id, formMain, url) {
  jQuery.ajax({
    url: url,
    type: "POST",
    dataType: "html",
    data: jQuery("#" + formMain).serialize(),
    success: function (response) {
      $(':input', '#' + formMain)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
      setTimeout(() => {
        $("#message").hide();
      }, 5000);
    },
    error: function (response) {
      var par = document.getElementById(result_id);
      var error = document.createElement('p');
      error.classList.add("error");
      error.innerHTML = "Возникла ошибка при отправке формы.";
      par.appendChild(error);
      setTimeout(func, 700);
    }
  });
}

function func() {
  $("p.error").detach();
}

$('#form-main-order').submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('messegeResult-order', 'form-main-order', './order.php');
});

$('#subscribe-form').submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('sub-result', 'subscribe-form', './subscribe.php');
});

$('#get-in').submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('get-in_wrap', 'get-in', './feedback.php');
});

$(".navigation__item_with-sub").click(function (e) {
  if ($(window).width() <= 992) {
    $(".navigation__sub").fadeToggle();
  }
});