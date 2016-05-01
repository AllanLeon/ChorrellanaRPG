// Declaration of bullet data.
function Bullet(game){
	this.game = game;
	this.sprite = null;
	//this.colliderSprite = null;
	this.speed = 500;
	this.direction = 'Down';
	//this.stopped = true;
}

// Info of the player's position.
/*var bulletPositionData = {
	initial: { x: 10, y: 230 }, // initial position of the player
	//colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};*/

// Initializes the players sprites.
Bullet.prototype.render = function(){
	// loads sprites
	//this.colliderSprite = this.game.add.sprite(positionData.initial.x - positionData.colliderDifference.x, positionData.initial.y - positionData.colliderDifference.y, 'dukeCollider');
	this.sprite = this.game.add.sprite(this.game.player.sprite.x, this.game.player.sprite.y, 'stone');
	
	// sets sprite properties
	this.sprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite
	//this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	//this.colliderSprite.immovable = true; // makes it immovable when a collision occurs
	//this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
};
/*
// Defines the player's animations with their respective frames.
Bu.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Left', [4, 5, 6, 7], 10, true);
	this.sprite.animations.add(this.animation + 'Right', [8, 9, 10, 11], 10, true);
	this.sprite.animations.add(this.animation + 'Up', [12, 13, 14, 15], 10, true);
	this.sprite.animations.add(this.animation + 'Down', [0, 1, 2, 3], 10, true);
}
*/
// Loads the player's sprites and defines it's animations.
Bullet.prototype.load = function(){
	this.render();
	//this.addAnimations();
}
/*
// Plays the current animation.
Player.prototype.playAnimation = function(){
	this.sprite.play(this.animation + this.direction);
}

// Stops all the animations and sets the currect frame to the default based on the player's direction.
Player.prototype.stopAnimation = function(direction){
	this.sprite.animations.stop();

	switch (this.direction) {
		case 'Left':
			this.sprite.frame = 4;
			break;
		case 'Right':
			this.sprite.frame = 8;
			break;
		case 'Up':
			this.sprite.frame = 12;
			break;
		case 'Down':
			this.sprite.frame = 0;
			break;
	}
}
*/
/*
// Stops the player's movement.
Player.prototype.stop = function(){
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}
*/
// Moves the player's colliderSprite with a given speed and direction.
Bullet.prototype.move = function(speed, direction){
	//this.stopped = false;
	switch (direction) {
		//Vertical=0; Horizontal=1
		case 0:
			this.sprite.body.velocity.y = speed;
			this.sprite.body.velocity.x = 0;
			break;
		case 1:
			this.sprite.body.velocity.x = speed;
			this.sprite.body.velocity.y = 0;
			break;
	}
}

// Moves the player's sprite.
Bullet.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
Bullet.prototype.handleMovement = function(){
	//this.stop();

	switch(this.direction){
		case "Up":
			this.move(-this.speed, 0);
			break;
		case "Down":
			this.move(this.speed, 0);
			break;
		case "Left":
			this.move(-this.speed, 1);
			break;
		case "Right":
			this.move(this.speed, 1);
			break;
	}

	/*if (this.game.cursors.up.isDown){
		this.direction = "Up";
		this.move(-this.speed, 0);
	}
	else if (this.game.cursors.down.isDown){
		this.direction = "Down";
		this.move(this.speed, 0);
	}

	if (this.game.cursors.left.isDown){
		this.direction = "Left";
		this.move(-this.speed, 1);
	}
	else if (this.game.cursors.right.isDown){
		this.direction = "Right";
		this.move(this.speed, 1);
	}*/
	/*
	if(this.stopped){
		this.stopAnimation();
	}
	else{
		this.playAnimation();
	}
	*/
	//this.setBodyPosition(this.colliderSprite.x - positionData.colliderDifference.x, this.colliderSprite.y - positionData.colliderDifference.x);
}

// Updates the player.
Bullet.prototype.update = function(){
	this.handleMovement();
	this.fireWeapon();
}


Bullet.prototype.fireWeapon = function(){
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
		
		this.sprite.x = this.game.player.sprite.x;
		this.sprite.y = this.game.player.sprite.y;
		this.sprite.alpha = 1;

		this.direction = this.game.player.direction;
	}
	
}
