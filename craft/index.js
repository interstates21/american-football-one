// We want to have this notation MATERIALS_DATA.Wood.amount, but it's impossible for arrays
// const MATERIALS_DATA = [
//     {
//         name: 'Wood',
//         amount: 20,
//         iconPath: './pics/wood.svg'
//     },
//     {
//         name: 'Iron',
//         amount: 10,
//         iconPath: './pics/iron.svg'
//     },
// ]

const MATERIALS_DATA = {
    'Wood': {
        amount: 20,
        iconPath: './pics/wood.svg'
    },
    'Iron': {
        amount: 10,
        iconPath: './pics/iron.svg'
    }
}

const RECIPES = [
    {
        name: 'Sabre',
        iconPath: './pics/sparkling-sabre.svg',
        material: 'Iron',
        amount: 1
    },
    {
        name: 'Cosmic Egg',
        iconPath: './pics/cosmic-egg.svg',
        material: 'Wood',
        amount: 20

    },
]

const allMaterials = document.querySelector('#all-materials');

let index = 0;

console.log('MATERIALS_DATA: ', MATERIALS_DATA)
const translateObjectIntoArray = Object.keys(MATERIALS_DATA);

console.log('translateObjectIntoArray: ', translateObjectIntoArray)

while (index < translateObjectIntoArray.length){
    const nameOfMaterial = translateObjectIntoArray[index]; // Wood

    const createdMaterialDiv = document.createElement('div');
    createdMaterialDiv.className = 'material';

    allMaterials.appendChild(createdMaterialDiv);

    const image = document.createElement('img');
    image.src = MATERIALS_DATA[nameOfMaterial].iconPath;
    createdMaterialDiv.appendChild(image);

    // String literal allows to pass a JS string variable into a string
    // Injecting html into a created element
    // createdMaterialDiv.innerHTML = `
    // <img src="${MATERIALS_DATA[index].iconPath}"> </img>
    // <p class="material-label">${MATERIALS_DATA[index].name}</p>
    // `

    // Manually add elements to a created element 
    const labelElement = document.createElement('p');
    const amountFromData = MATERIALS_DATA[nameOfMaterial].amount;

    // labelElement.innerHTML = nameFromData + ":" + amountFromData; // Add three string
    labelElement.innerHTML = `${nameOfMaterial}:${amountFromData}` // Inject variable into a string
    labelElement.className = 'material-label';    
    createdMaterialDiv.appendChild(labelElement);

    index++
}



let i=0;

while (i < RECIPES.length){
    const craftContainer = document.getElementById('craft-container')
const craftElement = document.createElement('div')
craftElement.className='craft-element'
craftElement.innerHTML= `<img src="${RECIPES[i].iconPath}" />
<p class="craft-label"> ${RECIPES[i].material} ${RECIPES[i].amount}</p>`



if (MATERIALS_DATA.material === RECIPES.material){
    craftElement.className='craft-element'
}
else 
{
    craftElement.className='craft-element craft-available' 
}

craftContainer.appendChild(craftElement)
i++
}
 

