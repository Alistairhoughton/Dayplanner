// ==================================================================================

function getFromStorage() {
  const dataRecords = document.querySelectorAll(".timecard");
  dataRecords.forEach((element) => {
    var id = element.dataset.id;
    var text = localStorage.getItem(id);
    element.children[1].textContent = text;
  });
}

getFromStorage();

// =================================================================================

const currentDay = document.getElementById("currentDay");
var timeValue = document.querySelector(".timeValue");
var userHour = moment().hour();
const m = moment();

// vars =============================================================================

currentDay.textContent = m.format("MMMM Do YYYY, h:mm:ss a");

// timecard loop ====================================================================

function timeCheck() {
  const timeCardCollection = document.querySelectorAll(".timecard");

  timeCardCollection.forEach((element) => {
    var blockTime = element.id;
    var inputArea = element.querySelector(".text-area");

    if (userHour == blockTime) {
      inputArea.classList.add("currentTime");
    } else if (userHour < blockTime) {
      inputArea.classList.add("futureTime");
    } else {
      inputArea.classList.add("pastTime");
    }
  });
}

timeCheck();


// save function ====================================================================

$(".saveBtn").on("click", function () {
  var textInput = $(this).siblings(".text-area").val();
  var timeText = $(this).parent().data("id");
  // console.log('textInput ',textInput);
  // console.log('time ',timeText);
  localStorage.setItem(timeText, textInput);
});

// ===================================================================================

// clear storage =======================================================================

$('.clearbtn').on('click', function () {
  localStorage.clear()
  window.location.reload();
})