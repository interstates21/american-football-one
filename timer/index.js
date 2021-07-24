

let isTicking = false // if false, then it's paused
let ourTimer = null
const changePauseState = () => {
  if (isTicking) {
    button.innerHTML = 'Stop'
    ourTimer = window.setInterval((onEverySecond), 1000)
  }
  else {
    button.innerHTML = 'Start'
    clearInterval(ourTimer) 
  }
} 

const button = document.getElementById("btn-start");
button.addEventListener("click", () => {
  isTicking = !isTicking;
  changePauseState()
})

let seconds = 59;


let isFocusedInterval = false 
const timerBody = document.getElementById("timer")



const onEverySecond = () => {
  let timer=0;
  const stateElement = document.getElementById("state")
  if(isFocusedInterval) {stateElement.innerHTML = "Focus!"
  timerBody.style.backgroundColor = "#289e84"
        timer=59}
  else {stateElement.innerHTML = "Rest!"
  timerBody.style.backgroundColor = "#fd7272"
        timer=29}
  const timeElement = document.getElementById('time');
  
  timeElement.innerHTML = seconds;
  if (seconds>0){
    seconds--}
  else { 
    seconds=timer
    isFocusedInterval = !isFocusedInterval
    }
}

