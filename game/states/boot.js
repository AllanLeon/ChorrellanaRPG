	var States = {};

// Loads all the necesasary assets before starting the game.
States.Boot = {
	// Loads the assets.
	preload: function(){
		this.game.load.image('dukeCollider', 'assets/images/characters/collider.png');
		this.game.load.image('blockH', 'assets/images/backgrounds/blockH.png');
		this.game.load.image('block', 'assets/images/backgrounds/block.png');
		this.game.load.spritesheet('duke', 'assets/images/characters/duke.png', 23, 43);
		this.game.load.spritesheet('underwaterDuke', 'assets/images/characters/underwaterDuke.png', 19, 43);
		this.game.load.spritesheet('boat', 'assets/images/characters/boat.png', 16, 19);
		this.game.load.spritesheet('underwaterItem', 'assets/images/misc/underwaterItems.png', 32, 32);
		this.game.load.spritesheet('deepWater', 'assets/images/tilesets/deepWater.png', 32, 32);
		this.game.load.image('invaderCollider','assets/images/characters/collider.png');
		this.game.load.image('invader', 'assets/images/characters/invader.png');
		this.game.load.image('bullet', 'assets/images/bullets/purple_ball.png');




		this.game.load.spritesheet('enemy', 'assets/images/enemys/enemy1.png',32,32);
		this.game.load.spritesheet('energyEnemy', 'assets/images/enemys/enemy2.png',64,80);
		this.game.load.spritesheet('energyBall', 'assets/images/attacks/energyBall.png',32,32);
		this.game.load.spritesheet('mina1', 'assets/images/enemys/mina1.png',24,24);
		this.game.load.spritesheet('explotion', 'assets/images/attacks/explosion.png',64,64);

		this.game.load.image('map', 'assets/images/backgrounds/yourmommasmap.png');
		this.game.load.image('forest', 'assets/images/backgrounds/forestgump.png');
		this.game.load.image('healthBar', 'assets/images/HUD/healthbar.png');
		this.game.load.image('lifeBar', 'assets/images/HUD/life.png');
		this.game.load.image('minimap','assets/images/backgrounds/minimap.png');

		//House Stage background
		this.game.load.image('houseStage', 'assets/images/backgrounds/homeStage.png');
		this.game.load.image('basement', 'assets/images/backgrounds/basement.png');

		
		this.game.load.audio('bossanova','assets/audio/bossanova.mp3');
		this.game.load.audio('awesome','assets/audio/onepunch.mp3');
		this.game.load.audio('docks','assets/audio/waterStage.mp3');
		this.game.load.image('rain','assets/images/effects/rain1.png');
		this.game.load.image('leaf','assets/images/effects/leaf.png');
		
		//this.game.load.spritesheet('coin','assets/images/items/coin.png');
		this.game.load.image('coin','assets/images/inventory/coin.png');
		this.game.load.image('key','assets/images/inventory/key.png');
		this.game.load.image('firstAid','assets/images/inventory/firstaid.png');
		this.game.load.image('inventory','assets/images/inventory/grid.png');
		this.game.load.image('npcs', 'assets/images/characters/npcs1.png');
		this.game.load.image('poster', 'assets/images/textBox/sign.png');
		
		this.game.load.image('cesped', 'assets/images/LevelCesped/cesped1.png');
		this.game.load.image('cesped4_20', 'assets/images/LevelCesped/cesped4_20.png');
		this.game.load.image('plant', 'assets/images/LevelCesped/Npcs/npcsC1.png');

		//this.game.load.spritesheet('coin','assets/images/items/coin.png');
		this.game.load.spritesheet('textBox','assets/images/textBox/textBox.png', 600, 200);

		this.game.load.spritesheet('portal', 'assets/images/misc/portal.png', 123, 123);

		this.game.load.tilemap('boatMap','assets/tilemaps/boatMap.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('boatMapTS', 'assets/images/tilesets/boatMap.png');

		this.game.load.tilemap('underwater0','assets/tilemaps/underwater1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('underwater1','assets/tilemaps/underwater2.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('underwater2','assets/tilemaps/underwater3.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('underwaterTS', 'assets/images/tilesets/underwater.png');

		this.game.load.tilemap('dock','assets/tilemaps/dock.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('dockTS', 'assets/images/tilesets/dock.png');

		for (var i=0; i<2; i++){
			var iStr = i.toString();
			//this.game.load.image('bullet'.concat(iStr),'assets/images/weapons/bullet/bullet'.concat(iStr.concat(".png")));
			this.game.load.image('weapon'.concat(iStr),'assets/images/weapons/weapon'.concat(iStr.concat(".png")));	
		}

		for (var i = 1; i <= 5; i++)
		{
		    this.game.load.image('bullet' + i, 'assets/images/weapons/bullet/bullet' + i + '.png');
		    //this.game.load.image('weapon' + i, 'assets/images/weapons/weapon' + i + ".png");	
		}


		this.game.load.image('bomb', 'assets/images/weapons/bomb.png');

		this.game.load.image('cloudsback', 'assets/images/backgrounds/cloudsbg1_corto.jpg');
		this.game.load.image('spearow', 'assets/images/characters/minspearow.png');		
		this.game.load.image('robertoMap', 'assets/images/roberto/robertoDessert.png');
		this.game.load.image('robertoMinimap','assets/images/roberto/desertMinimap.png');
		this.game.load.image('robertoMap2', 'assets/images/roberto/desert2.png');
		this.game.load.image('robertoMinimap2','assets/images/roberto/desert2Minimap.png');
		this.game.load.audio('mgs','assets/images/roberto/mgs2.mp3');
		this.game.load.image('sand','assets/images/roberto/sand.png');
		this.game.load.image('rBullet','assets/images/roberto/rightBullet.png');
		this.game.load.image('lBullet','assets/images/roberto/leftBullet.png');
		this.game.load.image('scorpionCollider','assets/images/roberto/scorpionCollider.png');
		this.game.load.spritesheet('scorpion','assets/images/roberto/scorpion4.png',110,50);
		this.game.load.spritesheet('snake','assets/images/roberto/snake.png',42,51);
		this.game.load.spritesheet('snakeCollider','assets/images/roberto/snakecollide.png',42,51);

		//Aqui empiezo nivel de piedra
		this.game.load.image('rockpassagemap', 'assets/images/backgrounds/rockpassage.png');
		this.game.load.image('rockmap', 'assets/images/backgrounds/rocklevel.png');
		this.game.load.spritesheet('monster', 'assets/images/enemys/monster.png',64,64);
		this.game.load.spritesheet('bluedragon', 'assets/images/enemys/bluedragon.png',65,65);
		this.game.load.spritesheet('giantEnergyBall', 'assets/images/attacks/giantEnergyBall.png',38,37);
		this.game.load.spritesheet('orangedragon', 'assets/images/enemys/orangedragon.png',75,75);
		this.game.load.spritesheet('minigreendragon', 'assets/images/enemys/minigreendragon.png',80,64);
		this.game.load.spritesheet('blackdragon', 'assets/images/enemys/blackdragon.png',96,96);
		this.game.load.spritesheet('dragoncaballero', 'assets/images/enemys/dragoncaballero.png',118,118);
		this.game.load.spritesheet('dragonmasterncp', 'assets/images/characters/dragonmaster.png',31,47);
		this.game.load.image('rockarena', 'assets/images/backgrounds/rockarena.png');
		this.game.load.spritesheet('babydragon', 'assets/images/enemys/babydragon.png',27,27);
		this.game.load.spritesheet('dukemount', 'assets/images/characters/dukemount.png',72,82);
		this.game.load.image('skyarena', 'assets/images/backgrounds/skyarena.png');
		this.game.load.image('volcanarena', 'assets/images/backgrounds/volcanarena.png');
		this.game.load.image('jardinarena', 'assets/images/backgrounds/jardinarena.png');
		this.game.load.image('nochearena', 'assets/images/backgrounds/nochearena.jpg');


		this.game.load.audio('alas','assets/audio/alas.wav');
		this.game.load.audio('nogamenolife','assets/audio/nogamenolife.mp3');
		this.game.load.audio('requiemforadream','assets/audio/requiemforadream.mp3');


	},
	// Starts the next state.
	create: function(){
		this.state.start('Play');
	}
};
