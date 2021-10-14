//Ejecutando funciones
document.getElementById("btn-signup").addEventListener("click", signUp);
document.getElementById("btn-login").addEventListener("click", login);
window.addEventListener("resize", pageWidth);

//Declarando variables
var formLogin = document.querySelector(".form-login");
var formSignup = document.querySelector(".form-signup");
var containerLoginSignup = document.querySelector(".container-login-signup");
var backBoxLogin= document.querySelector(".box-back-login");
var backBoxSignup = document.querySelector(".box-back-signup");

//Funciones

function pageWidth(){

    if(window.innerWidth > 850){
        backBoxSignup.style.display = "block";
        backBoxLogin.style.display = "block";
    } else {
        backBoxSignup.style.display = "block";
        backBoxSignup.style.opacity = "1";
        backBoxLogin.style.display = "none";
        formLogin.style.display = "block";
        containerLoginSignup.style.left = "0px";
        formSignup.style.display = "none";
    }
}

pageWidth();

function login(){
    if(window.innerWidth > 850){
        formSignup.style.display = "none";
        containerLoginSignup.style.left = "10px";
        formLogin.style.display = "block";
        backBoxSignup.style.opacity = "1";
        backBoxLogin.style.opacity = "0";
    }else {
        formSignup.style.display = "none";
        containerLoginSignup.style.left = "0px";
        formLogin.style.display = "block";
        backBoxSignup.style.display = "block";
        backBoxLogin.style.display = "none";
    }
}

function signUp(){

    if (window.innerWidth > 850) {
        formSignup.style.display = "block";
        containerLoginSignup.style.left = "410px";
        formLogin.style.display = "none";
        backBoxSignup.style.opacity = "0";
        backBoxLogin.style.opacity = "1";
    } else {
        formSignup.style.display = "block";
        containerLoginSignup.style.left = "0px";
        formLogin.style.display = "none";
        backBoxSignup.style.display = "none";
        backBoxLogin.style.display = "block";
        backBoxLogin.style.opacity = "1";
    }
}