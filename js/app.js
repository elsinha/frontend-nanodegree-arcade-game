// Enemies our player must avoid
var Enemy = function(x, y, velocity) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
this.x = x;
this.y = y;
this.velocity = velocity;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
this.x += this.velocity * dt;

if ( this.x > 550 ) {
    this.x = -100;
}

var xpos = Math.abs((player.x + 80) - (this.x + 80));
var ypos = Math.abs((player.y + 50) - (this.y + 50));
if( xpos<=80 &&  ypos <=50){
  setTimeout(() => {

             player.x = 202;
             player.y = 405;

  },300);

}
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(positionX, positionY) {
  this.x = positionX;
  this.y = positionY;
  this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//player moves
Player.prototype.handleInput = function(keycode) {
  console.log(keycode);
  // Enables user on up arrow key to move upwards on the y axis by 83
  switch (keycode) {
    case 'up' :
    if (this.y > 0){
         this.y -= 83;
       }
      break;
    case 'down' :
    if(this.y < 405){
       this.y += 83;
     }
      break;
    case 'left' :
    if(this.x > 0){
      this.x -= 102;
    }
      break;
    case 'right' :
    if(this.x < 405){
       this.x += 102;
     }
      break;
  }
   console.log(this.y);
   if (this.y < 0){
     setTimeout(() => {
       var resp = confirm("Fantastic! You win! Play again? ");
              if (resp == true){
                this.x = 202;
                this.y =405;
                                }
     },100);




   }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


let allEnemies =[new Enemy(101,225,20), new Enemy(202,142,30), new Enemy(303,60, 40)];
let player = new Player(202, 405);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
