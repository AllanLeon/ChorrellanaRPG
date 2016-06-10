
function forestRun() {}
var music;
/**
 * Sets the state's basic configurations.
 */
forestRun.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
}

/**
 * Initializes the stage objects.
 */
forestRun.prototype.create = function() {
	//adds music
	music = this.add.audio('awesome');
    music.play();

	// Sets the game background with file associated to 'run' on boot.js.
	this.game.background = this.game.add.sprite(0, 0, 'run');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 2400, 400);

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();
	game.player.addGravity();
	game.player.changeMovement();

	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);

	game.obstacle = new Obstacle(window.game, 'forestRun');
	game.obstacle.load();
}

/**
 * Updates all the stages's objects.
 */
forestRun.prototype.update = function(){
	//this.create();
	// Updates the player.
	game.player.update(game.player);
}

// Adds this stage to the game's states.
States.forestRun = new forestRun();