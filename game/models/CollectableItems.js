//Declare the Item
function collectableItems(game, x , y , image){
	this.game = game;
	this.itemSprite = image;
	this.startingX = x;
	this.staringY = y;
	this.item = null;

}

//set position for the items
//var positionDataItem = {
//	initial: {x:startingX, y:staringY }//generic position

//}
collectableItems.prototype.render = function()
{
	this.item = this.game.add.sprite(this.startingX, this.staringY, this.itemSprite);
	this.item.enableBody = true;
	this.game.physics.enable(this.item, Phaser.Physics.ARCADE);
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
 		this.game.physics.arcade.overlap(this.game.player.sprite, this.item, null, this.collectCoin, this);
 	}
 	else if(this.itemSprite == 'key')
 	{
 		this.game.physics.arcade.overlap(this.game.player.sprite, this.item, null,this.collectKey, this);
 	}
 	else
 	{
 		this.game.physics.arcade.overlap(this.game.player.sprite, this.item, null,this.collectFirstAid, this);
 	}
 }

 collectableItems.prototype.collectCoin = function()
 {
 	//var text = game.add.text(100,200, 'tumama', { fontSize: '32px', fill: '#000' });
 	this.game.inventory.numberCoins = game.inventory.numberCoins + 1;
 	this.item.kill();
 }

 collectableItems.prototype.collectKey = function()
 {
 	this.game.inventory.numberKeys = game.inventory.numberKeys + 1;
 	this.item.kill();
 }

 collectableItems.prototype.collectFirstAid = function()
 {
 	if(this.game.player.health)
 	this.game.player.health = game.player.health + 30;
 	this.item.kill();
 }
