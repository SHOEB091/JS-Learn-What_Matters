let num = 20;

if (num % 2 === 0) {
    console.log("Given number is even number.");
}

if (num % 2 !== 0) {
    console.log("Given number is odd number.");
};


//=============usign if else statement================//
let age = 25;

if (age >= 18) {
    console.log("You are eligible of driving licence")
} else {
    console.log("You are not eligible for driving licence")
};

//=============usign if else if statement================//
const num2 = 0;

if (num2 > 0) {
    console.log("Given number is positive.");
} else if (num2 < 0) {
    console.log("Given number is negative.");
} else {
    console.log("Given number is zero.");
};


//=============usign Switch Statement================//

const marks = 85;

let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer science engineering";
        break;
    case marks >= 80:
        Branch = "Mechanical engineering";
        break;
    case marks >= 70:
        Branch = "Chemical engineering";
        break;
    case marks >= 60:
        Branch = "Electronics and communication";
        break;
    case marks >= 50:
        Branch = "Civil engineering";
        break;
    default:
        Branch = "Bio technology";
        break;
}

console.log(`Student Branch name is : ${Branch}`);


//=============usign Ternary Operator================//
let age2 = 21;

const result =
    (age2 >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote.";

console.log(result);
