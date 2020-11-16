/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let heroTab =[];

    async function hero(myFunction){
        try {
            let response = await myFunction;
            return response;
            
        } catch (error) {
            console.error('An error aperead')
        }
    };

        // fetching Hero's data from API
        hero(fetch ('http://localhost:3000/heroes'))
        .then((response)=>{return response.json()})
        .then((data) =>{data.forEach(element => {
            heroTab.push(element);
            
        });

    document.querySelector('#run').addEventListener('click',() => {

        // Declare-call all inputs
        let heroName = document.querySelector('#hero-name').value;
        let heroAlter = document.querySelector('#hero-alter-ego').value;
        let heroPower = document.querySelector('#hero-powers').value;

        //checks if inputs are empty
        if(heroName.length == 0 || heroAlter.length == 0 || heroPower.length == 0)  
        {alert('You must complete all fields')
        ;} else{

            heroTab.push({'id': (heroTab.length + 1),  'name' : heroName, 'alterEgo' : heroAlter , 'abilities' : heroPower.split(', ')})
        
            console.log(heroTab);
        }
        
    })
})
})();
