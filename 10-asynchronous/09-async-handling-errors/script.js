/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    async function getPersons(myFunction) {
        try {
            let response = await myFunction;
            return response;
            
        } catch (error) {
            console.error('An error apreared, try again...')
        }
    }

    document.querySelector('#run').addEventListener('click', ()=>{
        getPersons(window.lib.getPersons()).then((persons)=>console.log(persons))
    })
})();
