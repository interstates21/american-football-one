const MATERIALS_DATA = [
    {
        name: 'Wood',
        amount: 2,
        iconPath: './pics/wood.svg'
    },
    {
        name: 'Iron',
        amount: 1,
        iconPath: './pics/iron.svg'
    },
]

const RECIPES = [
    {
        name: 'Sabre',
        iconPath: './pics/sparkling-sabre.svg',
        iron: 1,
    },
    {
        name: 'Cosmic Egg',
        iconPath: './pics/cosmic-egg.svg',
        iron: 90,
    },
]

const allMaterials = document.querySelector('#all-materials');

let index = 0;

while (index < MATERIALS_DATA.length){
    const createdMaterialDiv = document.createElement('div');
    createdMaterialDiv.className = 'material';

    allMaterials.appendChild(createdMaterialDiv);

    const image = document.createElement('img');
    image.src =MATERIALS_DATA[index].iconPath;
    createdMaterialDiv.appendChild(image);

    // String literal allows to pass a JS string variable into a string
    // Injecting html into a created element
    // createdMaterialDiv.innerHTML = `
    // <img src="${MATERIALS_DATA[index].iconPath}"> </img>
    // <p class="material-label">${MATERIALS_DATA[index].name}</p>
    // `

    // Manually add elements to a created element 
    const labelElement = document.createElement('p');
    const nameFromData = MATERIALS_DATA[index].name;
    const amountFromData = MATERIALS_DATA[index].amount;

    labelElement.innerHTML = nameFromData + ":" + amountFromData; // Add three string
    labelElement.innerHTML = `${nameFromData}:${amountFromData}` // Inject variable into a string
    labelElement.className = 'material-label';    
    createdMaterialDiv.appendChild(labelElement);

    index++
}




{/* <div id="craft-container">
<div class="craft-element craft-available">
    <img src="./pics/sparkling-sabre.svg" />
    <p class="craft-label">Wood: 4, Iron: 2</p>
</div>
</div> */}