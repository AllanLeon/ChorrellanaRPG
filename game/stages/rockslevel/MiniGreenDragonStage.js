function MiniGreenDragonStage() {}

/**
 * Sets the state's basic configurations.
 */
MiniGreenDragonStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
MiniGreenDragonStage.prototype.create = function() {
	// Sets the world bounds.
	this.game.background = this.game.add.sprite(0, 0, 'jardinarena');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 1500, 1500);


	// Creates and loads a Player object.
	this.game.player = new PlayerDracoMount(window.game);
	this.game.player.load();
	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);
	

	this.game.MiniGreenDragon = new MiniGreenDragon(window.game);
	this.game.MiniGreenDragon.load();
	this.game.MiniGreenDragon.wakeUp();

	this.game.MiniGreenDragon2 = new MiniGreenDragon(window.game);
	this.game.MiniGreenDragon2.load();
	this.game.MiniGreenDragon2.wakeUp();

	this.game.MiniGreenDragon3 = new MiniGreenDragon(window.game);
	this.game.MiniGreenDragon3.load();
	this.game.MiniGreenDragon3.wakeUp();

	this.game.MiniGreenDragon4 = new MiniGreenDragon(window.game);
	this.game.MiniGreenDragon4.load();
	this.game.MiniGreenDragon4.wakeUp();

	this.game.MiniGreenDragon5 = new MiniGreenDragon(window.game);
	this.game.MiniGreenDragon5.load();
	this.game.MiniGreenDragon5.wakeUp();
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
MiniGreenDragonStage.prototype.update = function(){
	// Updates the player.
	this.game.player.update();
	this.game.MiniGreenDragon.update();
	this.game.MiniGreenDragon2.update();
	this.game.MiniGreenDragon3.update();
	this.game.MiniGreenDragon4.update();
	this.game.MiniGreenDragon5.update();
	
	//game.HUD.update(game.player);

}

// Adds this stage to the game's states.
States.MiniGreenDragonStage = new MiniGreenDragonStage();