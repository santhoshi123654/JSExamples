const ps = require("prompt-sync")
const prompt = ps();

let day = prompt("enter number for week day between 1 to 6 : ");

if(day == 0){
    console.log(day + " : Sunday")
}else if (day ==1){
    console.log(day + " : Monday")
}else if (day ==2){
    console.log(day + " : Tuesday")
}else if (day ==3){
    console.log(day + " : Wednesday")
}else if (day == 4){
    console.log(day + " : Thursday")
}else if (day == 5){
    console.log(day + " : Friday")
}else if (day == 6){
    console.log(day + " : Saturday")
}