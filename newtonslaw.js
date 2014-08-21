
function newtonsLaw(massOne, massTwo, radiusSqr) {
    var mass = massOne * massTwo;
    var radius = radiusSqr * radiusSqr;
    var mR = mass / radius;
    var gravity = 6.674e-11;
    var Force = gravity * mR;
}

function newtonsLawCallback() {
    var massOne = document.getElementById("massOne").value;
    var massTwo = document.getElementById("massTwo").value;
    var radiusSqr = document.getElementById("radiusSqr").value;
    
    massOne = parseFloat(massOne);
    massTwo = parseFloat (massTwo);
    radiusSqr = parseFloat(radiusSqr);
    
    if (isNaN(massOne) === true || isNaN(massTwo) === true || isNaN(radiusSqr) === true){
        alert("Invalid input detected!!");
        return;
    }
    
    var mass = massOne * massTwo;
    var radius = radiusSqr * radiusSqr;
    var mR = mass / radius;
    var gravity = 6.674e-11;
    var force = gravity * mR;
    
    document.getElementById("outputArea").innerHTML = "The gravitational force between the two objects is " + force;
}