//const btn = document.getElementById('SubmitButton');
//const inputs = document.querySelector('form');

//Variables para cada input
const customerName = document.getElementById('customerName');
const customerPhone = document.getElementById('customerPhone');
const customerPhoneAlter = document.getElementById('customerPhoneAlter');
const customerEmail = document.getElementById('customerEmail');
const dogName = document.getElementById('dogName');
const dogAge = document.getElementById('dogAge');
const ageType = document.getElementById('age');
const dogBreed = document.getElementById('dogBreed');
const additionalInstructions = document.getElementById('additionalInstructions');
const dogDate = document.getElementById('dogDate');
const dogHour =  document.getElementById('dogHour');


document.getElementById('dogSubmitButton').addEventListener('click', ()=> {
    if (customerName.value == 0||customerPhone.value == 0||customerPhoneAlter.value == 0||customerEmail.value == 0 || dogName.value == 0||dogAge.value == 0 || ageType.value == 0||dogBreed.value == 0|| additionalInstructions.value == 0|| dogDate.value == 0||dogHour.value == 0) {
        alert("You are missing a field")
    } else {
        Email.send({
            SecureToken: "2183d7cd-b1c8-448b-9494-e28df5ea3c1e",
            To: "paw2go.contacto@gmail.com",
            From: customerEmail.value,
            Subject: "Citas para perros - Paw2Go!",
            Body:"Buen dia, recibiste se ha creado una nueva cita a traves del sitio web." + 
            "<br>" + "<br>" 
            + "De: " +customerName.value + 
            "<br>" 
            + "Teléfono: " + customerPhone.value + " Teléfono alternativo: " + customerPhoneAlter.value + 
            "<br>" + "Datos de la mascota: " + dogName.value + ", " + dogAge.value +  ", " + dogBreed.value + "<br>" + "El dia y hora: " + dogDate.value + " " + dogHour.value + "<br>"
            +"Instrucciones adicionales: " + additionalInstructions .value
        }).then(msg => alert("We have received your request, you can close the window, thank you"))
    }

});

