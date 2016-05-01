// Declaration of player data.
function Obstacle(game){
	this.game = game;
	this.sprite = null;
}
//Declaration of variables

	var blocks;
	var bloque;

Obstacle.prototype.render = function(){
	this.blocks = game.add.group();
	this.blocks.enableBody = true;

	//visibility of blocks

	this.blocks.alpha =0;
	
	//Group of blocks for the island to avoid water
	this.bloque = this.blocks.create(0, 155, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 270;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(270,155, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(285,185, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 182;

	this.bloque = this.blocks.create(270,370, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(270,370, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(250,390, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(230,410, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(210,430, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(190,450, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(170,470, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(130,490, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(105,510, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 40;

	this.bloque = this.blocks.create(115,550, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(130,565, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(145,580, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(160,595, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 185;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(160,595, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 185;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(350,580, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(370,555, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(390,530, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(410,505, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(420,490, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 100;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(515,510, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(535,525, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(550,550, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(575,565, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 65;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(630,580, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 45;

	this.bloque = this.blocks.create(640,610, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(640,610, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(655,625, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(675,640, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(705,650, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 45;

	this.bloque = this.blocks.create(720,690, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(735,710, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(755,725, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 157;

	this.bloque = this.blocks.create(745,880, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(730,895, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 45;

	this.bloque = this.blocks.create(715,930, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(700,945, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 430;

	this.bloque = this.blocks.create(690,1380, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(650,1390, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(627,1400, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 45;

	this.bloque = this.blocks.create(530,1440, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 100;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(520,1455, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 45;

	this.bloque = this.blocks.create(370,1490, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 160;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(360,1500, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(0,1510, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 370;
	this.bloque.height = 15;

	//Blocks that avoid trees and rocks on island 

	this.bloque = this.blocks.create(0,160, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(25,190, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 95;

	this.bloque = this.blocks.create(125,280, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(0,290, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 45;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(0,340, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 150;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(0,400, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 860;

	this.bloque = this.blocks.create(0,1300, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(0,1335, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(25,1360, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(0,1385, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(25,1430, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 75;

	//rocks on water DOWN

	this.bloque = this.blocks.create(0,1500, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 75;

	this.bloque = this.blocks.create(100,1520, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 35;

	this.bloque = this.blocks.create(320,1520, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 35;

	this.bloque = this.blocks.create(460,1520, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 50;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(610,1520, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(710,1520, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	//rocks on water UP

	this.bloque = this.blocks.create(50,80, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 75;

	this.bloque = this.blocks.create(65,50, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(175,50, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(315,50, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(370,50, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(90,75, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 75;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(150,75, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 360;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(515,45, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 140;
	this.bloque.height = 22;

	this.bloque = this.blocks.create(650,75, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(675,100, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 125;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(800,0, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 100;

	this.bloque = this.blocks.create(850,0, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 100;

	this.bloque = this.blocks.create(880,100, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 65;
	this.bloque.height = 25;

	//First floor

	this.bloque = this.blocks.create(921, 0, 'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 70;


	this.bloque = this.blocks.create(950,55,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 80;

	this.bloque = this.blocks.create(975,130,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(1000,180,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 360;

	this.bloque = this.blocks.create(975,550,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(950,610,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(923,680,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 240;

	this.bloque = this.blocks.create(950,910,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 110;

	this.bloque = this.blocks.create(975,1010,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 377;

	this.bloque = this.blocks.create(990,1372,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 250;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1230,1300,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 90;

	this.bloque = this.blocks.create(1230,1300,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 150;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1370,860,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 450;

	this.bloque = this.blocks.create(1370,860,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1420,715,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 150;	

	this.bloque = this.blocks.create(1470,690,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 65;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1420,715,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 65;
	this.bloque.height = 15;

	//Second floor

	this.bloque = this.blocks.create(1002,0,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 160;

	this.bloque = this.blocks.create(1025,150,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 510;

	this.bloque = this.blocks.create(1002,670,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 230;

	this.bloque = this.blocks.create(1002,885,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 97;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1142,885,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 215;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1347,836,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(1347,836,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1400,640,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 200;

	this.bloque = this.blocks.create(1400,640,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 135;
	this.bloque.height = 15;

	//Third floor

	this.bloque = this.blocks.create(1075,0,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 130;

	this.bloque = this.blocks.create(1099,130,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 460;

	this.bloque = this.blocks.create(1075,590,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 290;

	this.bloque = this.blocks.create(1150,790,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 100;

	this.bloque = this.blocks.create(1290,785,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 95;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1370,615,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 165;

	this.bloque = this.blocks.create(1370,615,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 165;
	this.bloque.height = 15;

	//Fourth floor	

	this.bloque = this.blocks.create(1490, 245,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 50;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1490, 245,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 365;

	this.bloque = this.blocks.create(1495, 595,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 45;
	this.bloque.height = 15;

	// Houses

	this.bloque = this.blocks.create(1170, 777,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 120;	
	this.bloque.height = 100;

	this.bloque = this.blocks.create(1240, 675,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 124;	
	this.bloque.height = 103;

	this.bloque = this.blocks.create(1290, 655,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 75;	
	this.bloque.height = 20;

	//MINI ISLANDS

	this.bloque = this.blocks.create(935, 1455,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 385;	
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1320, 1455,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;	
	this.bloque.height = 75;

	this.bloque = this.blocks.create(930, 1455,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;	
	this.bloque.height = 75;

	this.bloque = this.blocks.create(930, 1520,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 390;	
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1320, 1400,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;	
	this.bloque.height = 55;

	this.bloque = this.blocks.create(1370, 1400,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;	
	this.bloque.height = 55;
	
	this.bloque = this.blocks.create(1320, 1390,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 55;	
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1320, 1450,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 55;	
	this.bloque.height = 15;

	//ROCKS

	this.bloque = this.blocks.create(902, 1520,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 22;	
	this.bloque.height = 22;

	this.bloque = this.blocks.create(1145, 1440,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 22;	
	this.bloque.height = 22;

	this.bloque = this.blocks.create(950, 830,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 24;	
	this.bloque.height = 24;
	
	//Collision with the 'bloques' group

	game.physics.enable(this.bloque, Phaser.Physics.ARCADE);
	this.bloque.body.collideWorldBounds = true;
	this.bloque.body.checkCollision.up = true;
	this.bloque.body.checkCollision.down = true;
	this.bloque.body.checkCollision.right = true;
	this.bloque.body.checkCollision.left = true;
};

// Loads the player's sprites and defines it's animations.
Obstacle.prototype.load = function(){
	this.render();
}