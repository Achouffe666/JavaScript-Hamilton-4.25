/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
      // your code here
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const yellow = document.getElementById('yellow');
    const blue = document.getElementById('blue');

  // red.addEventListener('click', redColor(), false);

  red.addEventListener("mouseup", () => { red.style.backgroundColor = "red"; }); 
  green.addEventListener("mouseup", () => { green.style.backgroundColor = "green"; }); 
  yellow.addEventListener("mouseup", () => { yellow.style.backgroundColor = "yellow"; }); 
  blue.addEventListener("mouseup", () => { blue.style.backgroundColor = "blue"; }); 



})();
