// Features

// Tags, good for working
// Upload review photos
// Like someone's review
// Delete and Edit review

const USERS = [
    {
        id: 'u1',
        username: 'enigma17',
        password: 'pass1'
    },
    {
        id: 'u2',
        username: 'ghost-shadow',
        password: 'pass2',
    }
]

const RESTAURANTS = [
    {
        id: 'r1',
        name: 'Sunflower Coffee',
        totalStars: '4.9',
        reviews: [
            {
                user: USERS[0],
                text: 'Very bright and mysterious place! Recommend!',
                stars: 5,
            }
        ]
    },
    {
        id: 'r2',
        name: 'Darkside Coffee',
        totalStars: '3.9',
        reviews: [
            {
                user: USERS[0],
                text: 'Very Dark place!',
                stars: 2,
            }
        ]
    },
    {
        id: 'r3',
        name: 'Havaii Heaven',
        totalStars: '5',
        reviews: [
            {
                user: USERS[0],
                text: 'That\'s real heaven!',
                stars: 5,
            }
        ]
    },
]


// helper functions

const findIndexById = (id) => {
    let i=0;
    while(i<RESTAURANTS.length){
        if (id === RESTAURANTS[i].id){
            return i;
        }
        i++
    }
return -1
    
}


// Application interface

let currentUser = null;



const searchRestaurant = (searchQuery) => {

}


const addReview = (restaurantId, enteredText, enteredStars) => {
    if (!currentUser){
        return;
    }
   const i = findIndexById(restaurantId)
    const newReview = {
        user : currentUser,
        text : enteredText,
        stars : enteredStars
    }

RESTAURANTS[i].reviews.push(newReview)

}

const addRestaurant = (restaurantName) => {
    if (!currentUser){
        return;
    }
    const newRestaurant = {
        id:`r${RESTAURANTS.length+1}`,
        name : restaurantName,
        totalStars:0,
        reviews:[]

    }
RESTAURANTS.push(newRestaurant)

}

const login = (username, password) => {
    // Check every every, and if there's a match - update currentUser
    let i = 0
    while (i<USERS.length){
        if(username===USERS[i].username && password===USERS[i].password){
            currentUser = USERS[i]
            return;
}
i++
    }
}

login('enigma17', 'pass1');
addReview('r1','It is good',3);
addRestaurant ('Raravis');
console.log(RESTAURANTS)

// const listenToToggleReviewsOnCard = () => {
//     const button = document.getElementById("btn-rev-1")
//     button.addEventListener("click",()=>{
//         const reviewContainer = document.getElementById("review-container-1")
//         if (reviewContainer.style.display==="block"){
//             reviewContainer.style.display="none"  
//         }
//         else {
//             reviewContainer.style.display="block";
//         }
//     })
// }



const renderCard = (restaurant) => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    let reviewCode = ''

    let i = 0;
    while(i < restaurant.reviews.length) {
        reviewCode +=  `
        <div class="review">
        <div class="user-bar">
            <div class="img-user">
            <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTyyUKD7crftQ8Cy6SgxyWmkLchxvw4y4BMCQ%26usqp%3DCAU" alt="user-pic">
            </div>
            <p class="userName">By ${restaurant.reviews[i].user.username}</p>
        </div>  
        <p>★★★★☆</p>
        <p>${restaurant.reviews[i].text}</p>
        </div>`
        i++;
    }

    newCard.innerHTML = `
    <img class="coffe-img" src="https://images.unsplash.com/photo-1527512666523-bb0e4389d842?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="cofee-shop">
    <h2>${restaurant.name}</h2>
    <p>★★☆☆☆</p>
    <button id="btn-rev-1">Reviews</button>
    <div class="review-container">
    ${reviewCode}
    </div>
    `
    const container = document.getElementById('card-container');
    container.appendChild(newCard);
}

const renderCards = (restaurantsArray) =>{

    const container = document.getElementById('card-container');
    container.innerHTML = '';

    
    let i = 0;

    while (i < restaurantsArray.length) {
        renderCard(restaurantsArray[i]);
        i++;
    }
}


renderCards(RESTAURANTS)

searchRestaurant("Sunflowe");