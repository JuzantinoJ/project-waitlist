
const addNamenum = document.getElementById('submit-button');
const addContacts = document.getElementById('addContacts');
let newName = document.getElementById('name-input');
let newNumber = document.getElementById('number-input');





addNamenum.addEventListener('click', function () {
 let creatediv = document.createElement('div')
 creatediv.classList.add('input');
 creatediv.innerHTML = `Name: ${newName.value}    Contact Number: ${newNumber.value}`
 addContacts.appendChild(creatediv);
 newName.value = "";
 newNumber.value = "";


 // when clicked once on the contact there will be a line 
 creatediv.addEventListener('click', function () {
  creatediv.style.textDecoration = 'line-through';
 })

 //when clicked twice it will remove the contact
 creatediv.addEventListener('dblclick', function () {
  addContacts.removeChild(creatediv);
 })
});

// ['Name:', newName.value] + ' ' + ['Number:'[newNumber.value]];