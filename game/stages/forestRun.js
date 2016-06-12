
function forestRun() {
	this.appleImage = null;
	this.numberApples = 0;
	this.numberApplesText = null;
}
var music;
//Variable containing all the initial position for inventory
var	inventoryData = 
{
	topRightCorner : {topRightX: 620, topRightY:10},
	keyCoinSize : 48,/*
	inventorySlotSize: 47,
	inventoryPosition : {inventoryPosX : 190 , inventoryPosY : 123.75} 
*/};
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
	this.appleImage.fixedToCamera = true;
	this.numberApplesText.fixedToCamera = true;

	// Creates and loads a sign
	game.sign = new Sign(window.game, 100, 300, 'forestRun');
	game.sign.load();

	game.obstacle = new Obstacle(window.game, 'forestRun');
	game.obstacle.load();

	//creates Apples
	game.apple1 = new collectableItems(window.game, 120, 300, 'apple');
	game.apple1.load();

	game.apple2 = new collectableItems(window.game, 320, 300, 'apple');
	game.apple2.load();

	game.apple3 = new collectableItems(window.game, 520, 300, 'apple');
	game.apple3.load();
}

forestRun.prototype.render = function(){
	this.appleImage = this.game.add.sprite(inventoryData.topRightCorner.topRightX, inventoryData.topRightCorner.topRightY, 'apple');
	this.appleImage.scale.setTo(1.5,1.5);
	this.numberApplesText = game.add.text(inventoryData.topRightCorner.topRightX + inventoryData.keyCoinSize , inventoryData.topRightCorner.topRightY +(0.15*inventoryData.keyCoinSize), this.numberCoins, { fontSize: '32px', fill: '#000' });
}

/**
 * Updates all the stages's objects.
 */
forestRun.prototype.update = function(){
	//this.create();
	this.render();
	// Updates the player.
	game.player.update(game.player);
	game.apple1.update(game.player);
	game.apple2.update(game.player);
	game.apple3.update(game.player);

	this.numberApplesText.text = this.numberApples;
	//checks if all apples were collected
	if(this.numberApples == 3){
		console.log(this.numberApples)
		//If all the apples were recollected game ends
		this.game.input.reset();
		this.game.sound.stopAll();
		this.game.state.start('GameOver', true);
	}
}

// Adds this stage to the game's states.
States.forestRun = new forestRun();