/**
 * converts celsius to fahrenheit
 *
 * @param double celsius to be converted
 * @returns double temp of celsius converted to fahrenheit
 **/
function tempConvertCel(celsius) {
    // Multiply Celsius by 1.8, then add 32
    var temp = (celsius * 1.8) + 32;
    var temp = temp.toFixed(2);
    
    // when the task is complete return the reults
    return(temp);
}


/**
 * converts fahrenheit to celsius
 *
 * @param double fahrenheit to be converted
 * @returns double temp of fahrenheit converted to celsius
 **/
function tempConvertFah(fahrenheit) {
    // Subtract 32 from fahrenheit, then divide by 1.8
    var temp = (fahrenheit - 32) / 1.8;
    var temp = temp.toFixed(2);
    
    // when the task is complete return the reults
    return(temp);
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
    
    // alerts for record breaking temperatures
    if (celsius > 56.7) {
        alert("You just broke the world record! The hottest temperature recorded on Earth was 134 degrees Fahrenheit (56.7 degrees Celsius) on July 10, 1913");
    }
    if (celsius < -93.22) {
        alert("You just broke the world record! The coldest temperature recorded on Earth was -135.8 degrees Fahrenheit (-93.22 degrees Celsius) on August 2010");
    }

    
    // use the worker function and get the output
    var temp = tempConvertCel(celsius);
    
    // display the converted answer
    document.getElementById("outputAreaFahrenheit").innerHTML = temp + " degrees Fahernheit";

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
    
    // alerts for record breaking temperatures
    if (fahrenheit > 134) {
        alert("You just broke the world record! The hottest temperature recorded on Earth was 134 degrees Fahrenheit (56.7 degrees Celsius) on July 10, 1913");
    }
    if (fahrenheit < -135.8) {
        alert("You just broke the world record! The coldest temperature recorded on Earth was -135.8 degrees Fahrenheit (-93.22 degrees Celsius) on August 2010");
    }
    
    // use the worker function and get the output
    var temp = tempConvertFah(fahrenheit);
    
    // display the converted answer
    document.getElementById("outputAreaCelsius").innerHTML = temp + " degrees Celsius";

}

