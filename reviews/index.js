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
    }
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

