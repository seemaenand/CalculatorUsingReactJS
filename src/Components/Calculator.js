
// importng useState reack hook
import { useState } from "react";

// importing controls component to render all the buttons layout
import Controls from "./Controls";

// importing display components to show both input and output
import Display from "./Display";

// importing css file for style
import styels from "../Styles/calculator.module.css";


// render the calculator
const Calculator = () => {
    
    // state for storing the output 
    const [output,setOutput] = useState(0);
    // state for storing the input ( in string )
    const [input,setInput] = useState('0');
    

    // render the display component and Controls component
    return (
        // calculator container
        <div className={styels.calculatorLayout}>
            
            {/* display component to show input and output */}
            {/* passing the state as props */}
            <Display input={input}
                    output={output} />
            <hr />
            {/* Controls component to show all the buttons and implement their funtionality */}
            {/* passing the statea and setState methods as props */}
            <Controls input={input}
                    output={output} 
                    setInput={setInput} 
                    setOutput={setOutput} />

        </div>
    );
}


// export the component
export default Calculator;