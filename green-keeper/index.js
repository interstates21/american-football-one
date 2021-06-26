// Feature: Tree Gallery

// Feature: Planting and Growing Instructions
// Feature: Get a T-shirt for 10 trees
// Feature: Rating of keepers (who planted the most trees)


// Feature: Some tree type has some points (Pine tree is the most valuable tree)
// Feature: Map of the planted trees
// Feature: Quest: plant a tree
// Feature: User Login

const AVAILABLE_TYPES = {
    apple: {
        name: 'Apple',
        imageURL: './trees/pic-2.jpg'
    },
    cherry: {
        name: 'Cherry',
        imageURL: './trees/pic-1.jpg'
    },
    pine: {
        name: 'Pine',
        imageURL: './trees/pic-3.jpg'
    }
}


const USERS = [
    {
        name: 'Samuel',
        plantedTrees: 0,
        password: 'hello1'
    },
    {
        name: 'Jackson',
        plantedTrees: 0,
        password: 'hello2'
    },
    {
        name: 'Shamuna',
        plantedTrees: 0,
        password: 'hello3'
    },
    {
        name: 'Alex', 
        plantedTrees: 0,
        password: 'hello4'
    },
    {
        name: 'Maria',
        plantedTrees: 0,
        password: 'hello5'
    },
]

let loggedInUser = null;

const LOCATION_ARRAY = [
    'Sweden',
    'Ukraine',
    'USA',
    'Germany',
    'Madagaskar',
    'Russia'
]


const TREES = [
    {
        treeName: "Sunny Bug",
        treeType: AVAILABLE_TYPES.cherry,
        location: 'Sweden',
        keeper: USERS[0]
    },
    {
        treeName: "Dark Bug",
        treeType: AVAILABLE_TYPES.apple,
        location: 'New Zeland',
        keeper: USERS[1],
    },]



// Function Declarations
 const treeGaleryContainer = document.getElementById('tree-gallery');

 const getRandomInt = (max) => {
    // Got from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * max);
}

const renderTree = (treeObject) => {
    const newTreeCard = document.createElement('div');
    newTreeCard.className = 'tree-card';

    newTreeCard.innerHTML = `
        <div class="tree-header">  
                       <h5>
                    ${treeObject.treeName} (${treeObject.treeType.name})
                </h5>
                 <p>
                     ${treeObject.keeper.name}
                </p>
             </div>
             <img src="${treeObject.treeType.imageURL}" alt="Tree Image"/>
             <p class="tree-location">
                 ${treeObject.location}
             </p>`

     treeGaleryContainer.appendChild(newTreeCard)
 }

 const renderAllTrees = () => {
     let i = 0;
    while (i < TREES.length) {
        const currentTree = TREES[i];
         renderTree(currentTree)

        i++;
     }
 }

 const toggleWindow = (isOpen, targetModel) => {
    const targetConteiner = document.getElementById(targetModel)
    targetConteiner.style.display = isOpen ? 'block' : 'none'
 }

 const createTree = () => {
     const submitButton = document.getElementById('create-tree-now')

     submitButton.addEventListener('click', () => {
        const locationInput=document.getElementById('location-input').value
        const treeNameInput=document.getElementById('treename-input').value

        const userNameFromSelect = document.getElementById('select-name').value
        const selectedUserIndex = USERS.findIndex(currentUser => currentUser.name === userNameFromSelect) 
        USERS[selectedUserIndex].plantedTrees++
        console.log(USERS)

        displayRankFunction()
        
        let selectedType=document.getElementById('choise').value
        selectedType = AVAILABLE_TYPES[selectedType.toLowerCase()]

        const newTree={  
                treeName: treeNameInput,
                treeType: selectedType,
                location: locationInput,
                keeper: USERS[selectedUserIndex],
            }

            TREES.push(newTree)
            renderTree(newTree) 
            toggleWindow(false, "create-tree-conteiner")
        })      
 }

 const createQuest = () => {
    const questButton = document.getElementById("get-quest");

    questButton.addEventListener('click', () => { 
        const AVAILABLE_TYPES_ARRAY = Object.keys(AVAILABLE_TYPES);
        const randomNumberOfTree = getRandomInt(AVAILABLE_TYPES_ARRAY.length);
        const nameOfQuestTree = AVAILABLE_TYPES_ARRAY[randomNumberOfTree]
        console.log(nameOfQuestTree)
        
        const randomNumberOfLocation = getRandomInt(LOCATION_ARRAY.length)
        const randomLocation = LOCATION_ARRAY[randomNumberOfLocation]
        console.log(randomLocation)
    
        const questWindow = document.getElementById('quest')
        questWindow.style.display = "block"
        const questText = document.getElementById('quest-text')
        questText.innerHTML = `Ok, you have 13 days to plant the ${nameOfQuestTree} in ${randomLocation}`
        
        const questAcceptedButton = document.getElementById("accept-quest")
    
        questAcceptedButton.addEventListener('click', () => {
            toggleWindow(false, "quest")
        })
     })
}
 
 const createSelectOptionsForUsersDropdown = () => {
    const selectName=document.getElementById('select-name')
    let i=0;
    while(i<USERS.length){
        const nameOption=document.createElement('option')
        const currentUser=USERS[i]
        nameOption.innerHTML=currentUser.name
        selectName.appendChild(nameOption)
        
        i++
    }
 }

// Display users rank

const displayRankFunction = () => {
    const rankList = document.getElementById("rank-list")
    rankList.innerHTML = ""

    USERS.sort(function(a, b) {
        return b.plantedTrees - a.plantedTrees;
      });
      console.log(USERS); 

      

for (let i = 0; i < USERS.length; i++) {
const listItem = document.createElement("li")
listItem.className = "list-group-item d-flex justify-content-between align-items-center list-group-item-light"
listItem.innerHTML = `${USERS[i].name}
<span class="badge bg-info rounded-pill">${USERS[i].plantedTrees}</span>`

 if (USERS[i].plantedTrees >= 2){
    document.getElementById('tshirt')

    // Display t-shirt popup
    const tshirtWindow = document.getElementById('tshirt');
    tshirtWindow.style.display='block'

    tshirtWindow.addEventListener('click', () => {
            // Hide t-shirt popup on click
        tshirtWindow.style.display='none'
    })

    // Hide t-shirt popup in 2s
    window.setTimeout(() => document.getElementById('tshirt').style.display='none', 10000)

 }
rankList.appendChild(listItem)

}

}








//  Execution

 renderAllTrees()
 createTree()
 createSelectOptionsForUsersDropdown()
 createQuest()
 displayRankFunction()
 


 const openCreateModalButton = document.getElementById('create-tree')
 openCreateModalButton.addEventListener('click', () => {
    toggleWindow(true, "create-tree-conteiner")
})


// Login
const openLoginWindow = document.getElementById('open-login-window');
openLoginWindow.addEventListener('click', () => {
    const loginWindow = document.getElementById('login-window');
    loginWindow.style.display = 'block';

    const loginSubmit = document.getElementById('login-submit');
    const loginCancel = document.getElementById('login-cancel');

    loginSubmit.addEventListener('click', () => {
        // Collect the user data from inputs, compare with all Users and login if there's a match
    })

    loginCancel.addEventListener('click', () => {
        loginWindow.style.display = 'none';
    })
})
 


 
 