var States = {};

// Loads all the necesasary assets before starting the game.
States.Boot = {
	// Loads the assets.
	preload: function(){
		this.game.load.image('dukeCollider', 'assets/images/characters/collider.png');
		this.game.load.spritesheet('duke', 'assets/images/characters/duke.png', 23, 43);
		this.game.load.spritesheet('enemy', 'assets/images/characters/enemy1.png',32,32);
		this.game.load.image('map', 'assets/images/backgrounds/yourmommasmap.png');
	},
	// Starts the next state.
	create: function(){
		this.state.start('Play');
	}
};
