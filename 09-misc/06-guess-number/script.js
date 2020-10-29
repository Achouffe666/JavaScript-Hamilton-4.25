/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    let guess = prompt('Guess the number (1-100)');
    let tried = 0;
    console.log(randomNumber);
    let running = true



while (running == true ) {
    if (guess < randomNumber) {

        alert('it s more!');
        guess = prompt('Guess again! (1-100)');
        tried++;

    } else if(guess > randomNumber) {

        alert('it s less!');
        guess = prompt('Guess again! (1-100)');
        tried++;    
    }

    else{
        alert('You Won,the number was ' + randomNumber + ' you got it on ' + tried + " try.");
        running == false;
    }
}
   
    

})();
