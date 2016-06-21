/**
 * Test state for demostration purposes.
 */
function DockStage() {}

/**
 * Sets the state's basic configurations.
 */
DockStage.prototype.init = function() {
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
};

/**
 * Initializes the stage objects.
 */
DockStage.prototype.create = function() {
	// Sets the world bounds.
	this.game.world.setBounds(0, 0, 800, 600);

	this.game.cursors = game.input.keyboard.createCursorKeys();


	music = this.add.audio('docks');
    music.play();

	// Sets the tilemap
	this.map = this.game.add.tilemap('dock');

	// Adds a tileset image to the tilemap
	this.map.addTilesetImage('dock', 'dockTS');

	// Creates a displayable layer from the tilemap
	this.layerFloor = this.map.createLayer('Floor');
	this.layerFloor.resizeWorld();

	//Creates the layer that will be drawn over the player
	this.layerCollision = this.map.createLayer('Collision');
	this.layerCollision.resizeWorld();

	//Sets the colliders of the tilemap
	this.map.setCollisionBetween(16,40, true, this.layerCollision);

	this.map.setTileLocationCallback(16, 17, 3, 2, this.chat, this, this.layerCollision);

	// Creates and loads a Player object.
	this.game.player = new Player(window.game);
	this.game.player.load();
	this.game.camera.follow(this.game.player.sprite);

	//this.layerBackground.debug = true;
	//this.layerCollision.debug = true;

	// Creates and loads a Writer object.
	game.writer = new Writer(window.game);
	game.writer.load();

	this.talked = false;
}

/**
 * Updates all the stages's objects.
 */
DockStage.prototype.update = function(){
	this.game.physics.arcade.collide(game.player.colliderSprite, this.layerCollision);
	// Updates the player.

	if (!this.game.writer.onScreen){
		if (!this.talked){
			this.game.player.update();
		} else {
			this.changeStage();
		}

	} else {
		this.game.player.stop();
		this.game.player.stopAnimation();
		this.game.writer.update();
	}
}


DockStage.prototype.chat = function(){
	this.game.player.colliderSprite.y +=5;
	this.game.writer.addText("...");
	this.game.writer.addText("(I hope he's not the guy)");
	this.game.writer.addText("Hey you!...\nYou came for the view right?");
	this.game.writer.addText("......");
	this.game.writer.addText("I'll take that as a no... So, you are the one who wants some kind\nof level or something like that..?");
	this.game.writer.addText("Players.. You never change...");
	this.game.writer.addText("Well.. Fortunately, I do have some kind of 'special' mission for\nyou...");
	this.game.writer.addText("Look.. As you probably presume, I'm a great sailor\nDon't let the age fool you");
	this.game.writer.addText("But I'm kind of a distracted person\nSo, let's say I've probably lost a couple of things I want back...");
	this.game.writer.addText("Not really important stuff.. It's just that\nI have some..... affection for it");
	this.game.writer.addText("These things probably fell off the boat\nand I'm too old to be diving for them");
	this.game.writer.addText("You seem capable of doing so..\nHey! I may let you pilot my boat for a while");
	this.game.writer.addText("As I said.. It's not important stuff..\nJust don't touch it with your bare hands.. ok?");
	this.game.writer.addText("......");
	this.game.writer.addText("That is a yes to me.. Let's go then!");
	this.talked=true;
	this.game.writer.openTextBox(0);
}

DockStage.prototype.changeStage = function() {
	this.game.input.reset();
	this.game.player = new BoatPlayer(window.game);
	this.game.state.start("BoatStage", true);
}

// Adds this stage to the game's states.
States.DockStage = new DockStage();