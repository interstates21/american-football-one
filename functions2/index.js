const randomFacts = [
    {
        id: "dfg",
        fact: "Polar bear fur is actually clear, and their skin is black",
        liked: false,
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


// Like fact by id


const likeFact = (id) => {
    let i=0
    while (i<randomFacts.length ){
        if (randomFacts[i].id === id)  {
            break
        }
        i++  
    }
    // console.log(i) 
              
    if (randomFacts[i]){
    if (randomFacts[i].liked === false) {
        randomFacts[i].liked = true
    }
    else{ randomFacts[i].liked = false}
    }


}


likeFact("uio");

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


const getRandomFactString =() => {
    return randomFacts[getRandomInt(randomFacts.length-1)].fact
}

console.log(getRandomFactString())

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

const transformArrayToObject = () => {
    
}