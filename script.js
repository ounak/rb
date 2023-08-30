// Get a reference to the header element
const header = document.querySelector('header');

// Array of colors for the header background
const headerColors = ['#ff6b6b', '#6bff6b', '#6b6bff', '#ffcccb', '#f9c5ff'];

// Counter to keep track of the current color index
let colorIndex = 0;

// Function to change the header background color
function changeHeaderColor() {
  colorIndex = (colorIndex + 1) % headerColors.length;
  header.style.backgroundColor = headerColors[colorIndex];
}

// Attach the click event to the button
const colorButton = document.getElementById('color-button');
colorButton.addEventListener('click', changeHeaderColor);
