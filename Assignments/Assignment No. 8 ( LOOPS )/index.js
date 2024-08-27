
/********** Problem No. 1 *********/

// let a = 10;
// for (let index = 1; index <= a; index++) {
//     console.log(index);    
// }

/********** Problem No. 2 *********/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     };
// }

/********** Problem No. 3 *********/

// function deleteAllOccurrences(array, element) {
//     return array.filter(item => item !== element);
// }

// let array = [1, 2, 3, 4, 2, 5, 2, 6];
// let element = parseInt(prompt("Enter the element to be deleted from the array:"));

// let newArray = deleteAllOccurrences(array, element);

// console.log("Original Array: " + array);
// console.log("Array after deleting all occurrences of " + element + ": " + newArray);
// alert("Array after deleting all occurrences of " + element + ": " + newArray);

/********** Problem No. 4 *********/

// function power(base, exponent) {
//     let result = 1;
    
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
    
//     return result;
// }

// let base = parseFloat(prompt("Enter the base number:"));
// let exponent = parseInt(prompt("Enter the exponent:"));

// let result = power(base, exponent);

// console.log(base + " raised to the power of " + exponent + " is: " + result);
// alert(base + " raised to the power of " + exponent + " is: " + result);

/********** Problem No. 5 *********/

// function printPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += j + ' ';
//         }
//         console.log(pattern.trim());
//     }
// }

// let rows = 8;

// printPattern(rows);

/********** Problem No. 6 *********/

// function countDigits(number) {
//     return number.toString().length;
// }

// let number = 12345;
// let digitCount = countDigits(number);
// console.log(`Number of digits in ${number} is: ${digitCount}`);

// /********** Problem No. 7 *********/

// function sumOfDigits(number) {
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10;
//         number = Math.floor(number / 10);
//     }
//     return sum;
// }

// let num = 12345;
// let sum = sumOfDigits(num);
// console.log(`Sum of digits in ${num} is: ${sum}`);

// /********** Problem No. 8 *********/

// function findLargestNumber(array) {
//     if (array.length === 0) {
//         return null;
//     }
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }

// let numbers = [10, 5, 20, 8, 15];
// let largestNumber = findLargestNumber(numbers);
// console.log(`The largest number in the array is: ${largestNumber}`);

// /********** Problem No. 9 *********/

// function fibonacciSeries(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib.slice(0, n);
// }

// let count = 10; 
// let fibSeries = fibonacciSeries(count);
// console.log(`Fibonacci series of ${count} numbers: ${fibSeries}`);

// /********** Problem No. 10 *********/

// function findDuplicates(array) {
//     let duplicates = [];
//     let countMap = {};
//     for (let num of array) {
//         countMap[num] = (countMap[num] || 0) + 1;
//         if (countMap[num] === 2) {
//             duplicates.push(num);
//         }
//     }
//     return duplicates;
// }

// let arr = [1, 2, 3, 4, 2, 5, 6, 4];
// let duplicateValues = findDuplicates(arr);
// console.log(`Duplicate values in the array: ${duplicateValues}`);

// /********** Problem No. 11 *********/

// function linearSearch(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i; 
//         }
//     }
//     return -1; 
// }

// let list = [5, 10, 3, 8, 12, 6];
// let targetElement = 8;
// let index = linearSearch(list, targetElement);
// if (index !== -1) {
//     console.log(`${targetElement} found at index ${index}`);
// } else {
//     console.log(`${targetElement} not found in the array`);
// }

// /********** Problem No. 12 *********/

// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (array[mid] === target) {
//             return mid; 
//         } else if (array[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// let sortedArray = [3, 6, 8, 10, 12, 15];
// let target = 10;
// let resultIndex = binarySearch(sortedArray, target);
// if (resultIndex !== -1) {
//     console.log(`${target} found at index ${resultIndex}`);
// } else {
//     console.log(`${target} not found in the array`);
// }
