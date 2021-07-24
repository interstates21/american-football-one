const button = document.getElementById("btn-start");
let isFocused = false
button.addEventListener("click", () => {
  if (isFocused === false ){
    isFocused = true
  }
  else {
      isFocused = false
  }
})