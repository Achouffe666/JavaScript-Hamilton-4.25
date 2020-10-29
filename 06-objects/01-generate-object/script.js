/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        let Me = {
            lastname : 'Benard',
            firstname : 'Austin',
            age : 24,
            city : 'Vielsalm',
            country : 'Belgium'
        }



    let start = document.getElementById('run');

    start.addEventListener('click' , () => {

        console.log(Me);

    })
    // your code here
})();
