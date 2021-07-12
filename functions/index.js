const MOVIES = [
    {
        name:"Titanic",
    actors:["leonardo","kate"],
    year:1997,
    ratings:9
},
    {
        name:"Bahubali",
        actors:["Prabhas","Anushka"],
        year:2018,
        ratings:15
    }

]

function isThisHighRating(movie){
    
    if(movie.ratings>14){
return true

    }
return false
}

function getNumber()
{
    let i=0 
    let count = 0
while(i<MOVIES.length){
    
    if(isThisHighRating(MOVIES[i]))
    {
count++}
    i++
alert(count)
}
const yearIndex = MOVIES.findIndex(currentElement => currentElement.year===1997)
console.log(yearIndex)

}

getNumber()