
const PRODUCTS = [
    {
        name: "Toy Panda",
        price: 20,
    },
    {
        name: "Little Flower",
        price: 5,
    },
    {
        name: "Doll Barbie",
        price: 123,
    },
    {
        name: "Lego Car",
        price: 150,
    },
]

// Create a function which caluculate the total sum
const totalSum = (array) => {
    let i=0;
    let sum=0;
    while (i<array.length) {
        sum = sum + array[i].price
        i++
    }
    return sum
}


// Create a function which finds the most expensive product

const mostExpensive = (array) => {
    let i=0;
    let most =0;
    while (i<array.length) {
    if (array[i].price > most) {
        most = array[i].price
    }
    i++
    }
    return most
}



// Create a function which changes the price of a given product. Arguments: product name, new price

const changePrice = (array, productName, newPrice) => {
        let i = 0;
        while (i<array.length) {
    if (productName === array[i].name)
    {   array[i].price = newPrice
        break
    }
    i++
    }

}


// Create a function which changes the price of a given product. Arguments: product name, new price

const changePriceInCopy = (array, productName, newPrice) => {
    const copiedArray = array.slice()
    let i = 0;
    while (i<copiedArray.length) {
if (productName === copiedArray[i].name)
{   copiedArray[i].price = newPrice
    break
}
i++
}
return copiedArray
}
console.log(changePriceInCopy(PRODUCTS, "Toy Panda", 900 ))
console.log(PRODUCTS)

// Create a function which adds a new product


// Create a function which takes amount of your money, and returns array of all items you can buy.