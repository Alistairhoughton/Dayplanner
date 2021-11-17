localStorage.getItem('textInput');

const currentDay = document.getElementById('currentDay')
var inputArea = document.querySelectorAll(".text-area");
var timeCard = document.querySelectorAll(".timecard")
var timeValue = document.querySelector('.timeValue')
const m = moment();
// var currentHour = moment().hour();
var currentTime = m.format("H");
// var trueTimeValue = timeValue.innerHTML;

// var nineAM = document.getElementById('9')
// var tenAM = document.getElementById('10')
// var elevenAM = document.getElementById('11')
// var twelvePM = document.getElementById('12')
// var onePM = document.getElementById('13')
// var twoPM = document.getElementById('14')
// var threePM = document.getElementById('15')
// var fourPM = document.getElementById('16')
// var fivePM = document.getElementById('17')

// vars ==================================================================================

currentDay.textContent = m.format('MMMM Do YYYY, h:mm:ss a');

//set the time at the top of the page =====================================================



// function timeCheck() {  
//     const textAreaCollection = document.querySelectorAll('#text-area-class');
    
//     textAreaCollection.forEach(element => {
//         if (currentHour== trueTimeValue){
//             element.classList.add('currentTime');
            
//         }
//         else if (currentHour > trueTimeValue){
//             element.classList.add('futureTime');
            
//         }
//         else {
//             element.classList.add('pastTime');
            
//         }
//     });
// }

// timeCheck()

// timecard loop ============================================================================

// function timeCheck() {  
//     const textAreaCollection = document.querySelectorAll('#text-area-class');
    
//     textAreaCollection.forEach(element => {
//         if (currentHour== trueTimeValue){
//             element.classList.add('currentTime');
            
//         }
//         else if (currentHour > trueTimeValue){
//             element.classList.add('futureTime');
            
//         }
//         else {
//             element.classList.add('pastTime');
            
//         }
//     });
// }

// timeCheck()

// ========================================================================================

//  alternate function

var backGroundColour = function(){
    for (var i = 9; i < 18; i++) {
        if (i < currentTime)
            document.getElementById(i).classList.add("pastTime")
        else if (i == currentTime)
            document.getElementById(i).classList.add("currentTime")
        else if (i > currentTime)
            document.getElementById(i).classList.add("futureTime")
    }
}

backGroundColour()


// ====================================================================================


// console.log('current hour', currentHour);
// console.log('current time', currentTime);
// console.log('truetimevalue', trueTimeValue);

// save function ====================================================================

$('.saveBtn').on('click',function() {

var textInput = $(this).siblings('.text-area').val();
var timeText = $(this).parent().attr('id');

console.log('textInput ',textInput);
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

