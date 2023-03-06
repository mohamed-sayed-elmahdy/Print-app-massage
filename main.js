// get element into variables
var inputEl = document.getElementById("input");
var Elbutton = document.getElementById("btn");
var pEl = document.getElementById("para");
// events
Elbutton.onclick = function() {
    // get the value of input field
    var inpuvalue = inputEl.value;
    pEl.innerHTML = inpuvalue;
    inputEl.value = "";
}