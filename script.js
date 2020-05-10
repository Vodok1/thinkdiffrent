$(document).ready(function () {
  $(".shopicon").click(function () {
    $("html, body").animate({ scrollTop: $(".shop").offset().top }, 2000);
  });
  $(".contacticon").click(function () {
    $("html, body").animate({ scrollTop: $(".contact").offset().top }, 2000);
  });
  $(".mainicon").click(function () {
    $("html, body").animate({ scrollTop: $(".hero").offset().top }, 2000);
  });
  $("nav").delay(1500).fadeTo(1000, 0.9);
});
