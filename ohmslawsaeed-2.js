/**
 * Resistance is calculated
 *
 * @param double current value to multiply
 * @param double voltage value to multiply
 * @return double resistance value of the two vlues
 **/

function calculateResistance(current, voltage ) {
    var resistance = current * voltage;
    return(resistance);
}
/**
 * Callback function for resistance value
 **/
function calculateResistanceCallback() {
    
    // get inputs from the DOM
    
    var current = document.getElementById("current").value;
    var voltage = document.getElementById("voltage").value;
    
    // sanitize inputs
    
    current = parseFloat(current);
    voltage = parseFloat(voltage);
    
    // verify inputs
    
    if (isNaN(current) === true || isNaN(voltage) === true) {
        alert("Invalid inputs detected");
        return;
    }
    
    // use the worker function and get th output
    
    var resistance = calculateResistance(current, voltage);
    
    //do something "usefull" -i.e., display theanswer
    
    document.getElementById("outputArea").innerHTML = "resistance =" + resistance;
    
}


/**
 * Calculate current value using resistance and voltage
 * @param double resistane in ohms value to multiply
 * @param double voltage value to multiply
 * @return double resistance value from (R/V) values
 **/
function calculateCurrent(resistance, voltage ) {
    var current = voltage / resistance;
    return(current);
}
/**
 * Callback function for resistance value
 **/
function calculateCurrentCallback() {
    
    // get inputs from the DOM
    
    var voltage = document.getElementById("voltage1").value;
    var resistance = document.getElementById("resistance").value;
    
    // sanitize inputs
    
    resistance = parseFloat(resistance);
    voltage = parseFloat(voltage);
    
    // verify inputs
    
    if (isNaN(resistance) === true || isNaN(voltage) === true) {
        alert("Invalid inputs detected");
        return;
    }
    
    // use the worker function and get th output
    
    var current = calculateCurrent(resistance, voltage);
    
    //do something "usefull" -i.e., display the answer
    
    document.getElementById("outputArea").innerHTML = "current =" + current;
}