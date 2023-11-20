//Iterating through objects

let rectangle={
    breadth:1,
    length:2.
};
//for-in loop
for(let key in rectangle){
    console.log(key,rectangle[key]);
    
}
//for-of loops
//It should e mapped only on Iterables -->>> i.e -->> Arrays and Maps
 
// for(let keys of rectangle){
//     console.log(keys);//--->>>for - of not iterable over object -->>> this is giving error but we can do this by hack
// }

// for(let keys of Object.keys(rectangle)){
//     console.log(keys);//--->>>for-of -> not iterable over object -->>>  but we can do this by hack
// }
//if we want to print the both key and values -->>> we would use entries

for(let key of Object.entries(rectangle)){
    console.log(key);//--->>>for-of -> not iterable over object -->>>  but we can do this by hack
}

// suppose we have an object which have some properties and we want to find out the has some other properties or not
//can we finf it out

let obj={
    len:1,
    bre:2,
};

// we want to fond out it has radius or color property or not 
//we will find out by

if('color' in obj){
    console.log('present');
}
else{
    console.log('absent');
}
if('len' in obj){
    console.log('present');
}
else{
    console.log('absent');
}