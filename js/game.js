var health = 100;
var pcname =

function slap(){
      health -= 1
    update(health);
}

function kick(){
      health -= 10
    update(health);
}

function update(){
    document.getElementById("pchp").innerText = health.toString();
}
update()



function test(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("pcname").innerHTML = userInput;
}