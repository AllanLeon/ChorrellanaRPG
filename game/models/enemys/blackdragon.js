// Declaration of BlackDragon data.
function BlackDragon(game){
	this.game = game;
	this.health = 300;
	this.sprite = null;
	this.colliderSprite = null;
	this.speed = 150;
	this.sleep = true;
	this.animation = 'BlackDragon';
	this.direction = 'Left';
	this.stopped = true;
	this.initial = Math.floor(Math.random() * (500));
	this.enableBody = true;
	this.energyBall = null;
	this.positionData =  {
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

}

// Initializes the BlackDragons sprites.
BlackDragon.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(this.initial - this.positionData.colliderDifference.x, this.initial - this.positionData.colliderDifference.y, 'BlackDragonCollider');
	this.sprite = this.game.add.sprite(this.initial, this.initial, 'blackdragon');
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);


	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
	
	
};

// Defines the BlackDragon's animations with their respective frames.
BlackDragon.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Left', [4, 5,6,7], 3, true);
	this.sprite.animations.add(this.animation + 'Right', [8,9,10,11], 3, true);
	this.sprite.animations.add(this.animation + 'Up', [12,13,14,15], 3, true);
	this.sprite.animations.add(this.animation + 'Down', [0, 1, 2,3], 3, true);

}

// Loads the BlackDragon's sprites and defines it's animations.
BlackDragon.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
BlackDragon.prototype.playAnimation = function(){
	this.sprite.play(this.animation + this.direction);
}


// Stops the BlackDragon's movement.
BlackDragon.prototype.stop = function(){
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}

// Moves the BlackDragon's colliderSprite with a given speed and direction.
BlackDragon.prototype.move = function(speed, direction){
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
BlackDragon.prototype.move = function(speed, direction){
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

// Moves the BlackDragon's sprite.
BlackDragon.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
BlackDragon.prototype.handleMovement = function(){

	var enemyDistance = Math.sqrt(Math.pow(this.game.player.sprite.x - this.sprite.x,2) + Math.pow(this.game.player.sprite.y - this.sprite.y,2));
	this.viewControl(enemyDistance);
	
	//si es que dormir es falso empieza a moverse
	if(this.sleep == false)
	{
	//Distance of Player to Enemy
	


		this.lookingForPlayer();	


		if(enemyDistance <= 200){
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
		
	}

	//this.game.physics.arcade.overlap(this.energyBall, this.game.player.sprite, null, this.energyBallCollition, this);
}
	this.playAnimation();

	this.setBodyPosition(this.colliderSprite.x - this.positionData.colliderDifference.x, this.colliderSprite.y - this.positionData.colliderDifference.x);


}

	//Metodo para buscar al jugador
BlackDragon.prototype.lookingForPlayer = function(){
	// busca al jugador de manera lineal hacia arriba

	//coming soon....

}
	//colision del ataque del dragon
BlackDragon.prototype.energyBallCollition = function(){
	this.game.player.health -=20;
	this.energyBall.kill();
	this.energyBall = null;

}

	// BlackDragon BlackBallAttack
BlackDragon.prototype.attack = function(direction){

	//coming soon....
}

//Circular move of the BlackDragon, around of player.
BlackDragon.prototype.circularMove = function(radio){

    //coming soon.....
}

//Acomoda la vista del enemigo sobre el jugador.
BlackDragon.prototype.viewControl = function(distanceToPlayer){

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



// Updates the BlackDragon.
BlackDragon.prototype.update = function(){
	this.handleMovement();
}

// Stops all the animations and sets the currect frame to the default based on the player's direction.
BlackDragon.prototype.stopAnimation = function(direction){
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

BlackDragon.prototype.setBodySprite = function(x, y) {
	this.colliderSprite.x = x;
	this.colliderSprite.y = y;
}
