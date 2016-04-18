// Principal game state, all the fun begins here.
States.Play = {
	// Sets the game's basic configurations.
	init: function(){
		this.game.renderer.renderSession.roundPixels = true;
		this.physics.startSystem(Phaser.Physics.ARCADE);
	},
	// Starts the game.
	create: function(){
		// Sets the world bounds.
		this.game.world.setBounds(0, 0, 900, 500);

		// Initialiazes the cursor keys.
		this.game.cursors = game.input.keyboard.createCursorKeys();

		// Creates and loads a Player object.
    	game.player = new Player(window.game);
		game.player.load();

		// Sets the camera to follow the player.
		this.game.camera.follow(this.game.player.colliderSprite);
	},
	// Updates all the game's objects.
	update: function(){
		// Updates the player.
		game.player.update();
	}
};
