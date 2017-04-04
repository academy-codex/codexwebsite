var buttonDOM = document.getElementsByClassName("navbtn");
console.log(buttonDOM);

var login = buttonDOM.item(0);
login.addEventListener('mouseover',changeColourLogin);

var signup = buttonDOM.item(1);
signup.addEventListener('mouseover',changeColourSignup);

function changeColourLogin(){
login.classList.remove('blue');
login.classList.add('white');

 setTimeout(function() {
login.classList.remove('white');
login.classList.add('blue');
 }, 1500);
}

function changeColourSignup(){
    signup.classList.remove('blue');
signup.classList.add('white');

 setTimeout(function() {
signup.classList.remove('white');
signup.classList.add('blue');
 }, 1500);
}
