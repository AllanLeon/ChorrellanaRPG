// Declaration of boat player data.
function BoatPlayer(game) {
	this.game = game;
	this.sprite = null;
	this.speed = 400;
	this.rotation = 60;
	this.angle = 0;
	this.direction = 'Right';
	this.arrowKeys = null;
	this.stopped = true;
	this.timer = null;
	this.firstTimeLoaded = true;
	this.positionData = {    // Player's position info.
		initial: { x: 30, y: 230}, // initial position o fthe player
	};
	this.collectedItems = 0;
	this.visitedDeepWaters = [];

}

// Initializes the boat player's sprite.
BoatPlayer.prototype.render = function() {
	// loads sprites
	this.sprite = this.game.add.sprite(this.positionData.initial.x, this.positionData.initial.y, 'boat');

	// sets sprite properties
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	this.sprite.immovable = true; // makes it immovable when a collision occurs
	this.sprite.body.collideWorldBounds = true; // sprite cannot exceed the world bounds

	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
};

// Loads the boat player's sprites and defines it's animations.
BoatPlayer.prototype.load = function() {
	this.render();
	if (this.firstTimeLoaded){

		this.timer = this.game.time.create(true);

		this.timer.add(3000, this.fixMessage, this);
	}
}

// Change the sprite's frame based on the boat player angle
BoatPlayer.prototype.changeFrame = function(direction){
	switch (this.direction) {
		case 'Left':
			this.sprite.frame = 3;
			break;
		case 'Right':
			this.sprite.frame = 0;
			break;
		case 'Up':
			this.sprite.frame = 1;
			break;
		case 'Down':
			this.sprite.frame = 2;
			break;
	}
}

// Stops the boat player's movement.
BoatPlayer.prototype.stop = function() {
	this.stopped = true;
	this.sprite.body.velocity.x = 0;
	this.sprite.body.velocity.y = 0;
}

// Moves the boat player's sprite with a given value and direction.
BoatPlayer.prototype.move = function(moveValue, direction) {
	this.stopped = false;
	this.timer.start();
	switch (direction) {
		//Vertical=0; Horizontal=1
		case 0:
			this.sprite.body.velocity.y = -moveValue*Math.sin(Phaser.Math.degToRad(this.angle));
			this.sprite.body.velocity.x = moveValue*Math.cos(Phaser.Math.degToRad(this.angle));
			
			break;
		case 1:
			this.angle = (this.angle + moveValue + 360)%360; // 0 <= angle < 360
			break;
	}
}

// Checks the input and handles the movement.
BoatPlayer.prototype.handleMovement = function() {
	this.stop();

	if (this.game.cursors.up.isDown) {
		this.move(this.speed, 0);
	} else if (this.game.cursors.down.isDown) {
		this.move(-this.speed, 0);
	}

	if (this.game.cursors.left.isDown) {
		this.move(this.rotation, 1);
	} else if (this.game.cursors.right.isDown) {
		this.move(-this.rotation, 1);
	}

	if ((this.angle >= 0 && this.angle < 45) || this.angle >= 315) { // RIGHT
		this.direction = 'Right';
	} else if ((this.angle >= 45 && (this.angle - 90) < 45)) { // UP
		this.direction = 'Up';
	} else if ((this.angle >= 135 && (this.angle - 90) < 135)) { // LEFT
		this.direction = 'Left';
	} else if ((this.angle >= 225 && (this.angle - 90) < 225)) { // DOWN
		this.direction = 'Down';
	}
	this.changeFrame();
}


// Updates the boat player.
BoatPlayer.prototype.update = function() {
	if(!this.game.writer.onScreen){
		this.handleMovement();
	} else {
		this.game.writer.update();
	}
	//this.game.debug.bodyInfo(this.sprite, 32, 32);
	//this.game.debug.text(this.angle.toString(), 32, 400);


}


// Message at the begining of the stage
BoatPlayer.prototype.adviceMessage = function(){
	if (this.firstTimeLoaded){
		this.game.writer.addText("Alright kid\nThis is a new boat, my dear 'advance_wars.png',\nso you know what that means...");
		this.game.writer.addText("It's time to teach you how to pilot this thing");
		this.game.writer.addText("Press UP to go forward");
		this.game.writer.addText("Press DOWN to go backward");
		this.game.writer.addText("Press LEFT and RIGHT to steer");
		this.game.writer.addText("You have to go to the deep waters in this place");
		this.game.writer.addText("Once we're there, just press X to enter");
		this.game.writer.addText("When I was your age, I did all of this by myself.\nWe never had those tutorials or the stuff you kids are into,\n" + 
			"just pressing buttons randomly would take us everywhere...\n(He keeps talking.. You decide to pilot now)");
		 	
		this.firstTimeLoaded = false;
		this.game.writer.openTextBox(0);	
	}
	
};

// After 5 seconds of the first pressed key
BoatPlayer.prototype.fixMessage = function(){
	 this.stop();
	 this.game.writer.addText("WOAAAA............. STOP!!\nASDFGHJKJKSASDJHAKSJASDASDASDNAKJSNDJJAKSNDA\n"+ 
	 	"!  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  !  1  1  1  ");
	 this.game.writer.addText("Let me pilot this thing, I guess we won't die if that's the case");
	 this.game.writer.addText("Just focus on your mission");
	 this.game.writer.openTextBox(0);
	 this.speed = 200;
	 this.rotation = 10;
};

BoatPlayer.prototype.overlapDeepWater = function(boatPlayer, deepWater){
	 if (game.input.keyboard.isDown(Phaser.Keyboard.X)) {
	 	//game.debug.text("ENTRE", 32, 32);
	 	game.player.visitedDeepWaters.push(game.deepWaters.getChildIndex(deepWater));
	 	game.player.positionData.initial.x = game.player.sprite.x;
	 	game.player.positionData.initial.y = game.player.sprite.y;
		game.state.start("UnderwaterStage", true);
	 }
};

BoatPlayer.prototype.killVisitedDeepWaters = function(){
	 //game.debug.text(this.visitedDeepWaters.length.toString(),32,32);
	 for (var i=0; i<this.visitedDeepWaters.length; i++){
	 	this.game.deepWaters.getChildAt(this.visitedDeepWaters[i]).kill();

	 }
};

