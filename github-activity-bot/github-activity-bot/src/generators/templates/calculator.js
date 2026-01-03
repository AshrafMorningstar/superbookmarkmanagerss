/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

export function generateCalculator() {
    const files = new Map();

    // HTML file
    files['index.html'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <div class="display">0</div>
        <div class="buttons">
            <button class="clear">C</button>
            <button class="operator">±</button>
            <button class="operator">%</button>
            <button class="operator">÷</button>
            <button class="digit">7</button>
            <button class="digit">8</button>
            <button class="digit">9</button>
            <button class="operator">×</button>
            <button class="digit">4</button>
            <button class="digit">5</button>
            <button class="digit">6</button>
            <button class="operator">-</button>
            <button class="digit">1</button>
            <button class="digit">2</button>
            <button class="digit">3</button>
            <button class="operator">+</button>
            <button class="digit zero">0</button>
            <button class="digit">.</button>
            <button class="equals">=</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>`;

    // CSS file
    files['styles.css'] = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f0f0f0;
    font-family: Arial, sans-serif;
}

.calculator {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    padding: 20px;
}

.display {
    background: #eee;
    padding: 20px;
    font-size: 24px;
    text-align: right;
    margin-bottom: 20px;
    border-radius: 5px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 15px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #f8f9fa;
}

button:hover {
    background: #e9ecef;
}

.operator {
    background: #e9ecef;
}

.equals {
    background: #007bff;
    color: white;
}

.zero {
    grid-column: span 2;
}`;

    // JavaScript file
    files['script.js'] = `class Calculator {
    constructor() {
        this.display = document.querySelector('.display');
        this.value = '0';
        this.operator = null;
        this.previousValue = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                if (button.classList.contains('digit')) {
                    this.handleDigit(button.textContent);
                } else if (button.classList.contains('operator')) {
                    this.handleOperator(button.textContent);
                } else if (button.classList.contains('equals')) {
                    this.calculate();
                } else if (button.classList.contains('clear')) {
                    this.clear();
                }
            });
        });
    }

    handleDigit(digit) {
        if (this.value === '0' && digit !== '.') {
            this.value = digit;
        } else {
            this.value += digit;
        }
        this.updateDisplay();
    }

    handleOperator(op) {
        if (this.operator) {
            this.calculate();
        }
        this.operator = op;
        this.previousValue = this.value;
        this.value = '0';
    }

    calculate() {
        if (!this.operator || !this.previousValue) return;
        
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.value);
        
        switch(this.operator) {
            case '+':
                this.value = (prev + current).toString();
                break;
            case '-':
                this.value = (prev - current).toString();
                break;
            case '×':
                this.value = (prev * current).toString();
                break;
            case '÷':
                this.value = (prev / current).toString();
                break;
            case '%':
                this.value = (prev % current).toString();
                break;
        }
        
        this.operator = null;
        this.previousValue = null;
        this.updateDisplay();
    }

    clear() {
        this.value = '0';
        this.operator = null;
        this.previousValue = null;
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.textContent = this.value;
    }
}

new Calculator();`;

    // README file
    files['README.md'] = `# Calculator Project

A simple calculator web application with basic arithmetic operations.

## Features

- Basic arithmetic operations (+, -, ×, ÷)
- Clear functionality
- Responsive design
- Modern UI

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Usage

Open \`index.html\` in a web browser to use the calculator.

## Credits

Generated by GitHub Activity Bot
Created by: Ashraf Morningstar
GitHub: https://github.com/AshrafMorningstar`;

    return files;
}`;