// Declaration of boat player data.
function BoatPlayer(game) {
	this.game = game;
	this.sprite = null;
	this.speed = 100;
	this.rotation = 5;
	this.angle = 0;
	this.animation = 'dukeAnim';
	this.arrowKeys = null;
	this.stopped = true;
	this.weapon = null;
	this.enableBody = true;
}

// Initializes the boat player's sprite.
BoatPlayer.prototype.render = function() {
	// loads sprites
	this.sprite = this.game.add.sprite(30, 230, 'boat');
	
	// sets sprite properties
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	this.sprite.immovable = true; // makes it immovable when a collision occurs
	this.sprite.body.collideWorldBounds = true; // sprite cannot exceed the world bounds

	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
};

// Loads the boat player's sprites and defines it's animations.
BoatPlayer.prototype.load = function() {
	this.render();
	//this.addAnimations();
}

// Change the sprite's frame based on the boat player angle
BoatPlayer.prototype.changeFrame = function(direction){
	if ((this.angle >= 0 && this.angle < 22.5) || this.angle >= 337.5) { // RIGHT
		this.sprite.frame = 5;
	} else if ((this.angle >= 22.5 && (this.angle - 45) < 22.5)) { // UP - RIGHT
		this.sprite.frame = 2;
	} else if ((this.angle >= 67.5 && (this.angle - 45) < 67.5)) { // UP
		this.sprite.frame = 1;
	} else if ((this.angle >= 112.5 && (this.angle - 45) < 112.5)) { // UP - LEFT
		this.sprite.frame = 0;
	} else if ((this.angle >= 157.5 && (this.angle - 45) < 157.5)) { // LEFT
		this.sprite.frame = 3;
	} else if ((this.angle >= 202.5 && (this.angle - 45) < 202.5)) { // DOWN - LEFT
		this.sprite.frame = 6;
	} else if ((this.angle >= 247.5 && (this.angle - 45) < 247.5)) { // DOWN
		this.sprite.frame = 7;
	} else if ((this.angle >= 292.5 && (this.angle - 45) < 292.5)) { // DOWN - RIGHT
		this.sprite.frame = 8;
	}
}

// Stops the boat player's movement.
BoatPlayer.prototype.stop = function() {
	this.stopped = true;
	this.sprite.body.velocity.x = 0;
	this.sprite.body.velocity.y = 0;
}

// Moves the boat player's sprite with a given value and direction.
BoatPlayer.prototype.move = function(moveValue, direction) {
	this.stopped = false;
	switch (direction) {
		//Vertical=0; Horizontal=1
		case 0:
			this.sprite.body.velocity.y = -moveValue*Math.sin(Phaser.Math.degToRad(this.angle));
			this.sprite.body.velocity.x = moveValue*Math.cos(Phaser.Math.degToRad(this.angle));
			
			break;
		case 1:
			this.angle = (this.angle + moveValue + 360)%360; // 0 <= angle < 360
			break;
	}
}

// Checks the input and handles the movement.
BoatPlayer.prototype.handleMovement = function() {
	this.stop();
	this.changeFrame();

	if (this.game.cursors.up.isDown) {
		this.move(this.speed, 0);
	} else if (this.game.cursors.down.isDown) {
		this.move(-this.speed, 0);
	}

	if (this.game.cursors.left.isDown) {
		this.move(this.rotation, 1);
	} else if (this.game.cursors.right.isDown) {
		this.move(-this.rotation, 1);
	}
}


// Updates the boat player.
BoatPlayer.prototype.update = function() {
	this.handleMovement();
	//this.game.debug.bodyInfo(this.sprite, 32, 32);
	//this.game.debug.text(this.angle.toString(), 32, 400);


}


