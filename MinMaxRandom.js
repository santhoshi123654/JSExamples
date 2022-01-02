const randomNumbers = [];
for (i = 0; i < 5; i++) {
    let randomNumberCheck = Math.floor(Math.random() * 899 + 100);
    randomNumbers[i] = randomNumberCheck;
}
console.log("Five Randome Numbers are : \n" + randomNumbers);
let minimum = randomNumbers[0];
let maximum = randomNumbers[0];
for (i = 0; i < randomNumbers.length; i++) {
    if (maximum < randomNumbers[i]) {
        maximum = randomNumbers[i];
    }
    if (minimum > randomNumbers[i]) {
        minimum = randomNumbers[i];
    }
}
console.log("Minimum Value is : " + minimum);
console.log("Maximum Value is : " + maximum);
