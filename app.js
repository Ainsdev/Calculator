window.addEventListener('load', () => {
    // Normal Calculator
    const display = document.querySelector('.calculator_result');
    let buttons = Array.from(document.getElementsByClassName("button_calculator"));
    buttons.map(btn => {
        btn.addEventListener('click', (e) => {
            switch (e.target.innerText) {
                case 'AC':
                    display.innerText = '';
                    break;
                case 'Del':
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                case '=':
                    console.log('Ecuacion sin procesar:' + display.innerText);
                    calculatorMath(display.innerText);
                    break;
                default:
                    display.innerText += e.target.innerText;
                    break;

            }
        });
        const calculatorMath = (calculation) => {
            if (calculation.includes('+') == true) {
                Calculate('+', calculation);
            } else if (calculation.includes('-') == true) {
                Calculate('-', calculation);
            } else if (calculation.includes('/') == true) {
                Calculate('/', calculation);
            } else if (calculation.includes('*') == true) {
                Calculate('*', calculation);
            } else if (calculation.includes('^') == true) {
                Calculate('^', calculation);
            } else if (calculation.includes('%') == true) {
                Calculate('%', calculation);
            } else {
                return display.innerText = 'no valid';
            }

            function Calculate(param, text) {
                let index = text.indexOf(param);
                let num1 = parseFloat(text.slice(0, index));
                let num2 = parseFloat(text.substr(index + 1));
                console.log('num1:' + num1);
                console.log('num2:' + num2);
                console.log('index:' + index);
                console.log(param);
                let maths = {
                    '+': (x, y) => { return x + y },
                    '-': (x, y) => { return x - y },
                    '*': (x, y) => { return x * y },
                    '/': (x, y) => { return (x / y) },
                    '%': (x, y) => { return (x * y) / 100 },
                    '^': (x, y) => { return Math.pow(x, y) }
                };
                return display.innerText = maths[param](num1, num2);
            }
        }
    });
    // Normal Calculator
    ///
    // Risk Calculator
    const displayGains = document.querySelector('.risk_calculator_gain');
    const displayLoss = document.querySelector('.risk_calculator_loss');
    
    const calculationFinal = (margin, leverage, price, stop) => {

     }
    // Risk Calculator
});



