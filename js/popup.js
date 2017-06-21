$(document).ready(function(){
  $(".buy-btn").on("click", function(){
    $(".popup-shadow").fadeIn();
    $("#popup1").fadeIn();
  });

  $(".close, .popup-shadow").on("click", function(){
    $(".popup-shadow").fadeOut();
    $("#popup1").fadeOut();
  });


  $(".know-btn").on("click", function(){
    $(".popup-shadow").fadeIn();
    $("#popup2").fadeIn();
  });

  $(".close, .popup-shadow").on("click", function(){
    $(".popup-shadow").fadeOut();
    $("#popup2").fadeOut();
  });

});


// var data = {};
// var url = "";       //ADD URL HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
//
// /*POPUP FOR SENDING*/
//
//
// $(".sixth-block form button").on("click", function(){
//
//   data.name =  $("#name-input").val();
//   data.email = $('#email-input').val();
//   data.theme = $('#theme-input').val();
//   data.question = $('#question-input').val();
//
//
//   $.getJSON( url, data )
//     .done(function() {
//       $(".sixth-block form").fadeOut( function(){$(".form-feedback").fadeIn()} );
//     })
//     .fail(function() {
//       $(".sixth-block form").fadeOut( function(){$(".form-feedback-false").fadeIn()} );
//   });
//
//
//
//
// });
