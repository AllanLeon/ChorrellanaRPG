var States = {};

// Loads all the necesasary assets before starting the game.
States.Boot = {
	// Loads the assets.
	preload: function(){
		this.game.load.image('dukeCollider', 'assets/images/characters/collider.png');
		this.game.load.spritesheet('duke', 'assets/images/characters/duke.png', 23, 43);
		this.game.load.spritesheet('enemy', 'assets/images/characters/enemy1.png',32,32);
		this.game.load.spritesheet('energyEnemy', 'assets/images/characters/enemy2.png',64,80);
		this.game.load.spritesheet('energyBall', 'assets/images/attacks/energyBall.png',32,32);
		
		this.game.load.spritesheet('mina1', 'assets/images/characters/mina1.png',24,24);
		this.game.load.spritesheet('explotion', 'assets/images/attacks/explosion.png',64,64);

		this.game.load.image('map', 'assets/images/backgrounds/yourmommasmap.png');
	},
	// Starts the next state.
	create: function(){
		this.state.start('Play');
	}
};
