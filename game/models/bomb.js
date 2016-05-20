// Declaration of bullet data.
function Bomb(game) {
	this.game = game;
	this.sprite = null;
	this.speed = 350;
	this.type = null;
	this.maxDistance = 750;
	this.explosionTime = 3;
	this.timer = null;
}


// Initializes the bullet sprites.
Bomb.prototype.render = function(type) {
	this.sprite = this.game.add.sprite(null, null, 'bomb');

	// sets sprite properties
	this.sprite.alpha = 0; // invisible sprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite
}

// Loads the bomb sprite and initializes the timer.
Bomb.prototype.load = function(type) {
	this.render(type);
	this.initializeTimer();
}

// Stops the bomb movement.
Bomb.prototype.stop = function(){
	this.sprite.body.velocity.x = 0;
	this.sprite.body.velocity.y = 0;
}

// Moves the bomb's sprite with a given speed and direction.
Bomb.prototype.move = function(speed, direction) {
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

// Set the initial position of the bomb's sprite.
Bomb.prototype.setBodyPosition = function(x, y) {
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the direction and handles the movement.
Bomb.prototype.handleMovement = function(initialX, initialY, direction) {
	switch(direction){
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
}

// Initializes the bomb's timer.
Bomb.prototype.initializeTimer = function() {
	this.timer = this.game.time.create(false);
}

// Hides the bomb and stops the timer.
Bomb.prototype.dissapear = function() {
	this.sprite.alpha = 0;
	this.timer.stop();
}

// Start the shot of the bullet and starts the timer.
Bomb.prototype.throw = function(x, y, direction) {
	if (!this.timer.running) {
		this.stop();
		this.setBodyPosition(x, y);
		this.handleMovement(x, y, direction);
		this.sprite.alpha = 1;	

		this.timer.add(500, this.stop, this);
		this.timer.add(2000, this.dissapear, this);
		this.timer.start();
	}
}
