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
	this.animation = 'portalAnim'
	this.startingX = x;
	this.startingY = y;
	this.nextStage = nextStage;


	this.load();
}

/**
 * Initializes the portal sprite.
 */
Portal.prototype.render = function() {
	this.sprite = this.game.add.sprite(this.startingX, this.startingY, 'portal');
	this.sprite.immovable = true;
	this.sprite.alpha = 0.9;
	this.sprite.scale.set(0.5, 0.5);
	this.game.physics.arcade.enable(this.sprite);
}

/**
 * Initializes the portal animation.
 */
Portal.prototype.initializeAnimation = function () {
	this.sprite.animations.add(this.animation, [0, 1, 2, 3], 10, true);
}

/**
 * Loads the portal.
 */
Portal.prototype.load = function() {
	this.render();
	this.initializeAnimation();
	this.sprite.play(this.animation);
}

/**
 * Updates the portal.
 *
 * @return     true  for Array.prototype.every() implementation
 */
Portal.prototype.update = function() {
	this.checkPlayerCollision();
	return true;
}

/**
 * Checks collision between this portal and the player.
 */
Portal.prototype.checkPlayerCollision = function() {
	this.game.physics.arcade.overlap(this.game.player.colliderSprite, this.sprite, this.changeStage, null, this);
}

/**
 * Changes the game state to the next stage defined in the portal declaration.
 */
Portal.prototype.changeStage = function() {
	this.game.input.reset();
	this.game.sound.stopAll();
	this.game.state.start(this.nextStage, true);
}
