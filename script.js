let screen=document.getElementById("screen");

function appendValue(v){
if(screen.value==="Error")screen.value="";
screen.value+=v;
}

function clearScreen(){
screen.value="";
}

function removeLast(){
screen.value=screen.value.slice(0,-1);
}

function calculate(){
try{
let exp=screen.value;
if(exp==="")return;
screen.value=Function("return "+exp)();
}
catch{
screen.value="Error";
}
}

document.addEventListener("keydown",e=>{
if(!isNaN(e.key))appendValue(e.key);
if(["+","-","*","/"].includes(e.key))appendValue(e.key);
if(e.key==="Enter")calculate();
if(e.key==="Backspace")removeLast();
if(e.key===".")appendValue(".");
if(e.key==="Escape")clearScreen();
});