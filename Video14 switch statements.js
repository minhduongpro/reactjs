console.log('Hello world from HTML')
let day = '';
switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Tuesday";
        break;
    case 2:
        day = "Wednesday";
        break;
    case 3:
        day = "Thursday";
        break;
    case 4:
        day = "Friday";
        break;
    case 5:
        day = "Saturday";
        break;
    case 6:
        day = "Sunday";
        break;
}
console.log('Hom nay la thu: ',day)
