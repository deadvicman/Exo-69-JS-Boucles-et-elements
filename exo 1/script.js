let course = document.getElementById('liste-commissions');
let newElement = document.createElement("li");
newElement.innerText = "beurre";
course.appendChild(newElement);

let button = document.getElementById('envoyer');
button.addEventListener('click', function () {
    console.log("Mon bouton a été déclanché!");
    this.style.backgroundColor = 'blue';

});



let bouton = document.getElementById('supprimer');
bouton.addEventListener('click', function () {
    course.querySelector("li:last-child").remove();
});