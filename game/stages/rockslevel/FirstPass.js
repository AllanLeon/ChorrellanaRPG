
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

	this.game.music = new Effects(window.game, 'requiemforadream');
	this.game.music.load();




	// Creates and loads a Player object.
	this.game.player = new Player(window.game);
	this.game.player.load();
	this.game.player.setBodySprite(400,1000);

	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);
	
	this.game.bluedragon = new BlueDragon(window.game);
	this.game.bluedragon.load();
	this.game.bluedragon.stop();
	this.game.bluedragon.setBodySprite(140,600);


	this.game.orangedragon = new OrangeDragon(window.game);
	this.game.orangedragon.load();
	this.game.orangedragon.stop();
	this.game.orangedragon.setBodySprite(610,650);


	this.game.minigreendragon = new MiniGreenDragon(window.game);
	this.game.minigreendragon.load();
	this.game.minigreendragon.stop();
	this.game.minigreendragon.setBodySprite(100,870);

	this.game.dragoncaballero = new DragonCaballero(window.game);
	this.game.dragoncaballero.load();
	this.game.dragoncaballero.stop();
	this.game.dragoncaballero.setBodySprite(450,0);

	this.game.blackdragon = new BlackDragon(window.game);
	this.game.blackdragon.load();
	this.game.blackdragon.stop();
	this.game.blackdragon.setBodySprite(645,270);

	this.game.dragonmasterncp = new DragonMasterNpc(window.game);
	this.game.dragonmasterncp.load();
	this.game.dragonmasterncp.stop();
	this.game.dragonmasterncp.setBodySprite(620,1050);




	//Creates HUD and its elements
	/*this.game.HUD = new HUD(window.game, 'Minimap');
	this.game.HUD.load();*/

	game.HUD.healthBar.fixedToCamera = true;
	game.HUD.availableHealth.fixedToCamera = true;
	//game.HUD.miniMap.fixedToCamera = true;

	// this.game.input.onDown.add(restartMusic, this);
}	

/*function restartMusic() {

    music.restart();

}*/
/**
 * Updates all the stages's objects.
 */
FirstPass.prototype.update = function(){
	// Updates the player.
	this.game.player.update(game.player);
	this.game.bluedragon.update();
	this.game.orangedragon.update();
	this.game.minigreendragon.update();
	this.game.dragoncaballero.update();
	this.game.blackdragon.update();
	this.game.dragonmasterncp.update();

	//game.HUD.update(game.player);

//	game.portals.every(portal => portal.update());
}

// Adds this stage to the game's states.
States.FirstPass = new FirstPass();