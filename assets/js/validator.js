document.addEventListener('DOMContentLoaded', function() {
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function(e) {
        let email = document.getElementById('email');
        let invalid = document.getElementById('invalid');
        let popupbox = document.getElementById('popupbox');

        if (email.value.trim() === '') {
            e.preventDefault();
            invalid.innerText = 'Le champ email ne peut pas être vide';
            invalid.style.color = 'red';
        } else {
            invalid.innerText = ''; // Effacer le message d'erreur
            popupbox.style.display = 'block'; // Afficher la boîte popup
        }
    });
});
