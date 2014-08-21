/**
* Takes two numbers and multiplys them
*
* @param double first number (money) to multiply
* @param double second number  (exchange rate) to mutiply
* @returns double mutiplication result the two numbers
**/

function exchangeRateMultiply(first, second){
    var rubles = first * second;
    return (rubles);
}

/**
 *callback fuction for multiping the rate times the pesos
 *
 **/

function exchangeRateMultiplyCallback() {
    //sanitize inputs from the DOM
    var pesos = document.getElementById("pesos").value;
    var exchangeRate = document.getElementById("exchangeRate").value;
    
    //sanitize inputs
    pesos = parseFloat(pesos);
    exchangeRate = parseFloat(exchangeRate);
    
    //verify inputs
    if (isNaN(pesos) === true || isNaN(exchangeRate)  === true) {
        alert("Invalid  inputs detected!")
        return;
    }
    
    //use the worker function and get its output
    var rubles = exchangeRateMultiply(pesos,exchangeRate);
    
    //do something "useful" i.e. display the answer
    document.getElementById("outputArea").innerHTML =  rubbles +" Rubles";
} 
