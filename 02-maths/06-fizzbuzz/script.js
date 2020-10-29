/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    

    for (let number = 1; number < 100; number++) {
    
    if (number%5==0 && number%3==0) {
            console.log("FizzBuzz");
    } else if(number%5==0) {
            console.log("Buzz");      
}
    else if (number%3==0){
            console.log("Fizz");
    }
    else{
            console.log (number);
    }
    }

})();
