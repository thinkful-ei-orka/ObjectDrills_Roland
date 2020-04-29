 ////////////////###################  1  #####################/////////////////////
//                                                                     ///////////
// const loaf = {
//     flour: 300,
//     water: 210,
// }

// console.log(loaf.flour);
// console.log(loaf.water);

// loaf.hydration = function() {
//     return this.water/this.flour*100;
// };

// console.log(loaf.hydration());


 ////////////////###################  2  #####################/////////////////////
//                                                                     ///////////

// const brusselSprouts = {
//     foo: 'tomato',
//     bar: 'bar',
//     fum: true,
//     quux: NaN,
//     spam: 'pig flavored ice cream'
// }

// function iterate(obj) {
//     let pairs = [];
//     for (let key in obj) {
//         pairs.push(`${key}: ${obj[key]}`);
//     }
//     console.log(pairs);
// }

// iterate(brusselSprouts);

////////////////###################  3  #####################/////////////////////
//                                                                     ///////////


const hobbit = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
console.log(hobbit.meals[3]);


////////////////###################  4 & 5  #####################/////////////////////
//                                                                     ///////////

function Employee(name, title, boss) {
    this.name = name;
    this.title = title;
    this.boss = 'Nicholas Cage';
}

const employeeRoster = [];

const cage = {
    name: 'Nicholas Cage',
    title: 'Nicholas Cage impersonator'
}
const fred = new Employee('Freddy Kruger', 'Janitor');
const fly = new Employee('Seth Brundle' , 'Scientist');
const it = new Employee('Pennywise' , 'Dancing Clown');
const bono = new Employee('Bono' , 'Faker');

employeeRoster.push(fred, fly, it, cage, bono);

const looper = function (arr) {
    for (i = 0; i < arr.length; i++) {
        const emp = arr[i];
        if (!emp.boss) {
            console.log(`${emp.title} ${emp.name} doesn't report to anybody.`);
        } else {
            console.log(`${emp.title} ${emp.name} reports to ${emp.boss}.`);
        }
    }
}

looper(employeeRoster);

 ////////////////###################|:+:+:6:+:+:|#####################/////////////////
//                                                                                  //
function decode(word) {
    const cipher = {};
    cipher.a = 1;
    cipher.b = 2;
    cipher.c = 3;
    cipher.d = 4;

const input = word[0];
const letter = cipher.hasOwnProperty(input) ? word[cipher[input]] : ' ';
return letter;
}

function decodeWords(str) {
    const letters = [];
    const words = str.split(' ');
    letters.push(words.forEach(y => decode(y)));
    return letters.join(' ');
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));
