const btn = document.getElementById('sendButton');
const inputs = document.querySelector('form');

btn.addEventListener('click', ()=> {
    Email.send({
    SecureToken : "9e452cc5-4070-4d9a-bd95-6f608572c380 ",
    To: "marco.g.gleztorres@gmail.com",
    From:inputs.elements["email"].value,
    Subject: "Contacto - Paw2Go!",
    Body:"Buen día, recibiste el siguiente mensaje desde la pagina web." + 
    "<br>" + "<br>" 
    + "De: " +inputs.elements["firstName"].value + " " + inputs.elements["lastName"].value + 
    "<br>" 
    + "Teléfono: " + inputs.elements["phone"].value + 
    "<br>" 
    +"Su mensaje: " + inputs.elements["message"].value
}).then(msg => alert("Tu mensaje se envio de forma exitosa"))
});

