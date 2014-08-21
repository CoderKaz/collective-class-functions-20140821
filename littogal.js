

function convertLiToGal() {
    
    var  liters = document.getElementById("liters").value;
    liters = parseFloat(liters);

    if (isNaN(liters) === true) {
        alert("not a number.....dummy!");
        return;
    }
    
    var gallon = liters * 3.74;
    document.getElementById("outputArea").innerHTML = gallon;
}
    
    
    
    
 