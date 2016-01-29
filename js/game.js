var health = 100;
var pcname ="";
var hit = 0;

function slap(){
      health -= 1
      hit += 1
    update(health);
    update(hit)
}

function kick(){
    health -= 10
    hit += 1
}

function punch(){
    health -= 5
    hit += 1
}





function test(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("pcname").innerHTML = userInput;
}

function update(){
    document.getElementById("pchp").innerText = health.toString();
    document.getElementById("pchits").innerText = hit.toString();
}
update()