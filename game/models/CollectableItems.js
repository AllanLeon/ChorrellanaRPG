//Declare the Item
function collectableItems(game, x , y , image){
	this.game = game;
	this.itemSprite = image;
	this.startingX = x;
	this.staringY = y;

}

var coins;
//set position for the items
//var positionDataItem = {
//	initial: {x:startingX, y:staringY }//generic position

//}
collectableItems.prototype.render = function()
{
	this.item = this.game.add.sprite(this.startingX, this.staringY, this.itemSprite);
	this.game.physics.arcade.enable(this.item);
}

collectableItems.prototype.load = function(){
	this.render();
}

/*
collectableItems.prototype.playAnimation = function()
{
	this.coinSprite.play(this.animation);
}*/

//Update functions controls if the player has overlapped with the item
//Not functioning properly
collectableItems.prototype.update = function()
{
	this.collectItem();
}

collectableItems.prototype.collectItem = function()
 {

 	if(this.itemSprite=='coin')
 	{
 		game.physics.arcade.overlap(game.player, this.item, this.collectCoin, null, this);
 	}
 	else if(this.itemSprite == 'key')
 	{
 		game.physics.arcade.overlap(game.player, this.item, this.collectKey, null, this);
 	}
 	else
 	{
 		game.physics.arcade.overlap(game.player, this.item, this.collectFirstAid, null, this);
 	}
 }

 collectableItems.prototype.collectCoin = function()
 {
 	//var text = game.add.text(100,200, 'tumama', { fontSize: '32px', fill: '#000' });
 	game.inventory.numberCoins = game.inventory.numberCoins + 1;
 	//this.collectableItems.kill();
 }

 collectableItems.prototype.collectKey = function()
 {
 	game.inventory.numberKeys = game.inventory.numberKeys + 1;
 	//this.collectableItems.kill();
 }

 collectableItems.prototype.collectFirstAid = function()
 {
 	game.player.health = game.player.health + 30;
 }