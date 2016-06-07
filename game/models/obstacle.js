// Declaration of player data.
function Obstacle(game, stage){
	this.game = game;
	this.sprite = null;
	this.stage = stage;
}
//Declaration of variables

	var blocks;
	var bloque;

Obstacle.prototype.render = function(){
	
	this.blocks = game.add.group();
	this.blocks.enableBody = true;

	//visibility of blocks
	this.blocks.alpha = 0;
/*
	if(this.stage == 'play')
	{
		//Group of blocks for the island to avoid water
		this.bloque = this.blocks.create(0, 120, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 270;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(270,135, 'blockH');
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

		this.bloque = this.blocks.create(115,510, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(105,520, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 5;

		this.bloque = this.blocks.create(115,515, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(130,530, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(145,545, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(160,560, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 195;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(355,535, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 25;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(380,510, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 25;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(405,485, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 25;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(460,460, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 60;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(520,485, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 25;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(545,510, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 25;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(570,535, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 70;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(640,550, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 45;

		this.bloque = this.blocks.create(655,580, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 20;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(670,605, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 40;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(710,625, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 45;

		this.bloque = this.blocks.create(720,655, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(735,675, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(755,820, 'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 60;

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

		this.bloque = this.blocks.create(995,145,'block');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 360;

		this.bloque = this.blocks.create(975,525,'block');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 60;

		this.bloque = this.blocks.create(950,585,'block');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 70;

		this.bloque = this.blocks.create(930,655,'block');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 40;

		this.bloque = this.blocks.create(925,820,'block');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 90;

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
		this.bloque.height = 200;

		this.bloque = this.blocks.create(1002,855,'block');
		this.bloque.body.immovable = true;
		this.bloque.width = 97;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(1142,855,'block');
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
		this.bloque.height = 255;

		this.bloque = this.blocks.create(1150,790,'block');
		this.bloque.body.immovable = true;
		this.bloque.width = 15;
		this.bloque.height = 75;

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

		//BRIDGE

		this.bloque = this.blocks.create(750, 685,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 180;
		this.bloque.height = 15;

		this.bloque = this.blocks.create(760, 815,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 180;	
		this.bloque.height = 15;
		
		//Collision with the 'bloques' group

		
	}
	else if (this.stage = 'mauricioStage')
	{
		this.bloque = this.blocks.create(10, 932,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 800;
		this.bloque.height = 2;

		this.bloque = this.blocks.create(85, 767,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 300;
		this.bloque.height = 2;

		this.bloque = this.blocks.create(560, 810,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 300;
		this.bloque.height = 2;

		this.bloque = this.blocks.create(420, 690,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 300;
		this.bloque.height = 2;

		this.bloque = this.blocks.create(310, 530,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 300;
		this.bloque.height = 2;

		this.bloque = this.blocks.create(320, 380,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 300;
		this.bloque.height = 2;

		this.bloque = this.blocks.create(630, 300,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 300;
		this.bloque.height = 2;

		this.bloque = this.blocks.create(50, 170,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 450;
		this.bloque.height = 2;

		this.bloque = this.blocks.create(580, 85,'blockH');
		this.bloque.body.immovable = true;
		this.bloque.width = 300;
		this.bloque.height = 2;
	}*/

	if(this.stage == 'play')
	{
		this.playBlocks();
	}
	else if (this.stage == 'mauricioStage')
	{
		this.mauricioBlocks();
	}
	else if(this.stage == 'roberto')
	{
		this.robertoBlocks();
	}
	else if(this.stage == 'robertosecond')
	{
		this.robertosecondBlocks();
	}
	

	//Group of blocks for the island to avoid water
	//
	////Collision with the 'bloques' group

	/*game.physics.enable(this.bloque, Phaser.Physics.ARCADE);
	this.bloque.body.collideWorldBounds = true;
	this.bloque.body.checkCollision.up = true;
	this.bloque.body.checkCollision.down = true;
	this.bloque.body.checkCollision.right = true;
	this.bloque.body.checkCollision.left = true;*/

};


Obstacle.prototype.playBlocks = function(){
	this.bloque = this.blocks.create(0, 120, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 270;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(270,135, 'blockH');
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

	this.bloque = this.blocks.create(115,510, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(105,520, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(115,515, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(130,530, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(145,545, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(160,560, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 195;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(355,535, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(380,510, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(405,485, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(460,460, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(520,485, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(545,510, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(570,535, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 70;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(640,550, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 45;

	this.bloque = this.blocks.create(655,580, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(670,605, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(710,625, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 45;

	this.bloque = this.blocks.create(720,655, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(735,675, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(755,820, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 60;

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

	this.bloque = this.blocks.create(995,145,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 360;

	this.bloque = this.blocks.create(975,525,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(950,585,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(930,655,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 40;

	this.bloque = this.blocks.create(925,820,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 90;

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
	this.bloque.height = 200;

	this.bloque = this.blocks.create(1002,855,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 97;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(1142,855,'block');
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
	this.bloque.height = 255;

	this.bloque = this.blocks.create(1150,790,'block');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 75;

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

	//BRIDGE

	this.bloque = this.blocks.create(750, 685,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 180;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(760, 815,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 180;	
	this.bloque.height = 15;
}

Obstacle.prototype.mauricioBlocks = function() {
	this.bloque = this.blocks.create(10, 932,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 800;
	this.bloque.height = 2;

	this.bloque = this.blocks.create(85, 767,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 300;
	this.bloque.height = 2;

	this.bloque = this.blocks.create(560, 810,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 300;
	this.bloque.height = 2;

	this.bloque = this.blocks.create(420, 690,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 300;
	this.bloque.height = 2;

	this.bloque = this.blocks.create(310, 530,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 300;
	this.bloque.height = 2;

	this.bloque = this.blocks.create(320, 380,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 300;
	this.bloque.height = 2;

	this.bloque = this.blocks.create(630, 300,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 300;
	this.bloque.height = 2;

	this.bloque = this.blocks.create(50, 170,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 450;
	this.bloque.height = 2;

	this.bloque = this.blocks.create(580, 85,'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 300;
	this.bloque.height = 2;
}

Obstacle.prototype.robertoBlocks = function(){

	//TOP LEFT CORNER
	this.bloque = this.blocks.create(0,0, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 570;

	this.bloque = this.blocks.create(20,200, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 50;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(20,250, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 150;

	this.bloque = this.blocks.create(70,250, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(70,370, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 35;

	this.bloque = this.blocks.create(50,420, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 35;

	this.bloque = this.blocks.create(50,420, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(35,450, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 35;

	this.bloque = this.blocks.create(100,250, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(00,190, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 160;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(80,290, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(80,365, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(150,170, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(170,150, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(190,135, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(190,115, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(195,80, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(150,75, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(170,0, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 80;

	//THE ROCK
	this.bloque = this.blocks.create(130,490, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 30;
	

	//LOWER LEFT CORNER WORKING FROM BOTTOM TO TOP
	this.bloque = this.blocks.create(140,1010, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(130,980, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(115,950, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(100,920, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(85,870, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(70,805, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 45;

	this.bloque = this.blocks.create(53,755, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(37,705, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(17,690, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(0,675, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 10;

	//TOP CENTER
	this.bloque = this.blocks.create(370,0, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;
	//cactus
	this.bloque = this.blocks.create(360,20, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 80;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(430,40, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(465,90, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 175;
	this.bloque.height = 30;

	//center island

	this.bloque = this.blocks.create(400,180, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 110;
	this.bloque.height = 17;

	this.bloque = this.blocks.create(425,165, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 120;
	this.bloque.height = 17;

	this.bloque = this.blocks.create(450,135, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 90;
	this.bloque.height = 17;

	this.bloque = this.blocks.create(450,195, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 45;
	this.bloque.height = 17;

	//CACTUS
	this.bloque = this.blocks.create(520,225, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 25;

	//CLOSING ROGHT CORNER TOP
	//STARTINGTRIDENT CACTUS
	this.bloque = this.blocks.create(630,65, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 45;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(650,35, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(710,0, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 90;
	this.bloque.height = 40;
	
	this.bloque = this.blocks.create(800,35, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(850,70, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(900,100, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 25;
	
	this.bloque = this.blocks.create(915,120, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(975,170, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(995,170, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 24;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(975,260, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(960,300, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 60;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(945,320, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 90;

	this.bloque = this.blocks.create(960,410, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(980,440, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(965,500, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(935,515, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 50;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(915,530, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(900,545, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 40;

	this.bloque = this.blocks.create(910,595, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(910,625, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(900,685, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 40;

	this.bloque = this.blocks.create(880,705, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(865,720, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(845,760, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(820,770, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(785,785, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(755,800, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(720,815, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(705,850, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(690,880, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(670,900, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(640,915, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(603,930, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 45;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(585,945, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 45;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(570,960, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 45;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(550,975, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 45;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(530,990, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 45;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(380,1005, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 150;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(360,990, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(330,975, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 35;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(310,960, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(290,930, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 5;

	this.bloque = this.blocks.create(290,900, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(270,850, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(255,790, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 15;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(245,710, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(230,625, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(200,615, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(200,610, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(180,570, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(183,470, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 90;

	this.bloque = this.blocks.create(180,450, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(200,450, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(200,420, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(215,405, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(230,375, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(250,345, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(270,325, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(290,305, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(320,295, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 10;

	//CACTUS NEAR ENTRANCE
	this.bloque = this.blocks.create(340,275, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 85;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(415,295, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(435,310, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(450,325, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(470,345, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(550,345, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(570,325, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(590,305, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(605,230, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 5;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(590,230, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(565,190, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(570,120, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(590,120, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 30;

	//RIGHT LOWER SIDE(CAVENR ENTRANCE)
	this.bloque = this.blocks.create(995,500, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 200;

	this.bloque = this.blocks.create(975,680, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(960,730, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(945,770, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(925,800, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(905,840, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(865,855, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 50;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(845,830, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(845,880, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(740,900, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 110;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(690,915, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 110;
	this.bloque.height = 10;

	//LOWER SAND ISLAND
	this.bloque = this.blocks.create(420,800, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(400,865, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(430,770, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(450,740, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(465,710, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(470,705, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(500,690, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 70;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(575,703, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 25;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(605,718, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(635,728, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(655,748, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;
	
	this.bloque = this.blocks.create(665,748, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(655,818, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(635,838, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(615,855, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(585,875, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(565,885, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(545,900, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(525,915, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(490,935, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(400,935, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;


	//RIGHT DUNE (ENTRANCE LEFT SIDE)
	this.bloque = this.blocks.create(740,695, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(755,645, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 40;

	this.bloque = this.blocks.create(735,635, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(720,615, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(710,590, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(706,560, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(706,540, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(720,510, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	//CACTUS TRIDENT
	this.bloque = this.blocks.create(740,510, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(740,480, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(750,450, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(770,430, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(790,410, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(800,380, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(790,360, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(790,330, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(770,310, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(750,280, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(740,260, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(710,245, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(690,230, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(675,150, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(690,115, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 20;

	//DOING PORTAL DUNE
	this.bloque = this.blocks.create(710,130, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(730,115, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 50;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(790,130, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(775,185, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 5;

	//CACTUS
	this.bloque = this.blocks.create(828,190, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 20;


	//CONTINUING DE RIGHT DUNE
	this.bloque = this.blocks.create(710,100, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 80;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(795,115, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(810,130, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(825,145, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(835,160, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(855,190, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(875,230, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(875,275, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(855,325, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(855,325, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 5;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(855,395, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(870,405, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 5;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(860,465, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 15;

	this.bloque = this.blocks.create(840,510, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(820,560, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(810,560, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 5;
	this.bloque.height = 35;

	this.bloque = this.blocks.create(810,610, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(820,610, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(810,680, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 20;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(810,680, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 5;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(790,710, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 10;

	//CATUSES IN MIDDEL OF NOWHERE
	this.bloque = this.blocks.create(375,400, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 25;

	this.bloque = this.blocks.create(480,530, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 20;

}

Obstacle.prototype.robertosecondBlocks = function()
{
	this.bloque = this.blocks.create(95,200, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 30;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(610,320, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 20;

	//Right side
	this.bloque = this.blocks.create(760,0, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 20;

	this.bloque = this.blocks.create(800,0, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(830,50, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 80;

	this.bloque = this.blocks.create(830,130, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 70;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(830,130, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 70;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(890,130, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 50;

	this.bloque = this.blocks.create(880,190, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(878,255, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(925,255, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 460;

	this.bloque = this.blocks.create(885,715, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 10;

	this.bloque = this.blocks.create(875,735, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(865,755, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 60;

	this.bloque = this.blocks.create(865,810, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 40;
	this.bloque.height = 10;	

	this.bloque = this.blocks.create(890,810, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 10;
	this.bloque.height = 230;	

	//STAGES BOTTOM
	this.bloque = this.blocks.create(0,1005, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 954;
	this.bloque.height = 10;

	//RiGHT MIDDLE ISLAND
	this.bloque = this.blocks.create(540,760, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width =115;
	this.bloque.height = 30;

	this.bloque = this.blocks.create(590,800, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width =90;
	this.bloque.height = 70;

	this.bloque = this.blocks.create(640,825, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 90;
	this.bloque.height = 80;

	//LEFT ISLAND
	this.bloque = this.blocks.create(65,540, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 120;
	this.bloque.height = 160;

	this.bloque = this.blocks.create(50,560, 'blockH');
	this.bloque.body.immovable = true;
	this.bloque.width = 180;
	this.bloque.height = 120;	


}

// Loads the player's sprites and defines it's animations.
Obstacle.prototype.load = function(){
	this.render();
}

