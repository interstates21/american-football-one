function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const window1 = document.defaultView
  console.log(window1)


function createDevil()
{
    const image = document.createElement('img')
    image.src="devil.png"
    image.style.height="100px"
    image.style.width="100px"
    image.style.position="absolute"
    const randomHeight = getRandomInt(window1.innerHeight)
    const randomWidth = getRandomInt(window1.innerWidth)
    console.log(randomHeight, randomWidth)
    image.style.left=randomWidth-100+"px";
    image.style.top=randomHeight-100+"px"
    document.body.appendChild(image)
}
setInterval(createDevil,500)






