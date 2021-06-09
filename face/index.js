const buttonElement =  document.getElementById("btn")
const zero = document.getElementById("zero")
buttonElement.addEventListener("click", ()=>{
    zero.innerText = parseInt(zero.textContent) + 1;
})
console.dir(zero)