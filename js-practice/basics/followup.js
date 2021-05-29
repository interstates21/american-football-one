const var1 = 'Some contant';

let var2; // No value at all
let var3 = null; // Explicitely set the value to nothing

console.log("var2: ", var2); // undefined
console.log("var3: ", var3); // null

const element = document.getElementById("someDiv");

console.log('element: ', element)

const user = {
    name: 'Jackson',
    username: 'breaker',
    age: 22,
    city: 'New York'
}

console.log('Static object value access', user.age)
console.log('Static object value access with []', user['age'])

const dataKeysToGet = [
    'age',
    'city',
]

console.log("First key: ", user[dataKeysToGet[0]]) // Prints the first key
let i = 0;

while (i < dataKeysToGet.length) {
    console.log("Key: ", user[dataKeysToGet[i]])
    i++;
}

// // Arrow function (recommended)
// // Define a function
// const greetJackFunction1 = () => {
//     const someFirstName = 'Jack'
//     console.log('Hello ' + someFirstName)
// }

// // Call / execute a function
// greetJackFunction1();

// // Regular function
// function greetJackFunction2() {
//     const someFirstName = 'Jack'
//     console.log('Hello ' + someFirstName)
// }
// greetJackFunction2()

// // Old variable function
// const greetJackFunction3 = function() {
//     const someFirstName = 'Jack'
//     console.log('Hello ' + someFirstName)
// }

// greetJackFunction3()


const greet = (personToGreet) => {
    console.log('Hello ' + personToGreet)
}

greet('Nick');
greet('Tom');
greet('Who');