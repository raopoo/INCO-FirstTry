let btn = document.getElementById('btn');
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let telNum = document.getElementById('tnum');
let email = document.getElementById('email');
let message = document.getElementById('message');
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById('closeBtn');
let form = document.getElementById('contactUS');

//Expressions

let eValid = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/;
let nValid =/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/;
let phValid = /^((\+61\s?)?(\((0|02|03|04|07|08)\))?)?\s?\d{1,4}\s?\d{1,4}\s?\d{0,4}$/

//Functions
form.setAttribute("nonvalidate", true)

const formValidation = (event) => {
   alert('submit was clicked');
   event.preventDefault();

  if(validInput(nValid, firstName) && 
  validInput(nValid, lastName) &&
  validInput(eValid, email)
  ){ 
    if(telNum.value === ''){
      console.log(`Name:${firstName.value} ${lastName.value}
      Email:${email.value}
      Message:${message.value}`);
      displayMessage();
    }else if(validInput(phValid, telNum)){
      console.log(`Name:${firstName.value} ${lastName.value}
      Phone number:${telNum.value}
      Email:${email.value}
      Message:${message.value}`);
      displayMessage();
    }else{
        console.log('Incorrect inputs, Please try again');
    }
  }
}
const validInput = (regex,input) => {
  return regex.test(input.value);
}

const displayMessage = () => {
    modal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//When the user clicks on close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
  form.reset();
}

btn.addEventListener('click',formValidation);



