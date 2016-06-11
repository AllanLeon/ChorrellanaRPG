
function forestStage() {}

var music;
/**
 * Sets the state's basic configurations.
 */
forestStage.prototype.init = function() {}

/**
 * Initializes the stage objects.
 */
forestStage.prototype.create = function() {
	//adds music
	music = this.add.audio('awesome');
    music.play();

	// Sets the game background with file associated to 'forest' on boot.js.
	this.game.background = this.game.add.sprite(0, 0, 'forest');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 1530, 830);

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();

	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);

	//game.obstacleForest = new obstacleForest(this.game);
	//game.obstacleForest.load();
}

/**
 * Updates all the stages's objects.
 */
forestStage.prototype.update = function(){
	//this.create();
	// Updates the player.
	game.player.update(game.player);
}

// Adds this stage to the game's states.
States.forestStage = new forestStage();