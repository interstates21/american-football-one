// Feature: Tree Gallery

// Feature: Planting and Growing Instructions
// Feature: Rating of keepers (who planted the most trees)
// Feature: Get a T-shirt for 10 trees
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
 const submitButton = document.getElementById('create-tree-now')
 submitButton.addEventListener('click', () => { 
        
 const nameInput=document.getElementById('your-name-input').value

const selectedType=document.getElementById('choise').value
 const locationInput=document.getElementById('location-input').value
 const treeNameInput=document.getElementById('treename-input').value
 const enteredType=AVAILABLE_TYPES[selectedType.toLowerCase()]
 const newTree={  
         treeName: treeNameInput,
         treeType:enteredType,
       
         location: locationInput,
        keeper: nameInput,
     }
     console.log(newTree.treeType)
      TREES.push(newTree)
       createTreeConteiner.style.display = 'none'
       renderTree(newTree) 
    
 })
 renderAllTrees()



const buttonToCreateTree = document.getElementById('create-tree')
const createTreeConteiner = document.getElementById('create-tree-conteiner')

buttonToCreateTree.addEventListener('click', () => {
    createTreeConteiner.style.display = 'block'


})


 