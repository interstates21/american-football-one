

const getRandomDogPicture = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
	    return response.json()
    })
    .then(data => {
        console.log('data =', data)
        const pictureElement = document.getElementById('picture-container')
        pictureElement.style.background = `url("${data.message}") center / cover`
    })
    .catch(err => {
	    console.error(err);
    });
}

getRandomDogPicture();