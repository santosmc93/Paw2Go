document.getElementById("registrar").addEventListener("click", function crear (e){
  e.preventDefault();

  // obtener valores del formulariuo de register
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
    // variable que sirve para saber si un nombre de usuario ya esta dado de alta
    var repetido = false;
    // objeto con los datos que se obtuvieron del fromulario de register
    var user = new Object();
    user.admin_username = name;
    user.admin_email= email;
    user.admin_password = password1;

    let userJson = JSON.stringify(user);

    fetch(`http://localhost:8080/admin/display/${name}`, {  
            method: 'GET',
            })
                .then(res => res.json())
                .then(data => { 
                    if(name == data.admin_username){
                      alert("Username is already in use");
                      console.log("repetido es: ", repetido);
                    }
            })
            .catch((error) => {
              console.log(error);
              repetido = true;
              console.log(repetido);
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
                      alert("You have sucesfully created an account");
                  });
            });

   // conexion con base de datos 
   
    }
  });

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
                    console.log(data[0].admin_username);
                    
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
