
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

	//Creates HUD and its elements
	this.game.HUD = new HUD(window.game, 'forestmap');
	this.game.HUD.load();

	game.HUD.healthBar.fixedToCamera = true;
	game.HUD.availableHealth.fixedToCamera = true;
	game.HUD.miniMap.fixedToCamera = true;

	game.obstacle = new Obstacle(window.game, 'forestStage');
	game.obstacle.load();

	//Creates CollectableItems 
	game.kirby = new collectableItems(window.game, 70, 590, 'kirby');
	game.kirby.load();

	// Creates and loads a Writer object.
	game.writer = new Writer(window.game);
	game.writer.load();

	//creates portal
	game.portals.push(new Portal(window.game, 1385, 10, 'forestRun'));		
}

/*//adds a dialogue
forestStage.prototype.chat = function(){
	this.game.player.colliderSprite.y +=5;
	this.game.writer.addText("You found a wild Kirby!...\n Now...what are you going to do with it??");
	this.game.writer.addText("...oh look! It disappeared...");
	this.game.writer.openTextBox(0);
}*/

/**
 * Updates all the stages's objects.
 */
forestStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.writer.update();
	game.kirby.update(game.player);
	game.portals.every(portal => portal.update());
}

// Adds this stage to the game's states.
States.forestStage = new forestStage();