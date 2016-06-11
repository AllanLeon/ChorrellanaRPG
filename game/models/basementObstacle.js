// Declaration of player data.
function BasementObstacle(game){
	this.game = game;
	this.sprite = null;
}
//Declaration of variables

	var blocks;
	var block;

BasementObstacle.prototype.render = function(){
	this.blocks = game.add.group();
	this.blocks.enableBody = true;

	//visibility of blocks
	//this.blocks.alpha = 0;
	
	//Group of blocks border of house
	//UP border
	this.block = this.blocks.create(100, 100, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 100;
	this.block.height = 100;

	this.block = this.blocks.create(200, 200, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 100;
	this.block.height = 100;



	
	//Collision with the 'block' group

	game.physics.enable(this.block, Phaser.Physics.ARCADE);
	this.block.body.collideWorldBounds = true;
	this.block.body.checkCollision.up = true;
	this.block.body.checkCollision.down = true;
	this.block.body.checkCollision.right = true;
	this.block.body.checkCollision.left = true;
};

// Loads the player's sprites and defines it's animations.
BasementObstacle.prototype.load = function(){
	this.render();
}