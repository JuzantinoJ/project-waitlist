
const addNamenum = document.getElementById('submit-button');
const addContacts = document.getElementById('addContacts');
let newName = document.getElementById('name-input');
let newNumber = document.getElementById('number-input');


// creating an eventlistener for the submit button
addNamenum.addEventListener('click', function () {

 //create a div for new info
 let creatediv = document.createElement('div')
 creatediv.classList.add('input');

 //display the value inside the input and creates a div in the addContact
 creatediv.innerHTML = `Name: ${newName.value}    Contact Number: ${newNumber.value}`


 addContacts.appendChild(creatediv);
 // remove the value inside the inputs
 newName.value = "";
 newNumber.value = "";


 // when clicked once on the contact there will be a line 
 creatediv.addEventListener('click', function () {
  creatediv.style.textDecoration = 'line-through';
  creatediv.style.color = 'red'
 })

 //when clicked twice it will remove the contact
 creatediv.addEventListener('dblclick', function () {
  addContacts.removeChild(creatediv);
 })
});


// ['Name:', newName.value] + ' ' + ['Number:'[newNumber.value]];
// function Err() {
//  if (creatediv.innerHTML === "") {
//   alert("Please insert information")
//  }
// }
// Err();

// //Information Class: Represent the information
// class Information {
//  constructor(name, number) {
//   this.name = name;
//   this.number = number;
//  }
// //UI class: handle ui tasks
// class UI {
//  static displayInfo() {
//   const addContacts = document.getElementById('addContacts');

//   const creatediv = document.createElement('div');
//   creatediv.classList.add('input');
//  }
// }
// //Store class: handles storage

// // Event : display Informations

// //event : add information
// document.getElementById('container').addEventListener('submit', (e) => {
//  e.preventDefault();
 
//  //get form values
//  let newName = document.getElementById('name-input'.value);
//  let newNumber = document.getElementById('number-input').value;

//  //instatiate info
//  const newInfo = new newInfo(newName,newNumber);
// }
// //add info to UI
// UI.displayInfo()

//event : remove information




 