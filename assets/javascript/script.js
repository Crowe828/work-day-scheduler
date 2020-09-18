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
var schedPast = document.querySelector(".past");
var schedPresent = document.querySelector(".present");
var schedFuture = document.querySelector(".future");
var schedBtn = document.querySelector(".saveBtn");

// Click event to save text area content to localStorage

// When the app opens, display content for each time block from localStorage
// It can be opened with a loop (more efficient) or by targeting each time block seperately

// Change time block background color depending in the current hour (past, present, future)
// If statement
var currentTime = moment().format("h");
console.log(currentTime);

var businessHours = [9,10,11,12,13,14,15,16,17];

console.log(typeof schedBlock);
console.log(typeof businessHours);

for (let i = 0; i < businessHours.length; i++) {
    
    
}

// function forEach - for every block see if current hour is greater or less than blocks hour