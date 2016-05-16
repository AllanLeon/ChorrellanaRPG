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
		
		// Creates and loads a Enemy.
		game.enemy = new Enemy(window.game, game.player);
		game.enemy.load();
/*

		game.enemy2 = new Enemy(window.game, game.player);
		game.enemy2.load();

		game.enemy3 = new Enemy(window.game, game.player);
		game.enemy3.load();
*/
		game.energyEnemy = new EnergyEnemy(window.game, game.player);
		game.energyEnemy.load();


		game.mina = new Mina1(window.game);
		game.mina.load();

	},
	// Updates all the game's objects.
	update: function(){
		// Updates the player.
		game.player.update();
		game.enemy.update();
	/*	game.enemy2.update();
		game.enemy3.update();*/

		game.energyEnemy.update();

		game.mina.update();

	}


	
};
