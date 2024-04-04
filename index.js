// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

  // new to right

  // Define a function that moves the dodger right by 1 pixel
function moveDodgerRight() {
    // Get the current left position of the dodger, convert the string value to a number, and remove the 'px' unit
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // If the left position is less than the window width minus the dodger width, move the dodger to the right by 1 pixel
    if (left < window.innerWidth - dodger.offsetWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  // Add an event listener to the document that listens for a "keydown" event
  document.addEventListener("keydown", function (event) {
    // If the key pressed is the left arrow key, call the moveDodgerLeft function
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  
    // If the key pressed is the right arrow key, call the moveDodgerRight function
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
