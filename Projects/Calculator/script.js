// Clear Screen 
function clearScreen() {
    document.getElementById("display").value = "";
};

// Append Digits to Display
function appendToDisplay(value) {
    const dispValue = document.getElementById("display").value += value;
    if (dispValue.length > 8) {
        document.getElementById("display").value = "Error!!!";
        console.log("Error! You cannot calculate more than 8 digit value");
    } 
};

// Calculations 
function calculateResult() {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;   
};





























// function calculateResult() {
//     try {
//         let result = eval(document.getElementById('display').value);
//         document.getElementById('display').value = result;
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }