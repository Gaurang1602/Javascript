// there are two types in JS

//1- Primitive or value types 
// ->Number
// ->String
// ->Boolean
// ->undefined
// ->null

//2-Reference types or objects

// ->function
// ->Object
// ->Array
//1- Primitives
//a and b are primitives - In primitives when we copy one to another the copy of the variable store not the original
//varibale so when we do changes to a that why it has no effect on b  
// let a=10;
// let b=a;
// a++;
// console.log(a); //o/p=11
// console.log(b); //o/p=10

// 2- References In References when we copy one to another the reference of the original variable store 
// so when we do changes to a that why it has  effect on b  

// let a={value:10};
// let b=a;
// a.value++
// console.log(a.value);//o/p=11
// console.log(b.value);//o/p=11

//primintives are copied by their vaues 
// references are copied by their reference/address

// let c=10;

// function inc(c){
//     c++;
// }

// inc(c);
// console.log(c);

let d={value:12};

function incc(d){
    d.value++;
    // console.log(d)
}
incc(d);
console.log(d.value);