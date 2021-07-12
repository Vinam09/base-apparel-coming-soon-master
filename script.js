const email = document.getElementById('email-address')
const message = document.getElementById('message')
const form = document.getElementById('form');
const errorIcon = document.getElementById('error-icon')

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInput();
})

function checkInput(){
  if((email.value === '') || (!isEmail(email.value))){
    errorIcon.style.visibility = "visible";
    message.textContent = "Please provide a valid email";
    document.getElementById("email-flex-container").style.borderColor = "hsl(0, 93%, 68%)";
    message.style.color = "hsl(0, 93%, 68%)";

  }else{
    document.getElementById("email-flex-container").style.borderColor = "hsla(0, 36%, 70%,0.25)";
    errorIcon.style.visibility = "hidden";
    message.textContent = "Thank you!";
    message.style.color = "hsl(0, 36%, 70%)";
  }
}

function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
