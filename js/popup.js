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


var data = {};
var url = "";       //ADD URL HERE
var infoDuration = 1000;

/*POPUP FOR SENDING*/


$("#popup1-send").on("click", function(){

  data.name = $("#popup1-name").val();
  data.surname = $("#popup1-surname").val();
  data.phone = $("#popup1-phone").val();
  data.email = $("#popup1-email").val();
  data.model = $("#popup1-model").val();
  data.count = $("#popup1-count").val();
  data.type = "ЗАКАЗ";

  $.getJSON( url, data )
    .done(function() {
      $("#popup1").fadeOut( function(){
        $(".success-message").fadeIn(function(){
          setTimeout(function(){
            $(".success-message").fadeOut()
            $(".popup-shadow").fadeOut();
          }, infoDuration);


        })
      });
    })
    .fail(function() {
      $("#popup1").fadeOut( function(){
        $(".fail-message").fadeIn(function(){
          setTimeout(function(){
            $(".fail-message").fadeOut()
            $(".popup-shadow").fadeOut();
          }, infoDuration);

        })
      });
  });


});

$("#popup2-send").on("click", function(){

  data.name = $("#popup2-name").val();
  data.surname = $("#popup2-surname").val();
  data.phone = $("#popup2-phone").val();
  data.email = $("#popup2-email").val();
  data.model = $("#popup2-model").val();
  data.count = $("#popup2-count").val();
  data.type = "УТОЧНЕНИЕ";

  $.getJSON( url, data )
    .done(function() {
      $("#popup2").fadeOut( function(){
        $(".success-message").fadeIn(function(){
          setTimeout(function(){
            $(".success-message").fadeOut()
            $(".popup-shadow").fadeOut();
          }, infoDuration);
        })
      });
    })
    .fail(function() {
      $("#popup2").fadeOut( function(){
        $(".fail-message").fadeIn(function(){
          setTimeout(function(){
            $(".fail-message").fadeOut()
            $(".popup-shadow").fadeOut();
          }, infoDuration);
        })
      });
  });


});


var popup1email = true;
var popup1phone = false;

var popup2email = true;
var popup2phone = false;
/*
$('#popup1-email').keyup(function(event) {
  if( validateEmail($('#popup1-email').val())){
    $('#popup1-email').css("color", "black");
    popup1email = true;
    if (isButtonActive(popup1email, popup1phone)) {
      $("#popup1-send").prop("disabled", false);
    }
  }else{
    popup1email = false;
    $('#popup1-email').css("color", "red");
    $("#popup1-send").prop("disabled", true);
  }
});*/

$('#popup1-phone').keyup(function(event) {
  if( $("#popup1-phone").val().length > 6 ){
    $('#popup1-phone').css("color", "black");
    popup1phone = true;
    if (isButtonActive(popup1email, popup1phone)) {
      $("#popup1-send").prop("disabled", false);
    }
  }else{
    popup1phone = false;
    $('#popup1-phone').css("color", "red");
    $("#popup1-send").prop("disabled", true);
  }
});



/*
$('#popup2-email').keyup(function(event) {
  if( validateEmail($('#popup2-email').val())){
    $('#popup2-email').css("color", "black");
    popup2email = true;
    if (isButtonActive(popup2email, popup2phone)) {
      $("#popup2-send").prop("disabled", false);
    }
  }else{
    popup2email = false;
    $('#popup2-email').css("color", "red");
    $("#popup2-send").prop("disabled", true);
  }
});*/

$('#popup2-phone').keyup(function(event) {
  if( $("#popup2-phone").val().length > 6 ){
    $('#popup2-phone').css("color", "black");
    popup2phone = true;
    if (isButtonActive(popup2email, popup2phone)) {
      $("#popup2-send").prop("disabled", false);
    }
  }else{
    popup2phone = false;
    $('#popup2-phone').css("color", "red");
    $("#popup2-send").prop("disabled", true);
  }
});


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}



function isButtonActive(email, phone){
  return email&&phone;
}
