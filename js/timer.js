var date = new Date();
var fromStartOfWeek = (date.getDay()-1)*86400 + date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
var secondsInWeek = 3600 * 24 * 7;


var timer = $('.timer').FlipClock(secondsInWeek - fromStartOfWeek, {
  clockFace: 'DailyCounter',
  countdown: true
});

$("body > div.timer-block > div > div > span.flip-clock-divider.days > span").html("Дней");
$("body > div.timer-block > div > div > span.flip-clock-divider.hours > span.flip-clock-label").html("Часов");
$("body > div.timer-block > div > div > span.flip-clock-divider.minutes > span.flip-clock-label").html("Минут");
$("body > div.timer-block > div > div > span.flip-clock-divider.seconds > span.flip-clock-label").html("Секунд");


var actionCounter = getWeekNumber(date)[1]%2;
console.log(actionCounter);

if (actionCounter == 0) {
  $("#timer-action-model").html(" С-8 ");
  $("#timer-action-price").html("50");
} else {
  $("#timer-action-model").html("НС-20");
  $("#timer-action-price").html("83");
}



function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(+d);
  d.setHours(0,0,0,0);
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setDate(d.getDate() + 4 - (d.getDay()||7));
  // Get first day of year
  var yearStart = new Date(d.getFullYear(),0,1);
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return [d.getFullYear(), weekNo];
}
