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

	// Creates the house's obstacles
	game.houseObstacle = new HouseObstacle(window.game);
	game.houseObstacle.load();

	//Makes the camera follows the player
	this.game.camera.follow(this.game.player.colliderSprite);

	//Collectable Items only keys !!!
	//room 1 table night
	game.key1 = new collectableItems(window.game, 100, 100, 'key');
	game.key1.load();

	//potato
	game.key2 = new collectableItems(window.game, 1035, 160, 'key');
	game.key2.load();

	//Treasure room papers
	game.key3 = new collectableItems(window.game, 120, 508, 'key');
	game.key3.load();

	//Throne room (weapons)
	game.key4 = new collectableItems(window.game, 312, 690, 'key');
	game.key4.load();

	//Bathroom 
	game.key5 = new collectableItems(window.game, 78, 300, 'key');
	game.key5.load();

	//Room 2 flower on conner
	game.key6 = new collectableItems(window.game, 1030, 710, 'key');
	game.key6.load();

	//piano
	game.key7 = new collectableItems(window.game, 590, 38, 'key');
	game.key7.load();

	//Coins!
	game.coin1 = new collectableItems(window.game, 100, 200, 'coin');
	game.coin1.load();

	game.coin2 = new collectableItems(window.game, 200, 1000, 'coin');
	game.coin2.load();

	//Creates Inventory Items
	game.inventory = new inventory(window.game);
	game.inventory.load();

	//Sets inventory elements fixed to the camera
	game.inventory.keyImage.fixedToCamera = true;
	game.inventory.coinImage.fixedToCamera = true;
	game.inventory.numberCoinsText.fixedToCamera = true;
	game.inventory.numberKeysText.fixedToCamera = true;
	game.inventory.inventoryImage.fixedToCamera = true;true;

	// Creates and loads a Writer object.
	game.writer = new Writer(window.game);
	game.writer.load();

	// Creates and loads a Enemy.
	game.enemy = new Enemy(window.game, game.player);
	game.enemy.load();

	//console.log(game.inventory.numberCoins);

}
/**
 * Updates all the stages's objects.
 */
HouseStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);
	game.physics.arcade.collide(game.houseObstacle.blocks, game.player.colliderSprite);
	game.inventory.update(game.player);

	game.key1.update(game.player);
	game.key2.update(game.player);
	game.key3.update(game.player);
	game.key4.update(game.player);
	game.key5.update(game.player);
	game.key6.update(game.player);
	game.key7.update(game.player);
	game.coin1.update(game.player);
	game.coin2.update(game.player);

	//checks if all the keys were collected
	if(game.inventory.numberKeys == 7){
		console.log(game.inventory.numberKeys)
		//If all the keys were recollected. New stage (working on that)
		this.game.state.start('BasementStage', true);
	}

	game.enemy.update();

	game.writer.update();

	game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);
}
// Adds this stage to the game's states.
States.HouseStage = new HouseStage();
