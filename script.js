const currentDay = document.getElementById('currentDay')
const m = moment();
// const timerContainerValue = document.querySelector(timer-container);
var currentTime = m.format("hh");
var timeValue = document.querySelectorAll('.timeValue');

console.log('timeValue');

var inputArea = document.querySelector(".text-area");
var trueTimeValue = timeValue.innerHTML;

// ====================================================================

console.log(currentTime);
console.log(trueTimeValue);

//time variable 

// var time = m.format('h:mm:ss a');
// $('.time')
// var date = m.format('h:mm:ss a');
// var day =

// foreachloop? ====================================

// need a var of current hour which is moment().hour(). For each function, 

var currentHour = moment().hour();

$(timeValue).each (function() {
currentHour == currentTime

if (currentHour == currentTime){
    inputArea.classList.add('currentTime');
}
else if (currentHour < currentTime) {
    inputArea.classList.add('futureTime');
}
else {
    inputArea.classList.add('pastTime');
}
})



// if (trueTimeValue == currentTime){
//     inputArea.classList.add('currentTime');
// }
// else if (trueTimeValue > currentTime) {
//     inputArea.classList.add('futureTime');
// }
// else {
//     inputArea.classList.add('pastTime');
// }
// ============================================================================

currentDay.textContent = m.format('MMMM Do YYYY, h:mm:ss a');

// save function ====================================================================

$('.saveBtn').on('click',function() {
 
var textInput = $(this).siblings('.text-area').val();
var timeText = $(this).parent().attr('id');

console.log('textinput ',textInput);
console.log('time ',timeText);

localStorage.setItem(timeText, textInput);



});

