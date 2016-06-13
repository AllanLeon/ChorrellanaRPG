function BlackDragonStage() {}

/**
 * Sets the state's basic configurations.
 */
BlackDragonStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
BlackDragonStage.prototype.create = function() {
	// Sets the world bounds.
	this.game.background = this.game.add.sprite(0, 0, 'nochearena');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 2200, 1415);


	// Creates and loads a Player object.
	this.game.player = new PlayerDracoMount(window.game);
	this.game.player.load();
	this.game.player.setBodySprite(1100,1315);
	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);
	

	this.game.BlackDragon = new BlackDragon(window.game);
	this.game.BlackDragon.load();
	this.game.BlackDragon.setBodySprite(1100,100);
	this.game.BlackDragon.wakeUp();

	this.game.blueDragon = new BlueDragon(window.game);
	this.game.blueDragon.load();
	this.game.blueDragon.setBodySprite(1100-70,100+30);
	this.game.blueDragon.wakeUp();

	this.game.orangeDragon = new OrangeDragon(window.game);
	this.game.orangeDragon.load();
	this.game.orangeDragon.setBodySprite(1100+120,100+30);
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
BlackDragonStage.prototype.update = function(){
	// Updates the player.
	this.game.player.update();
	this.game.BlackDragon.update();
	this.game.blueDragon.update();
	this.game.orangeDragon.update();
	//this.attack();

	//game.HUD.update(game.player);

}
/*var contador;
BlackDragonStage.prototype.attack = function(){

	contador += 1;

	if(contador == 500) {

   	this.game.BlackDragon.summon();
    contador = 0;
	}
}*/

// Adds this stage to the game's states.
States.BlackDragonStage = new BlackDragonStage();