//Combining and slicing arrays

//combining
 let first=[1,2,3];
 let second=[4,5,6];

 let combined=first.concat(second);
 console.log(combined);

//slicing
//slice -->>> this method return the range of sliced elements from the array
//(x,x+2)--> in this it  slice upto x+1 because range is exclusive
 let marks=[10,20,30,40,50,60];
 let sliced=marks.slice(2,5);
 console.log(sliced);
 //if we give only
 let sliced2=marks.slice(2);//then it slice all array from index to 2 to end
 console.log(sliced2 );

  // if we do 
  let sliced3=marks.slice();
  console.log(sliced3);//-->>then it will return original array full or copy

  