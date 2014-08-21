
    function convertEuroToBath() {
         var first = document.getElementById("first").value;
   
    // sanitize inputs 
    first = parseFloat(first);
     //verify since these could potentially be NaN
    if(isNaN(first) === true) {
        alert ("Invalid inputs detected"); // this verification procedure is called a fail safe
        return; //two bit implications of return - it returns a value (in this case nothing)and second it ends the function.
    }
    

    //take product calculation and calculate var product

    var product = (first * 42.4665);

    //When the task is complete display the results

     document.getElementById("outputArea").innerHTML = "THB = " + product;
}

   