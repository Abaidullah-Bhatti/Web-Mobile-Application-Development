//                    IF-ELSE EXERCISE

// 1. Write a js program to find the maximum between two numbers.

// var a = 5;
// var b = 5;

// if (a > b) {
//     console.log(a, " A is greater");
// } else if (b > a) {
//     console.log(b, " B is greater");
// } else if (a = b) {
//     console.log("A & B Both are equal");
// } else {
//     console.log("Invalid input!!!");
// }
// ********************************************************************************************

// 2. Write a js program to find the maximum between three numbers.

// var a = 5;
// var b = 5;
// var c = 5

// if (a > b && a > c) {
//     console.log(a, " A is greater");
// } else if (b > a && b > c) {
//     console.log(b, " B is greater");
// } else if (c > a && c > b) {
//     console.log(b, " C is greater");
// } else if (a = b = c) {
//     console.log("A & B & C All are equal");
// } else {
//     console.log("Invalid input!!!");
// }

// ********************************************************************************************

// 3. Write a js program to check whether a number is negative, positive or zero.

// var num = 0;

// if (num < 0) {
//     console.log(`${num} Number is a negative number.`);
// } else if (num > 0) {
//     console.log(`${num} Number is a positive number.`);
// } else {
//     console.log(`${num} Number is zero.`);
// }

// ********************************************************************************************

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// var num = 55;

// if (num % 5 === 0 && num % 11 === 0) {
//     console.log(`${num} Number is divisible by both 5 & 11.`);
// } else if (num % 5 === 0) {
//     console.log(`${num} Number is only divisible by 5.`);
// } else if (num % 11 === 0) {
//     console.log(`${num} Number is only divisible by 11.`);
// } else {
//     console.log("Invalid Input!!!");
// }

// ********************************************************************************************

// 5. Write a js program to check whether a number is even or odd.

// var num = 55;

// if (num % 2 === 0) {
//     console.log(`${num} Number is Even`);
// } else if (num % 2 === 1) {
//     console.log(`${num} Number is Odd`);
// } else {
//     console.log("Invalid Input!!!");
// }

// ********************************************************************************************

// 6. Write a js program to check whether a year is leap year or not.

// var year = 2001;

// if (year % 4 ===0) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

// ********************************************************************************************

// 7. Write a js program to input any alphabet and check whether it is vowel or consonant.

// const userInput = prompt("Enter an alphabet: ");

// if (userInput.length === 1 && /[a-zA-Z]/.test(userInput)) {
//     const letter = userInput.toLowerCase();
//     if (["a", "e", "i", "o", "u"].includes(letter)) {
//         console.log(`The letter '${userInput}' is a vowel.`);
//     } else {
//         console.log(`The letter '${userInput}' is a consonant.`);
//     } 
// } else {
//         console.log("Invalid input. Please enter a single alphabet.");
// }

// ********************************************************************************************

// 8. Write a js program to check whether a character is uppercase or lowercase alphabet.

// const userInput = prompt("Enter an alphabet: ");

// if (userInput.length === 1 && /[a-zA-Z]/.test(userInput)) {
//     if (/[a-z]/.test(userInput)) {
//         console.log(`The letter '${userInput}' is a lowercase letter.`);
//     } else {
//         console.log(`The letter '${userInput}' is a uppercase letter.`);
//     } 
// } else {
//         console.log("Invalid input. Please enter a single alphabet.");
// }

// ********************************************************************************************

// 9. Write a js program to input the week number and print weekday.

// const weekNumber = parseInt(prompt("Enter the week number (1-7):"));
// const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satursday", "Sunday"];

// if (weekNumber >= 1 || weekNumber <= 7) {
//     num = weekNumber - 1;
//     console.log("The week day is: ", weekDay[num]);
// } else {
//     console.log("Invalid week number. Please enter a number between 1 and 7.");
// }

// ********************************************************************************************

// 10. Write a js program to input the month number and print the number of days in that month.

// const monthNumber = parseInt(prompt("Enter the Month (1-12):"));
// const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// if (monthNumber >= 1 || monthNumber <= 12) {
//     num = monthNumber - 1;
//     console.log("The days in months is: ", daysInMonths[num]);
// } else {
//     console.log("Invalid Month. Please enter a number between 1 and 12.");
// }

// ********************************************************************************************

// 11. Write a js program to count a minimum number of notes in a given amount.

// function calculateMinNotes(amount) {
//     // Define the available note denominations
//     const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];
//     let remainingAmount = amount;
//     let minNotes = 0;
  
//     // Iterate through the denominations and count the minimum number of notes
//     for (let i = 0; i < denominations.length; i++) {
//       const notesCount = Math.floor(remainingAmount / denominations[i]);
//       remainingAmount -= notesCount * denominations[i];
//       minNotes += notesCount;
//     }
  
//     return minNotes;
//   }
  
//   // Example usage
//   const amount = 693;
//   const minNotes = calculateMinNotes(amount);
//   console.log(`The minimum number of notes required for ${amount} is ${minNotes}.`);

// ********************************************************************************************

// 12. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics, and Computer. Calculate percentage and grade according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// const physics = parseInt(prompt("Enter marks obtained in Physics: "));
// const chemistry = parseInt(prompt("Enter marks obtained in Chemistry: "));
// const biology = parseInt(prompt("Enter marks obtained in Biology: "));
// const mathematics = parseInt(prompt("Enter marks obtained in Mathematics: "));
// const computer = parseInt(prompt("Enter marks obtained in Computer: "));

// const obtainedMarks = physics + chemistry + biology + mathematics + computer;
// const totalMarks = 500;

// const percentage = obtainedMarks/totalMarks * 100;
// if (physics < 0 || physics > 100 || chemistry < 0 || chemistry > 100 || biology < 0 || biology > 100 || mathematics < 0 || mathematics > 100 || computer < 0 || computer > 100) {
//     console.log("Invalid Marks. Please enter a number between 0 and 100.");
// } else {
//     if (percentage >= 90 && percentage <= 100) {
//         console.log("Your got Grade A.");
//     } else if (percentage >= 80 && percentage < 90) {
//         console.log("Your got Grade B.");
//     } else if (percentage >= 70 && percentage < 80) {
//         console.log("Your got Grade C.");
//     } else if (percentage >= 60 && percentage < 70) {
//         console.log("Your got Grade D.");
//     } else if (percentage >= 40 && percentage < 60) {
//         console.log("Your got Grade E.");
//     } else if (percentage < 40) {
//         console.log("Your got Grade F.");
//     }
// }

// ********************************************************************************************

// 13. Write a js program to input the basic salary of an employee and calculate its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// function calculateGrossSalary(basicSalary) {
//     let hra, da, grossSalary;

//     if (basicSalary <= 10000) {
//         hra = basicSalary * 0.20;
//         da = basicSalary * 0.80;
//     } else if (basicSalary <= 20000) {
//         hra = basicSalary * 0.25;
//         da = basicSalary * 0.90;
//     } else {
//         hra = basicSalary * 0.30;
//         da = basicSalary * 0.95;
//     }

//     grossSalary = basicSalary + hra + da;
//     return grossSalary;
// }

// // Input: Basic salary of the employee
// let basicSalary = parseFloat(prompt("Enter the basic salary of the employee:"));

// // Calculate the gross salary
// let grossSalary = calculateGrossSalary(basicSalary);

// // Output: Display the gross salary
// console.log("Gross Salary: " + grossSalary.toFixed(2));
// alert("Gross Salary: " + grossSalary.toFixed(2));

// ********************************************************************************************

// 14. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill.

// function calculateElectricityBill(units) {
//     let bill = 0;

//     if (units <= 50) {
//         bill = units * 0.50;
//     } else if (units <= 150) {
//         bill = (50 * 0.50) + ((units - 50) * 0.75);
//     } else if (units <= 250) {
//         bill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
//     } else {
//         bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
//     }

//     let surcharge = bill * 0.20;
//     let totalBill = bill + surcharge;

//     return totalBill;
// }

// let units = parseFloat(prompt("Enter the number of units consumed:"));

// let totalBill = calculateElectricityBill(units);

// console.log("Total Electricity Bill: Rs. " + totalBill.toFixed(2));
// alert("Total Electricity Bill: Rs. " + totalBill.toFixed(2));


// ********************************************************************************************