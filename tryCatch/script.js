'use strict';

// try {
//     console.log('Start <try>');
//     console.log(a);
//     console.log('End <try>');
// } catch(e) {
//     console.log('catch');
// }

// console.log('Still normal');
// // Start <try>
// // catch
// // Still normal


// try {
//     console.log(a);
// } catch (error) {
//     console.log(error); // ReferenceError: a is not defined
//     console.log(error.name); // ReferenceError:
//     console.log(error.message); // a is not defined
//     console.log(error.stack);
// } finally {

// }


// Example (contacts.html Error)
// document.querySelector('.active').addEventListener('click', () => {
//     console.log('click');
// });

// console.log('normal');

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {}
// } catch (e) {
//     console.log(e);
// }

console.log('normal');