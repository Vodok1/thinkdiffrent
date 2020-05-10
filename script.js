$(function () {
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

$(window).scroll(function () {
  const nav = $("nav");
  const scroll = $(window).scrollTop();
  const navLogo = $("nav .logo");

  if (scroll > 500) {
    nav.addClass("nav-scrollnav");
    navLogo.addClass("logo-small");
  }
});
