console.log('Hello world from HTML')

let arrtop4 = ['live', 'chelsea', 'Mu', 'Man city']

let i = 0;
while (i < arrtop4.length){
    if (arrtop4[i] === 'chelsea'){
        console.log('Found it: ', arrtop4[i])
        break; //continue
    }
    console.log('>>> check i: ', i)
    i++;
}
//else if
//else