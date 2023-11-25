//we can also combine using spread

let arr1=[1,2,3];
let arr2=[4,5,6];

let arr3=[...arr1,...arr2]
console.log(arr3);//o/p->[1, 2, 3, 4, 5, 6]

//we can also insert in b/w the elements

let arr12=[1,2,3];
let arr22=[4,5,6];

let arr31=[...arr12,'a',...arr22,'b']
console.log(arr31);//o/p->[1, 2, 3, 'a', 4, 5, 6,'b']

//we can copy whole using spread 

let arr4=[...arr31];
console.log(arr4);//o/p->[1, 2, 3, 'a', 4, 5, 6,'b'] 

//Iterating an array 

//1- for-of loop
let arr=[10,20,30,40,50];

for(let value of arr){
    console.log(value);
}

//2- for-each loop
arr.forEach(function(number){
    console.log(number);
}); 

//now convert this fxn to arrow fxn

arr.forEach(number=> console.log(number) );

