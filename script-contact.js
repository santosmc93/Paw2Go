const btn = document.getElementById('sendButton');
const inputs = document.querySelector('form');

btn.addEventListener('click', ()=> {
    Email.send({
    Host:"smtp.mailtrap.io",
    Username: "bea55e6deddf9e",
    Password:"54d196e0805283",
    To: "paw2go@gmail.com",
    From:inputs.elements["email"].value,
    Subject: "Contacto - Paw2Go!",
    Body:"Buen dia, recibiste el siguiente mensaje desde la pagina web." + 
    "<br>" + "<br>" 
    + "De: " +inputs.elements["firstName"].value + " " + inputs.elements["lastName"].value + 
    "<br>" 
    + "Teléfono: " + inputs.elements["phone"].value + 
    "<br>" 
    +"Su mensaje: " + inputs.elements["message"].value
}).then(msg => alert("Tu mensaje se envio de forma exitosa"))
});

