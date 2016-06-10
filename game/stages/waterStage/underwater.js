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
	if (this.game.player.collectedItems<3){
		this.levelNumber = this.game.player.collectedItems.toString();
	} else {
		this.levelNumber = '0';
	}

	switch (this.levelNumber) {
		case "0":
		this.underwaterItem = new UnderwaterItem(window.game, 672, 416, 0);
			break;
		case "1":

		this.underwaterItem = new UnderwaterItem(window.game, 992, 288, 1);
			break;
		case "2":

		this.underwaterItem = new UnderwaterItem(window.game, 160, 928, 2);
			break;
	}	
	// Sets the tilemap
	this.map = this.game.add.tilemap('underwater' + this.levelNumber);

	// Adds a tileset image to the tilemap
	this.map.addTilesetImage('underwater', 'underwaterTS');

	// Creates a displayable layer from the tilemap
	this.layerBackground = this.map.createLayer('Background');
	this.layerBackground.resizeWorld();

	// Creates and loads a Player object.
	var boatPlayer = this.game.player;
	this.game.player = new UnderwaterPlayer(window.game, boatPlayer);
	this.game.player.load();
	this.game.camera.follow(this.game.player.sprite);

	//Creates the layers that will be drawn over the player
	this.layerObstacles = this.map.createLayer('Obstacles');
	this.layerObstacles.resizeWorld();

	this.underwaterItem.load();

	this.layerDetails = this.map.createLayer('Details');
	this.layerDetails.resizeWorld();
	
	//Sets the colliders of the tilemap
	this.map.setCollisionBetween(1,90, true, 'Obstacles');	
}

/**
 * Updates all the stages's objects.
 */
UnderwaterStage.prototype.update = function(){
	this.game.physics.arcade.collide(game.player.sprite, this.layerObstacles);
	this.game.physics.arcade.overlap(game.player.sprite, this.underwaterItem.item, this.underwaterItem.collectItem);
	// Updates the player.
	this.game.player.update();
}



// Adds this stage to the game's states.
States.UnderwaterStage = new UnderwaterStage();
