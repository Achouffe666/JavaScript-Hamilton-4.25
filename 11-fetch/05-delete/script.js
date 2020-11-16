/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let heroTab = [];
    // your code here
     async function hero (myFunction) {
         try {
             let response = await myFunction;
             return response;
         } catch (error) {
             console.error('Error');
         }
     }

     hero(fetch('http://localhost:3000/heroes'))
     .then((response)=>{return response.json()})
     .then((data)=>{data.forEach(element => {
         heroTab.push(element);
         return element.id;
     });})

     console.log(heroTab);



     document.querySelector('#run').addEventListener('click',() =>{

        let choosedHero = document.querySelector('#hero-id').value;

        heroTab.forEach(element => {
            if(element.id == choosedHero){heroTab.splice((element.id -1) ,1)}
        });
        console.log(heroTab);

     });
})();
