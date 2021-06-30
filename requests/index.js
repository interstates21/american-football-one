

const renderValueToPage = (value) => {
    const valueMessageElement = document.getElementById('value-message');
    valueMessageElement.innerText = value
}

const sendDataButton = document.getElementById('my-button');
sendDataButton.addEventListener('click', (event) => {
    // Prevents browser reloading
    event.preventDefault();

    const userValue = document.getElementById('user-input').value;
    const dinosaurValue = document.getElementById('dinosaur-input').value;


    // Create an object like that:
    // const dataToSend = {
    //     User: userValue,
    //     Dinosaur: dinosaurValue,
    // }
    // But in order to send it we should use special object creation syntax (FormData)
    const formData = new FormData();
    formData.append('User', userValue);
    formData.append('Dinosaur', dinosaurValue);

        // Save those values to the spreadsheet (on google backend server)
    
    // Get connection, Send Request to our database api, POST means we want to send data, not get
    fetch('https://sheet.best/api/sheets/bfea01b5-5946-43f0-bc6b-bd6725705dba', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('data')
        // Request Data. In case of POST it's just some verification data, if saving to the database went well
    })


})

const myInfoButton = document.getElementById('get-info');
myInfoButton.addEventListener('click', (event) => {
    event.preventDefault()

    // Send request to get data;
    fetch('https://sheet.best/api/sheets/bfea01b5-5946-43f0-bc6b-bd6725705dba')
    .then((response) => {
        console.log("response =", response)
        return response.json()
    })
    .then((dataArray) => {
        console.log('dataArray =' ,dataArray)
        const listElement = document.getElementById('list');

        listElement.innerHTML = ''
        
        let i = 0;
        while(i < dataArray.length) {
            const newElement = document.createElement('li');
            newElement.className = 'list-group-item'
            newElement.innerText = `${dataArray[i].User} : ${dataArray[i].Dinosaur}`


            listElement.appendChild(newElement);

            i++;
        }
    })
})