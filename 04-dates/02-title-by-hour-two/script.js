/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let target = document.getElementById('target');
    let today = new Date();
    let actualHour = parseInt(today.getHours());
    let actualMinutes = parseInt(today.getMinutes());

    if (actualMinutes < 30 || actualHour < 17) {
        target.innerHTML = "Hello";
    } else {
        target.innerHTML = "Good Evening!!";
    }

    // your code here

})();
