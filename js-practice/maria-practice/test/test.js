window.addEventListener("load", () => {
   
    const orangeColor = document.getElementById('orange');
    const grayColor = document.getElementById('gray');
    const brownColor = document.getElementById('brown');
    const yellowColor = document.getElementById('yellow');

   let orange = false;
   let grey = false;
   let brown = false;
   let yellow = false;



   orangeColor.addEventListener('click', (event) => {
    orange = true;
    grey = false;
    brown = false;
    yellow = false;

    console.log(orange, grey, brown, yellow);
    })


    grayColor.addEventListener('click', (event) => {
        orange = false;
        grey = true;
        brown = false;
        yellow = false;
        })

    brownColor.addEventListener('click', (event) => {
            orange = false;
            grey = false;
            brown = true;
            yellow = false;
            }) 

    yellowColor.addEventListener('click', (event) => {
                orange = false;
                grey = false;
                brown = false;
                yellow = true;
                })
    
    
   






    })

