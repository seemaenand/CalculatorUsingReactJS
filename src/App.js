
// importing css styles from Styles folder 
import styles from "./Styles/app.module.css";

// importing Calculator component form Component folder
import Calculator from "./Components/Calculator";


// render app function
function App() {

  // return the main page of application
  return (
    // main container 
    <div className={styles.mainContainer}>
      
      {/* div containing page heading */}
      <div className={styles.heading}>
        <h1>Calculator</h1>
      </div>

      {/* render the calculator */}
      <Calculator />    
    </div>
  );
}

export default App;
