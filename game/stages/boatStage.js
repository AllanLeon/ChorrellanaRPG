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

	// Sets the tilemap
	this.map = this.game.add.tilemap('boatMap');
	
	// Adds a tileset image to the tilemap
	this.map.addTilesetImage('tileset', 'boatMapTS');

	// Creates a displayable layer from the tilemap
	this.layer = this.map.createLayer('BoatMap Layer');
	this.layer.resizeWorld();

	//Sets the colliders of the tilemap
	this.map.setCollisionBetween(1,7);
	this.map.setCollisionBetween(9,11);

	// Creates and loads a Player object.
	this.game.player = new BoatPlayer(window.game);
	this.game.player.load();
	this.game.camera.follow(this.game.player.sprite);
}

/**
 * Updates all the stages's objects.
 */
BoatStage.prototype.update = function(){
	
	this.game.physics.arcade.collide(game.player.sprite, this.layer);

	// Updates the player.
	this.game.player.update();
}


// Adds this stage to the game's states.
States.BoatStage = new BoatStage();
