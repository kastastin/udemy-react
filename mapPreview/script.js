'use strict';

// const user = {
//     1: 'test',
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1994',
//     showPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// console.log(typeof Object.keys(user)[0]); // string
// keys in object can be only string or symbol

// maps can use objects, arrays, functions instead of properties
// map is array of arrays [[], [], []] || [[Entries]]
const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const map = new Map();
// const map = new Map([
//     [{paper: 400}, 8000]
// ]);

map.set(shops[0], 5000);
map.set(shops[1], 15000);
map.set(shops[2], 25000);

// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

// const budget = [5000, 15000, 25000];
// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// });

console.log(map);
console.log(map.get(shops[0])); // 5000
console.log(map.has(shops[0])); // true
// map.delete(shops[0]);
// map.clear();
// map.size
// map.keys();

// for (let key of map.keys()) console.log(key);
// for (let value of map.values()) console.log(value);

// const goods = [];
// for (let key of map.keys()) {
//     goods.push(Object.keys(key));
// }
// console.log(goods.join(', '));

// for (let i of map.entries()) console.log(i);
// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });


const user = {
    1: 'test',
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1994',
    showPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user));
console.log(userMap);
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);