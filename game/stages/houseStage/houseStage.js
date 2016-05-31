/**
 * Test state for demostration purposes.
 */
function HouseStage() {}

/**
 * Sets the state's basic configurations.
 */
HouseStage.prototype.init = function() {};

/**
 * Initializes the stage objects.
 */
HouseStage.prototype.create = function() {
	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 1066, 800);
	this.game.background = this.game.add.sprite(0, 0, 'houseStage');

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();


	game.houseObstacle = new HouseObstacle(window.game);
	game.houseObstacle.load();

	this.game.camera.follow(this.game.player.colliderSprite);
	
	//game.obstacle = new Obstacle(window.game);
	//game.obstacle.load();
}

/**
 * Updates all the stages's objects.
 */
HouseStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.physics.arcade.collide(game.houseObstacle.blocks, game.player.colliderSprite);
}

/*

HouseStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.physics.arcade.collide(game.houseObstacle.blocks, game.player.colliderSprite);
}
*/
// Adds this stage to the game's states.
States.HouseStage = new HouseStage();
