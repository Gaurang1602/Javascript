// for Creating string 

let lastname="agarwal";

// for creatig string object

let firstname=new String('Gaurang');

//if we use . (dot) with lastname javascript automatically internally consider it as a object 
//eg- lastname.length

let message = "hello how are you doing"
let splitin=message.split(" ");

console.log(splitin);

// if we want new lines in our text

let mess="what are\n you\n doing"
console.log(mess);

// if we doesnt want to use the \n and we want new line for out text then we can use template literal (``)
// these two back ticks are template literal

let mymess=`hello what 
are 
you doing!!!
`
console.log(mymess);

let date=new Date();

console.log(date);