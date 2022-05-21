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
            } else {
                return display.innerText = 'no valid';
            }

            function Calculate(param, text) {
                var index = text.indexOf(param);
                var num1 = parseFloat(text.slice(0, index));
                var num2 = parseFloat(text.slice(-index));
                console.log(num1);
                console.log(num2);
                console.log(index);
                console.log(param);
                var maths = {
                    '+': (x, y) => { return x + y },
                    '-': (x, y) => { return x - y },
                    '*': (x, y) => { return x * y },
                    '/': (x, y) => { return (x / y) },
                    '^': (x, y) => { return x ^ y }
                };
                return display.innerText = maths[param](num1, num2);
            }
        }
    });
    // Normal Calculator
    ///
    // Risk Calculator

    // Risk Calculator
});



