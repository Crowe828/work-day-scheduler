// Display current time using Moment.js
// Log date and time for reference
console.log(moment().format("dddd, MMMM Do"));
console.log(moment().format("h:mm:ss a"));

// Displays today's date in the jumbotron
var currentDay = document.querySelector("#current-day");
currentDay.textContent = moment().format("dddd, MMMM Do");

// Variables hooking into the rest of the elements on the HTML page
var schedBody = document.querySelector("body");
var schedTxt = document.querySelectorAll("textarea");
var schedJumbo = document.querySelector(".jumbotron");
var schedDisc = document.querySelectorAll(".description");
var schedBlock = document.querySelectorAll(".time-blocks");
var schedRow = document.querySelectorAll(".row ");
var schedHour = document.querySelectorAll(".hour");
var schedPast = document.querySelectorAll(".past");
var schedPresent = document.querySelectorAll(".present");
var schedFuture = document.querySelectorAll(".future");
var schedBtn = document.querySelectorAll(".saveBtn");

// Click event to save text area content to localStorage

// When the app opens, display content for each time block from localStorage
// It can be opened with a loop (more efficient) or by targeting each time block seperately

// Change time block background color depending in the current hour (past, present, future)
// If statement
// Turns time into a string
var currentTime = (moment().format("h"));
console.log(currentTime);

// Set the value for each time block
console.log(schedHour.length);


    // if (currentTime = schedHour.textContent) {
    //     schedDisc.append(schedPast);
    // }

    // else {
    //     schedDisc.append(schedFuture);
    // }

    // compare (moment().format("h:mm:ss a") to 
        // If time is current, description is red
        // If time is past, description is grey
        // If time is future, time is green

