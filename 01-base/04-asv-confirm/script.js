/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let age = prompt("How old are you?");
    let gender = prompt ("What is you gender?");
    let town = prompt ("Where do you live?");

    let confirmation = confirm("You are " + age + " years old, you are a " + gender + ", and you live in " + town);

    if (confirmation == false) {
        location.reload();
    } else {
        
    }

})();
