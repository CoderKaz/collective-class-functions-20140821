

function convertLiToGal() {
    
    var  liters = document.getElementById("liters").value;
    liters = parseFloat(liters);

    if (isNaN(liters) === true) {
        alert("not a number.....dummy!");
        return;
    }
    
    var gallon = liters * .2642007;
    document.getElementById("outputArea").innerHTML = gallon;
}
    
    
    
    
 