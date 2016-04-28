// Declaration of player data.
function Obstacle(game){
	this.game = game;
	this.sprite = null;
}
	var positionBlockX = 0;
	var positionBlockY = 155;
// Initializes the players sprites.
Obstacle.prototype.render = function(){
	this.sprite = this.game.add.sprite(positionBlockX, positionBlockY, 'block');
	//this.sprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
	//this.sprite = this.game.add.sprite(positionData.initial.x, positionData.initial.y, 'block');
};

// Loads the player's sprites and defines it's animations.
Obstacle.prototype.load = function(){
	this.render();
}