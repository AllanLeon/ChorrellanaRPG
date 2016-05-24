/**
 * Declaration of portal data.
 *
 * @class      Portal
 * @param      game       The game
 * @param      x          Starting x-axis position
 * @param      y          Starting y-axis position
 * @param      nextStage  The next stage the portal leads
 */
function Portal(game, x, y, nextStage) {
	this.game = game;
	this.sprite = null;
	this.startingX = x;
	this.startingY = y;
	this.nextStage = nextStage;
}

/**
 * Initializes the portal sprite.
 */
Portal.prototype.render = function() {
	this.sprite = this.game.add.sprite(this.startingX, this.startingY, 'portal');
	this.game.physics.arcade.enable(this.sprite);
	this.sprite.immovable = true;
}

/**
 * Loads the portal.
 */
Portal.prototype.load = function() {
	this.render();
}

/**
 * Updates the portal.
 */
Portal.prototype.update = function() {
	this.checkPlayerCollision();
}

/**
 * Checks collision between this portal and the player.
 */
Portal.prototype.checkPlayerCollision = function() {
	this.game.physics.arcade.overlap(this.game.player.sprite, this.sprite, this.changeStage, null, this);
}

/**
 * Changes the game state to the next stage defined in the portal declaration.
 */
Portal.prototype.changeStage = function() {
	this.game.state.start(this.nextStage);
}
