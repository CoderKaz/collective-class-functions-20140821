/**
 *takes miles and converts it to kilometers
 *
 *@param takes miles
 *@returns convert miles to kilometers
 **/
function milesConvert(miles) {
    // first, perform the task (add the numbers)
    var distance = miles * 1.60934;
    
    //when the task is complete return the results
    return (distance);
}

/**
 *callback function converting miles to kilometers
 **/
function milesConvertCallback() {
    //get inputs from the DOM
    var distance = document.getElementById("miles").value;
    
    //sanitize inputs
    distance = parseFloat(distance);
    
    
    //verify inputs
    if (isNaN(distance) === true) {
        alert ("Invalid input!");
        return;
    }
    
    //use the worker function and get the output
    var conversion = milesConvert(distance);
    
    //do something "useful" - i.e., displaythe number
    document.getElementById("outputArea").innerHTML = conversion + " km";
}