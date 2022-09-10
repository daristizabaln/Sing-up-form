const btnForm = document.querySelector('input[type=submit]');

const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

btnForm.addEventListener('click', e=>{
  e.preventDefault();
  
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(fNameValue == ""){
    deleteFunc(fName)
    errorFunc('First Name cannot be empty', fName)
  }else{
    deleteFunc(fName)
  }

  if(lNameValue == ""){
    deleteFunc(lName)
    errorFunc('Last Name cannot be empty', lName)
  }else{
    deleteFunc(lName)
  }

  if(emailValue== ""){
    deleteFunc(email)
    errorFunc('Email cannot be empty', email)
  }else {  
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    deleteFunc(email)
    if(!re.test(emailValue)){
      errorFunc('Looks like this is not an email', email, emailValue);
    }
  }
  if(passwordValue== ""){
    deleteFunc(password)
    errorFunc('Password cannot be empty', password)
  }else{
    deleteFunc(password)
  }
  
})

function errorFunc(message, element, emailPLace = false ){
    const p = document.createElement('p')
    p.textContent = message;
    p.classList.add('form__input-text-error');  
    element.insertAdjacentElement('afterend', p)
    element.classList.add('form__input--error')
    element.placeholder = ""

    if(emailPLace){
      element.value = ""
      email.placeholder= emailPLace
      

    }
  }
  
  function deleteFunc(element){
    if(element.nextElementSibling.classList.contains('form__input-text-error')){
      element.nextElementSibling.remove()
      element.classList.remove('form__input--error')
  }
}

