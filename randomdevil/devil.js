
const image = document.createElement('img')

let loc=[]
console.log(loc)


function init(){
   
image.src="./OIP (1).jpg"
image.style.height="300px"
image.style.width="300px"
image.style.position="absolute"

moveit()

document.body.appendChild(image)
}
function moveit()
{
    let loc=[]
    x=Math.floor(Math.random()*(1000-50))+50+"px";
   
    y=Math.floor(Math.random()*(1000-50))+50+"px"
   loc.push(x)
   loc.push(y)
   
   image.style.left=loc[0]
   image.style.top=loc[1]
}
setInterval(init,500)



