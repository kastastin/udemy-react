'use strict';

// Set is a special kind of collections on the array type
// each value can only be repeated once

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];

// const set = new Set(arr);
// console.log(set); // {1, 2, 4, 5, 6}

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'],
      set = new Set(arr);

// console.log(set); // {'Alex'. 'Ann', 'Oleg'}
set.add('Ivan');
set.add('Oleg');
// set.add('Ivan')
//     .add('Oleg');
console.log(set); // {'Alex', 'Ann' 'Oleg', ' Ivan' }
// Array.prototype.find();
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);
// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// });

// console.log(set.values()); // {'Alex' 'Ann', 'Oleg', ' Ivan'}
// console.log(set.keys()); // {'Alex' 'Ann', 'Oleg', ' Ivan'}
// console.log(set.entries()); // {'Alex' => 'Alex', 'Ann' = 'Ann' 'Oleg' => 'Oleg', ' Ivan' 5› ' Ivan'

function unique(arr) {
    // return new Set(arr);
    return Array.from(new Set(arr));
}

console.log(unique(arr)); // ['Alex' 'Ann', 'Oleg'].