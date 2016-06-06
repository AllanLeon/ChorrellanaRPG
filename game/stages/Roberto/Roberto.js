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

	

	//Creates and loads blocks
	game.obstacle = new Obstacle(window.game, 'roberto');
	game.obstacle.load();

	//Loads ambient music
	game.music = new Effects(window.game,'mgs', 'sand');
	game.music.load();

	game.portals.push(new Portal(window.game, 720, 130, 'RobertoSecond')); //Robe

	game.enemyScorpion = new EnemyScorpion(window.game,250,500);
	game.enemyScorpion.load();
	
}	

/**
 * Updates all the stages's objects.
 */
Roberto.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.HUD.update(game.player);

	game.portals.every(portal => portal.update());

	game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);

	game.enemyScorpion.update();
}

function collisionEnemy (Player, Enemy) {
    Player.kill();
    Enemy.kill();
}

// Adds this stage to the game's states.
States.Roberto = new Roberto();
