'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f
// flags:
// i - no registr       'Kastastin'.search(/k/i) -> 0
// g - few entries      'kastastin'.match(/s/g)  -> [ 's', 's' ]
// m - multiline mode

// const str = 'kastastin';
// const reg = /s/;
// console.log(str.search(reg)); // 2 (if not found -> -1)
// console.log('Kastastin'.match(/s/)); // [ 's', index: 2, input: 'Kastastin', groups: undefined ]
// console.log('kastastin'.replace(/i/, '*')); // kastast*n
// console.log('kastastin'.replace(/./g, '*')); // *********
// console.log('kastastin.'.replace(/\./g, '*')); // kastastin*
// console.log('12-34-23'.replace(/-/g, ':')); // 12:34:23
// console.log(/k/.test('kastastin')); // true

// classes
//   \d - digits  \D - no digits
//   \w - words   \W - no words
//   \s - spaces

// console.log('ab5zx'.match(/\d/)); // [ '5', index: 2, input: 'ab5zx', groups: undefined ]
// console.log('My name is D2R2'.match(/\w\d\w\d/i)); // [ 'D2R2', index: 11, input: 'My name is D2R2', groups: undefined ]
