// dynamic nature of objects

let a={
    l:1,
    b:2,
}
//according to dynamic nature of objects we can add or remove any objects
a.c=4;
console.log(a.c);
delete(a.c);
console.log(a.c);