/**
 * Test state for demostration purposes.
 */
function RobertoSecond() {}

/**
 * Sets the state's basic configurations.
 */
RobertoSecond.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
RobertoSecond.prototype.create = function() {
	// Sets the world bounds.
	this.game.background = this.game.add.sprite(0, 0, 'robertoMap2');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 954, 1024);


	// Creates and loads a Player object.
	this.game.player = new Player(window.game);
	this.game.player.load();

	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);

	// Initialiazes the cursor keys.
	//this.game.cursors = game.input.keyboard.createCursorKeys();

	
	

	//Creates HUD and its elements
	this.game.HUD = new HUD(window.game, 'robertoMinimap2');
	this.game.HUD.load();

	game.HUD.healthBar.fixedToCamera = true;
	game.HUD.availableHealth.fixedToCamera = true;
	game.HUD.miniMap.fixedToCamera = true;

	//Creates CollectableItems 
	game.coinDesert1 = new collectableItems(window.game, 100, 200, 'coin');
	game.coinDesert1.load();

	game.coinDesert2 = new collectableItems(window.game, 500, 900, 'coin');
	game.coinDesert2.load();

	game.firstAidDesert1 = new collectableItems(window.game, 300, 800, 'firstAid');
	game.firstAidDesert1.load();

	game.firstAidDesert2 = new collectableItems(window.game, 700, 300, 'firstAid');
	game.firstAidDesert2.load();

	game.keyDesert1 = new collectableItems(window.game, 800, 900, 'key');
	game.keyDesert1.load();

	game.keyDesert2 = new collectableItems(window.game, 150, 900, 'key');
	game.keyDesert2.load();
	

	//Creates and loads blocks
	game.obstacle = new Obstacle(window.game, 'robertosecond');
	game.obstacle.load();

	//Loads ambient music
	game.music = new Effects(window.game,'mgs', 'sand');
	game.music.load();

	game.enemySnake = new EnemySnake(window.game,250,500);
	game.enemySnake.load();

	game.enemySnake2 = new EnemySnake(window.game,500,300);
	game.enemySnake2.load();

	game.enemySnake3 = new EnemySnake(window.game,300,800);
	game.enemySnake3.load();


	game.enemyScorpion2 = new EnemyScorpion(window.game,100,100, 'Right');
	game.enemyScorpion2.load();

	game.enemyScorpion3 = new EnemyScorpion(window.game,450,600, 'Left');
	game.enemyScorpion3.load();


	game.inventory2 = new inventory(window.game);
	game.inventory2.load();

		//Sets inventory elements fixed to the camera
	game.inventory2.keyImage.fixedToCamera = true;
	game.inventory2.coinImage.fixedToCamera = true;
	game.inventory2.numberCoinsText.fixedToCamera = true;
	game.inventory2.numberKeysText.fixedToCamera = true;
	game.inventory2.inventoryImage.fixedToCamera = true;

}	

/**
 * Updates all the stages's objects.
 */
RobertoSecond.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.HUD.update(game.player);
	game.inventory2.update(game.player);	
	game.coinDesert1.update(game.player);
	game.coinDesert2.update(game.player);
	game.keyDesert1.update(game.player);
	game.keyDesert2.update(game.player);
	game.firstAidDesert1.update(game.player);
	game.firstAidDesert2.update(game.player);

	game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);
	game.enemySnake.update();
	game.enemySnake2.update();
	game.enemySnake3.update();
	game.enemyScorpion2.update();
	game.enemyScorpion3.update();
}

function collisionEnemy (Player, Enemy) {
    Player.kill();
    Enemy.kill();
}

// Adds this stage to the game's states.
States.RobertoSecond = new RobertoSecond();
