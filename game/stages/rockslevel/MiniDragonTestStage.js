
function MiniDragonTestStage() {}

/**
 * Sets the state's basic configurations.
 */
MiniDragonTestStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
MiniDragonTestStage.prototype.create = function() {
	// Sets the world bounds.
	this.game.background = this.game.add.sprite(0, 0, 'rockarena');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 1200, 1078);

	music = this.add.audio('nogamenolife');
    music.play();

	// Creates and loads a Player object.
	this.game.player = new Player(window.game);
	this.game.player.load();
	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);
	
	this.game.dragonmasterncp = new DragonMasterNpc(window.game);
	this.game.dragonmasterncp.load();
	this.game.dragonmasterncp.setBodySprite(600,550);
	this.game.dragonmasterncp.wakeUp();

	/*this.game.enemy = new Enemy(window.game);
	this.game.enemy.load();*/

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
MiniDragonTestStage.prototype.update = function(){
	// Updates the player.
	this.game.player.update();
	this.game.dragonmasterncp.update();
	//this.game.enemy.update();
	//game.HUD.update(game.player);

}

// Adds this stage to the game's states.
States.MiniDragonTestStage = new MiniDragonTestStage();