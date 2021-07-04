const colorRed = document.getElementById("red")
const colorOrange = document.getElementById("orange")
const colorYellow = document.getElementById("yellow")
const colorGreen = document.getElementById("green")
const colorLightBlue = document.getElementById("light-blue")
const colorBlue = document.getElementById("blue")
const colorViolet = document.getElementById("violet")




let classOfChosenColor = "violet"

colorRed.addEventListener("click", () =>
{
    classOfChosenColor = "red"
})
colorOrange.addEventListener("click", () =>
{
    classOfChosenColor = "orange"
})
colorYellow.addEventListener("click", () =>
{
    classOfChosenColor = "yellow"
})
colorGreen.addEventListener("click", () =>
{
    classOfChosenColor = "green"
})
colorLightBlue.addEventListener("click", () =>
{
    classOfChosenColor = "light-blue"
})
colorBlue.addEventListener("click", () =>
{
    classOfChosenColor = "blue"
})
colorViolet.addEventListener("click", () =>
{
    classOfChosenColor = "violet"
})

const createBlock = (x, y) => {
    const newElement = document.createElement('div');

    newElement.classList.add(classOfChosenColor)

    newElement.setAttribute('style', `
        width: 10px;
        height: 10px;
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        border-radius: 50%
    `);

    document.body.appendChild(newElement);
}

window.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
  
    createBlock(x, y);
})


window.addEventListener('mousemove', (event) => {
    createBlock(event.clientX, event.clientY);
})