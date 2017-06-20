$(document).ready(function(){
$(".slider-button").on("click", function(){
  $(".popup-shadow").fadeIn();
  $("#popup1").fadeIn();
});

$(".close, .popup-shadow").on("click", function(){
  $(".popup-shadow").fadeOut();
  $("#popup1").fadeOut();
});
});
