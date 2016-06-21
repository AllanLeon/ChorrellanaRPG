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
 	else if (this.itemSprite == 'kirby') 
 	{
 		this.game.physics.arcade.overlap(this.game.player.sprite, this.item, null, this.collectKirby,this);
 	}
 	else if (this.itemSprite == 'yoshi') 
 	{
 		this.game.physics.arcade.overlap(this.game.player.sprite, this.item, null, this.collectYoshi,this);
 	}
 	else if (this.itemSprite == 'apple') 
 	{
 		this.game.physics.arcade.overlap(this.game.player.sprite, this.item, null, this.collectApple,this);
 	}
 	else if (this.itemSprite == 'leaf')
 	{
 		this.game.physics.arcade.overlap(this.game.player.sprite, this.item, null, this.collectLeaf,this);
 	}
 	else
 	{
 		this.game.physics.arcade.overlap(this.game.player.sprite, this.item, null,this.collectFirstAid, this);
 	}
 }

 //adds a dialogue
collectableItems.prototype.chat = function(){
	this.game.writer.addText("You found a wild Kirby!...\n Now...what are you going to do with it??");
	this.game.writer.addText("...oh look! It disappeared...");
	this.game.writer.openTextBox(0);
}

//adds a dialogue
collectableItems.prototype.chat2 = function(){
	this.game.writer.addText("Thanks, you found all my apples! \n Now I'll have something to eat");
	this.game.writer.openTextBox(0);
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

 collectableItems.prototype.collectKirby = function()
 {
 	this.chat();
 	this.item.kill();
 }

collectableItems.prototype.collectYoshi = function()
 {
 	this.chat2();
	music = this.add.audio('tone');
    music.play();
 }

 collectableItems.prototype.collectApple = function()
 {
 	this.game.forestStage.numberApples = game.forestStage.numberApples + 1;
 	this.item.kill();
 }

 collectableItems.prototype.collectLeaf = function()
 {
 	this.item.kill();
 	this.game.state.start('Play', true);
 	music.stop();
 }

 collectableItems.prototype.collectFirstAid = function()
 {
 	if(this.game.player.health>85)
 	{
 	this.game.player.health = 100
 	}
 	else
 	{
 	this.game.player.health = this.game.player.health + 15
 	}	
 	this.item.kill();
 }
