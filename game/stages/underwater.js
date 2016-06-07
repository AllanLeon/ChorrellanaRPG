/**
 * Test state for demostration purposes.
 */
function UnderwaterStage() {}

/**
 * Sets the state's basic configurations.
 */
UnderwaterStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
UnderwaterStage.prototype.create = function() {
	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 800, 600);
	// Sets the tilemap
	this.map1 = this.game.add.tilemap('underwater1');
	this.map2 = this.game.add.tilemap('underwater2');
	this.map3 = this.game.add.tilemap('underwater3');

	// Adds a tileset image to the tilemap
	this.map1.addTilesetImage('underwater', 'underwaterTS');
	this.map2.addTilesetImage('underwater', 'underwaterTS');
	this.map3.addTilesetImage('underwater', 'underwaterTS');

	// Creates a displayable layer from the tilemap
	this.layerBackground = this.map3.createLayer('Background');
	this.layerBackground.resizeWorld();
	
	// Creates and loads a Player object.
	this.game.player = new UnderwaterPlayer(window.game);
	this.game.player.load();
	this.game.camera.follow(this.game.player.sprite);

	//Creates the layer that will be drawn over the player
	this.layerObstacles = this.map3.createLayer('Obstacles');
	this.layerObstacles.resizeWorld();

	this.layerDetails = this.map3.createLayer('Details');
	this.layerDetails.resizeWorld();

	//Sets the colliders of the tilemap
	this.map3.setCollisionBetween(1,90, true, this.layerObstacles);

	//this.layerBackground.debug = true;
	//this.layerDetails.debug = true;
}

/**
 * Updates all the stages's objects.
 */
UnderwaterStage.prototype.update = function(){
	this.game.physics.arcade.collide(game.player.sprite, this.layerObstacles);
	// Updates the player.
	this.game.player.update();

	this.game.HUD.update(game.player);
}

// Adds this stage to the game's states.
States.UnderwaterStage = new UnderwaterStage();
