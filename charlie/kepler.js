/**
 *takes two numbers and adds them
 *
 *@param double first number to add
 *@param double second number to add
 *@returns double sum of the two numbers
 **/
function kepler (p, e, t) {
    // first perform the task (i.e., add the numbers)
    var r = p / ( 1 + e * Math.cos(t));
    
    // when the task is complete return the results
    return(r);
}

// doc block: a commented block of code, specificaly formatted, that explaines what a function does. Doc blocks are then fed to special tools that automatically generate documentation.

/**
 * callback function for adding two numbers
 **/
function keplerCallBack() {
    // get inputs from the DOM
    var p = document.getElementById("p").value;
    var e = document.getElementById("e").value;
    var t = document.getElementById("t").value;
    
    // sanitize inputs
    p = parseFloat (p);
    e = parseFloat (e);
    t = parseFloat (t);
    
    // verify inputs
    if (isNaN(p) === true || isNaN(e) === true || isNaN(t) === true) {
        alert("Invalid inputs detected");
        return;
    }
    
    // use the worker function and get the output
    var r=kepler(p,e,t);
    
    // do something "useful" - i.e., display the answer
    document.getElementById("outputArea").innerHTML="r= "+r;
}