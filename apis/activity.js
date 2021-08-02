

const getActivity = () => {
    fetch("https://www.boredapi.com/api/activity")
    .then(response => {
        // Display the server response. 200 - success, 40(?), 500 - error
        console.log("response =", response)
	    return response.json()
    })
    .then(data => {
        // Here you get the data object, you should see the format in console, and use it!
        console.log("data =", data)
    })
    .catch(err => {
	    console.error("err = ", err);
    });
}

getActivity()