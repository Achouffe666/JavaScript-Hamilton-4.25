/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let run = document.getElementById('run')
    let birthYear = document.getElementById('dob-year').value; 
    let birthMonth = document.getElementById('dob-month').value;
    let birthDay = document.getElementById('dob-day').value;

    let date = new Date();
    let actualDay = parseInt(date.getDate());
    let actualMonth = parseInt(date.getMonth());
    let actualYear = parseInt(date.getFullYear()); 


    run.addEventListener('click', () => {

        if (birthMonth < actualMonth || birthDay < actualDay) {
            alert("you are " + (actualYear - birthYear) + " years and you will turn " + (actualYear - birthYear+ 1) + " on " + birthDay + ", " + birthMonth +" "+ (actualYear+1));
        } else {
            alert("you are " + (actualYear - birthYear -1) + " years and you will turn " + (actualYear - birthYear) + " on " + birthDay + ", " + birthMonth +" "+ (actualYear+1));
        }
        
    });


    


    // your code here

})();
