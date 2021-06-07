//We are creating card:

//Card conteiner:

const testConteiner = document.getElementById('test-1-conteiner')
const card = document.createElement('div');
card.className = 'cards';
testConteiner.appendChild(card);

//Question inside of card:

const question = document.createElement('h2')
question.innerText = "Which map is compass oriented?"
card.appendChild(question);

// Image inside of card:

const image = document.createElement('img')
image.src = ".//pics-for-test-1/test-pic-1.JPG"
card.appendChild(image);

//Answers conteiner:

const answersConteiner = document.createElement('div');
answersConteiner.id = 'answers-conteiner';
card.appendChild(answersConteiner);

//Option a: (input and label):

const pic1aConteiner = document.createElement('div');
pic1aConteiner.id = 'pic-1-a-conteiner';
answersConteiner.appendChild(pic1aConteiner);

const input1a = document.createElement('input');
input1a.id = 'pic-1-a';
input1a.type = 'radio';
input1a.name = 'pic-1';
pic1aConteiner.appendChild(input1a);

const label1a = document.createElement('label');
input1a.for = 'pic-1-a';
pic1aConteiner.appendChild(label1a);
label1a.innerText = "a"

//Option b: (input and label):




const pic1bConteiner = document.createElement('div');
pic1bConteiner.id = 'pic-1-b-conteiner';
answersConteiner.appendChild(pic1bConteiner);

//Option c: (input and label):

const pic1cConteiner = document.createElement('div');
pic1cConteiner.id = 'pic-1-c-conteiner';
answersConteiner.appendChild(pic1cConteiner);




