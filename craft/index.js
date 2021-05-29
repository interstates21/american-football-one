const CRAFT_DATA = [
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
const allMaterials = document.querySelector('#all-materials');

let index = 0;

while (index < CRAFT_DATA.length){
    const createdMaterialDiv = document.createElement('div');
    createdMaterialDiv.className = 'material';

    allMaterials.appendChild(createdMaterialDiv);

    const image = document.createElement('img');
    image.src =CRAFT_DATA[index].iconPath;
    createdMaterialDiv.appendChild(image);

    // String literal allows to pass a JS string variable into a string
    // Injecting html into a created element
    // createdMaterialDiv.innerHTML = `
    // <img src="${CRAFT_DATA[index].iconPath}"> </img>
    // <p class="material-label">${CRAFT_DATA[index].name}</p>
    // `

    // Manually add elements to a created element 
    const nameOfMaterial = document.createElement('p');
    nameOfMaterial.innerHTML =CRAFT_DATA[index].name;
    nameOfMaterial.className = 'material-label';    
    createdMaterialDiv.appendChild(nameOfMaterial);

    index++
}