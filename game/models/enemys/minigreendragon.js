// Declaration of MiniGreenDragon data.
function MiniGreenDragon(game){
	this.game = game;
	this.health = 300;
	this.sprite = null;
	this.colliderSprite = null;
	this.speed = 700;
	this.sleep = true;
	this.animation = 'MiniGreenDragon';
	this.direction = 'Right';
	this.stopped = true;
	this.initial = Math.floor(Math.random() * (1500));
	this.enableBody = true;
	this.energyBall = null;
	this.positionData =  {
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

}

// Initializes the MiniGreenDragons sprites.
MiniGreenDragon.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(this.initial - this.positionData.colliderDifference.x, this.initial - this.positionData.colliderDifference.y, 'MiniGreenDragonCollider');
	this.sprite = this.game.add.sprite(this.initial, this.initial, 'minigreendragon');
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);


	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
	
	
};

// Defines the MiniGreenDragon's animations with their respective frames.
MiniGreenDragon.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Left', [3,4, 5,], 5, true);
	this.sprite.animations.add(this.animation + 'Right', [6, 7, 8], 5, true);
	this.sprite.animations.add(this.animation + 'Up', [9,10,11], 5, true);
	this.sprite.animations.add(this.animation + 'Down', [0, 1, 2], 5, true);

}

// Loads the MiniGreenDragon's sprites and defines it's animations.
MiniGreenDragon.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
MiniGreenDragon.prototype.playAnimation = function(){
	this.sprite.play(this.animation + this.direction);
}


// Stops the MiniGreenDragon's movement.
MiniGreenDragon.prototype.stop = function(){
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}

// Moves the MiniGreenDragon's colliderSprite with a given speed and direction.
MiniGreenDragon.prototype.move = function(speed, direction){
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
MiniGreenDragon.prototype.move = function(speed, direction){
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

// Moves the MiniGreenDragon's sprite.
MiniGreenDragon.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
MiniGreenDragon.prototype.handleMovement = function(){

	var enemyDistance = Math.sqrt(Math.pow(this.game.player.sprite.x - this.sprite.x,2) + Math.pow(this.game.player.sprite.y - this.sprite.y,2));
	
	//si es que dormir es falso empieza a moverse
	if(this.sleep == false)
	{
	//Distance of Player to Enemy
	


		this.lookingForPlayer();	


	/*	if(enemyDistance <= 200){
		this.stop();

		//this.viewControl(enemyDistance);

		this.circularMove(enemyDistance);

			
		if (this.energyBall == null)
		{
			this.attack();
		}

var ballDistance = Math.sqrt(Math.pow(this.sprite.x - this.energyBall.x,2) + Math.pow(this.sprite.y - this.energyBall.y,2));
	
	if (ballDistance > 200){

	this.energyBall.kill();
	this.energyBall = null;

	}
		
	}*/

	this.game.physics.arcade.overlap(this.energyBall, this.game.player.sprite, null, this.energyBallCollition, this);
}	else {
	this.startTest(enemyDistance);
}
	this.playAnimation();
	this.viewControl(enemyDistance);
	
	this.game.physics.arcade.overlap(this.sprite, this.game.player.sprite, null, this.attack, this);
	this.setBodyPosition(this.colliderSprite.x - this.positionData.colliderDifference.x, this.colliderSprite.y - this.positionData.colliderDifference.x);


}

	//Metodo para buscar al jugador
MiniGreenDragon.prototype.lookingForPlayer = function(){
	if (this.game.player.sprite.y > this.sprite.y){
		this.direction = "Down";
		this.move(this.speed, 0);
	}

	else if (this.game.player.sprite.y < this.sprite.y){
		this.direction = "Up";
		this.move(-this.speed, 0);
	}


	if(this.game.player.sprite.x > this.sprite.x){
		this.direction = "Right";
		this.move(this.speed, 1);
	}

	else if (this.game.player.sprite.x < this.sprite.x){
		this.direction = "Left";
		this.move(-this.speed,1);
	}
}
	//colision del ataque del dragon
MiniGreenDragon.prototype.energyBallCollition = function(){
	this.game.player.health -=20;
	this.energyBall.kill();
	this.energyBall = null;

}

	// MiniGreenDragon MiniGreenBallAttack
	var contador;
MiniGreenDragon.prototype.attack = function(direction){

contador += 1;

	if(contador == 10) {

    this.game.player.health -= 5;
    contador = 0;


	}
}

//Circular move of the MiniGreenDragon, around of player.
MiniGreenDragon.prototype.circularMove = function(radio){

   //coming soon...
}

//Acomoda la vista del enemigo sobre el jugador.
MiniGreenDragon.prototype.viewControl = function(distanceToPlayer){

	var rangeDistance = (distanceToPlayer/Math.sqrt(2));

	if(this.sprite.x > this.game.player.sprite.x - rangeDistance && this.sprite.x < this.game.player.sprite.x + rangeDistance && this.sprite.y < this.game.player.sprite.y){
		this.direction = "Down";
	}

	if(this.sprite.x > this.game.player.sprite.x - rangeDistance && this.sprite.x < this.game.player.sprite.x + rangeDistance && this.sprite.y > this.game.player.sprite.y){
		this.direction = "Up";
	}

	if(this.sprite.y > this.game.player.sprite.y - rangeDistance && this.sprite.y < this.game.player.sprite.y + rangeDistance && this.sprite.x < this.game.player.sprite.x){
		this.direction = "Right";
	}

	if(this.sprite.y > this.game.player.sprite.y - rangeDistance && this.sprite.y < this.game.player.sprite.y + rangeDistance && this.sprite.x > this.game.player.sprite.x){
		this.direction = "Left";
	}	

}



// Updates the MiniGreenDragon.
MiniGreenDragon.prototype.update = function(){
	this.handleMovement();
}

// Stops all the animations and sets the currect frame to the default based on the player's direction.
MiniGreenDragon.prototype.stopAnimation = function(direction){
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

MiniGreenDragon.prototype.setBodySprite = function(x, y) {
	this.colliderSprite.x = x;
	this.colliderSprite.y = y;
}

MiniGreenDragon.prototype.changeStage = function() {
	this.game.input.reset();
	this.game.state.start("MiniGreenDragonStage", true);
}

MiniGreenDragon.prototype.startTest = function(distanceToPlayer){
	 
	if(distanceToPlayer < 45){

		//this.chat();
		this.changeStage();
	}
}

MiniGreenDragon.prototype.wakeUp = function(){
	this.sleep = false;
}
