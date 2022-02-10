"use strict"

/******************Variables************************ */
let inputAge, inputPermis, inputAccident, inputAssurance, buttonValider, indiceAssurance, typeAssurance;

/******************Fonctions************************ */
const recup = ()=>{
    let age = parseInt(inputAge.value);
    let permis = parseInt(inputPermis.value);
    let accident = parseInt(inputAccident.value);
    let assurance = parseInt(inputAssurance.value)

    if ((age < 25 && permis < 2 && accident >= 1) ||
        (age < 25 && permis >= 2 && accident >= 2) ||
        (age >= 25 && permis < 2 && accident >= 2) ||
        (accident >= 3)
        ){
        indiceAssurance = -2 /*REFUS*/
    } else if (
        (age < 25 && permis < 2 && accident == 0) ||
        (age < 25 && permis >= 2 && accident == 1) ||
        (age >= 25 && permis < 2 && accident == 1) ||
        (age >= 25 && permis >= 2 && accident == 2)
        ) {
        indiceAssurance = 1 /*ROUGE*/
    } else if (
        (age < 25 && permis >= 2 && accident == 0) ||
        (age >= 25 && permis < 2 && accident == 0) ||
        (age >= 25 && permis >= 2 && accident == 1)
        ) {
        indiceAssurance = 2 /*ORANGE*/
    } else if (
        (age >= 25 && permis >= 2 && accident == 0)
        ) {
        indiceAssurance = 3 /*VERT*/
    }

    if (assurance >= 1) {
        indiceAssurance++
    }

    if (indiceAssurance <= 0) {
        typeAssurance = "Revenez plus tard..."
        Swal.fire("Malheureusement, nous ne pouvons pas vous assurer ! ", typeAssurance, "error")
    } else if (indiceAssurance == 1) {
        typeAssurance = "Rouge"
        Swal.fire("Nous allons pouvoir vour assurer au tarif :", typeAssurance)
    } else if (indiceAssurance == 2) {
        typeAssurance = "Orange"
        Swal.fire("Nous allons pouvoir vour assurer au tarif :", typeAssurance)
    } else if (indiceAssurance == 3) {
        typeAssurance = "Vert"
        Swal.fire("Nous allons pouvoir vour assurer au tarif :", typeAssurance)
    } else if (indiceAssurance == 4) {
        typeAssurance = "Bleu"
        Swal.fire("Nous allons pouvoir vour assurer au tarif :", typeAssurance)
    }
    
}


/******************Execution************************ */

inputAge = document.getElementById('age');
inputPermis = document.getElementById('permis');
inputAccident = document.getElementById('accident');
inputAssurance = document.getElementById('assurance');

buttonValider = document.getElementById("valider");


buttonValider.addEventListener('click', recup);