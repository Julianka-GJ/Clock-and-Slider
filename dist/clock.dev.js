"use strict";

// clock 
function newTime() {
  var hour1El = document.getElementById('hour1');
  var hour2El = document.getElementById('hour2');
  var minute1El = document.getElementById('min1');
  var minute2El = document.getElementById('min2');
  var second1El = document.getElementById('sec1');
  var second2El = document.getElementById('sec2');
  var currentTime = new Date();
  var ss = String(currentTime.getSeconds());

  if (ss.length == 1) {
    ss = '0' + ss;
  }

  var sec = ss.split('', 2);
  var ss2 = sec[1];
  var ss1 = sec[0];
  second1El.setAttribute('src', "images/clock/".concat(ss2, ".jpg"));
  second2El.setAttribute('src', "images/clock/".concat(ss1, ".jpg"));
  var mm = String(currentTime.getMinutes());

  if (mm.length == 1) {
    mm = '0' + mm;
  }

  var min = mm.split('', 2);
  var mm2 = min[1];
  var mm1 = min[0];
  minute1El.setAttribute('src', "images/clock/".concat(mm2, ".jpg"));
  minute2El.setAttribute('src', "images/clock/".concat(mm1, ".jpg"));
  var hh = String(currentTime.getHours());

  if (hh.length == 1) {
    hh = '0' + hh;
  }

  var hour = hh.split('', 2);
  var hh2 = hour[1];
  var hh1 = hour[0];
  hour1El.setAttribute('src', "images/clock/".concat(hh2, ".jpg"));
  hour2El.setAttribute('src', "images/clock/".concat(hh1, ".jpg"));
}

setInterval(newTime, 1000);