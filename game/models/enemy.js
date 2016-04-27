// Declaration of Enemy data.
function Enemy(game,player){
	this.game = game;
	this.health = 100;
	this.sprite = null;
	this.colliderSprite = true;
	this.speed = 200;
	this.animation = 'redEnemy';
	this.direction = 'Down';
	this.player = player;
	//this.arrowKeys = null;
	this.stopped = true;
}

// Info of the Enemy's position.
var positionData = {
	initial: { x: Math.floor(Math.random() * (1536 - (180 + 10))), y: Math.floor(Math.random() * (1536 - (180 + 10))) }, // initial position of the Enemy
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

// Initializes the Enemys sprites.
Enemy.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(positionData.initial.x - positionData.colliderDifference.x, positionData.initial.y - positionData.colliderDifference.y, 'enemyCollider');
	this.sprite = this.game.add.sprite(positionData.initial.x, positionData.initial.y, 'enemy');
	
	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	//this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	//this.colliderSprite.immovable = true; // makes it immovable when a collision occurs
	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
};

// Defines the Enemy's animations with their respective frames.
Enemy.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Left', [3, 4, 5], 10, true);
	this.sprite.animations.add(this.animation + 'Right', [6, 7, 8], 10, true);
	this.sprite.animations.add(this.animation + 'Up', [9, 10, 11], 10, true);
	this.sprite.animations.add(this.animation + 'Down', [0, 1, 2], 10, true);
}

// Loads the Enemy's sprites and defines it's animations.
Enemy.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
Enemy.prototype.playAnimation = function(){
	this.sprite.play(this.animation + this.direction);
}

// Stops all the animations and sets the currect frame to the default based on the Enemy's direction.
Enemy.prototype.stopAnimation = function(direction){
	//this.sprite.animations.stop();

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

// Stops the Enemy's movement.
Enemy.prototype.stop = function(){
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}

// Moves the Enemy's colliderSprite with a given speed and direction.
Enemy.prototype.move = function(speed, direction){
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

// Moves the Enemy's sprite.
Enemy.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
Enemy.prototype.handleMovement = function(){
	//this.stop();

	if (this.game.cursors.up.isDown){
		this.direction = "Up";
		//this.move(-this.speed, 0);
	}
	else if (this.game.cursors.down.isDown){
		this.direction = "Down";
		//this.move(this.speed, 0);
	}

	if (this.game.cursors.left.isDown){
		this.direction = "Left";
		//this.move(-this.speed, 1);
	}
	else if (this.game.cursors.right.isDown){
		this.direction = "Right";
		//this.move(this.speed, 1);
	}

	if(this.stopped){
		this.stopAnimation();
	}
	else{
		this.playAnimation();
	}

	this.setBodyPosition(this.colliderSprite.x - positionData.colliderDifference.x, this.colliderSprite.y - positionData.colliderDifference.x);
}

// Updates the Enemy.
Enemy.prototype.update = function(){
	this.handleMovement();
}