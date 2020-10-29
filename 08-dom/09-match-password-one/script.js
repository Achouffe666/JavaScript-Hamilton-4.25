/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let start = document.querySelector('#run');
    let pass1 = document.querySelector('#pass-one');
    let pass2 = document.querySelector('#pass-two');


    let pass1Value  = document.querySelector('#pass-one').value;
    let pass2Value = document.querySelector('#pass-two').value;

start.addEventListener('click', () => {

    if (pass1Value === pass2Value) {
        
    } else {
        pass2.style.borderColor ="red";
        pass1.style.borderColor ="red";
    }

});

    // your code here

})();
