/**
 * takes two masses and calculates the gravitational attraction between them them
 * massOne and massTwo are the objects that are getting their gravitational force measured (think along the lines of mutal Force pull)
 * distance is the distance between massOne and massTwo
 * 
 * @param double gravity number to answer
 * @param double massOne number to answer
 * @param double massTwo number to answer
 * @param double distance number to answer
 * @returns double answer
 **/
function force (gravity, massOne, massTwo, distance) {
    var answer = (massOne * massTwo) / (distance * distance) * gravity;
    return (answer);
}

/**
 * @callback function for calculating gravity
 **/

function forceCallBack() {
    // get inputs from the DOM
    var gravity  = document.getElementById("gravity").value;
    var massOne = document.getElementById("massOne").value;
    var massTwo  = document.getElementById("massTwo").value;
    var distance  = document.getElementById("distance").value;
    
    // sanitize inputs
    gravity  = parseFloat(gravity);
    massOne  = parseFloat(massOne);
    massTwo  = parseFloat(massTwo);
    distance = parseFloat(distance);

    if (isNaN(gravity) === true || isNaN(massOne) === true || isNaN(massTwo) === true || (isNaN(distance) === true)){
        alert("The fail is strong in you. Use numbers, you must");
        return;
    }
     // use the worker function and get the force
    var answer = force(gravity, massOne, massTwo, distance);
    
    // do something "useful" - i.e., display the answer
    document.getElementById("outputArea").innerHTML = "Force = " + answer;
}