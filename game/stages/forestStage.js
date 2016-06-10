
function forestStage() {}

var music;
/**
 * Sets the state's basic configurations.
 */
forestStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
}

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

	game.obstacle = new Obstacle(window.game, 'forestStage');
	game.obstacle.load();
	
	//game.portal.push(new Portal(window.game, 3000, 100, 'forestRun'));		
}

/**
 * Updates all the stages's objects.
 */
forestStage.prototype.update = function(){
	//this.create();
	// Updates the player.
	game.player.update(game.player);
	//game.portal.update();
}

// Adds this stage to the game's states.
States.forestStage = new forestStage();