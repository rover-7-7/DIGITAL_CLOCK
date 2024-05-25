let intervalRef;

function timer() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var timeString = hours + ":" + minutes + ":" + seconds;
  var dateString = month + "/" + day + "/" + year;

  document.getElementById("time_span").innerHTML = timeString;
  document.getElementById("date_span").innerHTML = dateString;
}

function start() {
  timer();
  intervalRef = setInterval(timer, 1000);
}

function stop() {
  clearInterval(intervalRef);
}

start();

function stop() {
  clearInterval(intervalRef);
}

document.getElementById("button1").addEventListener("click", start);
document.getElementById("button2").addEventListener("click", stop);
