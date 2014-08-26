// function converts K to F
function convertKtoF(degreesK) {
    var sum = (degreesK *9/5) - 459;
        return(sum);
}

function convertKtoFCallback() {
    var degreesK  = document.getElementById("degreesK").value;
    degreesK  = parseFloat(degreesK);
    if (isNaN(degreesK) === true) {
        alert("Invalid Input -- please type in numbers only");
        return;
    }
    var sum = convertKtoF(degreesK);
    document.getElementById("outputArea").innerHTML = "Degrees in Fahrenheit are " + sum;
}

// next function, converting F to K
function convertFtoK(degreesF) {
    var sum = (degreesF + 459)*5/9; 
        return(sum);
}

function convertFtoKCallback() {
    var degreesF  = document.getElementById("degreesK").value;
    degreesF  = parseFloat(degreesF);
    if (isNaN(degreesF) === true) {
        alert("Invalid Input -- please type in numbers only");
        return;
    }
    var sum = convertFtoK(degreesF); 
    document.getElementById("outputArea").innerHTML = "Degrees in Kelvin are " + sum;
}

//another function, converting 