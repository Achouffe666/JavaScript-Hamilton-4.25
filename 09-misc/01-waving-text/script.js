/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.querySelector('#target');
    let targetValue = target.innerHTML;
    let size = [25, 15, 10, 20, 30];
    let targetSplit = targetValue.split('');
    let i = 0;
    let letterOne = document.createElement('p');
    let tab = [];


    targetSplit.forEach(letter => {

        tab.push(letter);

        let content = document.createTextNode(tab.join(''));
        letterOne.appendChild(content);
        target.appendChild(letterOne);

        let changingFontSize = size[i]+"px";     
        if (i < size.length-1) {
            i++;
            
        } else {
            i = 0;
        }
       
        letterOne.style.fontSize = changingFontSize;

        
    });

})();
