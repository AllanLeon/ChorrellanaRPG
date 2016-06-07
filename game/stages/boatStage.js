/**
 * Test state for demostration purposes.
 */
function BoatStage() {}

/**
 * Sets the state's basic configurations.
 */
BoatStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
BoatStage.prototype.create = function() {
	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 800, 600);

	this.game.cursors = game.input.keyboard.createCursorKeys();

	// Sets the tilemap
	this.map = this.game.add.tilemap('boatMap');
	
	// Adds a tileset image to the tilemap
	this.map.addTilesetImage('tileset', 'boatMapTS');

	// Creates a displayable layer from the tilemap
	this.layer = this.map.createLayer('BoatMap Layer');
	this.layer.resizeWorld();

	this.game.deepWaters = this.game.add.group();
	this.game.deepWaters.enableBody = true;

	this.map.createFromObjects('Deep', 8, 'deepWater', 0, true, false, this.game.deepWaters);	

	this.game.deepWaters.callAll('animations.add', 'animations', 'shine', [0, 1, 2, 3], 10, true);
	this.game.deepWaters.callAll('animations.play', 'animations', 'shine');
	
	if (!this.game.player.firstTimeLoaded){
		this.game.player.killVisitedDeepWaters();
	}
	/*
	// Creates and loads a Player object.
	this.game.player = new BoatPlayer(window.game);*/

	this.game.player.load();
	this.game.camera.follow(this.game.player.sprite);

	//Creates the layer that will be drawn over the player
	this.layerUpper = this.map.createLayer('Upper');
	this.layerUpper.resizeWorld();

	//Sets the colliders of the tilemap
	this.map.setCollisionBetween(4,7);
	this.map.setCollisionBetween(9,11);

	//this.hidingTiles.callAll('animations.add', 'animations', 'shine', [0, 1, 2, 3], 10, true);

	// Creates and loads a Writer object.
	game.writer = new Writer(window.game);
	game.writer.load();

	this.game.player.adviceMessage();
}

/**
 * Updates all the stages's objects.
 */
BoatStage.prototype.update = function(){
	
	this.game.physics.arcade.collide(game.player.sprite, this.layer);

	this.game.physics.arcade.overlap(this.game.player.sprite, this.game.deepWaters, this.game.player.overlapDeepWater);	
	// Updates the player.
	this.game.player.update();
}

// Adds this stage to the game's states.
States.BoatStage = new BoatStage();
