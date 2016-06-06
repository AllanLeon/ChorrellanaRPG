
function BasementStage() {}

/**
 * Sets the state's basic configurations.
 */
BasementStage.prototype.init = function() {};

/**
 * Initializes the stage objects.
 */
BasementStage.prototype.create = function() {
	// Sets the world bounds
	this.game.world.setBounds(0, 0, 1000, 800);

	//Sets the world background
	this.game.background = this.game.add.sprite(0, 0, 'basement');

	

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();
}

/**
 * Updates all the stages's objects.
 */
BasementStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
}


// Adds this stage to the game's states.
States.BasementStage = new BasementStage();
