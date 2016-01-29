var Item = function(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){
     //...
    }
}
var items = {
    shield: new Item("Shield",0.3,"This is an awesome shield!"),
    sword :new Item("Sword",0.5,"Amazing Sword of Epic Death"),
    helmet: new Item("Helmet",0.2,"Solid Head Protection!"),
    breastplate: new Item("Breastplate",0.4,"Big, ugly and safe"),
}

var Player = function(){
    this.health = 100;
    this.pcname ="";
    this.hit = 0;
    this.items = [items.shield, items.helmet];    
}
var player = new Player();


function slap() {
    player.health -= 1;
    player.hit += 1;
    update();
}

function kick() {
    player.health -= 10;
    player.hit += 1;
    update();
    
}

function punch() {
    player.health -= 5;
    player.hit += 1;
    update();
    
}

function test() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("pcname").innerHTML = userInput;
}

function update() {
    document.getElementById("pchp").innerText = player.health.toString();
    document.getElementById("pchit").innerText = player.hit.toString();
    alert(JSON.stringify(player.items));
}
update();