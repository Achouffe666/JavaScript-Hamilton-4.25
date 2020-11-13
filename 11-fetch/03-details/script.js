/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function hero(myFunction){
        try {
            let response = await myFunction;
            return response;
        } catch (error) {
            console.error('Error');
        }
    }

    document.querySelector('#run').addEventListener('click', ()=>{

        let choosedHero = document.querySelector('#hero-id').value;


        hero(fetch('http://localhost:3000/heroes'))
        .then((response)=>{return response.json()})
        .then((data)=>{

           function myHeroId(ids) {
               return ids.id == choosedHero;
           }


            let template = document.querySelector('#tpl-hero')
            let target = document.querySelector('#target');
            let clone = document.importNode(template.content,true);
           
            clone.querySelector('.name').innerHTML = data.find(myHeroId).name;
            clone.querySelector('.alter-ego').innerHTML = data.find(myHeroId).alterEgo;
            clone.querySelector('.powers').innerHTML = data.find(myHeroId).abilities.join(" - ");

            target.appendChild(clone);
            
            
            
            
        });

    
    })
})();
