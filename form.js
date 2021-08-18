let btn = document.getElementById('btn');
let firstName = document.getElementById('fname').value;
let lastName = document.getElementById('lname').value;
let telNum = document.getElementById('tnum').value;
let email = document.getElementById('email').value;
let message = document.getElementById('message').value;
let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName('.closeBtn');

//Expressions
//email
let eValid = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/;
//name
let nValid =/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/;

//Functions
const formValidation = () => {

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

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }


btn.addEventListener('click', function(){
    displayMessage();
    //formValidation();
});



