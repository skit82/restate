$(document).ready(function() {

  $(".menu-main .cd-nav-trigger").click(function () {
      $(".menu-main").toggleClass("menu-open");
      $(".nav-bar").toggleClass("open-menu");
      $(".menu-main .bar").toggleClass("animate");
      $("body").toggleClass("open-menu");
    });  
});