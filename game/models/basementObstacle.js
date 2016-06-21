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
	this.blocks.alpha = 0;
	
	//Left Up conner bookcase
	this.block = this.blocks.create(0, 0, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 190;
	this.block.height = 100;

	//Doors
	this.block = this.blocks.create(142, 145, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 38;
	this.block.height = 72;

	this.block = this.blocks.create(142, 265, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 38;
	this.block.height = 80;

	//Door entrance
	this.block = this.blocks.create(0, 140, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 135;
	this.block.height = 10;

	this.block = this.blocks.create(0, 340, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 135;
	this.block.height = 10;

	//Group of bookcases
	//Frist "floor"
	//First one
	this.block = this.blocks.create(260, 40, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 310;
	this.block.height = 180;

	//Second!
	this.block = this.blocks.create(666, 40, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 310;
	this.block.height = 180;

	//Last
	this.block = this.blocks.create(1075, 40, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 160;
	this.block.height = 180;

	//Second "floor"
	//First one
	this.block = this.blocks.create(260, 275, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 310;
	this.block.height = 180;

	//Second!
	this.block = this.blocks.create(666, 275, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 310;
	this.block.height = 180;

	//Last
	this.block = this.blocks.create(1075, 275, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 160;
	this.block.height = 180;

	//Third "floor"
	//First one
	this.block = this.blocks.create(260, 510, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 310;
	this.block.height = 180;

	//Second!
	this.block = this.blocks.create(666, 510, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 310;
	this.block.height = 180;

	//Last
	this.block = this.blocks.create(1075, 510, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 160;
	this.block.height = 180;

	//Fourth "floor"
	//First one
	this.block = this.blocks.create(260, 745, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 310;
	this.block.height = 180;

	//Second!
	this.block = this.blocks.create(666, 745, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 310;
	this.block.height = 180;

	//Last
	this.block = this.blocks.create(1075, 745, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 160;
	this.block.height = 180;

	//On the left side (both of them)
	
	this.block = this.blocks.create(0, 510, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 185;
	this.block.height = 180;

	this.block = this.blocks.create(0, 745, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 200;
	this.block.height = 90;



	/*
	this.block = this.blocks.create(, , 'blockH');
	this.block.body.immovable = true;
	this.block.width = ;
	this.block.height = ;

	*/



	
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