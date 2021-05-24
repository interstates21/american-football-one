
    // Selects the color buttons
    const orangeColor = document.getElementById('orange');
    const greyColor = document.getElementById('grey');
    const brownColor = document.getElementById('brown');
    const yellowColor = document.getElementById('yellow');

    let selectedColor = null;
    let selectedAge = null;

    const STATES = {
        under30: {
            yellow: './pics/giraffe.JPG',
            grey: './pics/gorilla.JPG',
            brown: './pics/monkey.JPG',
            orange: './pics/kenguru.JPG',
        },
        above30: {
            yellow: './pics/lion.JPG',
            grey: './pics/koala.JPG',
            brown: './pics/sloth.JPG',
            orange: './pics/tiger.JPG',
        }
    }


    // Create a function to reuse this code for every color button
    const setAllButtonsBorderToNone = () => {
        const allColorButtons = document.querySelectorAll('.color');
        // Naive approach: access an array element one by one
        // allColorButtons[0].style.border = 'none'
        // allColorButtons[1].style.border = 'none'
        // allColorButtons[2].style.border = 'none'
        // allColorButtons[3].style.border = 'none'
        let index = 0;
        while (index < allColorButtons.length) {
            //Repeat a code for all the elements in the array
            allColorButtons[index].style.border = 'none';
            index = index + 1;
        }
    }

    const setAgeBordersToNone = () => {
        const allAgeButtons = document.querySelectorAll('.age');
        let index = 0;
        while (index < allAgeButtons.length) {
            //Repeat a code for all the elements in the array
            allAgeButtons[index].style.border = 'none';
            index = index + 1;
        }
    }

    orangeColor.addEventListener('click', () => {
        selectedColor = 'orange'
        setAllButtonsBorderToNone()
        orangeColor.style.border = '5px solid red';
    })
    greyColor.addEventListener('click', () => {
        selectedColor = 'grey'
        setAllButtonsBorderToNone();
        greyColor.style.border = '5px solid grey';
    })
    brownColor.addEventListener('click', () => {
        selectedColor = 'brown'
        setAllButtonsBorderToNone()
        brownColor.style.border = '5px solid brown';
    })
    yellowColor.addEventListener('click', () => {
        selectedColor = 'yellow'
        setAllButtonsBorderToNone()
        yellowColor.style.border = '5px solid yellow';
    })

    // Selects the age buttons
   const less = document.getElementById('less-then-30')
   const more = document.getElementById('more-then-30')

   less.addEventListener('click', () => {
       selectedAge = 'under30';
       setAgeBordersToNone();
       less.style.border = '5px solid green';
   })

   more.addEventListener('click', () => {
        selectedAge = 'above30';
        setAgeBordersToNone();
        more.style.border = '5px solid green';
   })

             
    const submitButton = document.querySelector('button[type="submit"]');


    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent any strange browser default behaviour (needed for submit buttons)
        console.log('clicked submit button')


        // !selectedColor is similar to selectedColor === null
        if (!selectedColor || !selectedAge) {
            alert('Select age and color 👿');
            // Stops this function if something has not selected
            return ;
        }

        const totemMessageElement = document.querySelector('#answer-message');
    
        totemMessageElement.innerHTML = `Congratulations!
        <br /> <span style="background: yellow;">This</span> is your totem animal!`
        // On submit button clicked it updated the final messsage from 'Nothing to' to Congrat...

        const createdAnimal = document.createElement('img');

        // STATES.under30.grey
        createdAnimal.src = STATES[selectedAge][selectedColor];
        // It creates and empty html element, but doesn't put it to HTML

        const pictureHolderElement = document.querySelector('#totem');

        // Remove all of the children (pictures) from our #totem element
        pictureHolderElement.innerHTML = '';
    
        pictureHolderElement.appendChild(createdAnimal);
        // It injects an img element into the #totem
    })


        