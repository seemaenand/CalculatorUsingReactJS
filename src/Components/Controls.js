import { useState } from 'react';
import styles from '../Styles/controls.module.css';
import ControlButton from './ControlButton';
import * as math from 'mathjs';

// Array containing the layout of buttons for the calculator
const operators = ['AC', 'C', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const Controls = ({ input, output, setInput, setOutput }) => {
  // State to track if an operational symbol is clicked
  const [isSymbolClick, setIsSymbolClick] = useState(false);
  // State to track if the equals sign is clicked
  const [isEqualClick, setIsEqualClick] = useState(false);

  // Function to handle button clicks
  const handleClick = (value) => {
    switch (value) {
      case 'AC':
        // Reset everything
        setInput('0');
        setOutput(0);
        setIsEqualClick(false);
        setIsSymbolClick(false);
        break;
      case 'C':
        // Remove the last entered value
        setInput(input.length === 1 ? '0' : input.slice(0, -1));
        break;
      case '%':
        // Calculate percentage
        const newInput = isSymbolClick ? input.slice(0, -1) : input;
        try {
          const answer = math.evaluate(`${newInput} / 100`);
          setInput(answer.toString());
          setOutput(answer);
          setIsSymbolClick(false);
        } catch (error) {
          window.alert('Invalid Expression');
        }
        break;
      case '=':
        // Calculate result
        if (isSymbolClick) {
          window.alert('Please Enter Correct value');
          break;
        }
        try {
          const result = math.evaluate(input);
          const roundedResult = Math.round(result * 100) / 100;
          setOutput(roundedResult);
          setIsEqualClick(true);
        } catch (error) {
          window.alert('Invalid Expression');
        }
        break;
      case '/':
      case '*':
      case '+':
      case '-':
        // Handle operators
        if (isSymbolClick) {
          // If there is already a symbol, replace it
          const newInput = input.slice(0, -1);
          setInput(newInput + value);
        } else if (input === '0' && value !== '-') {
          // If input is '0', replace it with the new operator (except for minus sign)
          setInput(value);
        } else {
          // Otherwise, append the operator
          setInput(input + value);
        }
        // Set isSymbolClick to true for consecutive operations
        setIsSymbolClick(true);
        break;
      default:
        // Handle numbers and dot
        if (input === '0' || isEqualClick) {
          // If input is '0' or after equals sign, replace it with the new value
          setInput(value.toString());
          setIsEqualClick(false);
        } else {
          // Otherwise, append the value
          setInput(input + value);
        }
        // Reset isSymbolClick for numbers and dot
        setIsSymbolClick(false);
        break;
    }
  };

  // Return the whole controls section of the calculator
  return (
    <div className={styles.controlContainer}>
      {/* Mapping over the operator array to add all the buttons */}
      {operators.map((value, i) => (
        <ControlButton key={i} index={i} value={value} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Controls;
