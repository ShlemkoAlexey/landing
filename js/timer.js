var timer = $('.timer').FlipClock({
  clockFace: 'DailyCounter'
});

$("body > div.timer-block > div > div > span.flip-clock-divider.days > span").html("Дней");
$("body > div.timer-block > div > div > span.flip-clock-divider.hours > span.flip-clock-label").html("Часов");
$("body > div.timer-block > div > div > span.flip-clock-divider.minutes > span.flip-clock-label").html("Минут");
$("body > div.timer-block > div > div > span.flip-clock-divider.seconds > span.flip-clock-label").html("Секунд");
