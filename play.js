// Principal game state, all the fun begins here.
States.Play = {
	// Sets the game's basic configurations.
	init: function(){
		this.game.renderer.renderSession.roundPixels = true;
		this.physics.startSystem(Phaser.Physics.ARCADE);
	},
	// Starts the game.
	create: function(){
		/*
		// the static mapvar
		miniMapBmd = this.game.add.bitmapData(g_game.tileMap.width*g_game.miniMapSize, g_game.tileMap.height*g_game.miniMapSize);
		// g_game.miniMapSize is the pixel size in the minimap
		// iterate my map layers
		for 
			(l=0; l<g_game.tileMap.layers.length; l++) {
				for (y = 0; y < g_game.tileMap.height; y++) {
					for (x = 0; x < g_game.tileMap.width; x++) {
						var tile = g_game.tileMap.getTile(x, y, l);
						if (tile && g_game.tileMap.layers[l].name == 'Ground') { 
						// fill a pixel in the minimap
						miniMapBmd.ctx.fillStyle = '#bc8d6b'; 
						miniMapBmd.ctx.fillRect(x * g_game.miniMapSize, y * g_game.miniMapSize, g_game.miniMapSize, g_game.miniMapSize); 
						}        
						else if ... other types of tiles 
						}
						}
						g_game.miniMap = this.game.add.sprite(x, y, miniMapBmd);
						// dynamic bmd where I draw mobile stuff like friends and enemies
						g_game.miniMapOverlay = this.game.add.bitmapData(g_game.tileMap.width*g_game.miniMapSize, g_game.tileMap.height*g_game.miniMapSize);
						this.game.add.sprite(g_game.miniMap.x, g_game.miniMap.y, g_game.miniMapOverlay);*/
		
		
		
		
		
		
		
		
		// Sets the game background with file associated to 'map' on boot.js.
		this.game.background = this.game.add.sprite(0, 0, 'map');
		this.game.minimap = this.game.add.sprite(10,400,'minimap');


		// Sets the world bounds.
		this.game.world.setBounds(0, 0, 1536, 1536);

		// Initialiazes the cursor keys.
		this.game.cursors = game.input.keyboard.createCursorKeys();

		// Creates and loads a Player object.
    	game.player = new Player(window.game);
		game.player.load();
		
		/*Creates and loads a minimap object
		game.minimapmove = new Minimapmove(window.game);
		game.minimapmove.load();*/

		// Sets the camera to follow the player.
		this.game.camera.follow(this.game.player.colliderSprite);
		//this.game.minimap.follow(this.game.minimapmove.colliderSprite);
		
		//minimap
		this.game.minimap.scale.setTo(0.10);
		
		
	},
	// Updates all the game's objects.
	update: function(){
		// Updates the player.
		game.player.update();
	}
};
