const createDevilFunction =(xIndex, yIndex) => {
    const image = document.createElement("img")
    image.src = "./pics/devil.png"
    image.style.width = "50px"
    image.style.height = "50px"
    image.style.position = "absolute"
    image.style.left = `${xIndex * 55}px`
    image.style.top = `${yIndex * 55}px`
    document.body.appendChild(image)
}

const createRow =(n) =>{
    let x = 0
    while (x < 10) {
        createDevilFunction(10 - x , n)
        x++
    }
}

let y = 0
while (y < 10) {
    createRow(y)
    y++
}