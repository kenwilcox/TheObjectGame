var health = 100;

function slap(){
      health -= 1
    update(health);
  
}


function update(){
    
    document.getElementById("pchp").innerText = health.toString();
    
}
update()