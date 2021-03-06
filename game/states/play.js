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
		game.sign = new Sign(window.game, 300, 600,  'play');
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
		game.HUD = new HUD(window.game, 'minimap');
		game.HUD.load();
		
		//Sets HUD elements fixed to the camera
		game.HUD.healthBar.fixedToCamera = true;
		game.HUD.availableHealth.fixedToCamera = true;
		game.HUD.miniMap.fixedToCamera = true;
		
		//Creates CollectableItems 
		game.coin1 = new collectableItems(window.game, 100, 200, 'coin');
		game.coin1.load();

		game.coin2 = new collectableItems(window.game, 200, 1000, 'coin');
		game.coin2.load();

		game.firstAid1 = new collectableItems(window.game, 300, 1000, 'firstAid');
		game.firstAid1.load();

		game.firstAid2 = new collectableItems(window.game, 100, 1200, 'firstAid');
		game.firstAid2.load();

		game.key1 = new collectableItems(window.game, 700, 900, 'key');
		game.key1.load();

		game.key2 = new collectableItems(window.game, 150, 900, 'key');
		game.key2.load();
		
		//Creates Inventory Items
		game.inventory = new inventory(window.game);
		game.inventory.load();

		//Sets inventory elements fixed to the camera
		game.inventory.keyImage.fixedToCamera = true;
		game.inventory.coinImage.fixedToCamera = true;
		game.inventory.numberCoinsText.fixedToCamera = true;
		game.inventory.numberKeysText.fixedToCamera = true;
		game.inventory.inventoryImage.fixedToCamera = true;


		//Creates and loads blocks
		game.obstacle = new Obstacle(window.game, 'play');
		game.obstacle.load();

		/*game.enemy3 = new Enemy(window.game, game.player);
		game.enemy3.load();*/



		// Creates and loads an Enemy.
	/*	game.enemy = new Enemy(window.game, game.player);
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

		game.bluedragon = new BlueDragon(window.game);
		game.bluedragon.load();
*/
		game.music = new Effects(window.game, 'bossanova','rain');
		game.music.load();

		game.portals = [];


		game.portals.push(new Portal(window.game, 50, 280, 'forestStage')); //Vale
		game.portals.push(new Portal(window.game, 230, 180, 'Roberto')); //Robe
		game.portals.push(new Portal(window.game, 420, 420, 'DockStage')); //Sergio
		game.portals.push(new Portal(window.game, 1200, 1300, 'mauricioStage')); //Maf
		game.portals.push(new Portal(window.game, 400, 1000, 'LvlCesped')); //Fabio
		game.portals.push(new Portal(window.game, 1300, 560, 'HouseStage')); //Vane
		game.portals.push(new Portal(window.game, 1350, 100, 'FirstPass')); //Jhoto

		var changeKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        changeKey.onDown.add(this.game.player.weapon.nextWeapon, game);

	},
	// Updates all the game's objects.
	update: function(){
		// Updates the player.
		game.player.update(game.player);
		game.HUD.update(game.player);
		game.inventory.update(game.player);
		game.coin1.update(game.player);
		game.coin2.update(game.player);
		game.key1.update(game.player);
		game.key2.update(game.player);
		game.firstAid1.update(game.player);
		game.firstAid2.update(game.player);
		game.writer.update();

		//game.enemyLeo.update();


	/*	game.enemy.update();
		game.enemy2.update();
		game.enemy3.update();
		game.energyEnemy.update();


		//game.mina.update();

		game.mina2.update();
		game.mina3.update();
		game.mina4.update();
		game.mina5.update();
*/
		//game.bluedragon.update();

		game.portals.every(portal => portal.update());

	}

};
