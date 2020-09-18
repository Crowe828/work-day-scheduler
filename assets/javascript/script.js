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

// Array of the hours in each day
var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

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

var pTime = document.querySelector(".past");
var cTime = document.querySelector(".present");
var fTime = document.querySelector(".future");

function nineBlock() {
  if (currentTime > nine.value) {
    console.log("9 am was earlier today.");
    document.getElementById("hour-9").classList.add("past");
  } else if (currentTime < nine.value) {
    console.log("9 am is later today.");
    document.getElementById("hour-9").classList.add("future");
  } else {
    document.getElementById("hour-9").classList.add("present");
    console.log("It is currently 9 am.");
  }
}
nineBlock();

function tenBlock() {
  if (currentTime > ten.value) {
    console.log("10 am was earlier today.");
    document.getElementById("hour-10").classList.add("past");
  } else if (currentTime < ten.value) {
    console.log("10 am is later today.");
    document.getElementById("hour-10").classList.add("future");
  } else {
    document.getElementById("hour-10").classList.add("present");
    console.log("It is currently 10 am.");
  }
}
tenBlock();

function elevenBlock() {
  if (currentTime > eleven.value) {
    console.log("11 am was earlier today.");
    document.getElementById("hour-11").classList.add("past");
  } else if (currentTime < eleven.value) {
    console.log("11 am is later today.");
    document.getElementById("hour-11").classList.add("future");
  } else {
    document.getElementById("hour-11").classList.add("present");
    console.log("It is currently 11 am.");
  }
}
elevenBlock();

function twelveBlock() {
  if (currentTime > twelve.value) {
    console.log("12 pm was earlier today.");
    document.getElementById("hour-12").classList.add("past");
  } else if (currentTime < twelve.value) {
    console.log("12 pm is later today.");
    document.getElementById("hour-12").classList.add("future");
  } else {
    document.getElementById("hour-12").classList.add("present");
    console.log("It is currently 12 pm.");
  }
}
twelveBlock();

function oneBlock() {
  if (currentTime > one.value) {
    console.log("1 pm was earlier today.");
    document.getElementById("hour-13").classList.add("past");
  } else if (currentTime < one.value) {
    console.log("1 pm is later today.");
    document.getElementById("hour-13").classList.add("future");
  } else {
    document.getElementById("hour-13").classList.add("present");
    console.log("It is currently 1 pm.");
  }
}
oneBlock();

function twoBlock() {
  if (currentTime > two.value) {
    console.log("2 pm was earlier today.");
    document.getElementById("hour-14").classList.add("past");
  } else if (currentTime < two.value) {
    console.log("2 pm is later today.");
    document.getElementById("hour-14").classList.add("future");
  } else {
    document.getElementById("hour-14").classList.add("present");
    console.log("It is currently 2 pm.");
  }
}
twoBlock();

function threeBlock() {
  if (currentTime > three.value) {
    console.log("3 pm was earlier today.");
    document.getElementById("hour-15").classList.add("past");
  } else if (currentTime < three.value) {
    console.log("3 pm is later today.");
    document.getElementById("hour-15").classList.add("future");
  } else {
    document.getElementById("hour-15").classList.add("present");
    console.log("It is currently 3 pm.");
  }
}
threeBlock();

function fourBlock() {
  if (currentTime > four.value) {
    console.log("4 pm was earlier today.");
    document.getElementById("hour-16").classList.add("past");
  } else if (currentTime < four.value) {
    console.log("4 pm is later today.");
    document.getElementById("hour-16").classList.add("future");
  } else {
    document.getElementById("hour-16").classList.add("present");
    console.log("It is currently 4 pm.");
  }
}
fourBlock();

function fiveBlock() {
  if (currentTime > five.value) {
    console.log("5 pm was earlier today.");
    document.getElementById("hour-17").classList.add("past");
  } else if (currentTime < five.value) {
    console.log("5 pm is later today.");
    document.getElementById("hour-17").classList.add("future");
  } else {
    document.getElementById("hour-17").classList.add("present");
    console.log("It is currently 5 pm.");
  }
}
fiveBlock();

// Click event to save text area content to localStorage

// When the app opens, display content for each time block from localStorage
// It can be opened with a loop (more efficient) or by targeting each time block seperately

// function forEach - for every block see if current hour is greater or less than blocks hour
