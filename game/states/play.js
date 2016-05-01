// Principal game state, all the fun begins here.
States.Play = {
	// Sets the game's basic configurations.
	init: function(){
		this.game.renderer.renderSession.roundPixels = true;
		this.physics.startSystem(Phaser.Physics.ARCADE);
	},
	// Starts the game.
	create: function(){
		// Sets the game background with file associated to 'map' on boot.js.
		this.game.background = this.game.add.sprite(0, 0, 'map');

		// Sets the world bounds.
		this.game.world.setBounds(0, 0, 1536, 1536);

		// Initialiazes the cursor keys.
		this.game.cursors = game.input.keyboard.createCursorKeys();

		// Creates and loads a Player object.
    	game.player = new Player(window.game);
		game.player.load();

		// Sets the camera to follow the player.
		this.game.camera.follow(this.game.player.colliderSprite);

		//Creates and loads blocks
		game.obstacle = new Obstacle(window.game);
		game.obstacle.load();
	},
	// Updates all the game's objects.
	update: function(){
		// Updates the player.
		game.player.update();
	}
};
