
function forestStage() {
	this.appleImage = null;
	this.numberApples = 0;
	this.numberApplesText = null;
}

var music;
var	forestInventoryData = 
{
	topRightCorner : {topRightX: 620, topRightY:10},
	keyCoinSize : 48,
};

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

	this.appleImage = this.game.add.sprite(forestInventoryData.topRightCorner.topRightX, forestInventoryData.topRightCorner.topRightY, 'apple');
	this.numberApples = 0;
	this.appleImage.scale.setTo(1.5,1.5);
	this.appleImage.fixedToCamera = true;
	this.numberApplesText = game.add.text(forestInventoryData.topRightCorner.topRightX + forestInventoryData.keyCoinSize, forestInventoryData.topRightCorner.topRightY + (0.15*forestInventoryData.keyCoinSize), this.numberCoins, {fontSize: '32px', fill: '#000'});
	this.numberApplesText.fixedToCamera = true;

	/*game.pikachu = new forestEnemy(window.game,500,500);
	game.pikachu.load();
*/
	// Creates and loads a Enemy.
	game.enemy1 = new Enemy(window.game, game.player);
	game.enemy1.load();

	game.enemy2 = new Enemy(window.game, game.player);
	game.enemy2.load();

	//creates Apples
	game.apple1 = new collectableItems(window.game, 550, 110, 'apple');
	game.apple1.load();

	game.apple2 = new collectableItems(window.game, 740, 685, 'apple');
	game.apple2.load();

	game.apple3 = new collectableItems(window.game, 1380, 620, 'apple');
	game.apple3.load();

	game.firstAid1 = new collectableItems(window.game, 325, 700, 'firstAid');
	game.firstAid1.load();

	// Creates and loads a Writer object.
	game.writer = new Writer(window.game);
	game.writer.load();

	//creates portal
	game.portals.push(new Portal(window.game, 1385, 10, 'forestRun'));
}

/**
 * Updates all the stages's objects.
 */
forestStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.HUD.update(game.player);
	game.firstAid1.update(game.player);
	game.writer.update();
	game.kirby.update(game.player);
	game.apple1.update(game.player);
	game.apple2.update(game.player);
	game.apple3.update(game.player);
	//game.pikachu.update();
	game.enemy1.update();
	game.enemy2.update();
	game.portals.every(portal => portal.update());
	//game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);
	this.numberApplesText.text = this.numberApples;
	//checks if all apples were collected
	if(this.numberApples == 3){
		console.log(this.numberApples)
		this.yoshi();
	}
}

forestStage.prototype.yoshi = function(){
	game.yoshi = new collectableItems(window.game, 900, 110, 'yoshi');
	game.yoshi.load();
	game.yoshi.update();
}

// Adds this stage to the game's states.
States.forestStage = new forestStage();