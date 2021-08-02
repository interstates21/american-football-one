const getMonster = () => {
    fetch("https://app.pixelencounter.com/api/basic/monsters/random/png?size=100", {
        method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json'}
    })
    .then(response => {
        console.log("response =", response)
	    return response.json()
    })
    .then(data => {
        console.log("data =", data)
    })
    .catch(err => {
	    console.error("err = ", err);
    });
}

getMonster()