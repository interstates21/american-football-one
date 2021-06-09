// let i=1;

// while (i<=10) {

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
image.src = `.//pics-for-test-1/test-pic-1.JPG`
card.appendChild(image);

//Answers conteiner:

const answersConteiner = document.createElement('div');
answersConteiner.id = 'answers-conteiner';
card.appendChild(answersConteiner);

//Option a: (input and label):

const picConteiner = document.createElement('div');
picConteiner.id = `pic-1-conteiner`;
answersConteiner.appendChild(picConteiner);

const input1a = document.createElement('input');
input1a.id = 'pic-1-a';
input1a.type = 'radio';
input1a.name = 'pic-1';
input1a.value = 'a';
picConteiner.appendChild(input1a);

const label1a = document.createElement('label');
input1a.for = 'pic-1-a';
picConteiner.appendChild(label1a);
label1a.innerText = "a"

//Option b: (input and label):


const pic1bConteiner = document.createElement('div');
pic1bConteiner.id = 'pic-1-b-conteiner';
answersConteiner.appendChild(pic1bConteiner);

const input1b = document.createElement('input');
input1b.id = 'pic-1-b';
input1b.type = 'radio';
input1b.name = 'pic-1';
input1b.value = 'b';
pic1bConteiner.appendChild(input1b);

const label1b = document.createElement('label');
input1b.for = 'pic-1-b';
pic1bConteiner.appendChild(label1b);
label1b.innerText = "b"

//Option c: (input and label):

const pic1cConteiner = document.createElement('div');
pic1cConteiner.id = 'pic-1-c-conteiner';
answersConteiner.appendChild(pic1cConteiner);

const input1c = document.createElement('input');
input1c.id = 'pic-1-c';
input1c.type = 'radio';
input1c.name = 'pic-1';
input1c.value = 'c';
pic1cConteiner.appendChild(input1c);

const label1c = document.createElement('label');
input1c.for = 'pic-1-c';
pic1cConteiner.appendChild(label1c);
label1c.innerText = "c"

// i++

// }

