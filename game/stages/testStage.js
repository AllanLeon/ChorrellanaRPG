/**
 * Test state for demostration purposes.
 */
function TestStage() {}

/**
 * Sets the state's basic configurations.
 */
TestStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
TestStage.prototype.create = function() {


	
	this.game.background = this.game.add.sprite(0, 0, 'cloudsback');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 800, 950);

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();
	game.player.addGravity();

	this.game.camera.follow(this.game.player.colliderSprite);

	//Creates and loads blocks
	game.obstacle = new Obstacle(window.game, 'testStage');
	game.obstacle.load();
}

/**
 * Updates all the stages's objects.
 */
TestStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
}


// Adds this stage to the game's states.
States.TestStage = new TestStage();
