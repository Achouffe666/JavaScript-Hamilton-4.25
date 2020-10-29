/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here
    let start = document.getElementById('run');

    start.addEventListener('click', () => {

        fruits.delete('apple');
        fruits.delete('cherry');
        fruits.add('bannana');
        fruits.add('kiwi');

        for (const fruitAdded of fruits){
            console.log(fruitAdded);

        }
    

    })
})();
