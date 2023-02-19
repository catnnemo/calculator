function initialize(){
    document.getElementById("width").setAttribute("value","0");
    document.getElementById("height").setAttribute("value","input");
    var width = 0;
    var height = 0;
  }
  
  function calculate() {
    width = parseFloat(document.getElementById("width").value);
    height = parseFloat(document.getElementById("height").value);
    document.getElementById("output").innerHTML = width*height;
  }