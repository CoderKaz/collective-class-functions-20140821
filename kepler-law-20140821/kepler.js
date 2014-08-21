function kepler(aye, ecc, theta) {
    var radius = ((aye * (1 - (ecc * ecc)))/(1 + (ecc * Math.cos(theta))));
    var radius = radius * .0174532925
    return(radius);
}

function keplerCallback() {
    var aye   = document.getElementById("aye").value;
    var ecc   = document.getElementById("ecc").value;
    var theta = document.getElementById("theta").value;
    
    aye   = parseFloat(aye);
    ecc   = parseFloat(ecc);
    theta = parseFloat(theta);
    
    if (isNaN(aye) == true || isNaN(ecc) == true || isNaN(theta) == true) {
        alert('Check your numbers there was an error.');
        return;
    }
    
    if (ecc < 0 || ecc > 1) {
        alert('Your eccentrcity must be between 0 and 1.')
        return;
    }
        
    var radius = kepler(aye, ecc, theta);
    
    document.getElementById("answerArea").innerHTML = "radius in radians = " + radius;
}