/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get getName(){
            return `${this.firstname} ${this.lastname}`;
        }
        set setName(value){
            [this.firstname, this.lastname] = value.split(" ");
        }
    } 

    document.getElementById('run').addEventListener('click', () =>{

        let person1 = new Person('Bruce','Wayne');

        console.log(person1.getName);
        
        person1.setName = 'Donald Duck';

        console.log(person1.getName);
    })
})();
