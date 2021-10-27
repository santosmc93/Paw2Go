// fetch('http://localhost:8080/')
//   .then(response => response.json())
//   .then(data => console.log(data));


fetch('http://localhost:8080/users/display', {  
            method: 'GET',
            })
                .then(res => res.json())
                .then(data => { 
                    console.log(data);
                    aidi = data.length+1;

            })
            .catch((error) => {
                console.error("error",error);
                console.log("fallo :(");
            });

function numeroid (dato){
    let ultimoId = dato.length;
    console.log(ultimoId);
    return ultimoId;
}


//Evento para inicializar el evento de registro de usuarios1

document.getElementById("sign-up-btn").addEventListener("click", function registracion(e){
    e.preventDefault();

    let fullName = document.getElementById("full-name"). value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("username1").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let idUser = 11;

    var user = new Object();
        user.user_name = name;
        user.email = email;
        user.password = password1;
        user.full_name = fullName;
        user.id_users = aidi;

        var userjson = JSON.stringify(user);

        fetch('http://localhost:8080/users/addnew', {  
            method: 'POST',
            
            body: userjson,
            headers: {
                'Content-Type': 'application/json'
            }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    
            })
            .catch((error) => {
                console.error("error",error);
            });

});

let eliminar = document.getElementById("eliminar-btn");
eliminar.addEventListener("click", function (e){
    e.preventDefault();
    fetch('http://localhost:8080/users/delete/12', {  
            method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => { 
                    console.log(data);

            })
            .catch((error) => {
                console.error("error",error);
                console.log("fallo :(");
            });
})

//Funcion de registro de usuario
function registerUser() {
    // obtener valores del register
    let fullName = document.getElementById("full-name"). value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("username1").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    // if (password2 != password1) {
    //     alert("Passwords not match");
    // } if (password1.length < 8) {
    //     alert("Password must have at least 8 characters");
    // } else {

        //Encriptacion de la contrasena
        password1 = btoa(password1);
        // objeto con los datos que se obtuvieron del registerUser
        var user = new Object();
        user.user_name = name;
        user.email = email;
        user.password = password1;
        user.full_name = fullName;
        user.id_users = 9;
        //Guarda las variables en formato JSON en una nueva variable llamada local
        var local = JSON.stringify(user);
        localStorage.setItem(`user data`, local);
        console.log(local);

        fetch('http://localhost:8080/users/addnew', {
            method: 'POST',
            mode: "no-cors",
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id_users: '9', full_name: 'Carlos Santos', user_name: 'Santos' , email: 'pp@pp.com', password: '123' }),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
            })
            .catch((error) => {
                console.error("error",error);
            });
        // alert que se creo la cuenta
        alert("You have sucesfully created a account");
    //}
}

//Validacion al hacer login
var attempt = 3; // Variable para contar los intentos restantes
//Evento para inicializar el evento de ingreso de usuarios
document.getElementById("sign-in-btn").addEventListener("click", function validate(e){
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    password = btoa(password);
    let usuario = JSON.parse(localStorage.getItem(`user data`));
    if (username == usuario.name && password == usuario.password){ 
    alert ("You sign in successfully");
    window.location = "index.html"; // Redirecting to other page.
    return false;
    }
    else{
    attempt --;// Decrementa en uno la cantidad de intentos
    alert("You have " + attempt +" attempts left");
    // Desabilita los campos tras tres intentos fallidos de login
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
    }
    });
//Funcion para hacer login
