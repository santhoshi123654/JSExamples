const IS_HEAD=1;
let flipCoin = (Math.floor(Math.random()*10)%2);
if(flipCoin == IS_HEAD){
    console.log("head")
}else{
        console.log("tail")
}