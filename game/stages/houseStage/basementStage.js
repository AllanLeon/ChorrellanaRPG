
function BasementStage() {}

/**
 * Sets the state's basic configurations.
 */
BasementStage.prototype.init = function() {};

/**
 * Initializes the stage objects.
 */
BasementStage.prototype.create = function() {
	// Sets the world bounds
	this.game.world.setBounds(0, 0, 1242, 840);

	//Sets the world background
	this.game.background = this.game.add.sprite(0, 0, 'basementTest');

	// Creates and loads a Player object.
	game.player = new Player(window.game);
	game.player.load();

	//Makes the camera follows the player
	this.game.camera.follow(this.game.player.colliderSprite);


	//Creates and loads Clock object
	game.clock = new Clock(window.game);
	game.clock.load();

	// Creates the basement's obstacles
	game.basementObstacle = new BasementObstacle(window.game);
	game.basementObstacle.load();

	// Creates and loads a Writer object.
	game.writer = new Writer(window.game);
	game.writer.load();

	//Creates collectable items
	//Coins!
	game.coin1 = new collectableItems(window.game, 260, 30, 'coin');
	game.coin1.load();

	game.coin2 = new collectableItems(window.game, 290, 30, 'coin');
	game.coin2.load();

	game.coin3 = new collectableItems(window.game, 320, 30, 'coin');
	game.coin3.load();

	game.coin4 = new collectableItems(window.game, 350, 30, 'coin');
	game.coin4.load();

	game.coin5 = new collectableItems(window.game, 380, 30, 'coin');
	game.coin5.load();

	game.coin6 = new collectableItems(window.game, 410, 30, 'coin');
	game.coin6.load();

	game.coin7 = new collectableItems(window.game, 440, 30, 'coin');
	game.coin7.load();

	game.coin8 = new collectableItems(window.game, 470, 30, 'coin');
	game.coin8.load();

	game.coin9 = new collectableItems(window.game, 500, 30, 'coin');
	game.coin9.load();

	game.coin10 = new collectableItems(window.game, 530, 30, 'coin');
	game.coin10.load();

	game.coin11 = new collectableItems(window.game, 670, 30, 'coin');
	game.coin11.load();

	game.coin12 = new collectableItems(window.game, 700, 30, 'coin');
	game.coin12.load();

	game.coin13 = new collectableItems(window.game, 730, 30, 'coin');
	game.coin13.load();

	game.coin14 = new collectableItems(window.game, 760, 30, 'coin');
	game.coin14.load();

	game.coin15 = new collectableItems(window.game, 790, 30, 'coin');
	game.coin15.load();

	game.coin16 = new collectableItems(window.game, 820, 30, 'coin');
	game.coin16.load();

	game.coin17 = new collectableItems(window.game, 850, 30, 'coin');
	game.coin17.load();

	game.coin18 = new collectableItems(window.game, 880, 30, 'coin');
	game.coin18.load();

	game.coin19 = new collectableItems(window.game, 910, 30, 'coin');
	game.coin19.load();

	game.coin20 = new collectableItems(window.game, 940, 30, 'coin');
	game.coin20.load();
	
	game.coin21 = new collectableItems(window.game, 1080, 30, 'coin');
	game.coin21.load();

	game.coin22 = new collectableItems(window.game, 1110, 30, 'coin');
	game.coin22.load();

	game.coin23 = new collectableItems(window.game, 1140, 30, 'coin');
	game.coin23.load();

	game.coin24 = new collectableItems(window.game, 1170, 30, 'coin');
	game.coin24.load();

	game.coin25 = new collectableItems(window.game, 1200, 30, 'coin');
	game.coin25.load();

	game.coin26 = new collectableItems(window.game, 1230, 30, 'coin');
	game.coin26.load();
//
	//SECOND floor*
	game.coinA1 = new collectableItems(window.game, 260, 255, 'coin');
	game.coinA1.load();

	game.coinA2 = new collectableItems(window.game, 290, 255, 'coin');
	game.coinA2.load();

	game.coinA3 = new collectableItems(window.game, 320, 255, 'coin');
	game.coinA3.load();

	game.coinA4 = new collectableItems(window.game, 350, 255, 'coin');
	game.coinA4.load();

	game.coinA5 = new collectableItems(window.game, 380, 255, 'coin');
	game.coinA5.load();

	game.coinA6 = new collectableItems(window.game, 410, 255, 'coin');
	game.coinA6.load();

	game.coinA7 = new collectableItems(window.game, 440, 255, 'coin');
	game.coinA7.load();

	game.coinA8 = new collectableItems(window.game, 470, 255, 'coin');
	game.coinA8.load();

	game.coinA9 = new collectableItems(window.game, 500, 255, 'coin');
	game.coinA9.load();

	game.coinA10 = new collectableItems(window.game, 530, 255, 'coin');
	game.coinA10.load();
 
	game.coinA11 = new collectableItems(window.game, 670, 255, 'coin');
	game.coinA11.load();

	game.coinA12 = new collectableItems(window.game, 700, 255, 'coin');
	game.coinA12.load();

	game.coinA13 = new collectableItems(window.game, 730, 255, 'coin');
	game.coinA13.load();

	game.coinA14 = new collectableItems(window.game, 760, 255, 'coin');
	game.coinA14.load();

	game.coinA15 = new collectableItems(window.game, 790, 255, 'coin');
	game.coinA15.load();

	game.coinA16 = new collectableItems(window.game, 820, 255, 'coin');
	game.coinA16.load();

	game.coinA17 = new collectableItems(window.game, 850, 255, 'coin');
	game.coinA17.load();

	game.coinA18 = new collectableItems(window.game, 880, 255, 'coin');
	game.coinA18.load();

	game.coinA19 = new collectableItems(window.game, 910, 255, 'coin');
	game.coinA19.load();

	game.coinA20 = new collectableItems(window.game, 940, 255, 'coin');
	game.coinA20.load();

	game.coinA21 = new collectableItems(window.game, 1080, 255, 'coin');
	game.coinA21.load();

	game.coinA22 = new collectableItems(window.game, 1110, 255, 'coin');
	game.coinA22.load();

	game.coinA23 = new collectableItems(window.game, 1140, 255, 'coin');
	game.coinA23.load();

	game.coinA24 = new collectableItems(window.game, 1170, 255, 'coin');
	game.coinA24.load();

	game.coinA25 = new collectableItems(window.game, 1200, 255, 'coin');
	game.coinA25.load();

	game.coinA26 = new collectableItems(window.game, 1230, 255, 'coin');
	game.coinA26.load();

	//THIRD floor*

	game.coinB1 = new collectableItems(window.game, 260, 505, 'coin');
	game.coinB1.load();

	game.coinB2 = new collectableItems(window.game, 290, 505, 'coin');
	game.coinB2.load();

	game.coinB3 = new collectableItems(window.game, 320, 505, 'coin');
	game.coinB3.load();

	game.coinB4 = new collectableItems(window.game, 350, 505, 'coin');
	game.coinB4.load();

	game.coinB5 = new collectableItems(window.game, 380, 505, 'coin');
	game.coinB5.load();

	game.coinB6 = new collectableItems(window.game, 410, 505, 'coin');
	game.coinB6.load();

	game.coinB7 = new collectableItems(window.game, 440, 505, 'coin');
	game.coinB7.load();

	game.coinB8 = new collectableItems(window.game, 470, 505, 'coin');
	game.coinB8.load();

	game.coinB9 = new collectableItems(window.game, 500, 505, 'coin');
	game.coinB9.load();

	game.coinB10 = new collectableItems(window.game, 530, 505, 'coin');
	game.coinB10.load();
  
	game.coinB11 = new collectableItems(window.game, 670, 505, 'coin');
	game.coinB11.load();

	game.coinB12 = new collectableItems(window.game, 700, 505, 'coin');
	game.coinB12.load();

	game.coinB13 = new collectableItems(window.game, 730, 505, 'coin');
	game.coinB13.load();

	game.coinB14 = new collectableItems(window.game, 760, 505, 'coin');
	game.coinB14.load();

	game.coinB15 = new collectableItems(window.game, 790, 505, 'coin');
	game.coinB15.load();

	game.coinB16 = new collectableItems(window.game, 820, 505, 'coin');
	game.coinB16.load();

	game.coinB17 = new collectableItems(window.game, 850, 505, 'coin');
	game.coinB17.load();

	game.coinB18 = new collectableItems(window.game, 880, 505, 'coin');
	game.coinB18.load();

	game.coinB19 = new collectableItems(window.game, 910, 505, 'coin');
	game.coinB19.load();

	game.coinB20 = new collectableItems(window.game, 940, 505, 'coin');
	game.coinA20.load();

	game.coinB21 = new collectableItems(window.game, 1080, 505, 'coin');
	game.coinB21.load();

	game.coinB22 = new collectableItems(window.game, 1110, 505, 'coin');
	game.coinB22.load();

	game.coinB23 = new collectableItems(window.game, 1140, 505, 'coin');
	game.coinB23.load();

	game.coinB24 = new collectableItems(window.game, 1170, 505, 'coin');
	game.coinB24.load();

	game.coinB25 = new collectableItems(window.game, 1200, 505, 'coin');
	game.coinB25.load();

	game.coinB26 = new collectableItems(window.game, 1230, 505, 'coin');
	game.coinB26.load();

	//Fourth

	game.coinC1 = new collectableItems(window.game, 260, 730, 'coin');
	game.coinC1.load();

	game.coinC2 = new collectableItems(window.game, 290, 730, 'coin');
	game.coinC2.load();

	game.coinC3 = new collectableItems(window.game, 320, 730, 'coin');
	game.coinC3.load();

	game.coinC4 = new collectableItems(window.game, 350, 730, 'coin');
	game.coinC4.load();

	game.coinC5 = new collectableItems(window.game, 380, 730, 'coin');
	game.coinC5.load();

	game.coinC6 = new collectableItems(window.game, 410, 730, 'coin');
	game.coinC6.load();

	game.coinC7 = new collectableItems(window.game, 440, 730, 'coin');
	game.coinC7.load();

	game.coinC8 = new collectableItems(window.game, 470, 730, 'coin');
	game.coinC8.load();

	game.coinC9 = new collectableItems(window.game, 500, 730, 'coin');
	game.coinC9.load();

	game.coinC10 = new collectableItems(window.game, 530, 730, 'coin');
	game.coinC10.load();
  
	game.coinC11 = new collectableItems(window.game, 670, 730, 'coin');
	game.coinC11.load();

	game.coinC12 = new collectableItems(window.game, 700, 730, 'coin');
	game.coinC12.load();

	game.coinC13 = new collectableItems(window.game, 730, 730, 'coin');
	game.coinC13.load();

	game.coinC14 = new collectableItems(window.game, 760, 730, 'coin');
	game.coinC14.load();

	game.coinC15 = new collectableItems(window.game, 790, 730, 'coin');
	game.coinC15.load();

	game.coinC16 = new collectableItems(window.game, 820, 730, 'coin');
	game.coinC16.load();

	game.coinC17 = new collectableItems(window.game, 850, 730, 'coin');
	game.coinC17.load();

	game.coinC18 = new collectableItems(window.game, 880, 730, 'coin');
	game.coinC18.load();

	game.coinC19 = new collectableItems(window.game, 910, 730, 'coin');
	game.coinC19.load();

	game.coinC20 = new collectableItems(window.game, 940, 730, 'coin');
	game.coinC20.load();

	game.coinC21 = new collectableItems(window.game, 1080, 730, 'coin');
	game.coinC21.load();

	game.coinC22 = new collectableItems(window.game, 1110, 730, 'coin');
	game.coinC22.load();

	game.coinC23 = new collectableItems(window.game, 1140, 730, 'coin');
	game.coinC23.load();

	game.coinC24 = new collectableItems(window.game, 1170, 730, 'coin');
	game.coinC24.load();

	game.coinC25 = new collectableItems(window.game, 1200, 730, 'coin');
	game.coinC25.load();

	game.coinC26 = new collectableItems(window.game, 1230, 730, 'coin');
	game.coinC26.load();


	//Creates Inventory Items
	game.inventory = new inventory(window.game);
	game.inventory.load();

	//Sets inventory elements fixed to the camera
	game.inventory.keyImage.fixedToCamera = true;
	game.inventory.coinImage.fixedToCamera = true;
	game.inventory.numberCoinsText.fixedToCamera = true;
	game.inventory.numberKeysText.fixedToCamera = true;
	game.inventory.inventoryImage.fixedToCamera = true;true;
}

/**
 * Updates all the stages's objects.
 */
BasementStage.prototype.update = function(){
	// Updates the player.
	game.player.update(game.player);

	//Checks collision between basement obstacles and player
	game.physics.arcade.collide(game.basementObstacle.blocks, game.player.colliderSprite);

	//Checks for time that player has been in the basement (limited because here player tries to recolect as many coins as player can)
	if(game.clock.total == 8){
		this.game.state.start('HouseStage', true);
	}

	game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);
	//Updates the inventory 
	game.inventory.update(game.player);
	//Updates all the coins!!!
	game.coin1.update(game.player);
	game.coin2.update(game.player);
	game.coin3.update(game.player);
	game.coin4.update(game.player);
	game.coin5.update(game.player);
	game.coin6.update(game.player);
	game.coin7.update(game.player);
	game.coin8.update(game.player);
	game.coin9.update(game.player);
	game.coin10.update(game.player);
	game.coin11.update(game.player);
	game.coin12.update(game.player);
	game.coin13.update(game.player);
	game.coin14.update(game.player);
	game.coin15.update(game.player);
	game.coin16.update(game.player);
	game.coin17.update(game.player);
	game.coin18.update(game.player);
	game.coin19.update(game.player);
	game.coin20.update(game.player);
	game.coin21.update(game.player);
	game.coin22.update(game.player);
	game.coin23.update(game.player);
	game.coin24.update(game.player);
	game.coin25.update(game.player);
	game.coin26.update(game.player);

	game.coinA1.update(game.player);
	game.coinA2.update(game.player);
	game.coinA3.update(game.player);
	game.coinA4.update(game.player);
	game.coinA5.update(game.player);
	game.coinA6.update(game.player);
	game.coinA7.update(game.player);
	game.coinA8.update(game.player);
	game.coinA9.update(game.player);
	game.coinA10.update(game.player);
	game.coinA11.update(game.player);
	game.coinA12.update(game.player);
	game.coinA13.update(game.player);
	game.coinA14.update(game.player);
	game.coinA15.update(game.player);
	game.coinA16.update(game.player);
	game.coinA17.update(game.player);
	game.coinA18.update(game.player);
	game.coinA19.update(game.player);
	game.coinA20.update(game.player);
	game.coinA21.update(game.player);
	game.coinA22.update(game.player);
	game.coinA23.update(game.player);
	game.coinA24.update(game.player);
	game.coinA25.update(game.player);
	game.coinA26.update(game.player);

	game.coinB1.update(game.player);
	game.coinB2.update(game.player);
	game.coinB3.update(game.player);
	game.coinB4.update(game.player);
	game.coinB5.update(game.player);
	game.coinB6.update(game.player);
	game.coinB7.update(game.player);
	game.coinB8.update(game.player);
	game.coinB9.update(game.player);
	game.coinB10.update(game.player);
	game.coinB11.update(game.player);
	game.coinB12.update(game.player);
	game.coinB13.update(game.player);
	game.coinB14.update(game.player);
	game.coinB15.update(game.player);
	game.coinB16.update(game.player);
	game.coinB17.update(game.player);
	game.coinB18.update(game.player);
	game.coinB19.update(game.player);
	game.coinB20.update(game.player);
	game.coinB21.update(game.player);
	game.coinB22.update(game.player);
	game.coinB23.update(game.player);
	game.coinB24.update(game.player);
	game.coinB25.update(game.player);
	game.coinB26.update(game.player);

	game.coinC1.update(game.player);
	game.coinC2.update(game.player);
	game.coinC3.update(game.player);
	game.coinC4.update(game.player);
	game.coinC5.update(game.player);
	game.coinC6.update(game.player);
	game.coinC7.update(game.player);
	game.coinC8.update(game.player);
	game.coinC9.update(game.player);
	game.coinC10.update(game.player);
	game.coinC11.update(game.player);
	game.coinC12.update(game.player);
	game.coinC13.update(game.player);
	game.coinC14.update(game.player);
	game.coinC15.update(game.player);
	game.coinC16.update(game.player);
	game.coinC17.update(game.player);
	game.coinC18.update(game.player);
	game.coinC19.update(game.player);
	game.coinC20.update(game.player);
	game.coinC21.update(game.player);
	game.coinC22.update(game.player);
	game.coinC23.update(game.player);
	game.coinC24.update(game.player);
	game.coinC25.update(game.player);
	game.coinC26.update(game.player);
}

// Adds this stage to the game's states.
States.BasementStage = new BasementStage();
