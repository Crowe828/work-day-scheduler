// Display current time using Moment.js
// Log date and time for reference
console.log(moment().format("dddd, MMMM Do"));
console.log(moment().format("h:mm:ss a"));

// Displays today's date in the jumbotron
var currentDay = document.querySelector("#current-day");
currentDay.textContent = moment().format("dddd, MMMM Do");

// Variables hooking into the rest of the elements on the HTML page
var schedTxt = document.querySelector("textarea");
var schedDisc = document.querySelector(".description");
var schedBlock = document.querySelector(".time-block");
var schedRow = document.querySelector(".row ");
var schedHour = document.querySelector(".hour");
var schedBtn = document.querySelector(".saveBtn");

// Time formatted as 24-hour time and only the hour
var currentTime = moment().format("H");
console.log(currentTime);

// Individually hooking into every time block
var nine = document.querySelector("#hour-9");
nine.value = 9;
console.log(nine.value);
var ten = document.querySelector("#hour-10");
ten.value = 10;
console.log(ten.value);
var eleven = document.querySelector("#hour-11");
eleven.value = 11;
console.log(eleven.value);
var twelve = document.querySelector("#hour-12");
twelve.value = 12;
console.log(twelve.value);
var one = document.querySelector("#hour-13");
one.value = 13;
console.log(one.value);
var two = document.querySelector("#hour-14");
two.value = 14;
console.log(two.value);
var three = document.querySelector("#hour-15");
three.value = 15;
console.log(three.value);
var four = document.querySelector("#hour-16");
four.value = 16;
console.log(four.value);
var five = document.querySelector("#hour-17");
five.value = 17;
console.log(five.value);

// Three variables for past, present, and future time
var pTime = document.querySelector(".past");
var cTime = document.querySelector(".present");
var fTime = document.querySelector(".future");

// Each time block's color will change as the day progresses
function nineBlock() {
  // If current time is later than 9am
  if (currentTime > nine.value) {
    console.log("9 am was earlier today.");
    document.getElementById("hour-9").classList.add("past");
    // If it is earlier than 9am
  } else if (currentTime < nine.value) {
    console.log("9 am is later today.");
    document.getElementById("hour-9").classList.add("future");
    // If it is currently 9am
  } else {
    document.getElementById("hour-9").classList.add("present");
    console.log("It is currently 9 am.");
  }
}
// Call the function
nineBlock();

// Stores data input from the textarea in localStorage
function storeDataNine() {
  // First checks to see if there is anything already in localStorage
  var userData = document.getElementById("userDataNine");
  localStorage.setItem("hour-9", userData.value);
}

function tenBlock() {
  // If current time is later than 10am
  if (currentTime > ten.value) {
    console.log("10 am was earlier today.");
    document.getElementById("hour-10").classList.add("past");
    // If it is earlier than 10am
  } else if (currentTime < ten.value) {
    console.log("10 am is later today.");
    document.getElementById("hour-10").classList.add("future");
    // If it is currently 10am
  } else {
    document.getElementById("hour-10").classList.add("present");
    console.log("It is currently 10 am.");
  }
}
// Call the function
tenBlock();

// Stores data input from the textarea in localStorage
function storeDataTen() {
  // First checks to see if there is anything already in localStorage
  var userData = document.getElementById("userDataTen");
  localStorage.setItem("hour-10", userData.value);
}

function elevenBlock() {
  // If current time is later than 11am
  if (currentTime > eleven.value) {
    console.log("11 am was earlier today.");
    document.getElementById("hour-11").classList.add("past");
    // If it is earlier than 11am
  } else if (currentTime < eleven.value) {
    console.log("11 am is later today.");
    document.getElementById("hour-11").classList.add("future");
    // If it is currently 11am
  } else {
    document.getElementById("hour-11").classList.add("present");
    console.log("It is currently 11 am.");
  }
}
// Call the function
elevenBlock();

// Stores data input from the textarea in localStorage
function storeDataEleven() {
  // First checks to see if there is anything already in localStorage
  var userData = document.getElementById("userDataEleven");
  localStorage.setItem("hour-11", userData.value);
}

function twelveBlock() {
  // If current time is later than 12pm
  if (currentTime > twelve.value) {
    console.log("12 pm was earlier today.");
    document.getElementById("hour-12").classList.add("past");
    // If it is earlier than 12pm
  } else if (currentTime < twelve.value) {
    console.log("12 pm is later today.");
    document.getElementById("hour-12").classList.add("future");
    // If it is currently 12pm
  } else {
    document.getElementById("hour-12").classList.add("present");
    console.log("It is currently 12 pm.");
  }
}
// Call the function
twelveBlock();

// Stores data input from the textarea in localStorage
function storeDataTwelve() {
  // First checks to see if there is anything already in localStorage
  var userData = document.getElementById("userDataTwelve");
  localStorage.setItem("hour-12", userData.value);
}

function oneBlock() {
  // If current time is later than 1pm
  if (currentTime > one.value) {
    console.log("1 pm was earlier today.");
    document.getElementById("hour-13").classList.add("past");
    // If it is earlier than 1pm
  } else if (currentTime < one.value) {
    console.log("1 pm is later today.");
    document.getElementById("hour-13").classList.add("future");
    // If it is currently 1pm
  } else {
    document.getElementById("hour-13").classList.add("present");
    console.log("It is currently 1 pm.");
  }
}
// Call the function
oneBlock();

// Stores data input from the textarea in localStorage
function storeDataOne() {
  // First checks to see if there is anything already in localStorage
  var userData = document.getElementById("userDataOne");
  localStorage.setItem("hour-13", userData.value);
}

function twoBlock() {
  // If current time is later than 2pm
  if (currentTime > two.value) {
    console.log("2 pm was earlier today.");
    document.getElementById("hour-14").classList.add("past");
    // If it is earlier than 2pm
  } else if (currentTime < two.value) {
    console.log("2 pm is later today.");
    document.getElementById("hour-14").classList.add("future");
    // If it is currently 2pm
  } else {
    document.getElementById("hour-14").classList.add("present");
    console.log("It is currently 2 pm.");
  }
}
// Call the function
twoBlock();

// Stores data input from the textarea in localStorage
function storeDataTwo() {
  // First checks to see if there is anything already in localStorage
  var userData = document.getElementById("userDataTwo");
  localStorage.setItem("hour-14", userData.value);
}

function threeBlock() {
  // If current time is later than 3pm
  if (currentTime > three.value) {
    console.log("3 pm was earlier today.");
    document.getElementById("hour-15").classList.add("past");
    // If it is earlier than 3pm
  } else if (currentTime < three.value) {
    console.log("3 pm is later today.");
    document.getElementById("hour-15").classList.add("future");
    // If it is currently 3pm
  } else {
    document.getElementById("hour-15").classList.add("present");
    console.log("It is currently 3 pm.");
  }
}
// Call the function
threeBlock();

// Stores data input from the textarea in localStorage
function storeDataThree() {
  // First checks to see if there is anything already in localStorage
  var userData = document.getElementById("userDataThree");
  localStorage.setItem("hour-15", userData.value);
}

function fourBlock() {
  // If current time is later than 4pm
  if (currentTime > four.value) {
    console.log("4 pm was earlier today.");
    document.getElementById("hour-16").classList.add("past");
    // If it is earlier than 4pm
  } else if (currentTime < four.value) {
    console.log("4 pm is later today.");
    document.getElementById("hour-16").classList.add("future");
    // If it is currently 4pm
  } else {
    document.getElementById("hour-16").classList.add("present");
    console.log("It is currently 4 pm.");
  }
}
// Call the function
fourBlock();

// Stores data input from the textarea in localStorage
function storeDataFour() {
  // First checks to see if there is anything already in localStorage
  var userData = document.getElementById("userDataFour");
  localStorage.setItem("hour-16", userData.value);
}

function fiveBlock() {
  // If current time is later than 5pm
  if (currentTime > five.value) {
    console.log("5 pm was earlier today.");
    document.getElementById("hour-17").classList.add("past");
    // If it is earlier than 5pm
  } else if (currentTime < five.value) {
    console.log("5 pm is later today.");
    document.getElementById("hour-17").classList.add("future");
    // If it is currently 5pm
  } else {
    document.getElementById("hour-17").classList.add("present");
    console.log("It is currently 5 pm.");
  }
}
// Call the function
fiveBlock();

// Stores data input from the textarea in localStorage
function storeDataFive() {
  // First checks to see if there is anything already in localStorage
  var userData = document.getElementById("userDataFive");
  localStorage.setItem("hour-17", userData.value);
}

// Function which will check in local storage for any data already stored
function refresh() {
  document.getElementById("userDataNine").innerHTML = localStorage.getItem(
    "hour-9"
  );
  document.getElementById("userDataTen").innerHTML = localStorage.getItem(
    "hour-10"
  );
  document.getElementById("userDataEleven").innerHTML = localStorage.getItem(
    "hour-11"
  );
  document.getElementById("userDataTwelve").innerHTML = localStorage.getItem(
    "hour-12"
  );
  document.getElementById("userDataOne").innerHTML = localStorage.getItem(
    "hour-13"
  );
  document.getElementById("userDataTwo").innerHTML = localStorage.getItem(
    "hour-14"
  );
  document.getElementById("userDataThree").innerHTML = localStorage.getItem(
    "hour-15"
  );
  document.getElementById("userDataFour").innerHTML = localStorage.getItem(
    "hour-16"
  );
  document.getElementById("userDataFive").innerHTML = localStorage.getItem(
    "hour-17"
  );
}

// Call the function so we are reaching out to localStorage every time the page opens or refreshes
refresh();
