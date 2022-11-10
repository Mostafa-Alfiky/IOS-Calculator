const button = document.querySelector(".calculator");
const paragraph = document.querySelector(".screen");
const clearButton = document.querySelector(".clear");
const equalSign = document.querySelector(".equalSign");
const back = document.querySelector(".back")
let string = "";
let value;

button.addEventListener("click", function(event) {
    string = string.concat(event.target.value);
    paragraph.innerText = string;
})

back.addEventListener("click", function(){
    string = string.slice(0, -1);
    if (string == "") {
        string = "0"
    }
})

equalSign.addEventListener("click", function() {
    value = eval(string);
    string = value.toString();
})

clearButton.addEventListener("click", function(){
    string= "0";
    value = 0;
})