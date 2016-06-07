// Declaration of Enemy data.
function EnemySnake(game,x,y){
	this.game = game;
	this.health = 100;
	this.sprite = null;
	this.spriteBullet = null;
	this.colliderSprite = null;
	//this.collide = false;
	this.speed = 100;
	this.animation = 'snake';
	this.direction = 'Right';
	this.stopped = true;
	this.initialX = x;
	this.initialY = y;
	this.enableBody = true;
	this.positionData = {
	colliderDifference: {x:2, y: 1}, // distance from collider sprite to sprite
};

}

// Info of the Enemy's position.

/*var positionData = {
	initial: {x: 0, y: 0},
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};*/

// Initializes the Enemys sprites.
EnemySnake.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(this.initialX - this.positionData.colliderDifference.x, this.initialY - this.positionData.colliderDifference.y, 'snakeCollider');
	this.sprite = this.game.add.sprite(this.initialX, this.initialY, 'snake');
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite
	

	//this.colliderSprite.immovable = true; // makes it immovable when a collision occurs
	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
	//this.collider.body.collider

	

	//this.game.physics.arcade.enable(this.sprite);
};

// Defines the Enemy's animations with their respective frames.
EnemySnake.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Right', [0,1,2,3,4,5], 8, true);
	this.sprite.animations.add(this.animation + 'RightShoot', [6,78,9,10,11,12,13,14], 8, true);

	this.sprite.animations.add(this.animation + 'Left', [15,16,17,18,19,20], 8, true);
	this.sprite.animations.add(this.animation + 'LeftShoot', [21,22,23,24,25,26,27,28,29], 8, true);
}

// Loads the Enemy's sprites and defines it's animations.
EnemySnake.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
EnemySnake.prototype.playAnimation = function(){
	this.sprite.play(this.animation + this.direction);
}

// Moves the Enemy's colliderSprite with a given speed and direction.
EnemySnake.prototype.move = function(speed)
{
	this.colliderSprite.body.velocity.x = speed;
}

// Moves the Enemy's sprite.
EnemySnake.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

EnemySnake.prototype.shoot = function(direction, x, y){
	if(direction=='Right')
	{
		this.spriteBullet = this.game.add.sprite(x,y+13, 'rBullet')
		this.spriteBullet.scale.setTo(0.1);
		this.game.physics.arcade.enable(this.spriteBullet); 
		this.moveBullet(this.speed*2);
		//this.game.physics.arcade.overlap(this.spriteBullet, this.game.player, null, this._bulletAttack, this);
	}
	else
	{
		this.spriteBullet = this.game.add.sprite(x,y+13, 'lBullet')	
		this.spriteBullet.scale.setTo(0.1);
		this.game.physics.arcade.enable(this.spriteBullet); 
		this.moveBullet(-(this.speed*2));	
	}
}
EnemySnake.prototype.moveBullet = function(speed)
{
	this.spriteBullet.body.velocity.x = speed;
}

// Checks the input and handles the movement.
EnemySnake.prototype.handleMovement = function(){

	if(this.sprite.animations.currentAnim.frame==14){
		this.direction = "Left";
		this.move(-this.speed);
	}

	else if (this.sprite.animations.currentAnim.frame==29){
		this.direction = "Right";
		this.move(this.speed);
	}

	if(this.sprite.animations.currentAnim.frame==5){
		this.direction = "RightShoot";
		this.move(0);
		this.shoot("Right",this.sprite.x + 42,this.sprite.y);
		
	}

	else if (this.sprite.animations.currentAnim.frame==20){
		this.direction = "LeftShoot";
		this.move(0);
		this.shoot("Left",this.sprite.x,this.sprite.y);
		
	}


	this.playAnimation();

	this.setBodyPosition(this.colliderSprite.x - this.positionData.colliderDifference.x, this.colliderSprite.y - this.positionData.colliderDifference.x);

	this.game.physics.arcade.overlap(this.sprite, this.game.player.sprite, null, this._enemyAttack, this);

	this.game.physics.arcade.overlap(this.spriteBullet, this.game.player.sprite, null, this._bulletAttack, this);
	
	
}

// Updates the Enemy.
EnemySnake.prototype.update = function(){
	this.handleMovement();	
}

//Enemy Attack
var contador = 0;
EnemySnake.prototype._enemyAttack = function() {
    
	contador += 1;

	if(contador == 10) {

    this.game.player.health -= 5;
    contador = 0;

	}
}

EnemySnake.prototype._bulletAttack = function() 
{
    this.game.player.health -= 10;
    this.spriteBullet.kill();
}