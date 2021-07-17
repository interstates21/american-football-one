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
        totalStart: '4.9',
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
    while(i<HABITS.length){
        if (id === HABITS[i].id){
            return i;
        }
        i++
    }
return -1
    
}


// Application interface

let currentUser = null;

const addReview = (restaurantId, enteredText, enteredStars) => {

}

const addRestaurant = (restaurantName) => {

}

const login = (username, password) => {
    // Check every every, and if there's a match - update currentUser
}

login('enigma17', 'pass1');