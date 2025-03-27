const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = 'Error';
  }
}

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
  const value = button.value;

  if (button.id === 'clear') {
    button.addEventListener('click', clearDisplay);
  } else if (button.id === 'calculate') {
    button.addEventListener('click', calculate);
  } else {
    button.addEventListener('click', () => appendToDisplay(value));
  }
});
