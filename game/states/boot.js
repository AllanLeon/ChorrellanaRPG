var States = {};

// Loads all the necesasary assets before starting the game.
States.Boot = {
	// Loads the assets.
	preload: function(){
		this.game.load.image('dukeCollider', 'assets/images/characters/collider.png');
		this.game.load.spritesheet('duke', 'assets/images/characters/duke.png', 23, 43);
		this.game.load.image('map', 'assets/images/backgrounds/yourmommasmap.png');
		this.game.load.image('healthBar', 'assets/images/HUD/healthbar.png');
		this.game.load.image('lifeBar', 'assets/images/HUD/life.png');
		// Load the asset needed for the minimap
		this.game.load.image('minimap','assets/images/backgrounds/yourmommasmap.png');
	},
	// Starts the next state.
	create: function(){
		this.state.start('Play');
	}
};
