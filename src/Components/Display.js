
// importing the styles for display
import styles from "../Styles/display.module.css";


// render the calculator display on calculator
const Display = (props) => {

    // getting input and output values from props
    const {input,output} = props;

    return(
        <>  
            {/* display container */}
            <div className={styles.display}>

                {/* section to show the input entered by the user */}
                <div className={styles.inputSection}>
                    {/* if input is '0' show nothing */}
                    {input !== '0' ? input : null}
                </div>

                {/* section to show the output of user's input */}
                <div className={styles.outputSection}>

                    {/* if input is not '0' then show answer otherwise show '0' */}
                    {input !== '0' ?`=${output}` : output}
                </div>

            </div>
        </>
    );
}

// export the display
export default Display;