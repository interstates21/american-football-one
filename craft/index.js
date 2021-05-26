

const materials = [
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


const materialsElement = document.querySelector('#materials')


// let i = 0;

// while(i < 10) {
//     const newMaterial = document.createElement('div')
// newMaterial.className = 'material'

// newMaterial.innerHTML = "<span>Material</span>"
// materialsElement.appendChild(newMaterial);
 
//  i = i + 1;
// }

for(let index = 0; index < 10; index++) {

    const newMaterial = document.createElement('div')
    newMaterial.className = 'material'

    newMaterial.innerHTML = "<span>Material</span>"
    materialsElement.appendChild(newMaterial);
}