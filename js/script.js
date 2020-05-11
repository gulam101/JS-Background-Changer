//This two lines are locating 'button' & 'body' and can minipulate them
const button = document.querySelector('button');
const body = document.querySelector('body');

// We assign our colours within an array
const colors = ['red', 'green', 'blue', 'pink', 'purple'];

// Adds a click event to the button
button.addEventListener('click', changeBackground)

function changeBackground() {
const colorIndex = parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
