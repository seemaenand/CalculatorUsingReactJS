
// to show a single button on the control layout
const ControlButton = (props) => {
    // getting button values and handleClick function from props
    const {index,value,handleClick} = props;

    // render the button
    return (
        // giving each button a class name on the basis of index number and adding a onClick method
        <div className={`card${index}`} onClick={() => handleClick(value)}>
                {/* button value */}
                {value !== '*' ? value : 'x'}
        </div>
    );
}

// exporting the component
export default ControlButton;