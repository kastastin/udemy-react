'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        // id: '',
        id: '2',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];

// data.forEach((blockObj, i) => {
//     const block = document.createElement(blockObj.tag);

//     // if (blockObj.id) throw 'error'; // Uncaught error

//     // if (blockObj.id) {
//     //     throw new Error(`Data ${i + 1}: without id`);
//     // }

//     block.setAttribute('id', blockObj.id);
//     document.body.append(block);
// });

// const err = new Error('test Error');
// console.log(err.name);
// console.log(err.message);
// console.log(err.stack);


// try {
//     data.forEach((blockObj, i) => {
//         const block = document.createElement(blockObj.tag);
    
//         if (blockObj.id) {
//             throw new Error(`Data ${i + 1}: without id`);
//         }
    
//         block.setAttribute('id', blockObj.id);
//         document.body.append(block);
//     });
// } catch (e) {
//     console.error(e.name);
//     console.log(e.message);
//     console.log(e.stack);
// }


// delete last tag and add id in obj 2
try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if (blockObj.id) {
            throw new Error(`Data ${i + 1}: without id`);
        }
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch (e) {
    if (e.name === 'Error') {
        console.log(e.message);
    } else {
        throw e;
    }
}