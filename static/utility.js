function rectangularCollision(rect1, rect2){
  // end of blade
  let a = rect1.attackBox.position.x + rect1.attackBox.width
  // start of body
  let b = rect2.hitBox.position.x 
  // start of blade
  let c = rect1.attackBox.position.x
  // end of body
  let d = rect2.hitBox.position.x + rect2.hitBox.width
  return (a > b && c < d)

}
let winner = false;
function determineWinner({player, enemy, timerId}){
  clearTimeout(timerId)
  document.querySelector("#displayText").style.display = "flex"
  if (player.health == enemy.health) {
    document.querySelector("#displayText").innerHTML = "tie"
  } else if (player.health > enemy.health){
    document.querySelector("#displayText").innerHTML = "Player 1 Wins"
  } else{
    document.querySelector("#displayText").innerHTML = "Player 2 Wins"
  }
}
let timer = 60;
let timerId;
    
function enemyHealthDepletion() {         
  setTimeout(function() {   
    enemy.backHealth -= 1;
    document.querySelector("#enemyBackHealth").style.width = enemy.backHealth + "%";
    if (enemy.backHealth > enemy.health) {          
      enemyHealthDepletion();             
    }                      
  }, 10)
}

function playerHealthDepletion() {         
  setTimeout(function() {   
    player.backHealth -= 1;
    document.querySelector("#playerBackHealth").style.width = player.backHealth + "%";
    if (player.backHealth > player.health) {          
      playerHealthDepletion();             
    }                      
  }, 10)
}

