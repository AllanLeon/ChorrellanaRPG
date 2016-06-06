
function FirstPass() {}

/**
 * Sets the state's basic configurations.
 */
FirstPass.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
FirstPass.prototype.create = function() {
	// Sets the world bounds.
	this.game.background = this.game.add.sprite(0, 0, 'rockpassagemap');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 800, 1120);


	// Creates and loads a Player object.
	this.game.player = new Player(window.game);
	this.game.player.load();
	this.game.player.setBodySprite(400,1000);

	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);
	

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
FirstPass.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	//game.HUD.update(game.player);

//	game.portals.every(portal => portal.update());

}

// Adds this stage to the game's states.
States.FirstPass = new FirstPass();