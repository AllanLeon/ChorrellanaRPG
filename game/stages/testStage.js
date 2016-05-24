States.TestStage = {
	// Sets the game's basic configurations.
	init: function(){
	},
	// Starts the game.
	create: function(){
		// Sets the world bounds.
		this.game.world.setBounds(0, 0, 800, 600);

		// Creates and loads a Player object.
    	game.player = new Player(window.game);
		game.player.load();
	},
	// Updates all the game's objects.
	update: function(){
		// Updates the player.
		game.player.update(game.player);
	}

};
