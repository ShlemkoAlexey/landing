$(document).ready(function(){
  var a = $("#contacts-anchor").height()*2;
  var scrollSpeed = 600;
  var sliderTop = $(".slider-block").offset().top - a;
  var timerTop = $(".timer-block").offset().top;
  var advantagesTop = $(".advantages-block").offset().top - a;
  var catalogTop = $("#catalog-anchor").offset().top - a;
  var schemeTop = $(".scheme-block").offset().top - a;
  var objectsTop = $(".objects-block").offset().top - a;
  var mapTop = $("#contacts-anchor").offset().top - a;
  var numeralsTop = $("#numerals-anchor").offset().top - $(".numerals-block").height();

  $(".header-central-bottom ul li:nth-child(1)").on("click", function(){
    $("html, body").animate({ scrollTop: sliderTop+1}, scrollSpeed);
  });

  $(".header-central-bottom ul li:nth-child(2)").on("click", function(){
    $("html, body").animate({ scrollTop: timerTop+1 }, scrollSpeed);
  });

  $(".header-central-bottom ul li:nth-child(3)").on("click", function(){
    $("html, body").animate({ scrollTop: advantagesTop +1}, scrollSpeed);
  });

  $(".header-central-bottom ul li:nth-child(4)").on("click", function(){
    $("html, body").animate({ scrollTop: catalogTop+1 }, scrollSpeed);
  });

  $(".header-central-bottom ul li:nth-child(5)").on("click", function(){
    $("html, body").animate({ scrollTop: schemeTop+1 }, scrollSpeed);
  });

  $(".header-central-bottom ul li:nth-child(6)").on("click", function(){
    $("html, body").animate({ scrollTop: objectsTop+1 }, scrollSpeed);
  });

  $(".header-central-bottom ul li:nth-child(7)").on("click", function(){
    $("html, body").animate({ scrollTop: mapTop+1 }, scrollSpeed);
  });


  var numeralsNotIncremented = true;

  $(window).scroll(function(){
    if ($(this).scrollTop() < timerTop) {
      $(".header-central-bottom ul li").removeClass("active");
      $(".header-central-bottom ul li:nth-child(1)").addClass("active");
    }else if ($(this).scrollTop() < advantagesTop) {
      $(".header-central-bottom ul li").removeClass("active");
      $(".header-central-bottom ul li:nth-child(2)").addClass("active");
    }else if ($(this).scrollTop() < catalogTop) {
      $(".header-central-bottom ul li").removeClass("active");
      $(".header-central-bottom ul li:nth-child(3)").addClass("active");
    }else if ($(this).scrollTop() < schemeTop) {
      $(".header-central-bottom ul li").removeClass("active");
      $(".header-central-bottom ul li:nth-child(4)").addClass("active");
    }else if ($(this).scrollTop() < objectsTop) {
      $(".header-central-bottom ul li").removeClass("active");
      $(".header-central-bottom ul li:nth-child(5)").addClass("active");
    }else if ($(this).scrollTop() < mapTop) {
      $(".header-central-bottom ul li").removeClass("active");
      $(".header-central-bottom ul li:nth-child(6)").addClass("active");
    }else{
      $(".header-central-bottom ul li").removeClass("active");
      $(".header-central-bottom ul li:nth-child(7)").addClass("active");
    }

    if (numeralsNotIncremented && $(this).scrollTop() > numeralsTop) {
      numeralsIncrement();
      numeralsNotIncremented = false;
      console.log(123);
    }

  });

  function numeralsIncrement(){
    $(".spincrement").spincrement({
      from: 1,
      t0: false,
      thousandSeparator: " ", // Разделитель тыcячных
      duration: 3000          // Продолжительность анимации в миллисекундах
    });
  };
});
