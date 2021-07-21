const ARRAY = [
    "Chocolate",
    "Lays",
    "OREO",
    "Nutella",
    "Chicken",
    "Chuppa-Chups",
    "Pasta"
]


const renderFunction=(array) => {
const itemsConteiner = document.getElementById("items-conteiner")
itemsConteiner.innerHTML = ""
let i=0
while (i<array.length){
const divForItem = document.createElement("div")
divForItem.innerHTML = array[i]
i++ 
itemsConteiner.appendChild(divForItem)
}}

renderFunction(ARRAY)


const inputSearch = document.getElementById("search-input")
 const searchButton = document.getElementById("button-search")
 searchButton.addEventListener("click", () =>
 {  
     console.log(inputSearch.value)
     searchFunction(inputSearch.value)
     inputSearch.value = ""
 })   
 
//  inputSearch.addEventListener("change", (event) =>
//  {  
//      console.log(event.target.value)
//      searchFunction(event.target.value)
//      console.log(event.target.value)
//  })  

 
 const searchFunction=(dataFromInput) => {
    const newARRAY = []
    let i=0
    while (i<ARRAY.length) {
    if (dataFromInput === ARRAY[i]){
        newARRAY.push(ARRAY[i])
    }
    i++
     }
     
    renderFunction(newARRAY)
    }

    
  

