var slides = ["images/Processing1.png", "images/Processing2.png", "images/Processing3.png","images/Processing4.png"];
var count = 0;

function switchImage() {
  count++;
  $("#flatironpic").attr("src", slides[count]);
}

$(document).ready(function () {
  setInterval(switchImage2, 3000); //calls switchImage every 3000 milliseconds
});

function switchImage2() {
  $("#flatironpic").animate({opacity: 0.0 }, 500, function () {
    if (count < 3) {
      count++;
    } else {
      count = 0;
    }
    $("#flatironpic").attr("src", slides[count]).animate({opacity: 1.0 }, 500);
  });
}
