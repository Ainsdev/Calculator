// Normal Calculator
window.addEventListener('load', () => {
    const display = document.querySelector('.calculator_result');
    let buttons = Array.from(document.getElementsByClassName("button_calculator"));
    //
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
            } else {
                return display.innerText = '';
            }

            function Calculate(param, text) {
                let index = text.indexOf(param);
                let num1 = Number(text.slice(0, index));
                let num2 = Number(text.slice(-index));
                console.log(num1);
                console.log(num2);
                console.log(index);
                var maths = {
                    '+': function (x, y) { return x + y },
                    '-': function (x, y) { return x - y },
                    '*': function (x, y) { return x * y },
                    '/': function (x, y) { return (x / y) }
                };
                return display.innerText = maths[param](num1, num2);
            }
        }
    });

});

// Normal Calculator

// Risk Calculator

// Risk Calculator