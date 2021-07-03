function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

const createDevilFunction =(xIndex, yIndex) => {
    const image = document.createElement("div")
    image.style.width = "50px"
    image.style.height = "50px"

    // rgb(255, 255, 255)
    // image.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`
    image.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`

    window.setInterval(() => {
        image.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`
    }, 100)
    image.style.position = "absolute"
    image.style.left = `${xIndex * 55}px`
    image.style.top = `${yIndex * 55}px`
    document.body.appendChild(image)
}

const createRow =(n) => {
    let x = 0
    while (x < 10) {
        createDevilFunction(x , n)
        x++
    }
}

let y = 0
while (y < 10) {
    createRow(y)
    y++
}