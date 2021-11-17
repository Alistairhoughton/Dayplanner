const currentDay = document.getElementById('currentDay')
const m = moment();
var inputArea = document.querySelectorAll(".text-area");
var currentHour = moment().hour();
var currentTime = m.format("HH");
var timeValue = document.querySelector('.timeValue')
var trueTimeValue = timeValue.innerHTML;

// vars ==================================================================================

function timeCheck() {  
    const textAreaCollection = document.querySelectorAll('#text-area-class');
    
    textAreaCollection.forEach(element => {
        if (currentTime== trueTimeValue){
            element.classList.add('currentTime');
            element.classList.remove('pastTime');
        }
        else if (currentTime > trueTimeValue) {
            element.classList.add('futureTime');
            element.classList.remove('currentTime');
        }
        else {
            element.classList.add('pastTime');
            element.classList.remove('futuretime')
        }
    });
}

timeCheck()

console.log('current hour', currentHour);
console.log('current time', currentTime);
console.log('truetimevalue', trueTimeValue);

currentDay.textContent = m.format('MMMM Do YYYY, h:mm:ss a');

// save function ====================================================================

$('.saveBtn').on('click',function() {

var textInput = $(this).siblings('.text-area').val();
var timeText = $(this).parent().attr('id');

console.log('textinput ',textInput);
console.log('time ',timeText);

localStorage.setItem(timeText, textInput);



});


// var currentHour = '10'
// var currentTime = '09'
// console.log('timev',timeValue);
// console.log('ttv',trueTimeValue);


// var timeValue = document.querySelector('.timeValue');

// const timerContainerValue = document.querySelector(timer-container);

// console.log('current hour', currentHour);
// console.log('current time', currentTime);
// console.log('truetimevalue', trueTimeValue);


// ====================================================================

// console.log(currentTime);
// console.log(trueTimeValue);

//time variable 

// var time = m.format('h:mm:ss a');
// $('.time')
// var date = m.format('h:mm:ss a');
// var day =

// foreachloop? ====================================

// need a var of current hour which is moment().hour(). For each function, 


// $('#text-area-class').each (function() {

            // console.log('#text-area-class');

//         if (currentHour == currentTime){
//             inputArea.classList.add('currentTime');
//         }
//         else if (currentHour < currentTime) {
//             inputArea.classList.add('futureTime');
//         }
//         else {
//             inputArea.classList.add('pastTime');
//         }
//     })

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

