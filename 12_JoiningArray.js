//Joining Arrays-->> this will join array in a single line

let numbers= [10,20,30,40,50,60];
console.log(numbers);
const joined=numbers.join(',');

console.log(joined);

//we can also split the array-->>split(string method)

let message='This is my first message';
let parts=message.split(' ');

console.log(parts);
//we can also join it again

let joinagain=parts.join('  ');
console.log(joinagain);