//constructor function-->> Pascal notation-->> first letter of every word is capital-->>eg -->>  NoOfStudents

//jis current object pe hum kaam kr rhe hote hai -->>this-->> use btata hai

//this-->> reflect current object

//constructor fxn->> prop/methods --> initialise or define
//basically constructor fxn defines the properties

// function Rectangle(){
//     this.length=1;
//     this.breadth=1;
//     this.draw=function(){
//         console.log("drawing");
//     }
// }

// let rectangleobj=new Rectangle();

// console.log(rectangleobj);

// we can pass value here also

// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log("drawing");
//     }
// }

// let rectangleobj=new Rectangle(4,6);

// rectangleobj.color="yelow";
// console.log(rectangleobj);


let rectangle1=new Function(
    'length',
    'breadth',
    `this.length=length;
    this.breadth=breadth;
    this.draw=function(){
    console.log("drawing");
}`);

let rect=new rectangle1(2,3)
console.log(rect);