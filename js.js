const inp1 = document.getElementById("inp1");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const output = document.getElementById("output");
let temp;

function covert(){
    
if(radio1.checked){
    temp = Number(inp1.value);
    temp = temp * 9 / 5 + 32;
    output.textContent = temp.toFixed(1) + "°F"
}
else if(radio2.checked){
    temp = Number(inp1.value);
    temp = (temp - 32) * (5/9);
    output.textContent = temp.toFixed(1) + "°C"

}
else{
    output.textContent = "select a unit";
}

}