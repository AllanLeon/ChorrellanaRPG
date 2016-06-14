// Declaration of PlayerDracoMount data.
function PlayerDracoMount(game) {
	this.game = game;
	this.health = 200;
	this.sprite = null;
	this.colliderSprite = null;
	this.speed = 800;
	this.animation = 'dukeAnim';
	this.direction = 'Down';
	this.arrowKeys = null;
	this.stopped = true;
	this.weapon = null;
	this.enableBody = true;
	this.usualMovement = true;
	this.grounded = false;

this.positionData = {    // PlayerDracoMount's position info.
		initial: { x: 50, y: 230}, // initial position of the PlayerDracoMount
		colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
	};
}


// Initializes the PlayerDracoMounts sprites.
PlayerDracoMount.prototype.render = function() {
	// loads sprites
	this.colliderSprite = this.game.add.sprite(50 - this.positionData.colliderDifference.x, 230 - this.positionData.colliderDifference.y, 'dukeMountCollider');
	this.sprite = this.game.add.sprite(30, 230, 'dukemount');
	
	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	this.colliderSprite.immovable = true; // makes it immovable when a collision occurs
	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds

	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
};

// Defines the PlayerDracoMount's animations with their respective frames.
PlayerDracoMount.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Left', [4, 5, 6, 7], 10, true);
	this.sprite.animations.add(this.animation + 'Right', [8, 9, 10, 11], 10, true);
	this.sprite.animations.add(this.animation + 'Up', [12, 13, 14, 15], 10, true);
	this.sprite.animations.add(this.animation + 'Down', [0, 1, 2, 3], 10, true);
}

// Loads the PlayerDracoMount's sprites and defines it's animations.
PlayerDracoMount.prototype.load = function() {
	this.render();
	this.addAnimations();
	this.loadWeapon();
}

PlayerDracoMount.prototype.loadWeapon = function() {
	// Creates and loads a weapon object.
    this.weapon = new Weapon(this.game);
    this.weapon.load();
}


// Plays the current animation.
PlayerDracoMount.prototype.playAnimation = function() {
	this.sprite.play(this.animation + this.direction);
}

// Stops all the animations and sets the currect frame to the default based on the PlayerDracoMount's direction.
PlayerDracoMount.prototype.stopAnimation = function(direction){
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

// Stops the PlayerDracoMount's movement.
PlayerDracoMount.prototype.stop = function() {
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}

// Moves the PlayerDracoMount's colliderSprite with a given speed and direction.
PlayerDracoMount.prototype.move = function(speed, direction) {
	this.stopped = false;
	switch (direction) {
		//Vertical=0; Horizontal=1
		case 0:
			this.colliderSprite.body.velocity.y = speed;
			break;
		case 1:
			this.colliderSprite.body.velocity.x = speed;
			break;
	}
}

// Moves the PlayerDracoMount's sprite.
PlayerDracoMount.prototype.setBodyPosition = function(x, y) {
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
PlayerDracoMount.prototype.handleMovement = function() {
	this.stop();
    
	if(this.usualMovement)
	{
		if (this.game.cursors.up.isDown) {
			this.direction = "Up";
			this.move(-this.speed, 0);
		} else if (this.game.cursors.down.isDown) {
			this.direction = "Down";
			this.move(this.speed, 0);
		}
	} else
	{
		if (this.game.cursors.up.isDown && this.grounded)
		{
		    this.direction = "Up";
			this.move(-this.speed, 0);
		    console.log("Salta salta");
		}
	}

	if (this.game.cursors.left.isDown) {
		this.direction = "Left";
		this.move(-this.speed, 1);
	} else if (this.game.cursors.right.isDown) {
		this.direction = "Right";
		this.move(this.speed, 1);
	}

	if(this.stopped) {
		this.stopAnimation();
	} else {
		this.playAnimation();
	}

	this.setBodyPosition(this.colliderSprite.x - this.positionData.colliderDifference.x, this.colliderSprite.y - this.positionData.colliderDifference.y);

}


// Updates the PlayerDracoMount.
PlayerDracoMount.prototype.update = function() {
	this.checkDeath();

	this.handleMovement();
	this.obstacleCollision();
	//game.physics.arcade.collide(game.obstacle.blocks, this.colliderSprite);
	
	this.NPCCollission();
	this.signCollission();
	
	this.fireWeapon();
}

PlayerDracoMount.prototype.obstacleCollision = function() {
	if(game.physics.arcade.collide(game.obstacle.blocks, this.colliderSprite)){
		this.grounded = true;
		console.log("grounded");
	}
};

PlayerDracoMount.prototype.NPCCollission = function(){
	if(game.physics.arcade.collide(game.npc.dukes, this.colliderSprite)){
		if (game.input.keyboard.isDown(Phaser.Keyboard.X) && !this.game.writer.buttonPressed){
			this.game.npc.sendMessage();
			this.game.writer.buttonPressed = true;
		}
	}  
};

PlayerDracoMount.prototype.signCollission = function(){
	if(game.physics.arcade.collide(game.sign.carteles, this.colliderSprite)){
		if (game.input.keyboard.isDown(Phaser.Keyboard.X) && !this.game.writer.buttonPressed){
			this.game.sign.sendMessage();
			this.game.writer.buttonPressed = true;
		}	
	} 
};

// Checks the input and fires the weapon.
PlayerDracoMount.prototype.fireWeapon = function(){
	this.weapon.cooldown();
	if (game.input.keyboard.isDown(Phaser.Keyboard.X)) {
		this.weapon.fireWeapon();
	}

	if (game.input.keyboard.isDown(Phaser.Keyboard.C)) {
		this.weapon.throwBomb();
	}
}

/**
 * Checks the PlayerDracoMount's health. If the PlayerDracoMount is dead, the game state changes to game over.
 */
PlayerDracoMount.prototype.checkDeath = function() {
	if (this.health <= 0) {
		this.game.input.reset();
		this.game.sound.stopAll();
		this.game.state.start('GameOver', true);
	}
}

PlayerDracoMount.prototype.addGravity = function(){
	this.colliderSprite.body.gravity.y = 10000;
}

PlayerDracoMount.prototype.changeMovement = function() {
	this.usualMovement = !this.usualMovement;
};

PlayerDracoMount.prototype.setBodySprite = function(x, y) {
	this.colliderSprite.x = x;
	this.colliderSprite.y = y;
}