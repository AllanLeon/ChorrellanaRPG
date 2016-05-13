	var States = {};
	var mama = 'tu';




	// //

// Loads all the necesasary assets before starting the game.
States.Boot = {
	// Loads the assets.
	preload: function(){
		this.game.load.image('dukeCollider', 'assets/images/characters/collider.png');
		this.game.load.image('blockH', 'assets/images/backgrounds/blockH.png');
		this.game.load.image('block', 'assets/images/backgrounds/block.png');
		this.game.load.spritesheet('duke', 'assets/images/characters/duke.png', 23, 43);
		this.game.load.image('invaderCollider','assets/images/characters/collider.png');
		this.game.load.image('invader', 'assets/images/characters/invader.png');
		this.game.load.image('bullet', 'assets/images/bullets/purple_ball.png');
		this.game.load.spritesheet('enemy', 'assets/images/characters/enemy1.png',32,32);
		this.game.load.image('map', 'assets/images/backgrounds/yourmommasmap.png');
		this.game.load.image('healthBar', 'assets/images/HUD/healthbar.png');
		this.game.load.image('lifeBar', 'assets/images/HUD/life.png');
		this.game.load.image('minimap','assets/images/backgrounds/minimap.png');
		this.game.load.spritesheet('coin','assets/images/items/coin.png');

		for (var i=0; i<2; i++){
			var iStr = i.toString();
			this.game.load.image('bullet'.concat(iStr),'assets/images/weapons/bullet/bullet'.concat(iStr.concat(".png")));
			this.game.load.image('weapon'.concat(iStr),'assets/images/weapons/weapon'.concat(iStr.concat(".png")));	
		}
	},
	// Starts the next state.
	create: function(){
		this.state.start('Play');
	}
};
