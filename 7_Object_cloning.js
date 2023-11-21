//Object Cloning:-

//Iteration
//Assign
//Spread

//1-
//Iteration

// let src={value:10 , a:15,b:16}
// let dstn={}
// for(let key in src){
//     dstn[key]=src[key];
// }
// for(let key in dstn){
//     console.log(key,dstn[key])
// }

//2-
////Assign
//we can copy multipe source and objects 
let src2={len:5}
let src1={value:10 , a:15,b:16}
let dstn1=Object.assign({},src1,src2);

for(let key in dstn1){
    console.log(key,dstn1[key])
}

//3-
////spread

let src={value:10 , a:15,b:16}

let dstn={... src}
for(let key in dstn){
       console.log(key,dstn[key])
 }