// Declaration of player data.
function HouseObstacle(game){
	this.game = game;
	this.sprite = null;
}
//Declaration of variables

	var blocks;
	var block;

HouseObstacle.prototype.render = function(){
	this.blocks = game.add.group();
	this.blocks.enableBody = true;

	//visibility of blocks
	this.blocks.alpha = 0;
	
	//Group of blocks border of house
	//UP border
	this.block = this.blocks.create(0, 0, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 1066;
	this.block.height = 40;

	//Left border
	this.block = this.blocks.create(0, 0, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 33;
	this.block.height = 167;

	this.block = this.blocks.create(0, 252, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 32;
	this.block.height = 550;

	//Bottom border
	this.block = this.blocks.create(0, 760, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 1066;
	this.block.height = 40;

	//Right border
	this.block = this.blocks.create(1056, 0, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 10;
	this.block.height = 800;

	//House's Walls
	//Bedroom - library
	this.block = this.blocks.create(288, 0, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 35;
	this.block.height = 295;

	//library - hall
	this.block = this.blocks.create(353, 252, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 351;
	this.block.height = 42;

	//Library-kitchen
	this.block = this.blocks.create(670, 0, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 35;
	this.block.height = 292;

	//Room-hall (top)
	this.block = this.blocks.create(672, 380, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 33;
	this.block.height = 250;

	//Kitchen - room
	this.block = this.blocks.create(700, 420, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 380;
	this.block.height = 82;

	//room - hall (bottom)
	this.block = this.blocks.create(672, 677, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 33;
	this.block.height = 100;

	//Throne room -> right
	this.block = this.blocks.create(577, 420, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 31;
	this.block.height = 340;

	//Throne room -> top right
	this.block = this.blocks.create(485, 420, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 100;
	this.block.height = 33;

	//Throne room -> top left
	this.block = this.blocks.create(288, 420, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 160;
	this.block.height = 33;

	//Throne room -> left
	this.block = this.blocks.create(288, 420, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 31;
	this.block.height = 340;

	//Bathroom (top)
	this.block = this.blocks.create(30, 254, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 162;
	this.block.height = 78;

	//Bathroom (right)
	this.block = this.blocks.create(160, 282, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 31;
	this.block.height = 137;

	//Treasure room top
	this.block = this.blocks.create(30, 460, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 162;
	this.block.height = 42;

	//Treasure room (right)
	this.block = this.blocks.create(160, 500, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 32;
	this.block.height = 212;

	//Objects Room 1 (closet)
	this.block = this.blocks.create(63, 82, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 30;
	this.block.height = 60;

	//Objects Room 1 (Night table - bed)
	this.block = this.blocks.create(93, 82, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 35;
	this.block.height = 20;

	this.block = this.blocks.create(132, 82, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 52;
	this.block.height = 65;

	//Objects Room 1 (Table)
	this.block = this.blocks.create(258, 170, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 28;
	this.block.height = 20;

	//Bathroom left
	this.block = this.blocks.create(30, 300, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 32;
	this.block.height = 180;

	//Bathroom chair
	this.block = this.blocks.create(78, 428, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 10;
	this.block.height = 15;

	//Treasure room (papers)
	this.block = this.blocks.create(145, 510, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 10;
	this.block.height = 10;

	//Treasure room (crown) 
	this.block = this.blocks.create(140, 552, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 15;
	this.block.height = 15;

	//Treasure room (Magic Ball table)
	this.block = this.blocks.create(40, 550, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 15;
	this.block.height = 20;

	//Treasure room (coffers - bags)
	this.block = this.blocks.create(35, 720, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 100;
	this.block.height = 20;

	//Library room (books)
	this.block = this.blocks.create(310, 40, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 200;
	this.block.height = 80;

	//Library room (piano)
	this.block = this.blocks.create(530, 40, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 60;
	this.block.height = 50;
	

	//Library room (clock)
	this.block = this.blocks.create(618, 45, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 18;
	this.block.height = 50;

	//Library room (chair)
	this.block = this.blocks.create(645, 45, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 25;
	this.block.height = 40;

	//library room (table rectangular)
	this.block = this.blocks.create(645, 124, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 50;
	this.block.height = 130;

	// Library room (circular table and chair)
	this.block = this.blocks.create(310, 158, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 42;
	this.block.height = 42;

	this.block = this.blocks.create(350, 175, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 20;
	this.block.height = 20;

	//Kitchen

	//Bottom table with books and bottles
	this.block = this.blocks.create(700, 380, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 140;
	this.block.height = 50;

	//Open bag
	this.block = this.blocks.create(920, 380, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 30;
	this.block.height = 30;

	//Bags and boxes
	this.block = this.blocks.create(952, 340, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 105;
	this.block.height = 100;

	//Top bread shelf
	this.block = this.blocks.create(700, 30, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 65;
	this.block.height = 92;

	//kitchen 
	this.block = this.blocks.create(750, 30, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 183;
	this.block.height = 19;

	//bottles and bags
	this.block = this.blocks.create(900, 30, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 100;
	this.block.height = 20;

	//baskets shelf
	this.block = this.blocks.create(1000, 30, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 66;
	this.block.height = 80;

	//Potato's basket (1)
	this.block = this.blocks.create(1035, 175, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 17;
	this.block.height = 17;

	//Potato's basket (2)
	this.block = this.blocks.create(1035, 220, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 17;
	this.block.height = 17;

	//Table
	this.block = this.blocks.create(780, 165, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 210;
	this.block.height = 65;

	//Container 1
	this.block = this.blocks.create(710, 210, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 15;
	this.block.height = 15;

	//Container 1
	this.block = this.blocks.create(710, 250, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 15;
	this.block.height = 15;

	//Bottom room
	//Table night 1
	this.block = this.blocks.create(738, 500, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 20;
	this.block.height = 20;

	//Bed 1
	this.block = this.blocks.create(770, 500, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 30;
	this.block.height = 65;

	//Closet1
	this.block = this.blocks.create(810, 495, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 25;
	this.block.height = 25;

	//Closet1
	this.block = this.blocks.create(840, 495, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 25;
	this.block.height = 25;

	//Closet2
	this.block = this.blocks.create(930, 495, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 25;
	this.block.height = 25;

	//Closet2
	this.block = this.blocks.create(965, 495, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 25;
	this.block.height = 25;

	//Bed 2
	this.block = this.blocks.create(990, 500, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 30;
	this.block.height = 65;

	//Table night 1
	this.block = this.blocks.create(1035, 500, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 20;
	this.block.height = 20;

	//flower on conner 
	this.block = this.blocks.create(1035, 730, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 15;
	this.block.height = 16;

	//Table with books
	this.block = this.blocks.create(700, 710, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 130;
	this.block.height = 40;

	//Throne Room
	//Throne
	this.block = this.blocks.create(500, 450, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 60;
	this.block.height = 50;

	//chimney
	this.block = this.blocks.create(340, 450, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 100;
	this.block.height = 70;

	//weapons
	this.block = this.blocks.create(320, 710, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 160;
	this.block.height = 40;

	//table
	this.block = this.blocks.create(550, 600, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 25;
	this.block.height = 150;	

	//chair1
	this.block = this.blocks.create(525, 600, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 15;
	this.block.height = 15;

	//chair2
	this.block = this.blocks.create(525, 725, 'blockH');
	this.block.body.immovable = true;
	this.block.width = 15;
	this.block.height = 15;
	
	//Collision with the 'block' group

	game.physics.enable(this.block, Phaser.Physics.ARCADE);
	this.block.body.collideWorldBounds = true;
	this.block.body.checkCollision.up = true;
	this.block.body.checkCollision.down = true;
	this.block.body.checkCollision.right = true;
	this.block.body.checkCollision.left = true;
};

// Loads the player's sprites and defines it's animations.
HouseObstacle.prototype.load = function(){
	this.render();
}