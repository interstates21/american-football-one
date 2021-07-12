const getRandomInt = (max) => {
    // Got from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * max);
}

const A = [
    "light",
    "dark",
    "blue",
    "pink",
    "sunny",
    "red",
    "noisy",
    "ugly",
    "windy",
    "furry",
    "funny",
    "sad",
    "wet",
    "broken",
    "destroyed",
    "lazy",
    "happy",
    "depressed",

]

const B = [
    "grumpy",
    "catastrophic",
    "rainy",
    "lucky",
    "fluffy",
    "fat",
    "cute",
    "random",
    "lovely",
    "gorilla",
]

const C = [
    "hundred",
    "million",
    "arrow",
    "heart",
    "brain",
    "plant",
    "armadillion",
    "side",
    "ballon",
    "seagull",
    "boat",
    "tree",
    "ship",
    "book",
    "sailboat",
    "flies",

]

const D = [
    "zero",
    "primary",
    "supreme",
    "the worst",
]


const generateRandomName = () => {
    const firstWord = (A[getRandomInt(A.length-1)])
    const secondWord = (B[getRandomInt(B.length-1)])
    const thirdWord = (C[getRandomInt(C.length-1)])
    const fourthWord = (D[getRandomInt(D.length-1)])
    
    return(firstWord +" "+ secondWord +" "+ thirdWord +" "+ fourthWord)

}

const randomName = generateRandomName(
);

console.log(randomName);