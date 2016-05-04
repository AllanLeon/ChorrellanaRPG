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

		//Creates minimap
		//this.game.minimap = this.game.add.sprite(10,400,'minimap');

		// Sets the world bounds.
		this.game.world.setBounds(0, 0, 1536, 1536);

		// Initialiazes the cursor keys.
		this.game.cursors = game.input.keyboard.createCursorKeys();

		// Creates and loads a Player object.
    	game.player = new Player(window.game);
		game.player.load();
		
		//creates coins
		game.collectableItems = new CollectableItems(window.game);
		game.collectableItems.load();

		game.enemyLeo = new EnemyLeo(window.game);
		game.enemyLeo.load();

		// Sets the camera to follow the player.
		this.game.camera.follow(this.game.player.colliderSprite);

		game.HUD = new HUD(window.game);
		game.HUD.load();
		game.HUD.healthBar.fixedToCamera = true;
		game.HUD.availableHealth.fixedToCamera = true;
		game.HUD.miniMap.fixedToCamera = true;


		//game.minimapmove = new Minimapmove(window.game);
		//game.minimapmove.load();

		//this.game.minimap.follow(this.game.minimapmove.colliderSprite);

		//this.game.minimap.scale.setTo(0.10);

		//Creates and loads a minimap object
		//game.minimapmove = new Minimapmove(window.game);
		//game.minimapmove.load();

		//minimap
		//this.game.minimap.scale.setTo(0.10);

		//Creates and loads blocks
		game.obstacle = new Obstacle(window.game);
		game.obstacle.load();

		// Creates and loads a Enemy.
		game.enemy = new Enemy(window.game, game.player);
		game.enemy.load();


		game.enemy2 = new Enemy(window.game, game.player);
		game.enemy2.load();

		game.enemy3 = new Enemy(window.game, game.player);
		game.enemy3.load();

		game.physics.arcade.enable(game.player);
		game.physics.arcade.enable(game.enemy);
		game.physics.arcade.enable(game.enemy2);
		game.physics.arcade.enable(game.enemy3);

	},
	// Updates all the game's objects.
	update: function(){
		// Updates the player.
		game.player.update();
		//game.CollectableItems.update();
		game.HUD.update();

		game.enemyLeo.update();
		game.enemy.update();
		game.enemy2.update();
		game.enemy3.update();

		game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);
	}

};
	function collisionEnemy (Player, Enemy) {

    Player.kill();
    Enemy.kill();

}
