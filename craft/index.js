

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

while (index<CRAFT_DATA.length){
    const newMaterial2 = document.createElement('div');
    newMaterial2.className = 'material';

    allMaterials.appendChild(newMaterial2);

    const image = document.createElement('img');
    image.src =CRAFT_DATA[0].iconPath;
    newMaterial2.appendChild(image);

    const nameOfMaterial = document.createElement('p');
    nameOfMaterial.innerHTML =CRAFT_DATA[index].name;
    nameOfMaterial.className = 'material-label';    
    allMaterials.appendChild(nameOfMaterial);

    index++
}














// while(index<materials.length){

//     const newMaterial2 = document.createElement('div')
//     newMaterial2.className = 'material'


//     materialsElement.appendChild(newMaterial2);
//     newMaterial2.innerHTML =materials[index].name

//     index++
// }





// let i = 0;

// while(i < 10) {
//     const newMaterial = document.createElement('div')
// newMaterial.className = 'material'

// newMaterial.innerHTML = "<span>Material</span>"
// materialsElement.appendChild(newMaterial);
 
//  i = i + 1;
// }

// for(let index = 0; index < 10; index++) {

//     const newMaterial = document.createElement('div')
//     newMaterial.className = 'material'

//     newMaterial.innerHTML = "<span>Material</span>"
//     materialsElement.appendChild(newMaterial);
// }

// const newMaterial = document.createElement('div')
// newMaterial.className = 'material'


// materialsElement.appendChild(newMaterial);

// const colors = ['blue','red']
// console.log(colors[1])

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30
// }
// console.log(person.age)

// console.log(materials[0].name)

// newMaterial.innerHTML =materials[0].name

