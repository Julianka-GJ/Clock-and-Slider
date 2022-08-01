// clock 

function newTime() {
    const hour1El = document.getElementById('hour1');
    const hour2El = document.getElementById('hour2');
    const minute1El = document.getElementById('min1');
    const minute2El = document.getElementById('min2');
    const second1El = document.getElementById('sec1');
    const second2El = document.getElementById('sec2');

    const currentTime = new Date();

    let ss = String(currentTime.getSeconds());
    if (ss.length == 1) {
        ss = '0' + ss;
    }

    let sec = ss.split('', 2);
    let ss2 = sec[1];
    let ss1 = sec[0];

    second1El.setAttribute('src', `images/clock/${ss2}.jpg`);
    second2El.setAttribute('src', `images/clock/${ss1}.jpg`);

    let mm = String(currentTime.getMinutes());
    if (mm.length == 1) {
        mm = '0' + mm;
    }

    let min = mm.split('', 2);
    let mm2 = min[1];
    let mm1 = min[0];

    minute1El.setAttribute('src', `images/clock/${mm2}.jpg`);
    minute2El.setAttribute('src', `images/clock/${mm1}.jpg`);

    let hh = String(currentTime.getHours());
    if (hh.length == 1) {
        hh = '0' + hh;
    }

    let hour = hh.split('', 2);
    let hh2 = hour[1];
    let hh1 = hour[0];

    hour1El.setAttribute('src', `images/clock/${hh2}.jpg`);
    hour2El.setAttribute('src', `images/clock/${hh1}.jpg`);
}

setInterval(newTime, 1000);