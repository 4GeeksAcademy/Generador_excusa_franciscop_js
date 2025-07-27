import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


// fUNCION PARA GENERAR UN NUMERO ALEATORIO APARTIR DE UN ARRAY
const generateindexA =(arr) => Math.floor(Math.random()*arr.length)


window.onload = function() {
  //write your code here\
var text =''
const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
const textexcuse = [who,action,what,when]

for (const element of textexcuse) {
  text += ' ' + element[generateindexA(element)];
}
document.getElementById("demo").innerHTML = text;

  console.log(text);
  
};
