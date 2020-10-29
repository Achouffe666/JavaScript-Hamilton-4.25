/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let choosedYear = document.getElementById('year').value;
    let run = document.getElementById('run');
    let date = new Date (choosedYear);
    let month = date.setMonth(0);
    let dayThirteen = date.setDate(13);
    let weekDay = date.getDay();



  


    run.addEventListener('click', () => {
        for (let i = month; i < 12; i++) {

            console.log("yeah");
            
        }
    })

 




})();
