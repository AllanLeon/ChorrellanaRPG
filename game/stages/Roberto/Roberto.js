/**
 * Test state for demostration purposes.
 */
function Roberto() {}

/**
 * Sets the state's basic configurations.
 */
Roberto.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
Roberto.prototype.create = function() {
	// Sets the world bounds.
	this.game.background = this.game.add.sprite(0, 0, 'robertoMap');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 1024, 1024);


	// Creates and loads a Player object.
	this.game.player = new Player(window.game);
	this.game.player.load();

	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);

	// Initialiazes the cursor keys.
	//this.game.cursors = game.input.keyboard.createCursorKeys();

	
	

	//Creates HUD and its elements
	this.game.HUD = new HUD(window.game, 'robertoMinimap');
	this.game.HUD.load();

	game.HUD.healthBar.fixedToCamera = true;
	game.HUD.availableHealth.fixedToCamera = true;
	game.HUD.miniMap.fixedToCamera = true;

	
	//Creates CollectableItems 
	game.coinDessert1 = new collectableItems(window.game, 100, 220, 'coin');
	game.coinDessert1.load();

	game.coinDessert2 = new collectableItems(window.game, 200, 900, 'coin');
	game.coinDessert2.load();

	game.firstAidDessert1 = new collectableItems(window.game, 780, 600, 'firstAid');
	game.firstAidDessert1.load();

	game.firstAidDessert2 = new collectableItems(window.game, 300, 550, 'firstAid');
	game.firstAidDessert2.load();

	game.keyDessert1 = new collectableItems(window.game, 740, 850, 'key');
	game.keyDessert1.load();

	game.keyDessert2 = new collectableItems(window.game, 150, 900, 'key');
	game.keyDessert2.load();

	//Creates and loads blocks
	game.obstacle = new Obstacle(window.game, 'roberto');
	game.obstacle.load();

	//Loads ambient music
	game.music = new Effects(window.game,'mgs', 'sand');
	game.music.load();

	game.portals.push(new Portal(window.game, 720, 130, 'RobertoSecond')); //Robe

	game.enemyScorpion = new EnemyScorpion(window.game,250,500, 'Right');
	game.enemyScorpion.load();

	game.enemyScorpion1 = new EnemyScorpion(window.game,450,600, 'Left');
	game.enemyScorpion1.load();

	game.enemySnake1 = new EnemySnake(window.game,560,400);
	game.enemySnake1.load();

	game.enemySnake3 = new EnemySnake(window.game,560,800);
	game.enemySnake3.load();


	game.inventory1 = new inventory(window.game);
	game.inventory1.load();

		//Sets inventory elements fixed to the camera
	game.inventory1.keyImage.fixedToCamera = true;
	game.inventory1.coinImage.fixedToCamera = true;
	game.inventory1.numberCoinsText.fixedToCamera = true;
	game.inventory1.numberKeysText.fixedToCamera = true;
	game.inventory1.inventoryImage.fixedToCamera = true;
}	

/**
 * Updates all the stages's objects.
 */
Roberto.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.HUD.update(game.player);
	game.inventory1.update(game.player);
	game.portals.every(portal => portal.update());

	game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);
	game.coinDessert1.update(game.player);
	game.coinDessert2.update(game.player);
	game.keyDessert1.update(game.player);
	game.keyDessert2.update(game.player);
	game.firstAidDessert1.update(game.player);
	game.firstAidDessert2.update(game.player);
	game.enemyScorpion.update();
	game.enemyScorpion1.update();
	game.enemySnake1.update();
	game.enemySnake3.update();
}

function collisionEnemy (Player, Enemy) {
    Player.kill();
    Enemy.kill();
}

// Adds this stage to the game's states.
States.Roberto = new Roberto();
