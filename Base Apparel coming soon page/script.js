const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit',e =>{

e.preventDefault();//to prevent page reload while click submit button

const emailVal = email.value;
//check email validation
if(!validateEmail(emailVal)){
  form.classList.add('error');
  form.classList.remove('success');
}
else{
    form.classList.remove('error');
    form.classList.add('success');
}
});

//email validation regExp
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}