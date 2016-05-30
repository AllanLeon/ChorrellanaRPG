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
	
}	

/**
 * Updates all the stages's objects.
 */
Roberto.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.HUD.update(game.player);
}


// Adds this stage to the game's states.
States.Roberto = new Roberto();
