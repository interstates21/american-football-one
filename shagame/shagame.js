const snakeContainer = document.getElementById("snakecontainer")
//  snakebody part creating
const box = document.createElement("div")
 box.style.width = "15px"
box.style.height = "15px"
 box.style.backgroundColor = "green"
 snakeContainer.appendChild(box)
//  snake food creating
const foodImage = document.createElement('img')
foodImage.src="./th (1).jpg"
foodImage.style.width="15px"
foodImage.style.height="15px"
foodImage.style.position="absolute"
function getFood(){
foodImage.style.top=Math.floor(Math.random()*(500-50))+50+"px"
foodImage.style.left=Math.floor(Math.random()*(500-50))+50+"px"
}
snakeContainer.appendChild(foodImage)

// function movefood()
document.addEventListener("keydown",direction);


function direction(){
    let key = Event.keycode;
    if (key==37 && dir!==right){
        dir = "left";
    }
    else if(key==38 && dir !==down){
        dir = "up"
    }
    else if(key==39 && dir!==left){
        dir = "right"
    }
    else if(key==40 && dir!==up){
        dir = "down"
    }
}