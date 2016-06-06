// Declaration of BlueDragon data.
function BlueDragon(game){
	this.game = game;
	this.health = 300;
	this.sprite = null;
	this.colliderSprite = null;
	this.speed = 150;
	this.animation = 'BlueDragon';
	this.direction = 'Down';
	this.stopped = true;
	this.initial = Math.floor(Math.random() * (1356));
	this.enableBody = true;
	this.energyBall = null;
	this.positionData =  {
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

}

// Initializes the BlueDragons sprites.
BlueDragon.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(this.initial - this.positionData.colliderDifference.x, this.initial - this.positionData.colliderDifference.y, 'BlueDragonCollider');
	this.sprite = this.game.add.sprite(this.initial, this.initial, 'bluedragon');
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);


	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
	
	
};

// Defines the BlueDragon's animations with their respective frames.
BlueDragon.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Left', [3,4, 5,], 5, true);
	this.sprite.animations.add(this.animation + 'Right', [6, 7, 8], 5, true);
	this.sprite.animations.add(this.animation + 'Up', [9,10,11], 5, true);
	this.sprite.animations.add(this.animation + 'Down', [0, 1, 2], 5, true);

}

// Loads the BlueDragon's sprites and defines it's animations.
BlueDragon.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
BlueDragon.prototype.playAnimation = function(){
	this.sprite.play(this.animation + this.direction);
}


// Stops the BlueDragon's movement.
BlueDragon.prototype.stop = function(){
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}

// Moves the BlueDragon's colliderSprite with a given speed and direction.
BlueDragon.prototype.move = function(speed, direction){
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
BlueDragon.prototype.move = function(speed, direction){
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

// Moves the BlueDragon's sprite.
BlueDragon.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
BlueDragon.prototype.handleMovement = function(){

	
	//Distance of Player to Enemy
	var enemyDistance = Math.sqrt(Math.pow(this.game.player.sprite.x - this.sprite.x,2) + Math.pow(this.game.player.sprite.y - this.sprite.y,2));
	


		this.lookingForPlayer();	


		if(enemyDistance <= 200){
		this.stop();

		this.viewControl(enemyDistance);

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

	this.game.physics.arcade.overlap(this.energyBall, this.game.player.sprite, null, this.energyBallCollition, this);

	this.playAnimation();

	this.setBodyPosition(this.colliderSprite.x - this.positionData.colliderDifference.x, this.colliderSprite.y - this.positionData.colliderDifference.x);


}

	//Metodo para buscar al jugador
BlueDragon.prototype.lookingForPlayer = function(){
	// busca al jugador de manera lineal hacia arriba

	if (this.game.player.sprite.y -30 < this.sprite.y){
		this.direction = "Up";
		this.move(-this.speed, 0);
		this.move(0,1);
	}
	//una vez encontrado puede ir a la izquierda
	else if (this.game.player.sprite.y -50 < this.sprite.y && this.game.player.sprite.y > this.sprite.y && this.game.player.sprite.x < this.sprite.x){
		this.direction = "Left";
		this.move(0, 0);
		this.move(-this.speed,1);
	}

	// busca al jugador de manera lineal hacia abajo
	if (this.game.player.sprite.y -30 > this.sprite.y){
		this.direction = "Down";
		this.move(this.speed, 0);
		this.move(0,1);
	}

	//una vez encontrado puede ir a la izquierda
	else if (this.game.player.sprite.y -50 < this.sprite.y && this.game.player.sprite.y > this.sprite.y && this.game.player.sprite.x < this.sprite.x){
		this.direction = "Left";
		this.move(0, 0);
		this.move(-this.speed,1);
	}


	//una vez encontrado puede ir a la derecha
	if (this.game.player.sprite.y - 50 < this.sprite.y && this.game.player.sprite.y > this.sprite.y && this.game.player.sprite.x > this.sprite.x){
		this.direction = "Right";
		this.move(0, 0);
		this.move(this.speed,1);
	}

}
	//colision del ataque del dragon
BlueDragon.prototype.energyBallCollition = function(){
	this.game.player.health -=20;
	this.energyBall.kill();
	this.energyBall = null;

}

	// BlueDragon blueBallAttack
BlueDragon.prototype.attack = function(direction){


	//create Attack
	switch (this.direction){
		case 'Left':
			this.energyBall = this.game.add.sprite(this.sprite.x - 16 ,this.sprite.y + 32,'giantEnergyBall');
			break;
		case 'Right':
			this.energyBall = this.game.add.sprite(this.sprite.x + 80 ,this.sprite.y + 32,'giantEnergyBall');
			break;
		case 'Up':
			this.energyBall = this.game.add.sprite(this.sprite.x + 20 ,this.sprite.y - 18,'giantEnergyBall');
			break;
		case 'Down':
			this.energyBall = this.game.add.sprite(this.sprite.x + 20 ,this.sprite.y + 40,'giantEnergyBall');
			break;
	}

	this.game.physics.enable(this.energyBall, Phaser.Physics.ARCADE);
	this.energyBall.animations.add('ball',[0,1,2,3,4,5,6,7,8,9],10,true);


	//Variables to increise the velocity of the ball atack (depend of the distance)
	var ballAttackX = (this.game.player.sprite.x - this.sprite.x)/100;
	var ballAttackY = (this.game.player.sprite.y - this.sprite.y)/100;
	

	//attack direction
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

//Circular move of the BlueDragon, around of player.
BlueDragon.prototype.circularMove = function(radio){

    this.speed = 400;
	if(this.sprite.x <= this.game.player.sprite.x  && this.sprite.y <= this.game.player.sprite.y){
		this.move(-this.speed, 0);
		this.move(Math.sqrt(Math.pow(radio,2) - Math.pow(this.speed,2)) ,1);
	}

	if(this.sprite.x > this.game.player.sprite.x && this.sprite.y <= this.game.player.sprite.y){
		this.move(Math.sqrt(Math.pow(radio,2) - Math.pow(this.speed,2)) , 0);
		this.move(this.speed,1);
	}

	if(this.sprite.x <= this.game.player.sprite.x  && this.sprite.y > this.game.player.sprite.y ){
		this.move(-(Math.sqrt(Math.pow(radio,2) - Math.pow(this.speed,2))) , 0);
		this.move(-this.speed,1);
	}

	if(this.sprite.x > this.game.player.sprite.x  && this.sprite.y > this.game.player.sprite.y ){
		this.move( this.speed , 0);
		this.move(-(Math.sqrt(Math.pow(radio,2) - Math.pow(this.speed,2))),1);
	}
}

//Acomoda la vista del enemigo sobre el jugador.
BlueDragon.prototype.viewControl = function(distanceToPlayer){

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



// Updates the BlueDragon.
BlueDragon.prototype.update = function(){
	this.handleMovement();
}

// Stops all the animations and sets the currect frame to the default based on the player's direction.
BlueDragon.prototype.stopAnimation = function(direction){
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
