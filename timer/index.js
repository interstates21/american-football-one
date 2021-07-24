let isFocusedInterval = false // if true, then we have rest
let isTicking = false // if false, then it's paused

const changePauseState = () => {
  if (isTicking) {
    button.innerHTML = 'Stop'
  }
  else {
    button.innerHTML = 'Start'
  }
} 

const button = document.getElementById("btn-start");
button.addEventListener("click", () => {
  isTicking = !isTicking;
  changePauseState()
})

let seconds = 59;

window.setInterval(() => {
  const timeElement = document.getElementById('time');

  timeElement.innerHTML = seconds;
  seconds--;
}, 500)