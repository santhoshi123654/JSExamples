const ps = require("prompt-sync");
const prompt = ps();

let a = parseInt(prompt("enter a first value : "));
let b = parseInt(prompt("enter a second value : "));
let c = parseInt(prompt("enter a third value : "));

val1=a+(b*c)
val2=c+(a/b)
val3=(a%b)+c
val4=(a*b)+c

console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)

if(val1 > val2){
    if(val1 > val3 && val1 > val4){
        console.log("a+b*c is greater than all operations");
    }else if(val3 > val4){
        console.log(" a%b+c is greater than all operations ");
    }else
    {
        console.log(" a*b+c is greater than all operations");
    }
}else if(val2 > val3 && val2 > val4){
    console.log("c+a/b is greater than all operations");
}else if(val3 > val4){
     console.log(" a%b+c is greater than all operations "); 
}else
{
     console.log(" a*b+c is greater than all operations");
}

