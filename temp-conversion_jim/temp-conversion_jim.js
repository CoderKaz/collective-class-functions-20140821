/**
 * converts celsius to fahrenheit
 *
 * @param double celsius to be converted
 * @returns double sum of celsius converted to fahrenheit
 **/
function tempConvertCel(celsius) {
    // Multiply Celsius by 1.8, then add 32
    var sum = (celsius * 1.8) + 32;
    
    // when the task is complete return the reults
    return(sum);
}


/**
 * converts fahrenheit to celsius
 *
 * @param double fahrenheit to be converted
 * @returns double sum of fahrenheit converted to celsius
 **/
function tempConvertFah(fahrenheit) {
    // Subtract 32 from fahrenheit, then divide by 1.8
    var sum = (fahrenheit - 32) / 1.8;
    var sum = sum.toFixed(2);
    
    // when the task is complete return the reults
    return(sum);
}


/**
 * callback function for celsius to fahrenheit
 **/
function tempConvertCelCallback() {
    // get inputs from the DOM
    var celsius = document.getElementById("celsius").value;
    
    // sanitize inputs
    celsius  = parseFloat(celsius);
    
    // verify inputs
    if(isNaN(celsius) === true) {
        alert("Invalid temperature, try again");
        return;
    }
    
    // use the worker function and get the output
    var sum = tempConvertCel(celsius);
    
    // display the converted answer
    document.getElementById("outputAreaFahrenheit").innerHTML = sum + " degrees Fahernheit";

}


/**
 * callback function for fahrenheit to celsius
 **/
function tempConvertFahCallback() {
    // get inputs from the DOM
    var fahrenheit = document.getElementById("fahrenheit").value;
    
    // sanitize inputs
    fahrenheit  = parseFloat(fahrenheit);
    
    // verify inputs
    if(isNaN(fahrenheit) === true) {
        alert("Invalid temperature, try again");
        return;
    }
    if (fahrenheit > 100) {
        alert("HOT HOT HOT!");
    }
    
    // use the worker function and get the output
    var sum = tempConvertFah(fahrenheit);
    
    // display the converted answer
    document.getElementById("outputAreaCelsius").innerHTML = sum + " degrees Celsius";

}

