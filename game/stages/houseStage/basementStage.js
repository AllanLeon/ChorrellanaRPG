
function BasementStage() {}

/**
 * Sets the state's basic configurations.
 */
BasementStage.prototype.init = function() {};

/**
 * Initializes the stage objects.
 */
BasementStage.prototype.create = function() {
	// Sets the world bounds
	this.game.world.setBounds(0, 0, 1242, 840);

	//Sets the world background
	this.game.background = this.game.add.sprite(0, 0, 'basementTest');

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();

	//Makes the camera follows the player
	this.game.camera.follow(this.game.player.colliderSprite);


	//Creates and loads Clock object
	game.clock = new Clock(window.game);
	game.clock.load();

	// Creates the basement's obstacles
	game.basementObstacle = new BasementObstacle(window.game);
	game.basementObstacle.load();

}

/**
 * Updates all the stages's objects.
 */
BasementStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);

	//Checks collision between basement obstacles and player
	game.physics.arcade.collide(game.basementObstacle.blocks, game.player.colliderSprite);

	//Checks for time that player has been in the basement (limited because here player tries to recolect as many coins as player can)
	if(game.clock.total == 5){
		this.game.state.start('HouseStage', true);
	}

	game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);
		
}

// Adds this stage to the game's states.
States.BasementStage = new BasementStage();
