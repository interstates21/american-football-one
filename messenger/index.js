
const main = () => {

    let nextMessageId = 0;
    const MESSAGES = []


    



    const deleteMessage = (messageId) => {
        const foundTargetIndex = MESSAGES.findIndex(currentElement => {
            if (currentElement.id === messageId) {
                return true;
            }
            return false
        })


        // Array.findIndex returns -1 in case we couldn't find the right object (element) 
        if (foundTargetIndex !== -1) {
            MESSAGES.splice(foundTargetIndex, 1);
        }
        else {
            alert('Invalid ID!!!')
        }
    }

    const sendButton = document.getElementById("send-button")
    window.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSendButtonClick()
    }
})

    sendButton.addEventListener("click", () => {
        handleSendButtonClick()
    }) 


    const handleSendButtonClick = () => {
        const inputDiv = document.getElementById("input-text")
        const inputData = inputDiv.value
        inputDiv.value = ""

        pushMessage(inputData)
        console.log(MESSAGES)
        
        displayOneMessage(MESSAGES[MESSAGES.length-1]);
    }

    const pushMessage = (text) => {
        MESSAGES.push({
      id: nextMessageId,
      text: text,
    })
    nextMessageId++;
    }
    
    let selectedText = null;

    const displayOneMessage = (message) => {
        
        const messageArea = document.getElementById('messages-area');
    
        const newMessage = document.createElement('div');
        newMessage.classList.add('one-message');

        if (message.id === 0) {
            newMessage.classList.add('message-selected')
        }
    
        newMessage.innerText = message.text;
        messageArea.appendChild(newMessage);
       
       
         newMessage.addEventListener('click',()=>{
          let selectedText = newMessage.innerText
            const idIntex = MESSAGES.findIndex(currentElement => currentElement.id ===message.id )
           
         const deleteedit = document.getElementById('deled');

            deleteedit.style.display='block';

            
            const deletebutton =document.getElementById('delete-button')
            deletebutton .addEventListener('click',()=>{
                deleteMessage (MESSAGES[idIntex].id)
                newMessage.style.display="none"
                deleteedit.style.display="none";

            })
         })
        

                 
}

    const displayMessagesForAllArray = () => {
      for (let i = 0; i < MESSAGES.length; i++) {
            displayOneMessage(MESSAGES[i]);
        }
    }


    const editMessage = (messageId, newText) => {
        console.log(`Edited ${messageId}: ${newText}`)
    }
    

    // pushMessage('Hello');
    // pushMessage('Hello1');
    // pushMessage('Hello2');
    // pushMessage('Hello3');
   
}

main() 


