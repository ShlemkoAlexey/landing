var date = new Date();
var toEndOfDay = date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
var secondsInDay = 3600 * 24;

var timer = $('.timer').FlipClock(secondsInDay - toEndOfDay, {
  clockFace: 'DailyCounter',
  countdown: true
});

$("body > div.timer-block > div > div > span.flip-clock-divider.days > span").html("Дней");
$("body > div.timer-block > div > div > span.flip-clock-divider.hours > span.flip-clock-label").html("Часов");
$("body > div.timer-block > div > div > span.flip-clock-divider.minutes > span.flip-clock-label").html("Минут");
$("body > div.timer-block > div > div > span.flip-clock-divider.seconds > span.flip-clock-label").html("Секунд");
