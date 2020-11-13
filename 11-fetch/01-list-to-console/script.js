/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function heroes(myFunction){
        try {
            let response = await myFunction;
            return response;
            
        } catch (error) {
            console.error('Error, try again')
        }
    }
    // your code here
    document.querySelector('#run').addEventListener('click', ()=>{
        heroes(fetch('http://localhost:3000/heroes'))
        .then((response) => {return response.json()})
        .then((data)=>{console.log(data)})
    })
})();
