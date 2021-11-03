const btn = document.getElementById('sendButton');
const inputs = document.querySelector('form');

btn.addEventListener('click', ()=> {
    if (inputs.elements["email"].value == 0||inputs.elements["firstName"].value == 0||inputs.elements["lastName"].value == 0||inputs.elements["phone"].value == 0 || inputs.elements["message"].value == 0) {
        alert("Te falta algun campo")
    } else {
        Email.send({
            SecureToken: "2183d7cd-b1c8-448b-9494-e28df5ea3c1e",
            To: "paw2go.contacto@gmail.com",
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
    }

});

