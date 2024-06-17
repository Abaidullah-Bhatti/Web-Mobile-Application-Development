const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '';
}

function deleteChar() {
    display.textContent = display.textContent.slice(0, -1);
}

function appendChar(char) {
    display.textContent += char;
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

function calculateResult() {
    try {
        let expression = display.textContent
            .replace(/√/g, 'Math.sqrt')
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/log/g, 'Math.log')
            .replace(/\^/g, '**')
            .replace(/factorial\((\d+)\)/g, (match, p1) => factorial(Number(p1)));

        display.textContent = eval(expression);
    } catch (error) {
        display.textContent = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '(' || key === ')') {
        appendChar(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendChar(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteChar();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '^') {
        appendChar('^');
    } else if (key === 's') {
        appendChar('sin(');
    } else if (key === 'c') {
        appendChar('cos(');
    } else if (key === 't') {
        appendChar('tan(');
    } else if (key === 'l') {
        appendChar('log(');
    } else if (key === 'r') {
        appendChar('sqrt(');
    } else if (key === '!') {
        appendChar('factorial(');
    }
});
