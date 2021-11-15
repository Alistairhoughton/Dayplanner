const currentDay = document.getElementById('currentDay')
const m = moment();
const timerContainerValue = document.getElementById(timecontainerid);
var currentTime = m.format("hh");
var timeValue = document.getElementById('timeValue');
var inputArea = document.getElementById("eventText");
var trueTimeValue = timeValue.innerHTML;

// ====================================================================

console.log(currentTime);
console.log(trueTimeValue);

// foreachloop? ====================================

if (trueTimeValue == currentTime){
    inputArea.classList.add('currentTime');
}
else if (trueTimeValue > currentTime) {
    inputArea.classList.add('futureTime');
}
else {
    inputArea.classList.add('pastTime');
}

// ============================================================================

currentDay.textContent = m.format('MMMM Do YYYY, h:mm:ss a');


