
function BlueDragonStage() {}

/**
 * Sets the state's basic configurations.
 */
BlueDragonStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
BlueDragonStage.prototype.create = function() {
	// Sets the world bounds.
	this.game.background = this.game.add.sprite(0, 0, 'skyarena');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 1500, 1500);

	music = this.add.audio('alas');
    music.play();

	// Creates and loads a Player object.
	this.game.player = new PlayerDracoMount(window.game);
	this.game.player.load();
	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);
	

	this.game.bluedragon = new BlueDragon(window.game);
	this.game.bluedragon.load();
	this.game.bluedragon.wakeUp();
	
	this.game.bluedragon2 = new BlueDragon(window.game);
	this.game.bluedragon2.load();
	this.game.bluedragon2.wakeUp();
	
	this.game.bluedragon3 = new BlueDragon(window.game);
	this.game.bluedragon3.load();
	this.game.bluedragon3.wakeUp();
	
	this.game.bluedragon4 = new BlueDragon(window.game);
	this.game.bluedragon4.load();
	this.game.bluedragon4.wakeUp();
	


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
BlueDragonStage.prototype.update = function(){
	// Updates the player.
	this.game.player.update();
	this.game.bluedragon.update();
	this.game.bluedragon2.update();
	this.game.bluedragon3.update();
	this.game.bluedragon4.update();
	
	//game.HUD.update(game.player);

}

// Adds this stage to the game's states.
States.BlueDragonStage = new BlueDragonStage();