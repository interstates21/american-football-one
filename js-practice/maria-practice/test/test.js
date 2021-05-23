window.addEventListener("load", () => {
   
    const orangeColor = document.getElementById('orange');
    const greyColor = document.getElementById('grey');
    const brownColor = document.getElementById('brown');
    const yellowColor = document.getElementById('yellow');

   let orange = false;
   let grey = false;
   let brown = false;
   let yellow = false;


   const less = document.getElementById('less-then-30')
   const more = document.getElementById('more-then-30')


   const answer1 = document.getElementById('answer-1')
   const answer2 = document.getElementById('answer-2')
   const answer3 = document.getElementById('answer-3')
   const answer4 = document.getElementById('answer-4')
   const answer5 = document.getElementById('answer-5')
   const answer6 = document.getElementById('answer-6')
   const answer7 = document.getElementById('answer-7')
   const answer8 = document.getElementById('answer-8')


   orangeColor.addEventListener('click', (event) => {
    orange = true;
    grey = false;
    brown = false;
    yellow = false;
    console.log(orange, grey, brown, yellow);
    orangeColor.style.border = "rgb(255, 115, 0) solid 5px";
    greyColor.style.border = "rgb(255, 115, 0) solid 0px";
    brownColor.style.border = "rgb(255, 115, 0) solid 0px";
    yellowColor.style.border = "rgb(255, 115, 0) solid 0px";


    less.addEventListener('click', (event) => {

        less.style.border = "rgb(142, 255, 49) solid 2px";
        more.style.border = "rgb(142, 255, 49) solid 0px";
        answer1.style.display = "block"    
        answer2.style.display = "none" 
        answer3.style.display = "none" 
        answer4.style.display = "none" 
        answer5.style.display = "none" 
        answer6.style.display = "none" 
        answer7.style.display = "none" 
        answer8.style.display = "none"  
    
       })

       more.addEventListener('click', (event) => {
        less.style.border = "rgb(142, 255, 49) solid 0px";
        more.style.border = "rgb(142, 255, 49) solid 2px";
        answer1.style.display = "none"   
        answer2.style.display = "block" 
        answer3.style.display = "none" 
        answer4.style.display = "none" 
        answer5.style.display = "none" 
        answer6.style.display = "none" 
        answer7.style.display = "none" 
        answer8.style.display = "none"     
    
       })
    

   })

    
    greyColor.addEventListener('click', (event) => {
        orange = false;
        grey = true;
        brown = false;
        yellow = false;
        console.log(orange, grey, brown, yellow);
        orangeColor.style.border = "rgb(255, 115, 0) solid 0px";
        greyColor.style.border = "rgb(107, 107, 107) solid 5px";
        brownColor.style.border = "rgb(255, 115, 0) solid 0px";
        yellowColor.style.border = "rgb(255, 115, 0) solid 0px";


        less.addEventListener('click', (event) => {

            less.style.border = "rgb(142, 255, 49) solid 2px";
            more.style.border = "rgb(142, 255, 49) solid 0px";
            answer1.style.display = "none"    
            answer2.style.display = "none" 
            answer3.style.display = "block" 
            answer4.style.display = "none" 
            answer5.style.display = "none" 
            answer6.style.display = "none" 
            answer7.style.display = "none" 
            answer8.style.display = "none"  
        
           })
    
           more.addEventListener('click', (event) => {
            less.style.border = "rgb(142, 255, 49) solid 0px";
            more.style.border = "rgb(142, 255, 49) solid 2px";
            answer1.style.display = "none"   
            answer2.style.display = "none" 
            answer3.style.display = "none" 
            answer4.style.display = "block" 
            answer5.style.display = "none" 
            answer6.style.display = "none" 
            answer7.style.display = "none" 
            answer8.style.display = "none"     
        
           })





        })

    brownColor.addEventListener('click', (event) => {
            orange = false;
            grey = false;
            brown = true;
            yellow = false;
            console.log(orange, grey, brown, yellow);
            orangeColor.style.border = "rgb(255, 115, 0) solid 0px";
            greyColor.style.border = "rgb(255, 115, 0) solid 0px";
            brownColor.style.border = " rgb(94, 63, 55) solid 5px";
            yellowColor.style.border = "rgb(255, 115, 0) solid 0px";


            less.addEventListener('click', (event) => {

                less.style.border = "rgb(142, 255, 49) solid 2px";
                more.style.border = "rgb(142, 255, 49) solid 0px";
                answer1.style.display = "none"    
                answer2.style.display = "none" 
                answer3.style.display = "none" 
                answer4.style.display = "none" 
                answer5.style.display = "block" 
                answer6.style.display = "none" 
                answer7.style.display = "none" 
                answer8.style.display = "none"  
            
               })
        
               more.addEventListener('click', (event) => {
                less.style.border = "rgb(142, 255, 49) solid 0px";
                more.style.border = "rgb(142, 255, 49) solid 2px";
                answer1.style.display = "none"   
                answer2.style.display = "block" 
                answer3.style.display = "none" 
                answer4.style.display = "none" 
                answer5.style.display = "none" 
                answer6.style.display = "block" 
                answer7.style.display = "none" 
                answer8.style.display = "none"     
            
               })

            }) 

    yellowColor.addEventListener('click', (event) => {
                orange = false;
                grey = false;
                brown = false;
                yellow = true;
                console.log(orange, grey, brown, yellow);
                orangeColor.style.border = "rgb(255, 115, 0) solid 0px";
                greyColor.style.border = "rgb(255, 115, 0) solid 0px";
                brownColor.style.border = "rgb(255, 115, 0) solid 0px";
                yellowColor.style.border = "rgb(255, 185, 55) solid 5px";

                less.addEventListener('click', (event) => {

                    less.style.border = "rgb(142, 255, 49) solid 2px";
                    more.style.border = "rgb(142, 255, 49) solid 0px";
                    answer1.style.display = "none"    
                    answer2.style.display = "none" 
                    answer3.style.display = "none" 
                    answer4.style.display = "none" 
                    answer5.style.display = "none" 
                    answer6.style.display = "none" 
                    answer7.style.display = "block" 
                    answer8.style.display = "none"  
                
                   })
            
                   more.addEventListener('click', (event) => {
                    less.style.border = "rgb(142, 255, 49) solid 0px";
                    more.style.border = "rgb(142, 255, 49) solid 2px";
                    answer1.style.display = "none"   
                    answer2.style.display = "none" 
                    answer3.style.display = "none" 
                    answer4.style.display = "none" 
                    answer5.style.display = "none" 
                    answer6.style.display = "none" 
                    answer7.style.display = "none" 
                    answer8.style.display = "block"     
                
                   })





                })
            
    console.log(orange, grey, brown, yellow);
   
    if (orange == true) {
    orangeColor.style.border = "rgb(255, 115, 0) solid 5px";
    } else {
     orangeColor.style.border = "rgb(255, 115, 0) solid 0px";
    }
             


 
            })
          
        