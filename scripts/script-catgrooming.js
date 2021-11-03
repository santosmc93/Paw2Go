//Variables para cada input
const customerName = document.getElementById('customerName');
const customerPhone = document.getElementById('customerPhone');
const customerPhoneAlter = document.getElementById('customerPhoneAlter');
const customerEmail = document.getElementById('customerEmail');
const catName = document.getElementById('catName');
const catAge = document.getElementById('catAge');
const catBreed = document.getElementById('catBreed');
const additionalInstructions = document.getElementById('additionalInstructions');
const catDate = document.getElementById('catDate');
const catHour =  document.getElementById('catHour');


document.getElementById('SubmitButton').addEventListener('click', ()=> {
    if (customerName.value == 0||customerPhone.value == 0||customerPhoneAlter.value == 0||customerEmail.value == 0 || catName.value == 0||catAge.value == 0 || ageType.value == 0||catBreed.value == 0|| additionalInstructions.value == 0|| catDate.value == 0||catHour.value == 0) {
        alert("You are missing a field")
    } else {
        Email.send({
            SecureToken: "2183d7cd-b1c8-448b-9494-e28df5ea3c1e",
            To: "paw2go.contacto@gmail.com",
            From: customerEmail.value,
            Subject: "Citas para gatos - Paw2Go!",
            Body:"Buen dia, recibiste se ha creado una nueva cita a traves del sitio web." + 
            "<br>" + "<br>" 
            + "De: " +customerName.value + 
            "<br>" 
            + "Teléfono: " + customerPhone.value + " Teléfono alternativo: " + customerPhoneAlter.value + 
            "<br>" + "Datos de la mascota: " + catName.value + ", " + catAge.value +  ", " + catBreed.value + "<br>" + "El dia y hora: " + catDate.value + " " + catHour.value + "<br>"
            +"Instrucciones adicionales: " + additionalInstructions .value
        }).then(msg => alert("We have received your request, you can close the window, thank you"))
    }

});

