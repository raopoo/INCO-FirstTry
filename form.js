let btn = document.getElementById('btn');
let firstName = document.getElementById('fname').value;
let lastName = document.getElementById('lname').value;
let telNum = document.getElementById('tnum').value;
let email = document.getElementById('email').value;
let message = document.getElementById('message').value;
let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName('.closeBtn');

//Functions
const formValidation = () => {

}

const displayMessage = () => {
    //Use Modal
    modal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// closeBtn.addEventListener('click', function() {
//   modal.style.display = "none";
// });

// Event Listener
btn.addEventListener('click', function(){
    displayMessage();
    //formValidation();
});

