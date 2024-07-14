
document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    // console.log(buttons);
    let currentInput = "";
    let operator = "";
    let previousValue = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.textContent;

            if (button.classList.contains('number')) {
                // console.log(value);
                currentInput += value;
                display.value = value;
            } else if (value === 'C') {
                console.log(value);
                currentInput = '';
                operator = '';
                previousValue = '';
                display.value = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                console.log(value);
                previousValue = currentInput;
                operator = value;
                currentInput = '';
            } else if (value === '.') {
                if (!currentInput.includes('.')) {
                    console.log(value);
                    currentInput += '.';
                    display.value = currentInput;
                }
            } else if (value === '=') {
                if (operator && previousValue && currentInput) {
                    try {
                        console.log(value);
                        const result = eval(`${previousValue} ${operator} ${currentInput}`);
                        console.log(result);
                        display.value = result;
                        currentInput = result;
                        operator = '';
                        previousValue = '';
                    } catch (error) {
                        display.value = 'Error';
                    }
                }
            }
        });
    });
});
