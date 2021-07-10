let i=0;
     
     const  dreamArray=[];
     const bigContainer=document.getElementById("big");
     
     

     
      
     
    
     
       function myFunction()
    {
      const value=document.getElementById("dreamtext").value;
       dreamArray.push(value);
       console.log(dreamArray.length);
       while(i<dreamArray.length){
        const dreams=document.createElement("p");
         bigContainer.appendChild(dreams);
       
        const colorArray=["red","green","blue","violet","yellow"]
        dreams.style.color=colorArray[i];
        dreams.style.fontSize="30px";
        dreams.style.fontStyle="oblique";
         dreams.innerHTML=dreamArray[i]+"<br>";
         i++;}
       
       }
      //  dreams.innerHTML=dreamArray[dreamArray.length-1]+"<br>";
      

