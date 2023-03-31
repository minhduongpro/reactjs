console.log('Hello world from HTML');

//key: value
let obj= {
    name: 'Duong',
    address: 'Dak Lak',
    email: '',
    gender: ''
};

let b = 'address';

//obj[b] = 'hary'
obj.name = 'HCM'

console.log('What is your name?', `My name's: `, obj['name'], obj)
console.log('Where are you from? ', `I'm from: `, obj['address'])
