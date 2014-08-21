function convertFtoC (fahrenheit) {
    // first perform the task (i.e., add the numbers)
    var product = ((fahrenheit - 32) * 5/9 );
    
    // when the task is complete return the results
    return(product);
}

/**
 * callback function for adding two numbers
 **/
function convertFtoCCallBack() {
    // get inputs from the DOM
    var fahrenheit = document.getElementById("fahrenheit").value;
    
    // sanitize inputs
    fahrenheit = parseFloat(fahrenheit);
    
    // verify inputs
    if (isNaN(fahrenheit) === true ) {
        alert("Invalid inputs detected");
        return;
    }
    
    // use the worker function and get the output
    var product=convertFtoC(fahrenheit);
    
    // do something "useful" - i.e., display the answer
    document.getElementById("outputArea").innerHTML="celsius= " + product;
}