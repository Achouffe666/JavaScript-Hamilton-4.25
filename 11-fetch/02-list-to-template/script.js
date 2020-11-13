/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
            console.error('Error Apeared')
        }
    }

    document.querySelector('#run').addEventListener('click',()=>{

        hero(fetch('http://localhost:3000/heroes'))
        .then((response)=>{return response.json()})
        .then((data)=>{data.forEach(element => {

            let template = document.querySelector('#tpl-hero')
            let target = document.querySelector('#target');
            let clone = document.importNode(template.content,true);
           
            clone.querySelector('.name').innerHTML = element.name;
            clone.querySelector('.alter-ego').innerHTML = element.alterEgo;
            clone.querySelector('.powers').innerHTML = element.abilities.join(" - ");

            target.appendChild(clone);
            
            
            });
            
        });

    
    })
})();
