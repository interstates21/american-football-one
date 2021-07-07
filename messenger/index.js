
const main = () => {

    let nextMessageId = 0;
    const MESSAGES = []

    const sendMessage = (text) => {
        MESSAGES.push({
            id: nextMessageId,
            text: text,
        })
        nextMessageId++;
    }

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


    const displayMessages = () => {
        for (let i = 0; i < MESSAGES.length; i++) {
            createMessage(MESSAGES[i]);
        }
    }

    const createMessage = (message) => {
        const messageArea = document.getElementById('messages-area');
    
        const newMessage = document.createElement('div');
        newMessage.classList.add('one-message');

        if (message.id === 0) {
            newMessage.classList.add('message-selected')
        }
    
        newMessage.innerText = message.text;
    
        messageArea.appendChild(newMessage);
    }


    const editMessage = (messageId, newText) => {
        console.log(`Edited ${messageId}: ${newText}`)
    }
    
    
    sendMessage('Hello');
    sendMessage('Hello1');
    sendMessage('Hello2');
    sendMessage('Hello3');

    displayMessages();



}

main()