$(document).ready(function(){
  // $('.objects-block-carouser').slick({
  //   accessibility: true,
  //   arrows: false,
  //   dots: false,
  //   speed: 500,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1
  // });

  $('.objects-block-units').slick({
    accessibility: true,
    arrows: false,
    dots: false,
    speed: 500,
    infinite: true,
    fade: true
  });


});


$(".arrow-left").on("click", function(){
  $('.objects-block-carouser').slick("slickPrev");
});

$(".arrow-right").on("click", function(){
  $('.objects-block-carouser').slick("slickNext");
});
$(".objects-block-carouser img").on("click", function(){
  $(".objects-block-carouser img").removeClass("active");
  $(this).addClass("active");
})


$(".objects-block-carouser img:nth-child(1)").on("click", function(){
  $('.objects-block-units').slick("slickGoTo", 0);
});
$(".objects-block-carouser img:nth-child(2)").on("click", function(){
  $('.objects-block-units').slick("slickGoTo", 1);
});
$(".objects-block-carouser img:nth-child(3)").on("click", function(){
  $('.objects-block-units').slick("slickGoTo", 2);
});
$(".objects-block-carouser img:nth-child(4)").on("click", function(){
  $('.objects-block-units').slick("slickGoTo", 3);
});
$(".objects-block-carouser img:nth-child(5)").on("click", function(){
  $('.objects-block-units').slick("slickGoTo", 4);
});
$(".objects-block-carouser img:nth-child(6)").on("click", function(){
  $('.objects-block-units').slick("slickGoTo", 5);
});
$(".objects-block-carouser img:nth-child(7)").on("click", function(){
  $('.objects-block-units').slick("slickGoTo", 1);
});
$(".objects-block-carouser img:nth-child(8)").on("click", function(){
  $('.objects-block-units').slick("slickGoTo", 2);
});
$(".objects-block-carouser img:nth-child(9)").on("click", function(){
  $('.objects-block-units').slick("slickGoTo", 3);
});
