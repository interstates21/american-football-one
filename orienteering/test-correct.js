// Button:

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var j = 0; j < bubblyButtons.length; j++) {
    bubblyButtons[j].addEventListener('click', animateButton, false);
  }


// Cards:

const test1Conteiner = document.getElementById('test-1-conteiner')

let i=1




while(i<=10) {

const card = document.createElement('div')
card.className = "cards"
card.id = `card-${i}`



card.innerHTML=` 
   
<h2>Which map is compass oriented?</h2>
<img src=".//pics-for-test-1/test-pic-${i}.JPG" alt="">
<div id="answers-conteiner">
    <div id="pic-${i}-a-conteiner">
        <input type="radio" id="pic-${i}-a" name="pic-${i}">
        <label for="pic-${i}-a">a</label>          
    </div>
     <div id="pic-${i}-b-conteiner">
        <input type="radio" id="pic-${i}-b" name="pic-${i}">
        <label for="pic-${i}-b">b</label>          
    </div>
    <div id="pic-${i}-c-conteiner">
        <input type="radio" id="pic-${i}-c" name="pic-${i}">
        <label for="pic-${i}-c">c</label>          
    </div>
</div>
`
i++

test1Conteiner.appendChild(card)
}

const page = document.getElementById('page-conteiner-test-1')
const button = document.createElement('div')
button.className="button-body"
button.innerHTML=`<button class="bubbly-button">Check ◪ </button>`

page.appendChild(button)





const answers = {
    answer1 : 'a',
    answer2 : 'c',
    answer3 : 'b',
    answer4 : 'c',
    answer5 : 'a',
    answer6 : 'a',
    answer7 : 'b',
    answer8 : 'c',
    answer9 : 'a',
    answer10 : 'c'
}

const question1 = document.getElementById("pic-1-a")
console.log(question1)




