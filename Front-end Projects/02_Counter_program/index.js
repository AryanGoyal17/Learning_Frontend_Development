let default_val = 0;
let val_change = 0



document.getElementById("decrease").onclick = function(){
    
    document.getElementById("counter").textContent = val_change--;
}

document.getElementById("increase").onclick = function(){
    
    document.getElementById("counter").textContent = val_change++;
}

document.getElementById("reset").onclick = function(){
    
    document.getElementById("counter").textContent = default_val;
    val_change = 0
}