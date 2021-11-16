const currentDay = document.getElementById('currentDay')
const m = moment();
var inputArea = document.querySelectorAll(".text-area");
var currentHour = moment().hour();
var currentTime = m.format("HH");
// var trueTimeValue = timeValue.innerHTML;
// var timeValue = document.getElementById('timeValue')


// var timeValue = document.querySelector('.timeValue');

// const timerContainerValue = document.querySelector(timer-container);
// console.log('timeValue', timeValue);




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



function timeCheck() {  
// $('#text-area-class').each (function() {
const textAreaCollection = document.querySelectorAll('#text-area-class');

textAreaCollection.forEach(element => {
    if (currentHour == currentTime){
                    element.classList.add('currentTime');
                    element.classList.remove('pastTime');
                }
                else if (currentHour < currentTime) {
                    element.classList.add('futureTime');
                    element.classList.remove('currentTime');
                }
                else {
                    element.classList.add('pastTime');
                    element.classList.remove('futuretime')
                }
});
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
console.log('current hour', currentHour);
console.log('current time', currentTime);

}

timeCheck()


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
