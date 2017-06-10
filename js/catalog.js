$(document).ready(function(){
  $('.catalaog-slider-block').slick({
    accessibility: false,
    autoplay: false,
    arrows: false,
    dots: false,
    fade: true,
    speed: 500
  });

  $("#catalog-slider-1").on("click", function(){
    $('.catalaog-slider-block').slick("slickGoTo", 0);
    $(".catalog-slider ul li").removeClass("active");
    $("#catalog-slider-1").addClass("active");
  })

  $("#catalog-slider-2").on("click", function(){
    $('.catalaog-slider-block').slick("slickGoTo", 1);
    $(".catalog-slider ul li").removeClass("active");
    $("#catalog-slider-2").addClass("active");
  })

  $("#catalog-slider-3").on("click", function(){
    $('.catalaog-slider-block').slick("slickGoTo", 2);
    $(".catalog-slider ul li").removeClass("active");
    $("#catalog-slider-3").addClass("active");
  })

  $("#catalog-slider-4").on("click", function(){
    $('.catalaog-slider-block').slick("slickGoTo", 3);
    $(".catalog-slider ul li").removeClass("active");
    $("#catalog-slider-4").addClass("active");
  })

  $("#catalog-slider-5").on("click", function(){
    $('.catalaog-slider-block').slick("slickGoTo", 4);
    $(".catalog-slider ul li").removeClass("active");
    $("#catalog-slider-5").addClass("active");
  })

  $("#catalog-slider-6").on("click", function(){
    $('.catalaog-slider-block').slick("slickGoTo", 5);
    $(".catalog-slider ul li").removeClass("active");
    $("#catalog-slider-6").addClass("active");
  })
});
