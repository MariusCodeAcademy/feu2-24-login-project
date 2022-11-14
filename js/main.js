import { getData } from './modules/fetch.js';
console.log('main.js');

// taikomes
const loginForm = document.forms[0];

// parsisiusti visus vartotojus https://reqres.in/api/users?page=1

getData('https://reqres.in/api/users?page=1').then((dataInJs) => {
  console.log('dataInJs ===', dataInJs.data);
});

const age = 45; // nesimato per konsole
console.log('age ===', age);
// window.myAge = 1000;
// surinkti formos duomenis

loginForm.addEventListener('submit', loginHandler);

function loginHandler(event) {
  // sustabdyti forma
  // surinkti inputus
}

// issiusti prisiloginti POST https://reqres.in/api/login

// jei duomenys yra tokie :
// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }
