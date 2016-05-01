	var States = {};

// Loads all the necesasary assets before starting the game.
States.Boot = {
	// Loads the assets.
	preload: function(){
		this.game.load.image('dukeCollider', 'assets/images/characters/collider.png');
		this.game.load.spritesheet('duke', 'assets/images/characters/duke.png', 23, 43);
		this.game.load.image('map', 'assets/images/backgrounds/yourmommasmap.png');
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
