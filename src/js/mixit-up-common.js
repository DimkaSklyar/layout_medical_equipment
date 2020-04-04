var count = 9;

var mixer = mixitup(".products-mix", {
  pagination: {
    limit: count // impose a limit of 8 targets per page
  }
});

$(".new-filter").click(function (e) { 
  $(".filter").text("Новые поступления ✖");
});

$(".filter").click(function (e) { 
  $(this).text("Все");
});
