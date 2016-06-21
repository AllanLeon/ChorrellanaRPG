
function forestRun() {}

var music;
//Variable containing all the initial position for inventory
var	forestInventoryData = 
{
	topRightCorner : {topRightX: 620, topRightY:10},
	keyCoinSize : 48,
};

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
    game.eff = new Effects(window.game,'awesome', 'bubble');
	game.eff.load();

	// Sets the game background with file associated to 'run' on boot.js.
	this.game.background = this.game.add.sprite(0, 0, 'run');

	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 2400, 400);

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();
	game.player.addGravity();
	game.player.changeMovement();

	//Creates and loads Clock object
	game.clock = new Clock(window.game);
	game.clock.load();

	// Sets the camera to follow the player.
	this.game.camera.follow(this.game.player.colliderSprite);

	/*this.appleImage = this.game.add.sprite(forestInventoryData.topRightCorner.topRightX, forestInventoryData.topRightCorner.topRightY, 'apple');
	this.numberApples = 0;
	this.appleImage.scale.setTo(1.5,1.5);
	this.appleImage.fixedToCamera = true;
	this.numberApplesText = game.add.text(forestInventoryData.topRightCorner.topRightX + forestInventoryData.keyCoinSize, forestInventoryData.topRightCorner.topRightY + (0.15*forestInventoryData.keyCoinSize), this.numberCoins, {fontSize: '32px', fill: '#000'});
	this.numberApplesText.fixedToCamera = true;
*/
	// Creates and loads a sign
	/*game.sign = new Sign(window.game, 100, 300, 'forestRun');
	game.sign.load();
*/
	game.obstacle = new Obstacle(window.game, 'forestRun');
	game.obstacle.load();

	//creates Apples
	game.leaf = new collectableItems(window.game, 2380, 300, 'leaf');
	game.leaf.load();
}

/**
 * Updates all the stages's objects.
 */
forestRun.prototype.update = function(){
	//this.create();
	// Updates the player.
	game.player.update(game.player);
	//game.apple1.update(game.player);
	game.inventory.update(game.player);
	game.leaf.update(game.player);
 	//this.game.physics.arcade.overlap(this.game.player.sprite, this.apple1, null, this.collectApple);

	if(game.clock.total == 6){
		this.game.input.reset();
		this.game.sound.stopAll();
		this.game.state.start('GameOver', true);
	}
}

/*forestRun.prototype.collectApple = function(){
		this.game.state.start('forestStage', true);
}
*/
// Adds this stage to the game's states.
States.forestRun = new forestRun();