function DragonMasterNpc(game){
	this.game = game;
	this.sprite = null;
	this.colliderSprite = null;
	this.sleep = true;
	this.animation = 'DragonMasterNpc';
	this.direction = 'Left';
	this.speed= 100;
	this.stopped = true;
	this.initial = Math.floor(Math.random() * (500));
	this.enableBody = true;
	this.talked = false;
	this.game.writer = new Writer(window.game);
	this.game.writer.load();
	this.game.cursors = game.input.keyboard.createCursorKeys();
	this.positionData =  {
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};
}

//Declaration of variables

DragonMasterNpc.prototype.render = function(){

	// loads sprites
	this.colliderSprite = this.game.add.sprite(this.initial - this.positionData.colliderDifference.x, this.initial - this.positionData.colliderDifference.y, 'DragonMasterNpcCollider');
	this.sprite = this.game.add.sprite(this.initial, this.initial, 'dragonmasterncp');
	
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);


	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
	
	
	//this.sprite.body.immovable = true;
}

// Defines the DragonMasterNpc's animations with their respective frames.
DragonMasterNpc.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation + 'Left', [4, 5,6,7], 5, true);
	this.sprite.animations.add(this.animation + 'Right', [8,9,10,11], 5, true);
	this.sprite.animations.add(this.animation + 'Up', [12,13,14,15], 5, true);
	this.sprite.animations.add(this.animation + 'Down', [0, 1, 2,3], 5, true);

}

// Loads the DragonMasterNpc's sprites and defines it's animations.
DragonMasterNpc.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
DragonMasterNpc.prototype.playAnimation = function(){
	this.sprite.play(this.animation + this.direction);
}


// Stops the DragonMasterNpc's movement.
DragonMasterNpc.prototype.stop = function(){
	this.stopped = true;
	this.colliderSprite.body.velocity.x = 0;
	this.colliderSprite.body.velocity.y = 0;
}

// Moves the DragonMasterNpc's colliderSprite with a given speed and direction.
DragonMasterNpc.prototype.move = function(speed, direction){
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

// Moves the DragonMasterNpc's sprite.
DragonMasterNpc.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
DragonMasterNpc.prototype.handleMovement = function(){

	var enemyDistance = Math.sqrt(Math.pow(this.game.player.sprite.x - this.sprite.x,2) + Math.pow(this.game.player.sprite.y - this.sprite.y,2));
	
	
	
	//si es que dormir es falso empieza a moverse
	if(this.sleep == false)
	{
		this.movement();	

		this.circularMove(enemyDistance);

		this.summonTime();
		this.playAnimation();
		
} 	else {
	this.stopAnimation();
	this.startTest(enemyDistance);
	this.viewControl(enemyDistance);
}
	
	
	this.setBodyPosition(this.colliderSprite.x - this.positionData.colliderDifference.x, this.colliderSprite.y - this.positionData.colliderDifference.x);


}

DragonMasterNpc.prototype.startTest = function(distanceToPlayer){
	 
	if(distanceToPlayer < 30){

		//this.chat();
		this.changeStage();
	}
}

DragonMasterNpc.prototype.chat = function(){
	this.game.player.colliderSprite.x -=5;
	this.game.writer.addText("What are you doing here?.....");
	this.game.writer.addText("well..... you can't back.....");
	this.game.writer.addText("sorry little boy, i'm gonna kill you..... \nplease don't cry");
	this.game.writer.addText("Stop!!!");
	this.game.writer.addText("hum.... Ok, i going to give you one opportunity \ntry not to die in this test huahuahua....");
	this.talked=true;
	this.game.writer.openTextBox(1);
	this.game.writer.buttonPressed = true;
}
	//Movimiento del enemigo
DragonMasterNpc.prototype.movement = function(){


	if (this.sprite.y < 200){
		this.direction = "Down";
		this.move(this.speed, 0);
	}

	else if (this.sprite.y > 500){
		this.direction = "Up";
		this.move(-this.speed, 0);
	}

}

	// DragonMasterNpc OrangeBallsummon
DragonMasterNpc.prototype.summon = function(){

		this.game.babydragon = new BabyDragon(window.game);
		this.game.babydragon.load();
		this.game.babydragon.setBodySprite(this.sprite.x-25,this.sprite.y);
		this.game.babydragon.handleMovement();
}

//Enemy Summon Controller
var contador = 0;
DragonMasterNpc.prototype.summonTime = function() {
    
	contador += 1;

	if(contador == 100) {

   this.summon();
    contador = 0;
}

	}

//Circular move of the DragonMasterNpc, around of player.
DragonMasterNpc.prototype.circularMove = function(radio){

    	//coming soon....

}

//Acomoda la vista del enemigo sobre el jugador.
DragonMasterNpc.prototype.viewControl = function(distanceToPlayer){

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



// Updates the DragonMasterNpc.
DragonMasterNpc.prototype.update = function(){
	this.handleMovement();
}

// Stops all the animations and sets the currect frame to the default based on the player's direction.
DragonMasterNpc.prototype.stopAnimation = function(direction){
	//this.sprite.animations.stop();

	switch (this.direction) {
		case 'Left':
			this.sprite.frame = 4;
			break;
		case 'Right':
			this.sprite.frame = 10;
			break;
		case 'Up':
			this.sprite.frame = 12;
			break;
		case 'Down':
			this.sprite.frame = 0;
			break;
	}
}

DragonMasterNpc.prototype.setBodySprite = function(x, y) {
	this.colliderSprite.x = x;
	this.colliderSprite.y = y;
}

DragonMasterNpc.prototype.changeStage = function() {
	this.game.input.reset();
	this.game.state.start("MiniDragonTestStage", true);
}

DragonMasterNpc.prototype.wakeUp = function(){
	this.sleep = false;
}


