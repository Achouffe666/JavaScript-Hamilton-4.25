/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let start = document.querySelector('#run');

    let passOneValue = document.querySelector('#pass-one').value;
    let passTwoValue = document.querySelector('#pass-two').value;

    let PassOne = document.querySelector('#pass-one');
    let PassTwo = document.querySelector('#pass-two');

start.addEventListener('click', () => {

    if (passOneValue === passTwoValue) {
        
    } else {
        PassOne.classList.add ("error");
        PassTwo.classList.add ("error");
        
    }
})

})();
