// Feature: Tree Gallery

// Feature: Planting and Growing Instructions
// Feature: Rating of keepers (who planted the most trees)
// Feature: Get a T-shirt for 10 trees
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

const TREES = [
    {
        treeName: "Sunny Bug",
        treeType: AVAILABLE_TYPES.cherry,
        location: 'Sweden',
        keeper: 'Samuel',
    },
    {
        treeName: "Dark Bug",
        treeType: AVAILABLE_TYPES.apple,
        location: 'New Zeland',
        keeper: 'Jackson',
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
                     ${treeObject.keeper}
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

 const toggleCreateWindow = (isOpen) => {
    const createTreeConteiner = document.getElementById('create-tree-conteiner')

    createTreeConteiner.style.display = isOpen ? 'block' : 'none'
 }


 const createTree = () => {
     const submitButton = document.getElementById('create-tree-now')

     submitButton.addEventListener('click', () => {      
        const nameInput = document.getElementById('your-name-input').value
        let selectedType=document.getElementById('choise').value
        selectedType = AVAILABLE_TYPES[selectedType.toLowerCase()]
        const locationInput=document.getElementById('location-input').value
        const treeNameInput=document.getElementById('treename-input').value

        const newTree={  
                treeName: treeNameInput,
                treeType: selectedType,
                location: locationInput,
                keeper: nameInput,
            }
            TREES.push(newTree)
            renderTree(newTree) 
            toggleCreateWindow(false)
           
        })
 }

 renderAllTrees()

 const buttonToCreateTree = document.getElementById('create-tree')
 buttonToCreateTree.addEventListener('click', () => {
    toggleCreateWindow(true)
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
  
    


    // Ok, you have 13 days to plant the ${} in ${}



    // const headUrl = headParts[randomIndex];

    // headElement.style.background = `url("${headUrl}") center/cover`;

    
   

 })
