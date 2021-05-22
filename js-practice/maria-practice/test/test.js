window.addEventListener("load", () => {
   
    const orange = document.getElementById('orange');
    let color = "white";

     orange.addEventListener('click', (event) => {
        color = "orange";
        orange.style.border = "rgb(255, 115, 0) solid 5px;" ;
        console.log(color);
})
})
