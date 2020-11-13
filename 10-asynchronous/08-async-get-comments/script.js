/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    async function article(myFunction){
        try {
            let response = await myFunction;
            return response;

        } catch (error) {
            console.error('error')
        }
    }
    
    async function getComments(anotherFunction){
        try {
            let answer = await anotherFunction;
            return answer;
            
        } catch (error) {
            console.error('AnotherError')
        }
    }

    document.querySelector('#run').addEventListener('click', ()=>{
        
        article(window.lib.getPosts()).then((articles)=>(articles.forEach(element => {
            getComments(window.lib.getComments(element.id)).then((comments)=>{console.log(comments)});
            
        })));
        
    })
})();
