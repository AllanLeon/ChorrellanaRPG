// Declaration of player data.
function UnderwaterPlayer(game, boatPlayer) {
	this.game = game;
	this.boatPlayer = boatPlayer;
	this.health = 100;
	this.sprite = null;
	this.speed = 200;
	this.animation = 'underwaterDukeAnim';
	this.direction = 'Right';
	this.arrowKeys = null;
	this.stopped = true;
	this.jumpPressed = false;
	this.collected = true;

this.positionData = {    // Player's position info.
		initial: { x: 50, y: 100}, // initial position of the player
	};
}


// Initializes the players sprites.
UnderwaterPlayer.prototype.render = function() {
	// loads sprites
	this.sprite = this.game.add.sprite(this.positionData.initial.x, this.positionData.initial.y, 'underwaterDuke');
	
	// sets sprite properties
	this.game.physics.arcade.enable(this.sprite); // enables physics on colliderSprite

	this.sprite.immovable = true; // makes it immovable when a collision occurs
	this.sprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds

	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.sprite.body.gravity.y = 500;
};

// Defines the player's animations with their respective frames.
UnderwaterPlayer.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Left', [0, 1], 10000, true);
	this.sprite.animations.add(this.animation + 'Right', [2, 3], 10000, true);
}

// Loads the player's sprites and defines it's animations.
UnderwaterPlayer.prototype.load = function() {
	this.render();
	this.addAnimations();
}

// Plays the current animation.
UnderwaterPlayer.prototype.playAnimation = function() {
	this.sprite.play(this.animation + this.direction);
}

// Stops the player's movement.
UnderwaterPlayer.prototype.stop = function() {
	this.stopped = true;
	this.sprite.body.velocity.x = 0;
	if (this.sprite.body.velocity.y > 200){
		this.sprite.body.velocity.y = 200;
	} 
}

// Moves the player's colliderSprite with a given speed and direction.
UnderwaterPlayer.prototype.move = function(speed, direction) {
	this.stopped = false;
	switch (direction) {
		//Vertical=0; Horizontal=1
		case 0:
			this.sprite.body.velocity.y = speed;
			break;
		case 1:
			this.sprite.body.velocity.x = speed;
			break;
	}
}

// Moves the player's sprite.
UnderwaterPlayer.prototype.setBodyPosition = function(x, y) {
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
UnderwaterPlayer.prototype.handleMovement = function() {
	this.stop();

	if (this.game.cursors.up.isDown) {
		if (!this.jumpPressed){
			this.move(-this.speed, 0);
			this.jumpPressed = true;	
		}
	} else {
		this.jumpPressed = false;
	}

	if (this.game.cursors.left.isDown) {
		this.direction = "Left";
		this.move(-this.speed, 1);
	} else if (this.game.cursors.right.isDown) {
		this.direction = "Right";
		this.move(this.speed, 1);
	}
	this.playAnimation();
}


// Updates the player.
UnderwaterPlayer.prototype.update = function() {
	this.checkDeath();
	this.checkExit();
	this.handleMovement();
}

/**
 * Checks the player's health. If the player is dead, the game state changes to game over.
 */
UnderwaterPlayer.prototype.checkDeath = function() {
	if (this.health <= 0) {
		this.game.input.reset();
		this.game.sound.stopAll();
		this.game.state.start('GameOver', true);
	}
}

UnderwaterPlayer.prototype.checkExit = function() {
	if (this.sprite.y <= 32 && this.collected) {
		this.game.player = this.boatPlayer;
		this.game.player.collectedItems++;
		this.game.state.start("BoatStage", true);
	}
}




