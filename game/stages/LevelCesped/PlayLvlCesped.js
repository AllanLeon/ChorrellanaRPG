function LvlCesped() {}

/**
 * Sets the state's basic configurations.
 */
LvlCesped.prototype.init = function() {};

/**
 * Initializes the stage objects.
 */
LvlCesped.prototype.create = function() {
	// Sets the world bounds.
	this.game.background = this.game.add.sprite(0, 0, 'cesped');
	this.game.world.setBounds(0, 0, 800, 600);

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();

	game.npcplantas = new NpcPlantas(window.game);
	game.npcplantas.load();

	game.clock = new Clock(window.game);
	game.clock.load();
}

/**
 * Updates all the stages's objects.
 */
LvlCesped.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	

}


// Adds this stage to the game's states.
States.LvlCesped = new LvlCesped();