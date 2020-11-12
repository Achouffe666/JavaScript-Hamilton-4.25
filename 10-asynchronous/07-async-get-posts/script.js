/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
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
            console.error('error');
        }
    };

    document.querySelector('#run').addEventListener('click', ()=>{

        article(window.lib.getPosts()).then((articles)=>{console.log(articles)})

    })
})();
