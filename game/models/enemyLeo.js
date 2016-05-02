// Declaration of player data.
function EnemyLeo(game){
	this.game = game;
	this.health = 40;
	this.sprite = null;
	this.colliderSprite = null;
	this.speed = 100;
	this.animation = 'dukeAnim';
	this.direction = 'Down';
	this.arrowKeys = null;
	this.stopped = true;
}

// Info of the player's position.
var positionData = {
	initial: { x: 200, y: 230 }, // initial position of the player
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};
var bullets;
var fireRate = 100;
var nextFire = 0;


// Initializes the players sprites.
EnemyLeo.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(positionData.initial.x - positionData.colliderDifference.x, positionData.initial.y - positionData.colliderDifference.y, 'invaderCollider');
	this.sprite = this.game.add.sprite(positionData.initial.x, positionData.initial.y, 'invader');
	
	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	//this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	//this.colliderSprite.immovable = true; // makes it immovable when a collision occurs
	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds

	bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    
};

// Defines the player's animations with their respective frames.
//EnemyLeo.prototype.addAnimations = function () {
//	this.sprite.animations.add(this.animation + 'Left', [4, 5, 6, 7], 10, true);
//	this.sprite.animations.add(this.animation + 'Right', [8, 9, 10, 11], 10, true);
//	this.sprite.animations.add(this.animation + 'Up', [12, 13, 14, 15], 10, true);
//	this.sprite.animations.add(this.animation + 'Down', [0, 1, 2, 3], 10, true);
//}

// Loads the player's sprites and defines it's animations.
EnemyLeo.prototype.load = function(){
	this.render();
	//this.addAnimations();
}

// Plays the current animation.
EnemyLeo.prototype.playAnimation = function(){
	this.sprite.play(this.animation + this.direction);
}

// Stops all the animations and sets the currect frame to the default based on the player's direction.
EnemyLeo.prototype.stopAnimation = function(direction){
	this.sprite.animations.stop();

	switch (this.direction) {
		case 'Left':
			this.sprite.frame = 0;
			break;
		case 'Right':
			this.sprite.frame = 0;
			break;
		case 'Up':
			this.sprite.frame = 0;
			break;
		case 'Down':
			this.sprite.frame = 0;
			break;
	}
}

// Stops the player's movement.
EnemyLeo.prototype.stop = function(){
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}

// Moves the player's colliderSprite with a given speed and direction.
EnemyLeo.prototype.move = function(speed, direction){
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

// Moves the player's sprite.
EnemyLeo.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
EnemyLeo.prototype.handleMovement = function(){
	this.stop();

	this.fire();

	this.setBodyPosition(this.colliderSprite.x - positionData.colliderDifference.x, this.colliderSprite.y - positionData.colliderDifference.x);
}

// Updates the player.
EnemyLeo.prototype.update = function(){
	this.handleMovement();
}

EnemyLeo.prototype.fire = function(){
	 if (game.time.now > nextFire)
    {
        nextFire = game.time.now + fireRate;

        var bullet = bullets.getFirstDead();

        bullet.reset(this.sprite.x - 8, this.sprite.y - 8);

        game.physics.arcade.moveToPointer(bullet, 300);
    }
}