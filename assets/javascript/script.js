// Display current time using Moment.js
// Log the date to make sure it is correct
console.log(moment().format("dddd, MMMM Do"));
// Variable hooked into the current-day element
var currentDay = document.querySelector("#current-day");
// Display the current day on the screen
currentDay.textContent = moment().format("dddd, MMMM Do");


// Click event to save text area content to localStorage


// When the app opens, display content for each time block from localStorage
    // It can be opened with a loop (more efficient) or by targeting each time block seperately


// Change time block background color depending in the current hour (past, present, future)


console.log(moment().hour());
