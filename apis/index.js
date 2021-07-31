

const getRandomDogPicture = () => {
    fetch("url")
    .then(response => {
        console.log("response =", response)
	    return response.json()
    })
    .then(data => {
        console.log("data =", data)
        // Use data here
    })
    .catch(err => {
	    console.error(err);
    });
}

getRandomDogPicture();