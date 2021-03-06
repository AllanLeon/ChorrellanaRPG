/**
 * Test state for demostration purposes.
 */
function TestStage() {}

/**
 * Sets the state's basic configurations.
 */
TestStage.prototype.init = function() {};

/**
 * Initializes the stage objects.
 */
TestStage.prototype.create = function() {
	//Sets the world background
	this.game.background = this.game.add.sprite(0, 0, 'map');

	// Sets the world bounds.
	

	this.game.world.setBounds(0, 0, 800, 600);
	

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();
}

/**
 * Updates all the stages's objects.
 */
TestStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
}


// Adds this stage to the game's states.
States.TestStage = new TestStage();
