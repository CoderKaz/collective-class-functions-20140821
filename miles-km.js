/**
 * Multiplies a number by 1.60934
 *
 * @param double miles to convert
 * @returns double product of the two numbers
 **/

function convertMilesToKm(miles) {
    // multipy miles by conversion ratio
    var conversionRatio = 1.60934; 
    var product = miles * conversionRatio;
    
    // when complete return the results
    return (product);
}

/**
 * Callback funtion for multiplying miles by conversion ratio
 **/
function convertMilesToKmCallback() {
    // gets input from the DOM
    var conversionRatio  = 1.60934;
    var miles = document.getElementById("miles").value;
    
    //sanitize input
    miles = parseFloat(miles);
    
    //verify
    if (isNaN(miles) === true) {
        alert("Invalid Inputs Detected");
        return;
    }
    // use the worker function and get the output
    var product = convertMilesToKm(miles)
    
    // do something "useful" i.e. print the answer
    document.getElementById("outputArea").innerHTML = "Kilometers = " + product; 
    
}