const createDevilFunction =(x,y) => {

const image = document.createElement("img")
image.src = "./pics/devil.png"
image.style.width = "10vw"
image.style.height = "10vw"
image.style.position = "absolute"
image.style.left = `${x*10}vw`
image.style.top = `${y*10}vw`
document.body.appendChild(image)
}


const createRow =(n) =>{
    let i=0
while (i<10) {
createDevilFunction(i,n)
i++
}
}

let m=0
while (m<10) {
    createRow(m)
    m++
}