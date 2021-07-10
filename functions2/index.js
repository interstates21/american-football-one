const randomFacts = [
    {
        id: 0,
        fact: "Polar bear fur is actually clear, and their skin is black",
        liked: false,
        score: 54
    },
    {
        id: 1,
        fact: "A woodpecker’s tongue actually wraps all the way around its brain, protecting it from damage when it’s hammering into a tree.",
        liked: false,
        score: 38
    },
    {
        id: 2,
        fact: "A shrimp’s heart is located in its head",
        liked: false,
        score: 10
    },
    {
        id: 3,
        fact: "Nine-banded armadillos always have quadruplets, and they’re always identical",
        liked: false,
        score: 76
    },
    {
        id: 4,
        fact: "Nine-banded armadillos always have quadruplets, and they’re always identical",
        liked: false,
        score: 10
    },
    {
        id: 5,
        fact: "All clownfish are born male",
        liked: true,
        score: 132,
    },
    {
        id: 6,
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


// Get all liked facts

const getLikedFacts = () => {
}

const likedFacts = getLikedFacts();
console.log('likedFacts =', likedFacts)


// Like fact by id


const likeFact = (id) => {

}


likeFact(4);


// Return high score facts
const isHighScore = (fact) => {
    if (fact.score > 80) {
        return true;
    }

    return false
}

const getHighScoreFacts = () => {


    return ;
}


const highScoreFacts = getHighScoreFacts();
console.log('highScoreFacts =', highScoreFacts)


// Get Random Fact
const getRandomInt = (max) => {
    // Got from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * max);
}


const getRandomFactString =() => {
    

    return  ;
}

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

// Translate facts array into an object with keys like facts