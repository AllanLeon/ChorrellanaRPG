/**
 * GameOver state declaration, initializes the fonts styles.
 */
function GameOver() {
	this.fontStyleBig = {
		'font': "100px Minecraft",
		'fill': "#ffffff",
		'boundsAlignH': "center",
		'boundsAlignV': "middle"
	};
	this.fontStyleSmall = {
		'font': "20px Minecraft",
		'fill': "#aaaaaa",
		'boundsAlignH': "center",
		'boundsAlignV': "middle"
	};
}

/**
 * Creates the game over fonts.
 */
GameOver.prototype.create = function() {	
	var textGO = game.add.text(0, 0, "GAME OVER", this.fontStyleBig);
	textGO.setTextBounds(0, 200, 800, 200);

	var textRestart = game.add.text(0, 0, "Press 'R' to restart", this.fontStyleSmall);
	textRestart.setTextBounds(0, 450, 800, 50);
}

/**
 * Checks for input to restart the game.
 */
GameOver.prototype.update = function(){
	if (game.input.keyboard.isDown(Phaser.Keyboard.R)) {
		game.input.reset();
		game.sound.stopAll();
		game.state.start('Play');
	}
};


// Adds this state to the game's states.
States.GameOver = new GameOver();
