let botonRegistrar = document.getElementById("sign-up-btn")

botonRegistrar.addEventListener("click", function crearUsuario(e){
    e.preventDefault();
    // obtener valores del register
    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("username1").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if (password2 != password1) {
        alert("Passwords not match");
    } if (password1.length < 4) {
        alert("Password must have at least 8 characters");
    } else {
        //Encriptacion de la contrasena
        password1 = btoa(password1);
        // objeto con los datos que se obtuvieron del registerUser
        var user = new Object(); //Siendo user.attr, attr debe coincidir con el nombre de la variable en Java
        user.userName = name;
        user.email = email;
        user.password = password1;
        user.full_name = fullName;

        let registerUserJson = JSON.stringify(user);

        fetch(`http://localhost:8080/users/display/${name}`, {  
        method: 'GET',
        })
            .then(res => res.json())
            .then(data => { 
                if(name == data.user_name){
                  alert("Username is already in use");
                }
        })
        .catch((error) => {
          console.log(error);
          fetch('http://localhost:8080/users/addnew', {  
                method: 'POST',
                body: registerUserJson,
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
                  location.href="/login-user.html";
              });
        });
    }
});

// acceder a la base de datos login
  document.getElementById("sign-in-btn").addEventListener("click", function singup (e){
    e.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    password = btoa(password);

    console.log(password)
    fetch(`http://localhost:8080/users/display/${username}`, { 
             method: 'GET',
             })
                 .then(res => res.json())
                 .then(data => {
                     
                   if(password == data.password && username == data.userName){
                     alert ("You have logged in successfuly");
                    location.href="/index.html";
                  }else{
                     alert("Username or Password incorrect try again");
                  }

                 })
             .catch((error) => {
                console.error("error",error);
                 alert("User does not exists");
             }); 
          });

