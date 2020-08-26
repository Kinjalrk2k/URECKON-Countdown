const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("Sep 30, 2020 00:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}
  }, second);

document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = new Date().getTime() / 1000 + 86400 * 2 + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle("light-theme");
    body.querySelector("#flipdown").classList.toggle("flipdown__theme-dark");
    body.querySelector("#flipdown").classList.toggle("flipdown__theme-light");
  }, 5000);

  var ver = document.getElementById("ver");
  ver.innerHTML = flipdown.version;
});
