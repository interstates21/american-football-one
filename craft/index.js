const MATERIALS_DATA = {
    Wood: {
        amount: 20,
        iconPath: './pics/wood.svg',
    },
    Iron: {
        amount: 10,
        iconPath: './pics/iron.svg'
    }
}


const RECIPES = [
    {
        name: 'Sabre',
        iconPath: './pics/sparkling-sabre.svg',
        material: 'Iron',
        materialAmountRequired: 1,
        createdGoods: 0,
    },
    {
        name: 'Cosmic Egg',
        iconPath: './pics/cosmic-egg.svg',
        material: 'Wood',
        materialAmountRequired: 2,
        createdGoods: 0,
    },
]


const displayMaterials = () => {
    const allMaterials = document.querySelector('#all-materials');

    let i = 0;
    const translateObjectIntoArray = Object.keys(MATERIALS_DATA);
    // Output array: ['Wood', 'Iron']

    while (i < translateObjectIntoArray.length) {
        // translateObjectIntoArray[i] // outputs: Wood

        const nameOfMaterial = translateObjectIntoArray[i]; // Wood

        const createdMaterialDiv = document.createElement('div');
        createdMaterialDiv.className = 'material';

        const image = document.createElement('img');
        image.src = MATERIALS_DATA[nameOfMaterial].iconPath;
        createdMaterialDiv.appendChild(image);

        const labelElement = document.createElement('p');
        const amountFromData = MATERIALS_DATA[nameOfMaterial].amount;
        labelElement.innerHTML = `${nameOfMaterial}:${amountFromData}` // Inject variable into a string
        labelElement.className = 'material-label';    
        createdMaterialDiv.appendChild(labelElement);

        allMaterials.appendChild(createdMaterialDiv);
        i++
    }

}

const displayGoods = () => {
    let i = 0;
    const craftContainer = document.getElementById('craft-container')
    
    while (i < RECIPES.length){
        const craftElement = document.createElement('div')

        // DISPLAYING
        craftElement.innerHTML= `<img src="${RECIPES[i].iconPath}" />
        <p class="craft-label">${RECIPES[i].name} (${RECIPES[i].createdGoods})</p>
        <p class="craft-cost"> ${RECIPES[i].material} : ${RECIPES[i].materialAmountRequired}</p>`
        
        const requiredMaterialType = RECIPES[i].material; 
        craftContainer.appendChild(craftElement)
        
        // COUNT AVAILABILITY

        const canBeCrafted = MATERIALS_DATA[requiredMaterialType].amount >= RECIPES[i].materialAmountRequired;
        if (canBeCrafted)
        {
            craftElement.className='craft-element craft-available'   
        }
        else {
            craftElement.className='craft-element'
        }

        // FOCUS

        craftElement.addEventListener('click', () => {
            if (canBeCrafted) {
                // TODO: unselect all the rest
                craftElement.className= craftElement.className + ' craft-selected'
            }
        })
        
        
        i++;
    }
}

displayMaterials();
displayGoods();





// craftElement.addEventListener('click', () => {
//     if (craftElement.className==='craft-element craft-available')
//     {craftElement.className='craft-element craft-available craft-selected'}
// })

// const submitButton = document.getElementById('button');

// submitButton.addEventListener('click', (event) => {
//         event.preventDefault(); 
//         console.log('clicked submit button')


//         const substractMaterial = translateObjectIntoArray[0]

//         MATERIALS_DATA.Wood.amount=MATERIALS_DATA.Wood.amount-RECIPES.Wood

       
// })



 
