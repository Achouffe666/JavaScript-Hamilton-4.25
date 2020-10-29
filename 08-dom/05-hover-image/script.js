/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let parent = document.querySelector('.material');
    let image = parent.getElementsByTagName('img')[0];
    
    let initialAttribute = image.getAttribute('src');
    let secondAttribute = image.getAttribute('data-hover');


    image.addEventListener('mouseover',() => {
        image.src = secondAttribute;

    })

    image.addEventListener('mouseout',() => {
        image.src = initialAttribute;
    })

   



})();
