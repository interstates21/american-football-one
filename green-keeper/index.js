// Feature: Tree Gallery

// Feature: Planting and Growing Instructions
// Feature: Get a T-shirt for 10 trees
// Feature: Rating of keepers (who planted the most trees)


// Feature: Some tree type has some points (Pine tree is the most valuable tree)
// Feature: Map of the planted trees
// Feature: Quest: plant a tree
// Feature: User Login


const getRandomInt = (max) => {
    // Got from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * max);
}

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
    },
    {
        name: 'Jackson',
        plantedTrees: 0,
    },
    {
        name: 'Shamuna',
        plantedTrees: 0,
    },
    {
        name: 'Alex', 
        plantedTrees: 0,
    },
    {
        name: 'Maria',
        plantedTrees: 0,
    },
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


 const treeGaleryContainer = document.getElementById('tree-gallery');

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
   

    const TargetConteiner = document.getElementById(targetModel)



    TargetConteiner.style.display = isOpen ? 'block' : 'none'

 }


 const createTree = () => {
     const submitButton = document.getElementById('create-tree-now')

     submitButton.addEventListener('click', () => {      
        const selectednameInput = document.getElementById('select-name').value
        const selectName= document.getElementById('select-name')
 

 
        const selectedUserObject=USERS.find(currentUser => currentUser.name === selectednameInput) 
       
          
       
       
           
         
         
         
        
       
       
       
        let selectedType=document.getElementById('choise').value
        selectedType = AVAILABLE_TYPES[selectedType.toLowerCase()]
        const locationInput=document.getElementById('location-input').value
        const treeNameInput=document.getElementById('treename-input').value

        const newTree={  
                treeName: treeNameInput,
                treeType: selectedType,
                location: locationInput,
                keeper: selectedUserObject,
            }
            TREES.push(newTree)
            renderTree(newTree) 
            toggleWindow(false, "create-tree-conteiner")

   
           
        })
        
 }
 



 renderAllTrees()

 const buttonToCreateTree = document.getElementById('create-tree')
 buttonToCreateTree.addEventListener('click', () => {
    toggleWindow(true, "create-tree-conteiner")
  
 

 
})

 createTree()



 const questButton = document.getElementById("get-quest")

 
const LOCATION_ARRAY = [
    'Sweden',
    'Ukraine',
    'USA',
    'Germany',
    'Madagaskar',
    'Russia'

]


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
  
    const targetModel = "quest"
    
    const questAcceptedButton = document.getElementById("accept-quest")

    questAcceptedButton.addEventListener('click', () => {
        toggleWindow(false, "quest")
    })




    // Ok, you have 13 days to plant the ${} in ${}



    // const headUrl = headParts[randomIndex];

    // headElement.style.background = `url("${headUrl}") center/cover`;

    
   

 })
 const selectName=document.getElementById('select-name')
 let i=0;
 while(i<USERS.length){
     const nameOption=document.createElement('option')
     const currentUser=USERS[i]
     nameOption.innerHTML=currentUser.name
     selectName.appendChild(nameOption)
     
     i++
 }
 
 