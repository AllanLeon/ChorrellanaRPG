//Declare the Item
function items(game){
	this.game = game;
	this.itemSprite = null;
	this.height = 0;
	this.width = 0;
	this.startingX = 0;
	this.staringY = 0;

}
var coins;

//set position for the items
var positionDataItem = {
	initial: {x:startingX, y:staringY }//generic position

}
items.prototype.render = function(){
	this.coinSprite = this.game.add.sprite(positionDataItem.initial.x, positionDataItem.initial.y, 'coin');

	this.game.physics.arcade.enable(this.coinSprite)



}

items.prototype.load = function(){
	this.render();
}

items.prototype.playAnimation = function(){
	this.coinSprite.play(this.animation)
}
items.prototype.update = function(player)
	game.physics.arcade.overlap(player, coins, collectCoin, null, this);




}
 items.prototype.collectCoin = function(){
 	coins.kill();
 	
 }