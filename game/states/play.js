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
		
		// Creates and loads a Enemy.
		/*game.enemy = new Enemy(window.game, game.player);
		game.enemy.load();*/


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


		//Attempted to use groups but couldnt
		/*
		var coins = game.add.group();
		var keys = game.add.group();
		var firstAids = game.add.group();

	for(var i = 0; i<6; i++)
    {
        if(i == 0)
        {
            var coin = new collectableItems(window.game, 100, 200, 'coin');
            //coin.load();
            //coins.add(coin);
        }
        else if(i == 1)
        {
            var coin = new collectableItems(window.game, 200, 1000, 'coin');
           // coin.load();
            //coins.add(coin);
        }
        else if(i == 2)
        {
           	var key = new collectableItems(window.game, 150, 900, 'key');
           //	key.load();
           	//keys.add(key);
        }
        else if(i == 3)
        {
           	var key = new collectableItems(window.game, 700, 900, 'key');
           //	key.load();
           	//keys.add(key);
        }
        else if(i == 4)
        {
           	var firstAid = new collectableItems(window.game, 100, 1200, 'firstAid');
           	//firstAid.load();
           //	firstAids.add(firstAid);
        }
        else
        {
        	var firstAid = new collectableItems(window.game, 300, 1000, 'firstAid');
        	//firstAid.load();
        	//	firstAids.add(firstAid);
        }
    

    }*/


		//Creates and loads blocks
		game.obstacle = new Obstacle(window.game, 'play');
		game.obstacle.load();

		/*game.enemy3 = new Enemy(window.game, game.player);
		game.enemy3.load();*/

		/*game.energyEnemy = new EnergyEnemy(window.game, game.player);
		game.energyEnemy.load();*/


		// Creates and loads an Enemy.
		//game.enemy = new Enemy(window.game, game.player);
		//game.enemy.load();

		//game.mina = new Mina1(window.game);
		//game.mina.load();

		//game.enemy2 = new Enemy(window.game, game.player);
		//game.enemy2.load();

		//game.enemy3 = new Enemy(window.game, game.player);
		//game.enemy3.load();

		game.physics.arcade.enable(game.player);
		//game.physics.arcade.enable(game.enemy);
		//game.physics.arcade.enable(game.enemy2);
		//game.physics.arcade.enable(game.enemy3);

		game.music = new Effects(window.game);
		game.music.load();

		game.portals = [];
		game.portals.push(new Portal(window.game, 50, 280, 'TestStage')); //Vale
		game.portals.push(new Portal(window.game, 230, 180, 'Play')); //Robe
		game.portals.push(new Portal(window.game, 420, 420, 'Play')); //Sergio
		game.portals.push(new Portal(window.game, 1200, 1300, 'Play')); //Maf
		game.portals.push(new Portal(window.game, 400, 1000, 'Play')); //Fabio
		game.portals.push(new Portal(window.game, 1300, 560, 'Play')); //Vane
		game.portals.push(new Portal(window.game, 1350, 100, 'Play')); //Jhoto

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
		//game.enemy.update();
		//game.enemy2.update();
		//game.enemy3.update();
		//game.enemy.update();
	/*	game.enemy2.update();
		game.enemy3.update();*/

		//game.energyEnemy.update();

		//game.mina.update();

		game.portals.every(portal => portal.update());

		game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);
	}

};

function collisionEnemy (Player, Enemy) {
    Player.kill();
    Enemy.kill();
}
