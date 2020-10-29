/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let input = document.querySelector('#pass-one');
    
    input.addEventListener('keyup',()=>{

        let character = input.value.length;

        let passNumbers = input.value.replace(/[^0-9]/g,"").length; //regEx

        if (character>7 && passNumbers > 1) {

        document.querySelector('#validity').innerHTML ="Ok";
            
        } else {
            
        }

  
    })

})();
