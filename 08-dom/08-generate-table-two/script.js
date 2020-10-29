/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let target = document.querySelector('#target');
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');

    for (let i = 1; i < 11; i++){
        let row = document.createElement('tr');

        for (let j = 1; j <11; j++){
            let cell = document.createElement('td');
            let cellText = document.createTextNode(i*j, j*i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    target.appendChild(table);


    // your code here

})();
