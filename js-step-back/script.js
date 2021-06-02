const history = [
       
]

const redButton = document.getElementById('red')

redButton.addEventListener('click', ()=> {
    history.push('red')
})

const blueButton = document.getElementById('blue')

blueButton.addEventListener('click', ()=> {
    history.push('blue')
})
const greenButton = document.getElementById('green')

greenButton.addEventListener('click', ()=> {
    history.push('green')
})

const historyButton = document.getElementById('history')
historyButton.addEventListener('click', ()=> {

    console.log(history)
})




const person = {
    firstName: 'Jon',
    lastName: 'Fahlberg',
    age: 100,

}
const firstname = person['firstName']
const lastName = person.lastName
console.log("person=", person)

