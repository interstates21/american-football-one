const randomFacts = [
    {
        id: "dfg",
        fact: "Polar bear fur is actually clear, and their skin is black",
        liked: true,
        score: 54
    },
    {
        id: "abc",
        fact: "A woodpecker’s tongue actually wraps all the way around its brain, protecting it from damage when it’s hammering into a tree.",
        liked: false,
        score: 38
    },
    {
        id: "qwe",
        fact: "A shrimp’s heart is located in its head",
        liked: false,
        score: 90
    },
    {
        id: "rty",
        fact: "Nine-banded armadillos always have quadruplets, and they’re always identical",
        liked: true,
        score: 76
    },
    {
        id: "uio",
        fact: "Cat is black",
        liked: false,
        score: 10
    },
    {
        id: "asd",
        fact: "All clownfish are born male",
        liked: true,
        score: 132,
    },
    {
        id: "fgh",
        fact: "Hippos and horses are actually distant relatives",
        liked: false,
        score: 11
    },
]



// Translate Array<Object> to Array<String>
const getFactStrings = () => {
    const stringArr = [];

    let i = 0;
    while (i < randomFacts.length) {
        const currentFactObject = randomFacts[i];

        stringArr.push(currentFactObject.fact);

        i++;
    }    

    return stringArr;
}

const factString = getFactStrings();

// Function: find index by ID
let indexById = 0;
const findInexByID = (id) => {
    
    while (indexById<randomFacts.length ){
        if (randomFacts[indexById].id === id)  {
            break
        }
        indexById++  
    }
}




// Like fact by id


const likeFact = (id) => {
    
    findInexByID(id)
    // console.log(i) 
              
    if (randomFacts[indexById]){
    if (randomFacts[indexById].liked === false) {
        randomFacts[indexById].liked = true
    }
    else{ randomFacts[indexById].liked = false}
    }
}


likeFact("qwe");

// Get all liked facts


const getLikedFacts = () => {

    const likedFactAray = []

    let i=0
    while (i < randomFacts.length){
    if (randomFacts[i].liked === true) {
        likedFactAray.push(randomFacts[i])
    }
    i++
    }
    return likedFactAray

}

const likedFacts = getLikedFacts();
console.log('likedFacts =', likedFacts)




// Return high score facts


const isHighScore = (fact) => {
        if (fact.score > 80) {
        return true;
    }

    return false
}

const getHighScoreFacts = () => {
    const hightScoreFactsArray = []
    let i=0
    while (i<randomFacts.length){
        if (isHighScore(randomFacts[i])) {
            hightScoreFactsArray.push(randomFacts[i])
        }
        i++
    }
   
    return hightScoreFactsArray;
}


const highScoreFacts = getHighScoreFacts();
console.log('highScoreFacts =', highScoreFacts)


// Get Random Fact
const getRandomInt = (max) => {
    // Got from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * max);
}


const getRandomFactId =() => {
    return randomFacts[getRandomInt(randomFacts.length-1)].id
}

console.log("random", getRandomFactId())

// Print Liked Fact String

const printLikedFacts = () => {
    let i = 0;
    while (i < randomFacts.length) {
        if (randomFacts.liked) {
            console.log(randomFacts[i].fact);
        }
        i++;
    }
}


// Sort by score;

const sortByScore = () => {

}

// Translate facts array into an object with keys like id

const factObject = {  }
const transformArrayToObject = () => {
    let i=0;
    while (i<randomFacts.length) {
        factObject[randomFacts[i].id]  = randomFacts[i] 
        i++ 
    }   
}
transformArrayToObject()
console.log(factObject)

let heart = "🤍"
const createHeart = (indexById) => {
if (randomFacts[indexById].liked === false) {
    heart = "🤍"
}
else if(randomFacts[indexById].liked === true) {heart = "❤"}
return heart
}




const list = document.getElementById("list")

const createListItem = (indexById) => {
    const divForFact = document.createElement("div")
    divForFact.classList.add("fact")
    const textOfFact = document.createElement("p")
    const heartOfFact = document.createElement("label")
    textOfFact.innerHTML = `${randomFacts[indexById].fact} (score: ${randomFacts[indexById].score})` 
    heartOfFact.innerHTML = createHeart(indexById)
    divForFact.appendChild(textOfFact)
    divForFact.appendChild(heartOfFact)
    list.appendChild(divForFact)

    // KAK LAIKAT' FAKTI ???

    heartOfFact.addEventListener('click', (event) => {

        likeFact(randomFacts[indexById].id)
        console.log(randomFacts)
    })
    
} 



const buttonAllFacts = document.getElementById("all-facts")
buttonAllFacts.addEventListener('click', (event) => { 
    indexById = 0;
    list.innerHTML = ""
    while (indexById<randomFacts.length) {
        createListItem(indexById)
        indexById++
    }
})

const buttonOneFact = document.getElementById("one-fact")
buttonOneFact.addEventListener('click', (event) => {
    list.innerHTML = ""
    indexById = 0;
    findInexByID(getRandomFactId())
    createListItem(indexById)
})

const buttonLikedFacts = document.getElementById("liked-facts")
buttonLikedFacts.addEventListener('click', (event) => {
    list.innerHTML = ""
    let i=0
    while (i < randomFacts.length){
    if (randomFacts[i].liked === true) {
        createListItem(i)
    }
    i++
    }
})

const buttonScoreMore80 = document.getElementById("score-more-80")
buttonScoreMore80.addEventListener('click', (event) => {
    list.innerHTML = ""
    let i=0
    while (i<randomFacts.length){
        if (randomFacts[i].score > 80) {
            createListItem(i)
        }

        i++
    }
})










