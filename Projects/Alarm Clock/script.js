var isAlarmSet = false;
var alarmTime = "";
var ringtone = document.getElementById('yourRingtoneElementId'); // Make sure to replace 'yourRingtoneElementId' with the actual ID of your audio element
var content = document.getElementById('yourContentElementId'); // Make sure to replace 'yourContentElementId' with the actual ID of your content element
var setAlarmBtn = document.getElementById('yourSetAlarmBtnId'); // Make sure to replace 'yourSetAlarmBtnId' with the actual ID of your set alarm button
setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let amPm = "AM";

    if (h >= 12) {
        h = h - 12;
        amPm = "PM";
    }

    // if hour value is 00 set it to 12
    h = h === 0 ? 12 : h;

    // adding 0 before if the number is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var currentTime = h + " : " + m + " : " + s + "  " + amPm;
    document.getElementById('cTime').innerHTML = currentTime;
}, 1000);

var count = 1 
document.getElementById('setAlarmBtn').addEventListener("click", function(){
    count = count + 1;
    if(count % 2 == 0) {
        setAlarm ();
    } else {
        clearAlarm();
    }
}) 
function setAlarm() {
    console.log(count);
    if (isAlarmSet) {
        alarmTime = "";
        isAlarmSet = false;
        return;
    }

    var ah = document.getElementById('aHou').value;
    var am = document.getElementById('aMin').value;
    var as = document.getElementById('aSec').value;
    var aap = document.getElementById('am/pm').value;

    console.log(ah, am, as, aap);

    if (ah === "Hour" || am === "Minute" || as === "Second" || aap === "AM/PM") {
        return alert("Please, select a valid time to set Alarm!");
    } else {
        var aho = document.getElementById('aHou');
        var amo = document.getElementById('aMin');
        var ase = document.getElementById('aSec');
        var aam = document.getElementById('am/pm');
        aho.disabled = true;
        amo.disabled = true;
        ase.disabled = true;
        aam.disabled = true;
    }

    alarmTime = `${ah}:${am} ${aap}`;
    isAlarmSet = true;
            
    document.getElementById('setAlarmBtn').innerText = "Clear Alarm";
}
function clearAlarm() {
    var aho = document.getElementById('aHou');
    var amo = document.getElementById('aMin');
    var ase = document.getElementById('aSec');
    var aam = document.getElementById('am/pm');
    aho.disabled = false;
    amo.disabled = false;
    ase.disabled = false;
    aam.disabled = false;
    document.getElementById('setAlarmBtn').innerText = "SET ALARM";
}