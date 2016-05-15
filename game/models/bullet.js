// Declaration of bullet data.
function Bullet(game){
	this.game = game;
	this.sprite = null;
	this.speed = 700;
	this.type = null;
}


// Initializes the bullet sprites.
Bullet.prototype.render = function(type){
	this.sprite = this.game.add.sprite(null, null, 'bullet' + type);

	// sets sprite properties
	this.sprite.alpha = 0; // invisible sprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite
};

// Loads the bullet's sprites.
Bullet.prototype.load = function(type){
	this.render(type);
}

// Stops the bullet's movement.
Bullet.prototype.stop = function(){
	this.sprite.body.velocity.x = 0;
	this.sprite.body.velocity.y = 0;
}

// Moves the bullet's sprite with a given speed and direction.
Bullet.prototype.move = function(speed, direction){
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

// Set the initial position of the bullet's sprite.
Bullet.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the direction and handles the movement.
Bullet.prototype.handleMovement = function(direction){
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

// Start the shot of the bullet
Bullet.prototype.fireBullet = function(x, y, direction, weaponType){
		
		this.load(weaponType);
		this.stop();
		this.setBodyPosition(x, y);
		this.handleMovement(direction);
		this.sprite.alpha = 1;	
}
