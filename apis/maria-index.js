

const getRandomDogPicture = () => {
    fetch("https://random.dog/woof.json")
    .then(response => {
        console.log("response =", response)
	    return response.json()
    })
    .then(data => {
        console.log("data =", data)
        // Use data here
        
        const avatar = document.getElementById("user-avatar")
        avatar.style.backgroundImage = `url("${data.url}")`
        
    })
    .catch(err => {
	    console.error(err);
    });
}

getRandomDogPicture()


const getRandomInt = (max) => {
    // Got from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * max);
}


const getRandomItemfromArray =(dataArray) => {
    return dataArray[getRandomInt(dataArray.length-1)]
}


const getRandomData = () => {
    fetch("https://ghibliapi.herokuapp.com/species")
    .then(response => {
        console.log("response =", response)
	    return response.json()
    })
    .then(data => {
        console.log("data =", data)
        // Use data here
        let randomItem = getRandomItemfromArray(data)    
        const newName = document.getElementById("user-name")
        newName.innerText = randomItem.name

    })
    .catch(err => {
	    console.error(err);
    });
}

getRandomData();


