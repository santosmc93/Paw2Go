
// variables para los usuarios iniciando 0 actualizando cada que se agrega 
// var i = localStorage.setItem("i", 0);
// if(localStorage.getItem("i") !=0){
//   i = localStorage.getItem("i");
// }else{
//   i = 0;
// }

document.getElementById("registrar").addEventListener("click", function crear (e){
  e.preventDefault();
//Funcion para crear usuarios 
//function crear(){}
  // obtener valores del register
  let name = document.getElementById("Username1").value;
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  // verificacion de contraseñas

  if(password2 !=password1){
    alert (" Passwords not match"); 
  }if(password1.length < 8){
    alert( "Password must have at least 8 characters");
  }else{ 
    //encriptacion de contraseñas
    password1 = btoa(password1);
    // variable que sirve para saber si un correo esta dado de alta
    var correo = false;
    // objeto con los datos que se obtuvieron del register
    var user = new Object();
    //  user.id = i;
    user.admin_username = name;
    user.admin_email= email;
    user.admin_password = password1;

    console.log(user);
   // conexion con base de datos 
  
   let userJson = JSON.stringify(user);

   console.log(userJson);

   fetch('http://localhost:8080/admin/newAdmin', {  
    method: 'POST',
    body: userJson,
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
   

    // bucle busca usuario por usuario  si el correo fue dado de alta
    // for(let cont=0; cont<i; cont++){
    //   let usuario = JSON.parse(localStorage.getItem(`usuario${cont}`));
    //   if(usuario.mail === user.mail){
    //     correo = true;
    //   }
    // }
    // if(correo){ // si el correo ya esta registrado manda alerta
     // alert("Email you have provided is already in use");
    //}else{ 
      // si no esta dado de alta pasa datos a json y guardar en almacenamiento
     // no se necesita con base de datos
     // var local = JSON.stringify(user);
     // localStorage.setItem(`usuario${i}
     //`,local);
      
      // alert que se creo la cuenta
      alert("You have sucesfully created a account");
      
      // se incrementa el contador  de usuarios y se actualiza 
      // no se necesita con base de datos
      //i++;
      //localStorage.setItem("i", i);
      //Redirige, esta linea se movio de lugar, estaba justo despues del alert
      
      location.href="/login.html";
    }
  });


/* LOGIN */

// solo en almacenamiento local
// var j = localStorage.getItem("i");
// let check = false;
// document.getElementById("LOGIN").addEventListener("click", function Login (e){
//   e.preventDefault();

//   let Username = document.getElementById("Username").value;
//   let password = document.getElementById("password").value;
//   password = btoa(password);


// for(let cont=0; cont< i ; cont++){
//   let usuario= JSON.parse(localStorage.getItem(`usuario${cont}`));
//   if(usuario.name === Username && usuario.password === password){
//     check = true;
//   }
// }
// if(check){
//   location.href="/addItem.html";
// }else{
//   alert(" Username or Password incorrect");
// }
// });	

// acceder a la base de datos
let check = false;
document.getElementById("LOGIN").addEventListener("click", function Login (e){
  e.preventDefault();

  let Username = document.getElementById("Username").value;
  let password = document.getElementById("password").value;
  password = btoa(password);

fetch('http://localhost:8080/admin/display', {  
            method: 'GET',
            })
                .then(res => res.json())
                .then(data => { 
                    console.log(data[0]);
                    
            })
            .catch((error) => {
                console.error("error",error);
                console.log("fallo :(");
            }); 
            if(check){
              location.href="/addItem.html";
            }else{
              alert(" Username or Password incorrect");
            }
          });
