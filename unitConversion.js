var prompt = require('prompt-sync')();
let key = prompt("Press 1 for Feet to Inch\nPress 2 for Inch to Feet\nPress 3 for Feet to Meter\nPress 4 for Meter to Feet\n");
switch (key) {
    case "1":
        let valueInFeets = prompt("Enter value in feets : ");
        let valueInInches = valueInFeets * 12;
        console.log("Value in Inches is : " + valueInInches);
        break;
    case "2":
        let v2 = prompt("Enter value in feets : ");
        v3 = v2 / 12;
        console.log("Value in Feets is : " + v3);
        break;
    case "3":
        let v3 = prompt("Enter value in feets : ");
        let valueinMeters = v3 * 0.3048;
        console.log("Value in Meters : " + valueinMeters);
        break;
    case "4":
        let v4 = prompt("Enter value in meters : ");
        let value = v4 * 3.280;
        console.log("Value in Feets : " + value);
        break;
    default:
        console.log("Invalid Input !!!");
        break;
}
