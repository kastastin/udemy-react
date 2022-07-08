'use strict';

// console.log('Data request...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Data preparation...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//         // reject(); // go to -> .catch()
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(value => {
//     console.log(value);
// }).catch(() => {
//     console.error('An error has occured');
// }).finally(() => {
//     console.log('Finally after all .then & .catch');
// });


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// waiting for the end all promises and start work
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

// waiting for the end 1 (faster) promise and start work
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});