let btn = document.getElementById('btn');
let firstName = document.getElementById('fname').value;
let lastName = document.getElementById('lname').value;
let telNum = document.getElementById('tnum').value;
let email = document.getElementById('email').value;
let message = document.getElementById('message').value;
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById('closeBtn');
let form = document.getElementById('contactUS');

//Expressions

let eValid = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/;
let nValid =/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/;

//Functions
form.setAttribute("nonvalidate", true)

const formValidation = (event) => {
   event.preventDefault();

  if(validInput(nValid, firstName) && 
  validInput(nValid, lastName) &&
  validInput(eValid, email)
  ){
      console.log(`Name:${firstName} ${lastName}
      Phone number:${telNum}
      Email:${email}
      Message:${message}`);
      displayMessage();
  }else{
    console.log('Incorrect inputs, Please try again');
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


btn.addEventListener('submit', function(){
  formValidation(); 
});



