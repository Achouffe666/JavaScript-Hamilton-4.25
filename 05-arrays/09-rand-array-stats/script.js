/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let start = document.getElementById('run');
    let n1 = document.getElementById('n-1');
    let n2 = document.getElementById('n-2');
    let n3 = document.getElementById('n-3');
    let n4 = document.getElementById('n-4');
    let n5 = document.getElementById('n-5');
    let n6 = document.getElementById('n-6');
    let n7 = document.getElementById('n-7');
    let n8 = document.getElementById('n-8');
    let n9 = document.getElementById('n-9');
    let n10 = document.getElementById('n-10');
    let smallest = document.getElementById('min');
    let biggest = document.getElementById('max');
    let sum = document.getElementById('sum');
    let average = document.getElementById('average');


    const numbers = Array(10).fill().map(() =>Math.round(Math.random()*100));
    // your code here

    start.addEventListener('click',() => {
    n1.innerHTML = numbers[0];
    n2.innerHTML = numbers[1];
    n3.innerHTML = numbers[2];
    n4.innerHTML = numbers[3];
    n5.innerHTML = numbers[4];
    n6.innerHTML = numbers[5];
    n7.innerHTML = numbers[6];
    n8.innerHTML = numbers[7];
    n9.innerHTML = numbers[8];
    n10.innerHTML = numbers[9];
    smallest.innerHTML = Math.min(...numbers);
    biggest.innerHTML = Math.max(...numbers);
    sum.innerHTML = numbers.reduce((a, b)=> a+b);
    average.innerHTML = (numbers.reduce((a,b)=> a+b)/numbers.length);



    })

})();
