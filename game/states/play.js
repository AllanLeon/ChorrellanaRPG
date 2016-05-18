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

		// Creates and loads a NPC
		game.npc = new Npc(window.game);
		game.npc.load();

		// Creates and loads a sign
		game.sign = new Sign(window.game);
		game.sign.load();

		// Creates and loads a Player object.
    	game.player = new Player(window.game);
		game.player.load();
		game.physics.arcade.enable(game.player);

		// Creates and loads a Writer object.
		game.writer = new Writer(window.game);
		game.writer.load();

		//game.enemyLeo = new EnemyLeo(window.game);
		//game.enemyLeo.load();

		// Sets the camera to follow the player.
		this.game.camera.follow(this.game.player.colliderSprite);

		//Creates HUD and its elements
		game.HUD = new HUD(window.game);
		game.HUD.load();

		//Sets HUD elements fixed to the camera
		game.HUD.healthBar.fixedToCamera = true;
		game.HUD.availableHealth.fixedToCamera = true;
		game.HUD.miniMap.fixedToCamera = true;

		//Creates and loads blocks
		game.obstacle = new Obstacle(window.game);
		game.obstacle.load();

		// Creates and loads an Enemy.
		/*game.enemy = new Enemy(window.game, game.player);
		game.enemy.load();

		game.enemy2 = new Enemy(window.game, game.player);
		game.enemy2.load();

		game.enemy3 = new Enemy(window.game, game.player);
		game.enemy3.load();


		game.energyEnemy = new EnergyEnemy(window.game, game.player);
		game.energyEnemy.load();


		game.mina = new Mina1(window.game);
		game.mina.load();

		game.mina2 = new Mina1(window.game);
		game.mina2.load();
		game.mina3 = new Mina1(window.game);
		game.mina3.load();
		game.mina4 = new Mina1(window.game);
		game.mina4.load();
		game.mina5 = new Mina1(window.game);
		game.mina5.load();
*/
		game.bluedragon = new BlueDragon(window.game);
		game.bluedragon.load();

	},
	// Updates all the game's objects.
	update: function(){
		// Updates the player.
		game.player.update();
		game.writer.update();
		game.HUD.update();

		//game.enemyLeo.update();
		/*game.enemy.update();
		game.enemy2.update();
		game.enemy3.update();
		game.energyEnemy.update();

		game.mina.update();
		game.mina2.update();
		game.mina3.update();
		game.mina4.update();
		game.mina5.update();*/

		game.bluedragon.update();
	}

};
