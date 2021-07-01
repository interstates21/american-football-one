
const image = document.createElement('img')
function init(){
   
image.src="./OIP (1).jpg"
image.style.height="300px"
image.style.width="300px"
image.style.position="absolute"
setInterval(moveit,500)
document.body.appendChild(image)
}
function moveit()
{
    image.style.left=Math.floor(Math.random()*(1000-50))+50+"px";
    image.style.top=Math.floor(Math.random()*(1000-50))+50+"px"

}

init();




