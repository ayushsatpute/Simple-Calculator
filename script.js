const d = document.getElementById("display");

function write(v){
if(d.value === "Error") d.value = "";
d.value += v;
}

function reset(){
d.value = "";
}

function remove(){
d.value = d.value.slice(0,-1);
}

function solve(){
try{
if(d.value === "") return;
d.value = eval(d.value);
}catch{
d.value = "Error";
}
}

document.addEventListener("keydown", (e)=>{
if(!isNaN(e.key)) write(e.key);
if(["+","-","*","/"].includes(e.key)) write(e.key);
if(e.key === "Enter") solve();
if(e.key === "Backspace") remove();
if(e.key === ".") write(".");
if(e.key === "Escape") reset();
});