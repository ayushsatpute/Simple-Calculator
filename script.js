const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{
btn.addEventListener("click",(e)=>{
e.preventDefault();

let val = btn.innerText;

if(val === "C"){
display.value = "";
}
else if(val === "Del"){
display.value = display.value.slice(0,-1);
}
else if(val === "="){
try{
display.value = eval(display.value);
}catch{
display.value = "Error";
}
}
else{
if(display.value === "Error") display.value="";
display.value += val;
}
});
});

document.addEventListener("keydown",(e)=>{
if(!isNaN(e.key)) display.value += e.key;
if(["+","-","*","/"].includes(e.key)) display.value += e.key;

if(e.key === "Enter"){
try{
display.value = eval(display.value);
}catch{
display.value = "Error";
}
}

if(e.key === "Backspace"){
display.value = display.value.slice(0,-1);
}

if(e.key === "Escape"){
display.value = "";
}

if(e.key === ".") display.value += ".";
});