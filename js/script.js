//This two lines are locating 'button' & 'body' and can minipulate them
const button = document.querySelector('button');
const body = document.querySelector('body');

// We assign our colours within an array
const colors = ['#ff6699', '#99cccc', '#000066', '#333366', '#6699cc',
  '#003333', '#c05030', '#cdb5cd', '#339999', '#000000'];

// Adds a click event to the button
button.addEventListener('click', changeBackground);

function changeBackground() {
  // Makes the colours go in a random order
  const colorIndex = parseInt(Math.random()*colors.length);
  // Applies our background colours
  body.style.backgroundColor = colors[colorIndex];
}
