// Declaration of BlueDragon data.
function Eagle(game, initialY){
	this.game = game;
	this.health = 300;
	this.sprite = null;
	this.colliderSprite = null;
	this.speed = Math.floor(Math.random() * 100) + 50;
	this.animation = 'Eagle';
	this.direction = 'Right';
	this.stopped = true;
	this.initialY= initialY;
	this.initial = Math.floor(Math.random() * 600);
	this.enableBody = true;
	
	this.positionData =  {
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

}

// Initializes the BlueDragons sprites.
Eagle.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(this.initial - this.positionData.colliderDifference.x, this.initialY - this.positionData.colliderDifference.y, 'dukeCollider');
	this.sprite = this.game.add.sprite(this.initial, this.initialY, 'eagle');
	this.sprite.scale.setTo(0.5,0.5);


	// sets sprite properties
	this.colliderSprite.alpha = 1; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite
	this.sprite.checkWorldBounds = true;
	this.sprite.outOfBoundsKill = true;

	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
	
	
};

// Defines the BlueDragon's animations with their respective frames.
Eagle.prototype.addAnimations = function () {
	this.sprite.animations.add('eagleFly');
	//this.sprite.animations.play('flying', 30, true);
}

// Loads the BlueDragon's sprites and defines it's animations.
Eagle.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
Eagle.prototype.playAnimation = function(){
	this.sprite.play('eagleFly', 5, true);
}


// Stops the BlueDragon's movement.
Eagle.prototype.stop = function(){
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}


// Moves the Eagle colliderSprite with a given speed and direction.
Eagle.prototype.move = function(speed){
	this.sprite.body.velocity.x = speed;
	this.colliderSprite.body.velocity.x = speed;

}

// Moves the BlueDragon's sprite.
Eagle.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
Eagle.prototype.handleMovement = function(){
	this.move(this.speed);
	this.playAnimation();

	
}

// Updates the Eagle.
Eagle.prototype.update = function(){
	this.handleMovement();
	if(this.sprite.x >= 790)
	{
		console.log("Killed" + this.initialY);
		this.sprite.x = 0;
		this.sprite.y = Math.floor(Math.random() * 700) + 50;
		this.colliderSprite.x = 0;
		this.colliderSprite.y = this.sprite.y;

	}

	this.game.physics.arcade.overlap(this.sprite, this.game.player.sprite, null, this.playerCollision, this);
	//Not Working
	this.checkBulletCollision();
	//-----------------------------------
}

Eagle.prototype.setBodySprite = function(x, y) {
	this.colliderSprite.x = x;
	this.colliderSprite.y = y;
}

Eagle.prototype.checkBulletCollision = function() {
	for(var i=0; i<10; i++)
		{
			this.game.physics.arcade.collide(this.game.player.weapon.bulletArray[i], this.sprite, this.algo, null, this);
		}

}

Eagle.prototype.algo = function(bullet, eagle) {
	console.log("Piu Piu");
};


Eagle.prototype.playerCollision = function(){
	this.game.player.health -=25;
	this.sprite.kill();
}