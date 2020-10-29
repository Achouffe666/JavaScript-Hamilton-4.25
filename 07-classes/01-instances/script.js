/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    let cat1 = new Cat("Skitty", "9 Years");
    let Cat2 = new Cat("Pixel", "6 Years");

    let start = document.getElementById('run');

    start.addEventListener('click', () => {
        console.log(cat1);
        console.log(Cat2);
    })


})();
