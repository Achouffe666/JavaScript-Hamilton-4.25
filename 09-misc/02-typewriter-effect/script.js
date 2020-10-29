/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.querySelector('#target');
    let targetSplit = target.innerHTML.split('');
    let letters = [];
    let index = 0;

    targetSplit.forEach(letter => {
        letters.push(letter);
    });

    target.innerHTML = "";

        for (let i = 0; i < letters.length; i++) {
            let random = Math.random() * (500 - 100) + 100;

                setTimeout(()=>{
                    target.innerHTML = target.innerHTML + letters[index];
                    index++;
                },i*random);
          
            
        }
       



})();
