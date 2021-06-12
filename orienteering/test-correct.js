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

let i=0




while(i<10) {

const card = document.createElement('div')
card.className = "cards"
card.id = `card-${i}`



card.innerHTML=` 
   
<h2>Which map is compass oriented?</h2>
<img src=".//pics-for-test-1/test-pic-${i+1}.JPG" alt="">
<div id="answers-conteiner">
    <div id="pic-${i}-a-conteiner">
        <input type="radio" id="pic-${i}-a" name="pic-${i}" value="a">
        <label for="pic-${i}-a">a</label>          
    </div>
     <div id="pic-${i}-b-conteiner">
        <input type="radio" id="pic-${i}-b" name="pic-${i}"value="b">
        <label for="pic-${i}-b">b</label>          
    </div>
    <div id="pic-${i}-c-conteiner">
        <input type="radio" id="pic-${i}-c" name="pic-${i}"value="c">
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







const answers = [
    'a',
    'c',
    'b',
    'c',
    'a',
    'a',
    'b',
    'c',
    'a',
    'c'
]



button.addEventListener('click', (event) => {
  let rightAnswers = 0;
  let i=0;

  while (i<answers.length){

  const questiona = document.getElementById(`pic-${i}-a`)
  const questionb = document.getElementById(`pic-${i}-b`)
  const questionc = document.getElementById(`pic-${i}-c`)

  let checkedElementa = questiona.checked
  let checkedElementb = questionb.checked
  let checkedElementc = questionc.checked

  let answerOfUser = null

  if (checkedElementa)
  {
    answerOfUser = questiona.value
  }
  else if (checkedElementb)
  {
    answerOfUser = questionb.value
  }
  else if (checkedElementc)
  {
    answerOfUser = questionc.value
  }

  console.log(answerOfUser)
  


  if (answerOfUser === answers[i]) {
    rightAnswers++
  }
  else {
    const backgroundOfCard = document.getElementById(`card-${i}`)
    backgroundOfCard.style.backgroundColor = "#ffb4b4"
  }

  i++
  }
  numberOfAnswersConteiner.innerHTML=`Points: ${rightAnswers}`



 
})
let numberOfAnswersConteiner = document.createElement('div')
numberOfAnswersConteiner.className = "number-of-answers"

button.appendChild(numberOfAnswersConteiner)
