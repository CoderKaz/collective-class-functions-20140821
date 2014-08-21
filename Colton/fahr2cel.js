/**
 *@param double temperature in fahrenheit to convert
 *@returns double temperature converted into celsius
 **/
function f2C (number){
      return (number-32)/1.8000;
}

function f2CCallback(){
    var num= document.getElementById("num").value;
    num=parseFloat(num);
    if (isNaN(num)) {
       return; //code
    }
    
    document.getElementById("outputArea").innerHTML=f2C(num)+" celsius";
}