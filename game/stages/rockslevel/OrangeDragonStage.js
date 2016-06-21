function OrangeDragonStage() {}

/**
 * Sets the state's basic configurations.
 */
OrangeDragonStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
OrangeDragonStage.prototype.create = function() {
	// Sets the world bounds.
	this.game.background = this.game.add.sprite(0, 0, 'volcanarena');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 1600, 1209);


	// Creates and loads a Player object.
	this.game.player = new PlayerDracoMount(window.game);
	this.game.player.load();
	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);
	

	this.game.orangeDragon = new OrangeDragon(window.game);
	this.game.orangeDragon.load();
	this.game.orangeDragon.wakeUp();

	//Creates HUD and its elements
	/*this.game.HUD = new HUD(window.game, 'Minimap');
	this.game.HUD.load();*/

	game.HUD.healthBar.fixedToCamera = true;
	game.HUD.availableHealth.fixedToCamera = true;
	//game.HUD.miniMap.fixedToCamera = true;

	
}	

/**
 * Updates all the stages's objects.
 */
OrangeDragonStage.prototype.update = function(){
	// Updates the player.
	this.game.player.update();
	this.game.orangeDragon.update();
	
	//game.HUD.update(game.player);

}

// Adds this stage to the game's states.
States.OrangeDragonStage = new OrangeDragonStage();