/**
 * Test state for demostration purposes.
 */
function mauricioStage() {}

/**
 * Sets the state's basic configurations.
 */
mauricioStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
mauricioStage.prototype.create = function() {

	this.game.background = this.game.add.sprite(0, 0, 'cloudsback');
	this.game.portal = new Portal(window.game, 710, 20, 'Play'); 
	this.game.portal.sprite.alpha = 0;
	//this.game.spearow
	this.game.spearow = this.game.add.sprite(700,10,'spearow');

	this.game.spearow.enableBody = true;


	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 800, 950);

	// Creates and loads a Player object.
	game.player = new PlayerM(window.game);
	game.player.load();
	game.player.setInitialPosition(20,800);
	game.player.addGravity();
	game.player.changeMovement();

	this.game.eagle = new Eagle(window.game);
	this.game.eagle.load();

	this.game.camera.follow(this.game.player.colliderSprite);

	//Creates and loads blocks
	game.obstacle = new Obstacle(window.game, 'mauricioStage');
	game.obstacle.load();
}

/**
 * Updates all the stages's objects.
 */
mauricioStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.portal.update(game.player);

	game.physics.arcade.overlap(this.game.player.colliderSprite, this.game.spearow, changeStage, null, this);

}

function changeStage(player, spearow)
{
	console.log("spearow");
	this.game.input.reset();
	this.game.sound.stopAll();
	this.game.state.start('play', true);
} 


// Adds this stage to the game's states.
States.mauricioStage = new mauricioStage();

