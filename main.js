(function () {
    'use strict'

    //Déclaration du formulaire 
    let form = document.getElementById('lessonForm');

    //Lance la function dès que le form est submit
    form.addEventListener('submit', function (event) {

        // Boucle sur chaque élément du form avec forEach
        Array.from(form.elements).forEach((input) => {
            //Lance la fonction pour chaque input différent de submit
            if (input.type !== "submit") {
                if (!validateFields(input)) {

                    event.preventDefault();
                    event.stopPropagation();

                    input.classList.remove("is-valid");
                    input.classList.add("is-invalid");
                    input.nextElementSibling.style.display = 'block';
                }
                else {
                    input.nextElementSibling.style.display = 'none';
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                }
            }
        });
    }, false)
})()

// Validation d'un champ REQUIRED
function validateRequired(input) {
    return !(input.value == null || input.value == "");
}

//Validation du nombre de caractéres : min et max
function validateLength(input, minLength, maxLength){
    return !(input.value.length < minLength || input.value.length > maxLength);
}

//Validation des caractères : LATIN && LETTRES
function validateText(input){
    return input.value.match("^[A-Za-z]+$");
}

//Validation du mail
function validateEmail(input){
    let EMAIL = input.value;
    let POSAT = EMAIL.indexOf("@");
    let POSDOT = EMAIL.lastIndexOf(".");

    return !(POSAT < 1 || (POSDOT - POSAT < 2));

}

//Validation du code postal (min 5 nb)
function validatepostCode(input){
    return input.value.match("^(0[1-9]|[1-9][0-9])[0-9][0-9][0-9]$")
}

//Validation de l'adresse
function validateAdress(input){
    return input.value.match(/^\s*\S+(?:\s+\S+){2}/);
}

 // Validation du Numéro de téléphone
 function validatePhoneNumber(input) {
    return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
}

// Validation d'un checkbox
function validateTerms(input) {
    return input.checked;
}


//Fonction de validation des champs
function validateFields(input) {

    let fieldName = input.name;

    // Validaton de l'input PRENOM
    if (fieldName == "firstName" || fieldName == "lastName") {
        if (!validateRequired(input)) {
            return false;
        }

        if (!validateLength(input, 2, 20)){
            return false;
        }

        if (!validateText(input)){
            return false;
        }

        return (true);
    }

    if (fieldName == "email"){
        if (!validateEmail(input)){
            return false;
        }
        return(true);
    }

    if (fieldName == "postCode"){
        if (!validatepostCode(input)){
            return false;
        }
        return (true);
    }

    if (fieldName == "address"){
        if (!validateAdress(input)){
            return false;
        }
        return (true);
    }

    if (fieldName == "phoneNumber"){
        if (!validatePhoneNumber(input)){
            return false;
        }
        return (true);
    }

    if (fieldName == "conditions") {
        if (!validateTerms(input)) {
            return false;
        }

        return (true);
    }

     // Validaton de l'input VILLE
     if (fieldName == "city") {
        if (!validateRequired(input)) {
            return false;
        }

        return (true);
    }
}

