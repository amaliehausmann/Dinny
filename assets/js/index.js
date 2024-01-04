// modal

const myModal = document.getElementById('myModal');
const openButton = document.getElementById('booking');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', (event)=> {
event.preventDefault();
myModal.style.display = 'block';
});

closeButton.addEventListener('click', ()=> {
    myModal.style.display = 'none';
});

// Validering

const myForm = document.getElementById('myForm');

const myPeople = document.getElementById('selections');

const myDate = document.getElementById('date');

const myTime = document.getElementById('times');

const myName = document.getElementById('name');
const myNameError = document.getElementById('nameError');

const myEmail = document.getElementById('email');
const myEmailError = document.getElementById('emailError');

const myNumber = document.getElementById('number');
const myNumberError = document.getElementById('numberError');

const myButton = document.getElementById('Confirm');

myPeople.addEventListener('change', function() {
    if(myPeople.value !== ""){
        myPeople.classList.add('valid');
    } else{
        myPeople.classList.remove ('valid');
    }
});

myDate.addEventListener('change', function() {
    if(myDate.value !==""){
        myDate.classList.add('valid');
    }else{
        myDate.classList.remove('valid');
    }
});

myTime.addEventListener('change', function() {
    if(myTime.value !== ""){
        myTime.classList.add('valid');
    }else{
        myTime.classList.remove('valid');
    }
});

myName.addEventListener('input', ()=> {
    if(myName.value.trim().length > 1){
        myName.classList.add('valid');
        myName.classList.remove('invalid');
        myNameError.textContent = "";
        myNameError.style.display = "none";
    }else{
        myName.classList.remove('valid');
        myName.classList.add('invalid');
        myNameError.textContent = "Navn skal være minimum 2 bogstaver";
        myNameError.style.display = "block";
    }
});

myEmail.addEventListener('input', ()=> {
    if(emailValidation(myEmail.value)){
        myEmailError.textContent = '';
        myEmail.classList.remove('invalid');
        myEmail.classList.add('valid');
        myEmailError.style.display = 'none';
    }else{
        myEmailError.textContent = 'Emailen skal være gyldig';
        myEmail.classList.add('invalid');
        myEmail.classList.remove('valid');
        myEmailError.style.display = 'block';
    }
});

myNumber.addEventListener('input', ()=> {
    if(numberValidation(myNumber.value) && myNumber.value.trim().length == 8){
        myNumberError.textContent = '';
        myNumber.classList.remove('invalid');
        myNumber.classList.add('valid');
        myNumberError.style.display = 'none';
    }else{
        myNumberError.textContent = 'Nummeret skal være 8 tal';
        myNumber.classList.add('invalid');
        myNumber.classList.remove('valid');
        myNumberError.style.display = 'block';
    }
});

myButton.addEventListener('click', (e)=> {
    e.preventDefault();
    if(myPeople.value !== "" && myDate.value !=="" && myTime.value !== "" && myName.value.trim().length > 1 && emailValidation(myEmail.value) && numberValidation(myNumber.value) && myNumber.value.trim().length == 8){
        console.log('formular udfyldt korrekt');
        myForm.style.display = 'none';

        let myResponseElement = document.createElement('h2');
        myResponseElement.innerText = 'Tak ' + myName.value + ' vi har nu modtaget din booking til ' + myPeople.value + ' personer ' + ' d. ' + myDate.value  + ' kl: ' + myTime.value;
        myModal.appendChild(myResponseElement);

        myResponseElement.classList.add('thankYou');

        let thankYouElement = document.createElement('h3');
        thankYouElement.innerText = 'Vi glæder os til at se dig!';
        myModal.appendChild(thankYouElement);
        thankYouElement.classList.add('excited');

    } else{
        alert('Formularen skal være udfyldt!');
    }
});

// REGEX

function numberValidation(nummer){
    let numberRegex = /^\d+$/;

    let isValid = numberRegex.test(nummer);

    return isValid;
};

function emailValidation(email){
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = emailRegex.test(email);

    return isValid;
};

