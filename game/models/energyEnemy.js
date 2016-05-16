// Declaration of EnergyEnemy data.
function EnergyEnemy(game){
	this.game = game;
	this.health = 100;
	this.sprite = null;
	this.colliderSprite = null;
	this.speed = 200;
	this.animation = 'yellowEnergyEnemy';
	this.direction = 'Down';
	this.stopped = true;
	this.initial = Math.floor(Math.random() * (1356));
	this.enableBody = true;
	this.energyBall = null;
	this.positionData =  {
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

}

// Initializes the EnergyEnemys sprites.
EnergyEnemy.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(this.initial - this.positionData.colliderDifference.x, this.initial - this.positionData.colliderDifference.y, 'energyEnemyCollider');
	this.sprite = this.game.add.sprite(this.initial, this.initial, 'energyEnemy');
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);


	//this.game.physics.startSystem(Phaser.Physics.BOX2D);
	//var circle = game.physics.box2d.createCircle(initial + 32, initial + 32, 32);

	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	//this.colliderSprite.immovable = true; // makes it immovable when a collision occurs
	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
	//this.collider.body.collider

	
};

// Defines the EnergyEnemy's animations with their respective frames.
EnergyEnemy.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Left', [4, 5, 6, 7], 8, true);
	this.sprite.animations.add(this.animation + 'Right', [8, 9, 10, 11], 8, true);
	this.sprite.animations.add(this.animation + 'Up', [12, 13, 14, 15], 8, true);
	this.sprite.animations.add(this.animation + 'Down', [0, 1, 2, 3], 8, true);

}

// Loads the EnergyEnemy's sprites and defines it's animations.
EnergyEnemy.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
EnergyEnemy.prototype.playAnimation = function(){
	this.sprite.play(this.animation + this.direction);
}


// Stops the EnergyEnemy's movement.
EnergyEnemy.prototype.stop = function(){
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}

// Moves the EnergyEnemy's colliderSprite with a given speed and direction.
EnergyEnemy.prototype.move = function(speed, direction){
	this.stopped = false;
	switch (direction) {
		//Vertical=0; Horizontal=1;
		case 0:
			this.colliderSprite.body.velocity.y = speed;
			break;
		case 1:
			this.colliderSprite.body.velocity.x = speed;
			break;
	}
}

// Moves the EnergyBallEnemy's colliderSprite with a given speed and direction.
EnergyEnemy.prototype.move = function(speed, direction){
	this.stopped = false;
	switch (direction) {
		//Vertical=0; Horizontal=1;
		case 0:
			this.colliderSprite.body.velocity.y = speed;
			break;
		case 1:
			this.colliderSprite.body.velocity.x = speed;
			break;
	}
}

// Moves the EnergyEnemy's sprite.
EnergyEnemy.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
EnergyEnemy.prototype.handleMovement = function(){
	//this.stop();


	// busca al jugador de manera lineal
	if (this.game.player.sprite.y -30 > this.sprite.y){
		this.direction = "Down";
		this.move(this.speed, 0);
		this.move(0,1);
	}

	else if (this.game.player.sprite.y - 50 < this.sprite.y && this.game.player.sprite.y > this.sprite.y && this.game.player.sprite.x < this.sprite.x){
		this.direction = "Left";
		this.move(0, 0);
		this.move(-this.speed,1);
	}



	if (this.game.player.sprite.y -30 < this.sprite.y){
		this.direction = "Up";
		this.move(-this.speed, 0);
		this.move(0,1);
	}

	else if (this.game.player.sprite.y - 50 < this.sprite.y && this.game.player.sprite.y > this.sprite.y && this.game.player.sprite.x < this.sprite.x){
		this.direction = "Left";
		this.move(0, 0);
		this.move(-this.speed,1);
	}




	if (this.game.player.sprite.y - 50 < this.sprite.y && this.game.player.sprite.y > this.sprite.y && this.game.player.sprite.x > this.sprite.x){
		this.direction = "Right";
		this.move(0, 0);
		this.move(this.speed,1);
	}

	//Distance of Player to Enemy
	var enemyDistance = Math.sqrt(Math.pow(this.game.player.sprite.x - this.sprite.x,2) + Math.pow(this.game.player.sprite.y - this.sprite.y,2));
	
	if(enemyDistance <= 150){
		this.stop();

		if(this.stopped){
			this.stopAnimation();
		}
		
		if (this.energyBall == null)
		{
			this.attack();
		}

var ballDistance = Math.sqrt(Math.pow(this.sprite.x - this.energyBall.x,2) + Math.pow(this.sprite.y - this.energyBall.y,2));
	
	if (ballDistance > 200){

	this.energyBall.kill();
	this.energyBall = null;

	}
		
	}

	this.game.physics.arcade.overlap(this.energyBall, this.game.player.sprite, null, this.energyBallCollition, this);
	

	this.playAnimation();

	this.setBodyPosition(this.colliderSprite.x - this.positionData.colliderDifference.x, this.colliderSprite.y - this.positionData.colliderDifference.x);


}

EnergyEnemy.prototype.energyBallCollition = function(){
	this.game.player.health -=20;
	this.energyBall.kill();
	this.energyBall = null;

}

	// energyEnemy blueBallAttack
EnergyEnemy.prototype.attack = function(direction){


	//create Attack
	switch (this.direction){
		case 'Left':
			this.energyBall = this.game.add.sprite(this.sprite.x - 16 ,this.sprite.y + 32,'energyBall');
			break;
		case 'Right':
			this.energyBall = this.game.add.sprite(this.sprite.x + 80 ,this.sprite.y + 32,'energyBall');
			break;
		case 'Up':
			this.energyBall = this.game.add.sprite(this.sprite.x + 20 ,this.sprite.y - 18,'energyBall');
			break;
		case 'Down':
			this.energyBall = this.game.add.sprite(this.sprite.x + 20 ,this.sprite.y + 40,'energyBall');
			break;
	}

	this.game.physics.enable(this.energyBall, Phaser.Physics.ARCADE);
	this.energyBall.animations.add('ball',[0,1,2,3],10,true);


	//Distance of Player to initiallyAttack
	var ballAttackX = (this.game.player.sprite.x - this.sprite.x)/100;
	var ballAttackY = (this.game.player.sprite.y - this.sprite.y)/100;
	

	if (this.game.player.sprite.y > this.energyBall.y){

		//"Down"
		this.energyBall.body.velocity.y = this.speed * ballAttackY;

	}

	else if (this.game.player.sprite.y < this.energyBall.y){
		
		//"Up";
		this.energyBall.body.velocity.y = (this.speed * ballAttackY);
	}


	if(this.game.player.sprite.x > this.energyBall.x){
		
		//"Rigth";
		this.energyBall.body.velocity.x = this.speed * ballAttackX;
	}

	else if (this.game.player.sprite.x < this.energyBall.x){
		
		//"Left";
		this.energyBall.body.velocity.x = (this.speed * ballAttackX);
	}

	this.energyBall.animations.play('ball');
}




// Updates the EnergyEnemy.
EnergyEnemy.prototype.update = function(){
	this.handleMovement();
}

// Stops all the animations and sets the currect frame to the default based on the player's direction.
EnergyEnemy.prototype.stopAnimation = function(direction){
	//this.sprite.animations.stop();

	switch (this.direction) {
		case 'Left':
			this.sprite.frame = 5;
			break;
		case 'Right':
			this.sprite.frame = 9;
			break;
		case 'Up':
			this.sprite.frame = 12;
			break;
		case 'Down':
			this.sprite.frame = 0;
			break;
	}
}



