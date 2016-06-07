
function obstacleForest(game){
	this.game = game;
	this.sprite = null;
}
//Declaration of variables
	var blocks;
	var bloque;

obstacleForest.prototype.render = function(){
	this.blocks = game.add.group();
	this.blocks.enableBody = true;

	//visibility of blocks
	this.blocks.alpha = 0;

	//forest edge
	//left
	this.bloque = this.blocks.create(45, 190, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 500;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(35,210, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 200;

	this.bloque = this.blocks.create(50, 410, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 180;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(190,430, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 50;
	this.bloque.height = 100;

	this.bloque = this.blocks.create(50,520, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 160;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(35,550, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 120;

	this.bloque = this.blocks.create(50, 670, 'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 190;
	this.bloque.height = 15;

	//up
	this.bloque = this.blocks.create(530,100, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(550,60, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 610;
	this.bloque.height = 15;
	
	this.bloque = this.blocks.create(1160,70,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(1200,120,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 100;
	this.bloque.height = 40;

	this.bloque = this.blocks.create(1300,70,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(1340,0,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 80;

	//right	
	this.bloque = this.blocks.create(1460,0,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 750;

	//down
	this.bloque = this.blocks.create(1000,755,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 460;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(730,715,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 265;
	this.bloque.height = 40;

	this.bloque = this.blocks.create(690,245,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 480;

	this.bloque = this.blocks.create(630,200,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 65;
	this.bloque.height = 120;

	this.bloque = this.blocks.create(555,330,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 70;
	this.bloque.height = 220;

	this.bloque = this.blocks.create(480,545,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 70;
	this.bloque.height = 130;

	this.bloque = this.blocks.create(400,670,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 100;
	this.bloque.height = 15;

	//trees
	this.bloque = this.blocks.create(170,260, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 150;
	this.bloque.height = 35;

	this.bloque = this.blocks.create(284,310, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 30;

	//block of 8 trees 
	this.bloque = this.blocks.create(322, 430, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 75;
	this.bloque.height = 170;

	//bottom trees 
	this.bloque = this.blocks.create(242, 650, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 38;
	this.bloque.height = 40;

	this.bloque = this.blocks.create(280, 690, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 38;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(318, 720, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 38;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(356, 690, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 38;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(394, 650, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 38;
	this.bloque.height = 40;

	//group of 7 trees
	//6 of them
	this.bloque = this.blocks.create(400, 260, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 65;
	this.bloque.height = 120;
	//the lonely one
	this.bloque = this.blocks.create(465, 300, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 42;
	this.bloque.height = 45;

	//BIG group of trees
	this.bloque = this.blocks.create(775, 90, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 120;
	this.bloque.height = 40;

	this.bloque = this.blocks.create(855, 120, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 340;

	this.bloque = this.blocks.create(855, 440, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 100;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(925, 175, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 38;
	this.bloque.height = 340;

	this.bloque = this.blocks.create(890, 100, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 100;

	//square of trees 
	//1
	this.bloque = this.blocks.create(1080, 220, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 105;
	this.bloque.height = 160;

	this.bloque = this.blocks.create(1040, 260, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 120;

	//2
	this.bloque = this.blocks.create(1263, 220, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 115;
	this.bloque.height = 160;

	this.bloque = this.blocks.create(1380, 255, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 80;

	//3
	this.bloque = this.blocks.create(1045, 475, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 140;
	this.bloque.height = 160;

	this.bloque = this.blocks.create(1000, 560, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 40;

	//4
	this.bloque = this.blocks.create(1263, 475, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 110;
	this.bloque.height = 160;

	this.bloque = this.blocks.create(1375, 475, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 120;
	
	//Collision with the 'bloques' group
	game.physics.enable(this.bloque, Phaser.Physics.ARCADE);
	game.physics.arcade.collide(game.player.colliderSprite, this.bloque);
	this.bloque.body.collideWorldBounds = true;
	this.bloque.body.checkCollision.up = true;
	this.bloque.body.checkCollision.down = true;
	this.bloque.body.checkCollision.right = true;
	this.bloque.body.checkCollision.left = true;
};

// Loads the player's sprites and defines it's animations.
obstacleForest.prototype.load = function(){
	this.render();
	//game.physics.arcade.collide(game.player.colliderSprite, this.blocks);
}