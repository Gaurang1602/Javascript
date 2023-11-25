//Insertion

//end - begin - middle

//insertion at end
let arr=[1,2,3,4];
console.log(arr);

//if we want to insert at end then we use -->>push method
arr.push(5);
console.log(arr);

//insertion at start
///if we want to insert at start then we use -->>unshift method
arr.unshift(22);
console.log(arr);


//insertion at mid
///if we want to insert at mid then we use -->>splice method
arr.splice(2,0,"a","b","c");//-->> in this 1st digit represent number we want to add , 2 nd didgit -->> how many no 
//we want to remove, 3rd digit ->>> waht we want to add
console.log(arr);

//searching in an array

console.log(arr.indexOf(3));

//we want to check that if a number exist in array or not

if(arr.indexOf(4)!=-1){
    console.log("present");//--->> this method is not a good practice so we use include method
}
console.log(arr.includes(4));// if present return true or else false

console.log(arr.indexOf(4,5));//-->>> in this 1st digit repreesnt no we want to search & 2nd digit represent 
//from which index

let courses=[
    {no:1 , name:"Gaur"},
    {no:2,name:"Yash"}
];

console.log(courses.indexOf({no:1 , name:"Gaur"}));//it is present but in o/p-->> it is giving -1;
//this method is giving wrong because this is not primitive also the value which we give to find has different
//reference, while array object value has different reference ,we cant use primitive methods on that
//-->>> linke indexOf or includes

//for non- primitives for searching we use call function
//jab bhi hume objects ke andar kuch find karna hota hai tab hum find method use krte hai
//syntax-->> of find fxn -->>> arrayname.find(predicate function)
// let coursefind=courses.find(function(coursefind){
//     return coursefind.name="gaur";
// })

// console.log(coursefind);

//we  can write this fxn in short by using arrow fxn
let coursefind1=courses.find(coursefind => coursefind.name === "Gaur")

console.log(coursefind1);

//For removing element in an array
//remove from end
//use-->> pop method

let num=[1,2,3,4,5,6];

console.log(num.pop());

//remove from start
//use-->> shift method

console.log(num.shift());

//remove from middle
//use-->> splice method

console.log(num.splice(3,1));

//emptying a array

let arrayg=[1,2,3,4,5,6,7]
let newarr=arrayg;
// arrayg=[]; //-->> this will empty the array but there is a problem with this method--if copy this array to another 
//array and print the array then the 2nd array will store the values , so empty the array by different method

// console.log(arrayg);//-->> o/p-->> []
// console.log(newarr);//-->> o/p-->> [1,2,3,4,5,6,7]

//we empty the array by different method not by above (array=[])  method
//we  will empty by any of below 2 method

//1st method
// arrayg.length=0;
// console.log(arrayg)

//2nd method
arrayg.splice(0,arrayg.length);
console.log(arrayg);