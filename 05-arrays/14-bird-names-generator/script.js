/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    let start = document.getElementById('run');
    let target = document.getElementById('target');
    let adj = [...adjectives];    




    start.addEventListener('click', () =>{
        let randomBird = birds[Math.floor(Math.random() * birds.length)];
        let randomAdj = adj[Math.floor(Math.random() * adj.length)];


        if (randomBird.fem == true) {
            target.innerHTML = 'La ' + randomBird.name + " " + randomAdj+"e";
        } else {
            target.innerHTML = 'le ' + randomBird.name + " " + randomAdj;
        }

    })

})();
