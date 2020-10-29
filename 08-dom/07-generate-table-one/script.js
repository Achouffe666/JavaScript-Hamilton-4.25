/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // https://developer.mozilla.org/fr/docs/Explorer_un_tableau_HTML_avec_des_interfaces_DOM_et_JavaScript
    // your code here
    let target = document.querySelector('#target');
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');

    for (let i = 0; i < 10; i++) {
        let row = document.createElement('tr');   

        for (let j = 0; j < 1; j++) {
           
            let cell = document.createElement('td');
            
            row.appendChild(cell);
            
        }
        tableBody.appendChild(row);
    }

        table.appendChild(tableBody);
        target.appendChild(table);
})();
