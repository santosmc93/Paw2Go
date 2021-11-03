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
    // objeto con los datos que se obtuvieron del fromulario de register
    var user = new Object();
    user.admin_username = name;
    user.admin_email= email;
    user.admin_password = password1;

     // conexion con base de datos  register 
    let userJson = JSON.stringify(user);

    fetch(`http://localhost:8080/admin/display/${name}`, {  
            method: 'GET',
            })
                .then(res => res.json())
                .then(data => { 
                    if(name == data.admin_username){
                      alert("Username is already in use");
                  
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
                      location.href="/login.html";
                  });
            });
    }
  });

// acceder a la base de datos login

document.getElementById("LOGIN").addEventListener("click", function Login (e){
  e.preventDefault();

  let Username = document.getElementById("Username").value;
  let password = document.getElementById("password").value;
  password = btoa(password);

  fetch(`http://localhost:8080/admin/display/${Username}`, { 
            method: 'GET',
            })
                .then(res => res.json())
                .then(data => { 
                  if(password == data.admin_password && Username == data.admin_username){
                    alert ("You have logged in successfuly")
                    location.href="/addItem.html";
                  }else{
                    alert(" Username or Password incorrect try again");
                  }
                
            })
            .catch((error) => {
                console.error("error",error);
                alert("user does not exists");
            }); 
          });
